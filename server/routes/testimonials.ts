/**
 * Public Testimonials API
 *
 * - GET /api/testimonials: Returns ONLY published, verified, consent-approved testimonials.
 * - POST /api/testimonials/submit: Allows students & users to submit reviews, queued as draft for admin review.
 * Internal admin fields (notes, sourceReference, etc.) are NEVER returned publicly.
 */

import { Router } from "express";
import { db } from "../db";
import { testimonials } from "../../shared/schema";
import { eq, and, desc, asc } from "drizzle-orm";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import rateLimit from "express-rate-limit";

const router = Router();

// Rate limiter: Max 5 review submissions per 15 minutes per IP
const reviewSubmitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many submissions. Please wait a few minutes before submitting another review." },
  validate: false,
});

const submitReviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters").trim(),
  role: z.string().max(100, "Role cannot exceed 100 characters").trim().optional().nullable(),
  organization: z.string().max(150, "Organization cannot exceed 150 characters").trim().optional().nullable(),
  quote: z.string().min(10, "Review must be at least 10 characters").max(1000, "Review cannot exceed 1000 characters").trim(),
  rating: z.number().int().min(1, "Rating must be between 1 and 5").max(5, "Rating must be between 1 and 5"),
  linkedinUrl: z
    .string()
    .url("Must be a valid URL")
    .refine((v) => v.startsWith("https://"), "Must use HTTPS")
    .refine((v) => !v.startsWith("javascript:") && !v.startsWith("data:"), "Invalid URL scheme")
    .optional()
    .nullable()
    .or(z.literal("").transform(() => null)),
  category: z.enum(["student", "educator", "faculty", "academic_administrator", "industry_professional", "other"]).optional().default("student"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must confirm that this is your genuine feedback and consent to publication.",
  }),
});

/**
 * GET /api/testimonials
 * Public read-only endpoint — returns only verified, published testimonials.
 */
router.get("/", async (_req, res) => {
  try {
    const rows = await db
      .select({
        id: testimonials.id,
        name: testimonials.name,
        role: testimonials.role,
        organization: testimonials.organization,
        quote: testimonials.quote,
        imageUrl: testimonials.imageUrl,
        linkedinUrl: testimonials.linkedinUrl,
        profileUrl: testimonials.profileUrl,
        rating: testimonials.rating,
        category: testimonials.category,
        testimonialDate: testimonials.testimonialDate,
        displayOrder: testimonials.displayOrder,
        isFeatured: testimonials.isFeatured,
        createdAt: testimonials.createdAt,
      })
      .from(testimonials)
      .where(
        and(
          eq(testimonials.status, "published"),
          eq(testimonials.verificationStatus, "verified"),
          eq(testimonials.consentStatus, "verified"),
        )
      )
      .orderBy(asc(testimonials.displayOrder), desc(testimonials.createdAt))
      .limit(50);

    return res.json(rows);
  } catch (err) {
    console.error("[/api/testimonials] Error:", err);
    return res.status(500).json({ message: "Failed to load testimonials." });
  }
});

/**
 * POST /api/testimonials/submit
 * Public submission endpoint — accepts user feedback, saves as draft/pending for admin review.
 */
router.post("/submit", reviewSubmitLimiter, async (req, res) => {
  try {
    const parseResult = submitReviewSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ message: fromZodError(parseResult.error).message });
    }

    const data = parseResult.data;
    const user = req.user as any;

    const [created] = await db
      .insert(testimonials)
      .values({
        name: data.name,
        role: data.role || "LPU Student",
        organization: data.organization || "Lovely Professional University",
        quote: data.quote,
        rating: data.rating,
        linkedinUrl: data.linkedinUrl || null,
        category: data.category || "student",
        status: "draft",
        verificationStatus: "unverified",
        consentStatus: "received",
        isFeatured: false,
        sourceReference: "Website Review Submission",
        internalNotes: `Submitted on ${new Date().toISOString()} via public website review form. Pending admin moderation.`,
        createdBy: user ? user.id : null,
      })
      .returning({ id: testimonials.id });

    return res.status(201).json({
      success: true,
      message: "Thank you for sharing your experience! Your review has been submitted for admin verification and will appear on the landing page once approved.",
      id: created.id,
    });
  } catch (err) {
    console.error("[/api/testimonials/submit] Error:", err);
    return res.status(500).json({ message: "Failed to submit review. Please try again later." });
  }
});

export default router;
