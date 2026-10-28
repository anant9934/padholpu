import { createHash } from "crypto";

/**
 * Computes SHA256 hash of a buffer for byte-integrity verification.
 */
export function computeFileHash(buffer: Buffer): string {
  return createHash("sha256").update(buffer).digest("hex");
}

/**
 * Verifies if a buffer matches a stored SHA256 hash.
 */
export function verifyIntegrity(buffer: Buffer, expectedHash: string): boolean {
  const actualHash = computeFileHash(buffer);
  return actualHash === expectedHash;
}
