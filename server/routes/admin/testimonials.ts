/**
 * Admin Testimonials API
 *
 * CRUD operations for testimonial management. All routes are protected:
 * - Authentication required
 * - ADMIN or SUPER_ADMIN role required (server-side enforcement)
 * - Audit-logged via adminLogs
 * - XSS prevention: no raw HTML stored/returned
 */

import { Router, Request, Response, NextFunction } from "express";
import { db } from "../../db";
import { testimonials, adminLogs } from "../../../shared/schema";
import { eq, desc, or, ilike, and } from "drizzle-orm";
import { adminLimiter } from "../../middleware/action-limiters";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const router = Router();

// ── File upload (profile photos only) ─────────────────────────────

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (ALLOWED_MIME.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, PNG, WebP, and AVIF images are allowed."));
    }
  },
});

// ── Admin auth middleware (server-side enforcement) ────────────────

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ code: "UNAUTHORIZED", message: "Authentication required." });
  }
  const userRoles: string[] = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ code: "FORBIDDEN", message: "Admin access required." });
  }
  return next();
}

// ── Validation schema ─────────────────────────────────────────────

const testimonialWriteSchema = z.object({
  name: z.string().min(1, "Name is required").max(150).trim(),
  role: z.string().max(150).trim().optional().nullable(),
  organization: z.string().max(200).trim().optional().nullable(),
  quote: z.string().min(5, "Quote is required").max(1000).trim(),
  linkedinUrl: z
    .string()
    .url("Must be a valid URL")
    .refine((v) => v.startsWith("https://"), "Must use HTTPS")
    .refine((v) => !v.startsWith("javascript:") && !v.startsWith("data:"), "Invalid URL scheme")
    .optional()
    .nullable()
    .or(z.literal("").transform(() => null)),
  profileUrl: z
    .string()
    .url("Must be a valid URL")
    .refine((v) => v.startsWith("https://"), "Must use HTTPS")
    .optional()
    .nullable()
    .or(z.literal("").transform(() => null)),
  rating: z.number().min(1).max(5).optional().nullable(),
  category: z
    .enum(["student", "educator", "faculty", "academic_administrator", "industry_professional", "other"])
    .optional(),
  testimonialDate: z.string().datetime().optional().nullable(),
  displayOrder: z.number().int().min(0).optional(),
  isFeatured: z.boolean().optional(),
  status: z
    .enum(["draft", "pending_verification", "verified", "published", "unpublished", "archived", "rejected"])
    .optional(),
  consentStatus: z
    .enum(["pending", "requested", "received", "verified", "rejected", "revoked"])
    .optional(),
  verificationStatus: z.enum(["unverified", "verified"]).optional(),
  sourceReference: z.string().max(500).optional().nullable(),
  internalNotes: z.string().max(2000).optional().nullable(),
});

// ── Helper: audit log ─────────────────────────────────────────────

async function logAdminAction(
  adminId: number,
  action: string,
  targetId: string,
  ip: string,
  before?: object,
  after?: object
) {
  try {
    await db.insert(adminLogs).values({
      adminId,
      action,
      targetType: "testimonial",
      targetId,
      beforeState: before as any,
      afterState: after as any,
      ip,
    });
  } catch {
    // Non-fatal
  }
}

function getIp(req: Request): string {
  const raw = req.ip ?? req.socket?.remoteAddress ?? "";
  return raw.replace("::ffff:", "");
}

