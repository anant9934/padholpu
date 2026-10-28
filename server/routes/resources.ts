import { Router } from "express";
import { v2 as cloudinary } from "cloudinary";
import https from "https";
import multer from "multer";
import { storage } from "../storage";
import { computeFileHash } from "../utils/crypto";
import { logEvent, logError } from "../utils/observability";
import { eq, and, sql } from "drizzle-orm";
import { generateDownloadToken, verifyDownloadToken, consumeDownloadToken } from "../utils/token";
import { downloadLimiter, secureDownloadLimiter } from "../middleware/action-limiters";
import { resources, users } from "../../shared/schema";
import { db } from "../db";

const router = Router();

// Configuration
const UPLOAD_LIMIT = 15 * 1024 * 1024; // 15MB
const SIGNED_URL_EXPIRY = 3600; // 1 hour

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: UPLOAD_LIMIT }
});

/**
 * MIME Utility (Strict)
 */
function getMimeType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  const map: Record<string, string> = {
    'pdf':   'application/pdf',
    'docx':  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'doc':   'application/msword',
    'png':   'image/png',
    'jpg':   'image/jpeg',
    'jpeg':  'image/jpeg',
    'pptx':  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'ppt':   'application/vnd.ms-powerpoint',
    'txt':   'text/plain'
  };
  return map[ext] || 'application/octet-stream';
}

/**
 * GET /api/resources
 */
router.get("/", async (req, res) => {
  try {
    const subject = req.query.subject as string | undefined;
    const type = req.query.type as string | undefined;
    const list = await storage.getResources(subject, type, req.user?.id, !!req.user?.isAdmin);
    
    logEvent("Resource list fetched", { userId: req.user?.id, subject, type, count: list.length });
    res.json(list);
  } catch (err: any) {
    logError(err, { path: req.path });
    res.status(500).json({ error: "Failed to fetch resources" });
  }
});

/**
 * POST /api/resources/upload
 * Zero-Blindspot Upload Logic
 */
