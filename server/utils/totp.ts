/**
 * server/utils/totp.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Admin TOTP 2FA helpers using `otplib` (v12+ functional sync API).
 *
 * Security design:
 *  - TOTP secrets are encrypted at rest with AES-256-GCM.
 *  - Encryption key derived from TOTP_ENCRYPTION_KEY or JWT_SECRET.
 *  - Recovery codes are stored as SHA-256 hashes; plaintext shown only once.
 *  - Never log secrets, recovery codes, or TOTP tokens.
 */

import { generateSecret, generateSync, verifySync, generateURI } from "otplib";
import { createCipheriv, createDecipheriv, createHash, randomBytes, timingSafeEqual } from "crypto";
import QRCode from "qrcode";

// ── Encryption Configuration ──────────────────────────────────────────────────
function deriveEncryptionKey(): Buffer {
  const raw = process.env.TOTP_ENCRYPTION_KEY || process.env.JWT_SECRET || "dev-totp-key-insecure";
  return createHash("sha256").update(raw).digest(); // Always 32 bytes
}

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;

export function encryptTotpSecret(plaintext: string): string {
  const key = deriveEncryptionKey();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf-8"), cipher.final()]);
  const tag = (cipher as any).getAuthTag();
  // Format: iv:tag:ciphertext (all hex) — safe to persist in DB TEXT column
  return `${iv.toString("hex")}:${tag.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decryptTotpSecret(encoded: string): string {
  const key = deriveEncryptionKey();
  const parts = encoded.split(":");
  if (parts.length !== 3) throw new Error("Invalid TOTP secret format");
  const [ivHex, tagHex, cipherHex] = parts;
  const iv = Buffer.from(ivHex, "hex");
  const tag = Buffer.from(tagHex, "hex");
  const ciphertext = Buffer.from(cipherHex, "hex");
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  (decipher as any).setAuthTag(tag);
  return decipher.update(ciphertext).toString("utf-8") + decipher.final("utf-8");
}

// ── TOTP Options ──────────────────────────────────────────────────────────────
const TOTP_OPTIONS = {
  type: "totp" as const,
  digits: 6,
  step: 30,
  window: 1, // ±1 window = 90s total tolerance
};

export const APP_NAME = "Padho LPU";

/**
 * Generate a new TOTP secret and return encrypted version for DB storage.
 */
export function generateTotpSecret(): { raw: string; encrypted: string } {
  const raw = generateSecret();
  const encrypted = encryptTotpSecret(raw);
  return { raw, encrypted };
}

/**
 * Generate a QR code data URL for authenticator app enrollment.
 * Uses the raw (decrypted) secret — never log this value.
 */
export async function generateTotpQrCode(username: string, rawSecret: string): Promise<string> {
  const uri = generateURI({
    label: `${APP_NAME}:${username}`,
    issuer: APP_NAME,
    secret: rawSecret,
    digits: TOTP_OPTIONS.digits,
    period: TOTP_OPTIONS.step,
  });
  return QRCode.toDataURL(uri);
}

/**
 * Verify a 6-digit TOTP token against the stored encrypted secret.
 */
export function verifyTotpToken(encryptedSecret: string, token: string): boolean {
  try {
    const secret = decryptTotpSecret(encryptedSecret);
    const result = verifySync({ ...TOTP_OPTIONS, token, secret });
    return typeof result === "object" ? result.valid : result;
  } catch {
    return false;
  }
}

// ── Recovery Codes ────────────────────────────────────────────────────────────
const RECOVERY_CODE_COUNT = 8;

/**
 * Generate one-time recovery codes.
 * Returns:
 *   - plainCodes: shown to admin exactly once (NEVER stored)
 *   - hashedCodes: SHA-256 hashes to persist in the DB
 */
export function generateRecoveryCodes(): { plainCodes: string[]; hashedCodes: string[] } {
  const plainCodes: string[] = [];
  const hashedCodes: string[] = [];

  for (let i = 0; i < RECOVERY_CODE_COUNT; i++) {
    // 10 random alphanumeric chars formatted as XXXXX-XXXXX
    const bytes = randomBytes(16).toString("hex").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
    const formatted = `${bytes.slice(0, 5)}-${bytes.slice(5)}`;
    plainCodes.push(formatted);
    hashedCodes.push(createHash("sha256").update(formatted).digest("hex"));
  }

  return { plainCodes, hashedCodes };
}

/**
 * Find and verify a recovery code using constant-time comparison.
 * Returns the index of the matching hash (for single-use invalidation) or -1.
 */
export function findAndVerifyRecoveryCode(inputCode: string, storedHashes: string[]): number {
  const normalized = inputCode.toUpperCase().replace(/\s/g, "");
  const inputHash = createHash("sha256").update(normalized).digest("hex");
  const inputBuf = Buffer.from(inputHash, "hex");

  for (let i = 0; i < storedHashes.length; i++) {
    try {
      const storedBuf = Buffer.from(storedHashes[i], "hex");
      if (storedBuf.length === inputBuf.length && timingSafeEqual(storedBuf, inputBuf)) {
        return i;
      }
    } catch {
      // skip malformed stored hash
    }
  }
  return -1;
}