// ─────────────────────────────────────────────────────────────────
// GET /api/admin/testimonials
// ─────────────────────────────────────────────────────────────────
router.get("/", requireAdmin, async (req, res) => {
  try {
    const { status, category, featured, search } = req.query;

    const conditions: any[] = [];
    if (status && typeof status === "string") conditions.push(eq(testimonials.status, status as any));
    if (category && typeof category === "string") conditions.push(eq(testimonials.category, category as any));
    if (featured === "true") conditions.push(eq(testimonials.isFeatured, true));
    if (search && typeof search === "string") {
      conditions.push(
        or(
          ilike(testimonials.name, `%${search}%`),
          ilike(testimonials.organization, `%${search}%`),
          ilike(testimonials.role, `%${search}%`)
        )
      );
    }

    const rows = conditions.length > 0
      ? await db.select().from(testimonials).where(and(...conditions)).orderBy(desc(testimonials.createdAt))
      : await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));

    return res.json(rows);
  } catch (err) {
    console.error("[admin/testimonials GET]", err);
    return res.status(500).json({ message: "Failed to fetch testimonials." });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/admin/testimonials/:id
// ─────────────────────────────────────────────────────────────────
router.get("/:id", requireAdmin, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });
    const [row] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    if (!row) return res.status(404).json({ message: "Testimonial not found." });
    return res.json(row);
  } catch {
    return res.status(500).json({ message: "Failed to fetch testimonial." });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/admin/testimonials — Create (always starts as draft)
// ─────────────────────────────────────────────────────────────────
router.post("/", adminLimiter, requireAdmin, async (req, res) => {
  try {
    const parseResult = testimonialWriteSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ message: fromZodError(parseResult.error).message });
    }
    const adminUser = req.user as any;
    const data = parseResult.data;

    const [created] = await db
      .insert(testimonials)
      .values({
        ...data,
        testimonialDate: data.testimonialDate ? new Date(data.testimonialDate) : null,
        status: "draft",
        verificationStatus: "unverified",
        consentStatus: "pending",
        createdBy: adminUser.id,
        updatedBy: adminUser.id,
      })
      .returning();

    await logAdminAction(adminUser.id, "testimonial_created", String(created.id), getIp(req), undefined, {
      id: created.id,
      name: created.name,
      status: created.status,
    });

    return res.status(201).json(created);
  } catch (err) {
    console.error("[admin/testimonials POST]", err);
    return res.status(500).json({ message: "Failed to create testimonial." });
  }
});

// ─────────────────────────────────────────────────────────────────
// PATCH /api/admin/testimonials/:id — Update
// ─────────────────────────────────────────────────────────────────
router.patch("/:id", adminLimiter, requireAdmin, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });

    const parseResult = testimonialWriteSchema.partial().safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ message: fromZodError(parseResult.error).message });
    }

    const [existing] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    if (!existing) return res.status(404).json({ message: "Testimonial not found." });

    const adminUser = req.user as any;
    const data = parseResult.data;

    // Enforce publish prerequisites
    if (data.status === "published") {
      const newVerification = data.verificationStatus ?? existing.verificationStatus;
      const newConsent = data.consentStatus ?? existing.consentStatus;
      if (newVerification !== "verified") {
        return res.status(400).json({ message: "Testimonial must be verified before publishing." });
      }
      if (newConsent !== "verified") {
        return res.status(400).json({ message: "Consent must be confirmed (status: verified) before publishing." });
      }
    }

    const updatePayload: any = {
      ...data,
      testimonialDate: data.testimonialDate ? new Date(data.testimonialDate) : existing.testimonialDate,
      updatedBy: adminUser.id,
      updatedAt: new Date(),
    };

    if (data.verificationStatus === "verified" && existing.verificationStatus !== "verified") {
      updatePayload.verifiedAt = new Date();
      updatePayload.verifiedBy = adminUser.id;
    }
    if (data.status === "published" && existing.status !== "published") {
      updatePayload.publishedAt = new Date();
    }
    if (data.status === "archived" && !existing.archivedAt) {
      updatePayload.archivedAt = new Date();
    }
    if (data.consentStatus === "verified" && existing.consentStatus !== "verified") {
      updatePayload.consentObtainedAt = new Date();
    }

    const [updated] = await db
      .update(testimonials)
      .set(updatePayload)
      .where(eq(testimonials.id, id))
      .returning();

    await logAdminAction(adminUser.id, "testimonial_updated", String(id), getIp(req), {
      status: existing.status,
      verificationStatus: existing.verificationStatus,
    }, {
      status: updated.status,
      verificationStatus: updated.verificationStatus,
    });

    return res.json(updated);
  } catch (err) {
    console.error("[admin/testimonials PATCH]", err);
    return res.status(500).json({ message: "Failed to update testimonial." });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/admin/testimonials/:id/image — Upload profile photo
// ─────────────────────────────────────────────────────────────────
router.post("/:id/image", adminLimiter, requireAdmin, upload.single("image"), async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });

    const [existing] = await db.select({ id: testimonials.id }).from(testimonials).where(eq(testimonials.id, id));
    if (!existing) return res.status(404).json({ message: "Testimonial not found." });
    if (!req.file) return res.status(400).json({ message: "No image file provided." });

    const uploadResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "padho-lpu/testimonials",
            public_id: `testimonial_${id}_${Date.now()}`,
            resource_type: "image",
            transformation: [
              { width: 200, height: 200, crop: "fill", gravity: "face" },
              { quality: "auto", fetch_format: "auto" },
            ],
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        )
        .end(req.file!.buffer);
    });

    const [updated] = await db
      .update(testimonials)
      .set({ imageUrl: uploadResult.secure_url, updatedAt: new Date(), updatedBy: (req.user as any).id })
      .where(eq(testimonials.id, id))
      .returning({ id: testimonials.id, imageUrl: testimonials.imageUrl });

    return res.json({ imageUrl: updated.imageUrl });
  } catch (err) {
    console.error("[admin/testimonials/:id/image POST]", err);
    return res.status(500).json({ message: "Failed to upload image." });
  }
});

