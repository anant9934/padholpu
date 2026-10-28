# Padho LPU — Cloudinary Media Storage Guide

---

## 1. Overview

Padho LPU uses **Cloudinary** for persistent media and file storage. Uploaded academic materials (PDFs, Word documents, PowerPoint presentations) and user profile avatars are streamed directly to Cloudinary without relying on the local Render filesystem.

---

## 2. Configuration & Protocol (`server/lib/cloudinary.ts`)

```typescript
export function configureCloudinary() {
  const cloudinaryUrl = process.env.CLOUDINARY_URL || '';
  const match = cloudinaryUrl.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);

  if (match) {
    cloudinary.config({
      cloud_name: match[3],
      api_key: match[1],
      api_secret: match[2],
      secure: true,
    });
  } else {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
  }
  return cloudinary;
}
```

### Supported Configuration Modes:
1. `CLOUDINARY_URL`: Standard unified connection URI (`cloudinary://key:secret@cloud-name`).
2. Individual keys: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
3. Secrets are strictly server-side and never exposed to the client or committed to Git.

---

## 3. Upload Pipeline Architecture

1. **Multer In-Memory Storage:**
   `multer({ storage: multer.memoryStorage(), limits: { fileSize: 15 * 1024 * 1024 } })`
   Incoming multipart uploads are held in memory buffers. Zero temporary files are written to the container disk.
2. **Streaming to Cloudinary:**
   Buffers are piped directly to `cloudinary.uploader.upload_stream` using `resource_type: "raw"` for non-image educational documents (preserving PDF and DOCX binary fidelity) and `resource_type: "image"` for avatars.
3. **Relational Persistence in Neon:**
   Upon successful upload, the Cloudinary `secure_url`, `public_id`, file hash, and metadata are saved to the `resources` table in PostgreSQL.
4. **Cache Invalidation:**
   The upload triggers immediate non-blocking invalidation of `padholpu:resources:*` and `padholpu:stats:system` in Redis.

---

## 4. Download & Streaming Proxy

- **Security Token Validation:** Downloads require an authenticated, single-use download token generated via `generateDownloadToken(resourceId, userId)`.
- **Signed URL Delivery:** Cloudinary signed URLs are generated with short expiration windows (`SIGNED_URL_EXPIRY = 3600`).
- **Binary Streaming Proxy:** When direct download is requested, `server/routes/resources.ts` streams the file from Cloudinary over HTTPS, piping chunks directly to the response with correct `Content-Length` and `Content-Disposition` headers.

---

## 5. Security & Threat Mitigation

- **MIME & Header Verification:** Rejects spoofed binaries (e.g. executable renamed to `.pdf`).
- **Rate Limiting:** `uploadLimiter` enforces a maximum of 5 uploads per hour per user.
- **Ownership Enforcement:** Deleting or replacing a resource requires ownership or `ADMIN` role verification.
