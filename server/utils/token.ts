import crypto from "crypto";

const SECRET = process.env.JWT_SECRET || process.env.DOWNLOAD_TOKEN_SECRET || "padholpu_default_secure_vault_2026";

export interface DownloadPayload {
  userId: number;
  resourceId: number;
  expiry: number;
}

/**
 * Generates a short-lived (2-min) HMAC-signed token for resource downloads.
 * Uses native crypto to avoid jsonwebtoken dependency.
 */
export function generateDownloadToken(userId: number, resourceId: number): string {
  const expiry = Date.now() + 2 * 60 * 1000; // 2 minutes
  const nonce = crypto.randomBytes(8).toString("hex");
  const payload = JSON.stringify({ userId, resourceId, expiry, nonce });
  
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");
    
  // Format: base64(payload).signature
  const encodedPayload = Buffer.from(payload).toString("base64");
  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies the integrity and authenticity of a download token.
 */
export function verifyDownloadToken(token: string): DownloadPayload | null {
  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return null;
    
    const payloadStr = Buffer.from(encodedPayload, "base64").toString("utf-8");
    const expectedSignature = crypto
      .createHmac("sha256", SECRET)
      .update(payloadStr)
      .digest("hex");
    
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expectedSignature, "hex");
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      console.warn("[Security] Token signature mismatch detected.");
      return null;
    }
    
    const payload = JSON.parse(payloadStr) as DownloadPayload;
    
    // Check expiry
    if (Date.now() > payload.expiry) {
      console.log("[Security] Expired download token rejected.");
      return null;
    }
    
    return payload;
  } catch (err) {
    console.error("[Security] Token verification error:", err);
    return null;
  }
}

const consumedNonces = new Set<string>();

/**
 * Atomically verifies and consumes a download token.
 * Prevents replay attacks by enforcing single-use tickets both in-memory and in DB.
 */
export async function consumeDownloadToken(token: string): Promise<{
  valid: boolean;
  payload: (DownloadPayload & { nonce?: string }) | null;
  error?: string;
}> {
  try {
    const payload = verifyDownloadToken(token) as (DownloadPayload & { nonce?: string }) | null;
    if (!payload) {
      return { valid: false, payload: null, error: "INVALID_OR_EXPIRED" };
    }

    const nonce = payload.nonce;
    if (!nonce) {
      return { valid: false, payload: null, error: "MISSING_NONCE" };
    }

    // In-memory single-use enforcement
    if (consumedNonces.has(nonce)) {
      console.warn(`[Security] Replay attack prevented! Nonce ${nonce} already consumed.`);
      return { valid: false, payload, error: "ALREADY_CONSUMED" };
    }
    consumedNonces.add(nonce);
    const ttl = Math.max(1000, payload.expiry - Date.now());
    setTimeout(() => consumedNonces.delete(nonce), ttl);

    // Distributed database authoritative single-use enforcement (FAIL CLOSED)
    try {
      const { pool } = await import("../db");
      const res = await pool.query(
        `INSERT INTO rate_limits (key, hits, expires_at)
         VALUES ($1, 1, NOW() + INTERVAL '10 minutes')
         ON CONFLICT (key) DO NOTHING
         RETURNING key`,
        [`dl_nonce:${nonce}`]
      );
      if (!res.rows || res.rows.length === 0) {
        console.warn(`[Security] Distributed replay prevented via DB! Nonce ${nonce} already consumed.`);
        return { valid: false, payload, error: "ALREADY_CONSUMED" };
      }
    } catch (dbErr: any) {
      // FAIL CLOSED: If distributed DB nonce storage fails, do NOT accept the token as successfully consumed.
      consumedNonces.delete(nonce);
      console.error(`[Security] Distributed nonce verification failed. Fails closed to prevent replay:`, dbErr);
      return { valid: false, payload: null, error: "DISTRIBUTED_VERIFICATION_FAILED" };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, payload: null, error: err.message };
  }
}