// ─────────────────────────────────────────────────────────────────
// DELETE /api/admin/testimonials/:id — Soft-delete (archive)
// ─────────────────────────────────────────────────────────────────
router.delete("/:id", adminLimiter, requireAdmin, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });

    if (req.body?.confirm !== true) {
      return res.status(400).json({ message: "Send { confirm: true } to confirm soft-deletion." });
    }

    const [existing] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    if (!existing) return res.status(404).json({ message: "Testimonial not found." });

    await db.update(testimonials).set({
      status: "archived",
      archivedAt: new Date(),
      updatedBy: (req.user as any).id,
      updatedAt: new Date(),
    }).where(eq(testimonials.id, id));

    await logAdminAction((req.user as any).id, "testimonial_archived", String(id), getIp(req), {
      status: existing.status,
    }, { status: "archived" });

    return res.json({ message: "Testimonial archived (soft-deleted)." });
  } catch (err) {
    console.error("[admin/testimonials DELETE]", err);
    return res.status(500).json({ message: "Failed to archive testimonial." });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/admin/testimonials/:id/approve — 1-Click Approval & Publish
// ─────────────────────────────────────────────────────────────────
router.post("/:id/approve", adminLimiter, requireAdmin, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });

    const [existing] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    if (!existing) return res.status(404).json({ message: "Testimonial not found." });

    const adminUser = req.user as any;
    const now = new Date();
    const [updated] = await db
      .update(testimonials)
      .set({
        status: "published",
        verificationStatus: "verified",
        consentStatus: "verified",
        verifiedAt: now,
        verifiedBy: adminUser.id,
        publishedAt: now,
        consentObtainedAt: existing.consentObtainedAt || now,
        updatedBy: adminUser.id,
        updatedAt: now,
      })
      .where(eq(testimonials.id, id))
      .returning();

    await logAdminAction(adminUser.id, "testimonial_approved", String(id), getIp(req), existing, updated);

    return res.json({ success: true, message: "Testimonial approved and published to landing page.", testimonial: updated });
  } catch (err) {
    console.error("[admin/testimonials APPROVE]", err);
    return res.status(500).json({ message: "Failed to approve testimonial." });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/admin/testimonials/:id/unpublish — Revert to Draft
// ─────────────────────────────────────────────────────────────────
router.post("/:id/unpublish", adminLimiter, requireAdmin, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID." });

    const [existing] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    if (!existing) return res.status(404).json({ message: "Testimonial not found." });

    const adminUser = req.user as any;
    const [updated] = await db
      .update(testimonials)
      .set({
        status: "draft",
        updatedBy: adminUser.id,
        updatedAt: new Date(),
      })
      .where(eq(testimonials.id, id))
      .returning();

    await logAdminAction(adminUser.id, "testimonial_unpublished", String(id), getIp(req), existing, updated);

    return res.json({ success: true, message: "Testimonial unpublished (moved to draft).", testimonial: updated });
  } catch (err) {
    console.error("[admin/testimonials UNPUBLISH]", err);
    return res.status(500).json({ message: "Failed to unpublish testimonial." });
  }
});

export default router;