router.post("/upload", upload.single("file"), async (req, res) => {
  const requestId = (req as any).requestId || `req-${Date.now()}`;
  
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Authentication required" });
  }

  if (!req.file) {
    return res.status(400).json({ error: "No file provided" });
  }

  const { title, subject, type } = req.body;
  const buffer = req.file.buffer;
  const fileName = req.file.originalname;

  try {
    // 1. Size limit validation
    if (buffer.length > UPLOAD_LIMIT) {
      return res.status(400).json({ error: `File size exceeds the maximum limit of ${UPLOAD_LIMIT / (1024 * 1024)}MB.` });
    }

    // 2. Byte-Integrity Hash
    const fileHash = computeFileHash(buffer);
    
    // 3. Strict Extension Allowlist
    const allowedExtensions = [".pdf", ".docx", ".doc", ".pptx", ".ppt", ".png", ".jpg", ".jpeg", ".webp", ".txt"];
    const fileExt = "." + (fileName.split(".").pop() || "").toLowerCase();
    if (!allowedExtensions.includes(fileExt)) {
      return res.status(400).json({ error: "Unsupported file extension. Allowed: PDF, DOCX, PPTX, PNG, JPG, WEBP, TXT." });
    }

    // 4. Prohibit Script, SVG, and HTML content inside any uploaded file
    const bufferPrefix = buffer.subarray(0, 4096).toString("utf-8").toLowerCase();
    const maliciousPatterns = [
      /<script[\s>]/i,
      /<svg[\s>]/i,
      /<html[\s>]/i,
      /<!doctype html>/i,
      /<iframe[\s>]/i,
      /javascript:/i,
      /onerror\s*=/i,
      /onload\s*=/i,
      /onclick\s*=/i,
      /<\?php/i
    ];
    for (const pattern of maliciousPatterns) {
      if (pattern.test(bufferPrefix)) {
        return res.status(400).json({ error: "Malicious payload detected: script, SVG, or HTML content is strictly prohibited." });
      }
    }

    // 5. Magic Bytes & MIME Cross-Validation
    const { fileTypeFromBuffer } = await import("file-type");
    const detected = await fileTypeFromBuffer(buffer);

    // Explicit rejection of dangerous MIME types
    const dangerousMimes = new Set([
      "image/svg+xml",
      "text/html",
      "application/xhtml+xml",
      "application/xml",
      "text/xml",
      "application/x-msdownload",
      "application/x-executable",
      "application/x-sh",
      "application/javascript",
      "text/javascript",
      "application/x-bat",
      "application/vnd.microsoft.portable-executable",
      "application/x-httpd-php",
      "application/x-dosexec"
    ]);
    if (detected && dangerousMimes.has(detected.mime)) {
      return res.status(400).json({ error: "Executable, SVG, script, or dangerous file types are strictly prohibited." });
    }

    // Enforce Expected Extension <-> Detected MIME matching
    if (fileExt === ".pdf") {
      const header = buffer.subarray(0, 5).toString("ascii");
      if (header !== "%PDF-") {
        return res.status(400).json({ error: "Invalid PDF format: file header does not match %PDF- signature." });
      }
      if (detected && detected.mime !== "application/pdf") {
        return res.status(400).json({ error: `Spoofed file detected: extension is .pdf but detected type is ${detected.mime}.` });
      }
    } else if (fileExt === ".png") {
      const isPngHeader = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;
      if (!isPngHeader || (detected && detected.mime !== "image/png")) {
        return res.status(400).json({ error: "Invalid PNG format: content does not match PNG signature." });
      }
    } else if (fileExt === ".jpg" || fileExt === ".jpeg") {
      const isJpgHeader = buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
      if (!isJpgHeader || (detected && detected.mime !== "image/jpeg")) {
        return res.status(400).json({ error: "Invalid JPEG format: content does not match JPEG signature." });
      }
    } else if (fileExt === ".webp") {
      if (!detected || detected.mime !== "image/webp") {
        return res.status(400).json({ error: "Invalid WEBP format: content does not match WEBP signature." });
      }
    } else if (fileExt === ".docx" || fileExt === ".pptx") {
      const isZipHeader = buffer[0] === 0x50 && buffer[1] === 0x4b; // PK
      const validMimes = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/zip"
      ];
      if (!isZipHeader || (detected && !validMimes.includes(detected.mime))) {
        return res.status(400).json({ error: `Invalid ${fileExt.toUpperCase()} format: document container mismatch.` });
      }
    } else if (fileExt === ".txt") {
      // Plain text files should not have a binary magic number detected
      if (detected) {
        return res.status(400).json({ error: `Spoofed text file: binary file detected as ${detected.mime}.` });
      }
      // Check for binary null bytes in first 512 bytes
      for (let i = 0; i < Math.min(buffer.length, 512); i++) {
        if (buffer[i] === 0) {
          return res.status(400).json({ error: "Binary data detected in text file." });
        }
      }
    }

    // 6. Cloudinary Upload (RESOURCE_TYPE: RAW for non-image doc integrity)
    const mimeType = getMimeType(fileName);
    const isImage = mimeType.startsWith("image/");
    const resourceType = isImage ? "image" : "raw";

    const uploadPromise = new Promise((resolve, reject) => {
      const publicId = `resources/${Date.now()}-${fileName.replace(/\s+/g, '_')}`;
      
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: resourceType,
          public_id: publicId,
          folder: "padholpu_resources",
          overwrite: true
        },
        (error, result) => {
          if (error) {
            console.error("[CLOUDINARY ERROR]", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    const result = (await uploadPromise) as any;

    if (!result || !result.secure_url) {
      throw new Error("Cloudinary upload succeeded but returned no URL");
    }

    // 4. Persistence
    const newResource = await storage.createResource({
      title: title || fileName,
      subject,
      type: type || "Notes",
      url: result.secure_url,
      filename: fileName,
      publicId: result.public_id,
      fileSize: buffer.length,
      fileHash: fileHash,
      uploaderId: req.user!.id,
      uploaderName: req.user!.fullName,
      uploaderUsername: req.user!.username,
      uploadedBy: req.user!.id
    });

    logEvent("File uploaded successfully", { 
      requestId, 
      userId: req.user!.id, 
      resourceId: newResource.id, 
      hash: fileHash 
    });

    res.status(201).json(newResource);

  } catch (err: any) {
    console.error(`[UPLOAD EXECUTION FAILURE] Request: ${requestId}`, err);
    logError(err, { requestId, userId: req.user?.id, action: "UPLOAD" });
    res.status(500).json({ 
      error: "Secure upload failed. Integrity check active.",
      details: process.env.NODE_ENV !== "production" ? err.message : undefined 
    });
  }
});

/**
 * GET /api/resources/:id
 * Fetches a single public resource with subject metadata and related resources.
 */
router.get("/:id", async (req, res) => {
  const resourceId = Number(req.params.id);
  if (isNaN(resourceId)) return res.status(400).json({ error: "Invalid resource ID" });

  try {
    const resource = await storage.getResource(resourceId);
    if (!resource) return res.status(404).json({ error: "Resource not found" });

    // All resources are 100% free and open for student learning
    const isUnlocked = true;

    // Get related resources in the same subject
    const related = await db
      .select({
        id: resources.id,
        title: resources.title,
        subject: resources.subject,
        type: resources.type,
        downloads: sql<number>`(SELECT count(*)::int FROM resource_downloads WHERE resource_id = ${resources.id})`,
        isPremium: sql<boolean>`false`,
        priceGold: sql<number>`0`,
      })
      .from(resources)
      .where(and(eq(resources.subject, resource.subject), sql`${resources.id} != ${resourceId}`))
      .limit(6);

    res.json({
      ...resource,
      isUnlocked,
      related,
    });
  } catch (err: any) {
    logError(err, { path: req.path });
    res.status(500).json({ error: "Failed to fetch resource detail" });
  }
});

/**
 * GET /api/resources/:id/download
 * Hardened Phase 1: Access Validation & Token Generation
 */
router.get("/:id/download", secureDownloadLimiter, async (req, res) => {
  const requestId = (req as any).requestId;
  const resourceId = Number(req.params.id);

  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const resource = await storage.getResource(resourceId);
    if (!resource) {
      return res.status(404).json({ error: "Resource record missing" });
    }

    // 1. Cloudinary Integrity Check (SAFE CHECK)
    if (!resource.publicId || !resource.url) {
      logError(new Error("Invalid file reference in DB"), { resourceId });
      return res.status(500).json({ error: "Storage reference corruption detected" });
    }

    // 2. Access Validation Layer (Free access for all registered students)
    const userId = req.user.id;

    // 3. Generate Short-Lived Token (2 min)
    const downloadToken = generateDownloadToken(userId, resourceId);

    console.log({
      event: "download_token_issued",
      userId,
      resourceId,
      time: Date.now()
    });

    // Return token for Step 2
    res.json({ downloadToken });

  } catch (err: any) {
    logError(err, { requestId, userId: req.user?.id, resourceId });
    res.status(500).json({ error: "Secure download sequence failed" });
  }
});

/**
 * GET /api/resources/download/secure/:token
 * Hardened Phase 2: Token Verification & Signed URL Redirect
 */
router.get("/download/secure/:token", secureDownloadLimiter, async (req, res) => {
  const token = req.params.token as string;
  
  try {
    // 1. Atomically Verify HMAC Token & Consume Nonce (Single-Use Replay Protection)
    const verification = await consumeDownloadToken(token);
    if (!verification.valid) {
      if (verification.error === "ALREADY_CONSUMED") {
        return res.status(403).json({ error: "Download link has already been used. Single-use policy enforced. Please generate a fresh link." });
      }
      return res.status(403).json({ error: "Download link expired or invalid signature" });
    }
    const payload = verification.payload!;

    // 2. Cross-Verify Session (Prevents token sharing between users)
    if (!req.isAuthenticated() || req.user.id !== payload.userId) {
      return res.status(401).json({ error: "Session mismatch" });
    }

    const resource = await storage.getResource(payload.resourceId);
    if (!resource) {
      return res.status(404).json({ error: "Resource no longer exists" });
    }

    // 3. Access Guard — All resources are 100% free open access
    const hasAccess = true;

    if (!hasAccess) {
      return res.status(403).json({ error: "Access revoked or invalid" });
    }

    // 4. Generate Cloudinary Signed URL (Version-Aware)
    // Extract version (v12345678) from stored URL to match Cloudinary signature requirements
    const versionMatch = resource.url?.match(/\/v(\d+)\//);
    const version = versionMatch ? versionMatch[1] : undefined;

    const signedUrl = cloudinary.url(resource.publicId as string, {
      sign_url: true,
      secure: true,
      resource_type: (resource.url?.includes("/raw/")) ? "raw" : "image",
      version: version, // Crucial for signature match
      expires_at: Math.floor(Date.now() / 1000) + SIGNED_URL_EXPIRY
    });

    console.log(`[PROXY DEBUG] Generated Signed URL for Resource ${resource.id}: ${signedUrl}`);

    console.log({
      event: "secure_download_proxy_start",
      userId: req.user.id,
      resourceId: resource.id,
      version: version,
      time: Date.now()
    });

    // 5. Binary Proxy: Stream from Cloudinary with Redirect Support
    const mimeType = getMimeType(resource!.filename);
    
    const fetchAndPipe = (url: string, redirectCount = 0) => {
      if (redirectCount > 5) {
        logError(new Error("Too many redirects during download proxy"), { resourceId: resource.id });
        return res.status(500).send("Storage retrieval failed: Circuit broken");
      }

      https.get(url, (cloudinaryRes) => {
        const { statusCode } = cloudinaryRes;

        // Handle Redirects (301, 302, 307)
        if (statusCode && [301, 302, 307, 308].includes(statusCode) && cloudinaryRes.headers.location) {
          console.log(`[PROXY] Following redirect (${statusCode}) to: ${cloudinaryRes.headers.location}`);
          return fetchAndPipe(cloudinaryRes.headers.location, redirectCount + 1);
        }

        if (statusCode !== 200) {
          const cldError = cloudinaryRes.headers['x-cld-error'] || 'Unknown Cloudinary Error';
          
          // BULLETPROOF FALLBACK (v2): If proxy fails (401/404), use the Archive API Bypass
          if (statusCode === 401 || statusCode === 404) {
            console.warn(`[PROXY FALLBACK] Cloudinary ${statusCode}: ${cldError}. Triggering Bulletproof Archive Fallback.`);
            
            // Generate a ZIP URL for just this one file. 
            // This API path (generate_archive) works even when individual delivery fails.
            const bulletproofUrl = cloudinary.utils.download_zip_url({
              public_ids: [resource!.publicId as string],
              resource_type: "raw",
              flatten_folders: true
            });

            return res.redirect(bulletproofUrl); 
          }

          console.error(`[PROXY ERROR] Cloudinary ${statusCode}: ${cldError} (Resource ${resource!.id})`);
          logError(new Error(`Cloudinary ${statusCode}: ${cldError}`), { resourceId: resource!.id });
          return res.status(500).send(`Storage retrieval failed: ${statusCode} - ${cldError}`);
        }

        // Hardened Headers
        res.setHeader('Content-Type', mimeType);
        res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(resource.filename)}"`);
        if (cloudinaryRes.headers['content-length']) {
          res.setHeader('Content-Length', cloudinaryRes.headers['content-length']);
        }

        // Stream binary data
        cloudinaryRes.pipe(res);
        
        cloudinaryRes.on('end', () => {
          console.log(`[DOWNLOAD COMPLETE] Resource ${resource.id} streamed successfully`);
        });
      }).on('error', (err) => {
        logError(err, { event: "download_proxy_error", resourceId: resource.id });
        res.status(500).send("Binary proxy connection failed");
      });
    }

    fetchAndPipe(signedUrl);

  } catch (err: any) {
    logError(err, { event: "download_failed", reason: err.message });
    res.status(500).send("Secure redirect failed");
  }
});

/**
 * POST /api/resources/unlock
 */
router.post("/unlock", async (_req, res) => {
  return res.json({ success: true, message: "All resources are 100% free and open on Padho LPU." });
});

/**
 * GET /api/resources/top-contributor
 */
router.get("/top-contributor", async (req, res) => {
  try {
    const top = await storage.getTopContributors();
    res.json(top);
  } catch (err: any) {
    logError(err, { path: req.path });
    res.status(500).json({ error: "Failed to fetch contributors" });
  }
});

/**
 * POST /api/resources/:id/view
 */
router.post("/:id/view", async (req, res) => {
  try {
    const resourceId = Number(req.params.id);
    await storage.trackResourceAction({
      resourceId,
      userId: req.user?.id || null,
      action: "VIEW",
      ipAddress: req.ip
    });
    res.sendStatus(200);
  } catch (err: any) {
    res.sendStatus(500);
  }
});

/**
 * DELETE /api/resources/:id
 */
router.delete("/:id", async (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ error: "Auth required" });
  
  const resourceId = Number(req.params.id);
  if (!Number.isInteger(resourceId) || resourceId <= 0) {
    return res.status(400).json({ error: "Invalid resource ID" });
  }

  try {
    const resource = await storage.getResource(resourceId);
    if (!resource) return res.status(404).json({ error: "Resource not found" });

    // Owner or Admin only
    if (resource.uploaderId !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    await storage.deleteResource(resourceId);
    logEvent("Resource deleted", { userId: req.user.id, resourceId });
    res.sendStatus(204);
  } catch (err: any) {
    logError(err, { userId: req.user.id, resourceId });
    res.status(500).json({ error: "Failed to delete resource" });
  }
});


/**
 * POST /api/resources/:id/report
 */
router.post("/:id/report", async (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ error: "Auth required" });
  
  const resourceId = Number(req.params.id);
  if (!Number.isInteger(resourceId) || resourceId <= 0) {
    return res.status(400).json({ error: "Invalid resource ID" });
  }
  const { reason, description } = req.body;

  try {
    await storage.reportResource({
      resourceId,
      reporterId: req.user.id,
      reason,
      description: description || null,
      status: "PENDING"
    });
    
    logEvent("Resource reported", { userId: req.user.id, resourceId, reason });
    res.status(201).json({ success: true, message: "Report submitted" });
  } catch (err: any) {
    res.status(500).json({ error: "Report failed" });
  }
});

export default router;
