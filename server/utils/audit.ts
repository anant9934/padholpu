/**
 * AUDIT LOG HELPER
 *
 * Call after every score/coin mutation.
 * Non-fatal — errors are logged but do not block the response.
 */
import { db } from "../db";
import { scoreAuditLog, actionLog } from "../../shared/schema";

export async function logScoreEvent(opts: {
  userId: number;
  action: string;    // e.g. "QUIZ_SUBMIT"
  field: "score" | "slo_coins";
  delta: number;     // effective delta that was applied (0 if capped/frozen)
  newTotal: number;
  ip: string;
  metadata?: Record<string, unknown>;
}): Promise<void> {
  try {
    await db.insert(scoreAuditLog).values({
      userId: opts.userId,
      action: opts.action,
      field: opts.field,
      delta: opts.delta,
      newTotal: opts.newTotal,
      ip: opts.ip,
      metadata: opts.metadata ?? null,
    });
  } catch (err) {
    console.error("[AUDIT] Failed to write score audit log:", err);
    // Non-fatal — do not rethrow
  }
}

export async function logActionEvent(opts: {
  userId: number;
  actionType: string; // "quiz_submit" | "exam_submit" | "download" | "upload"
  ip: string;
  scoreAwarded?: number;
  percentage?: number | null;
}): Promise<void> {
  try {
    await db.insert(actionLog).values({
      userId: opts.userId,
      actionType: opts.actionType,
      ip: opts.ip,
      scoreAwarded: opts.scoreAwarded ?? 0,
      percentage: opts.percentage ?? null,
    });
  } catch (err) {
    console.error("[AUDIT] Failed to write action log:", err);
  }
}

/**
 * STRUCTURED SECURITY EVENT LOGGER
 * Logs security-relevant events (auth anomalies, privilege changes, rate limit triggers)
 * Automatically sanitizes secrets, tokens, and passwords from logs.
 */
export function logSecurityEvent(opts: {
  event: string;
  ip: string;
  userId?: number;
  username?: string;
  path?: string;
  method?: string;
  status?: "SUCCESS" | "BLOCKED" | "FAILED" | "SUSPICIOUS";
  metadata?: Record<string, unknown>;
}): void {
  const sensitiveKeys = new Set([
    "password", "token", "secret", "cookie", "authorization", 
    "totp", "otp", "key", "access_token", "refresh_token", "hash"
  ]);

  const sanitizedMetadata: Record<string, unknown> = {};
  if (opts.metadata) {
    for (const [key, val] of Object.entries(opts.metadata)) {
      if (sensitiveKeys.has(key.toLowerCase())) {
        sanitizedMetadata[key] = "[REDACTED]";
      } else {
        sanitizedMetadata[key] = val;
      }
    }
  }

  const logPayload = {
    timestamp: new Date().toISOString(),
    type: "SECURITY_AUDIT",
    event: opts.event,
    status: opts.status ?? "SUCCESS",
    ip: opts.ip,
    userId: opts.userId ?? null,
    username: opts.username ?? null,
    path: opts.path ?? null,
    method: opts.method ?? null,
    details: sanitizedMetadata,
  };

  console.log(JSON.stringify(logPayload));
}
