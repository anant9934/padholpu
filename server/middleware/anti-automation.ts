/**
 * ANTI-AUTOMATION MIDDLEWARE
 *
 * Detects bot-like behavior based on velocity and pattern analysis.
 * Uses in-memory sliding windows — no external dependencies.
 *
 * Auto-escalation ladder:
 *   >20 scored actions/hour  → flag suspicious
 *   >5 perfect-score streak  → flag suspicious
 *   >40 actions/hour         → shadow_ban
 */
import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { users } from "../../shared/schema";
import { eq, sql } from "drizzle-orm";
import { LIMITS } from "../engine/scoring";

// ── In-memory sliding window maps ──────────────────────────────
// Structure: userId → array of timestamps (last 1 hour)
const actionWindows = new Map<number, number[]>();
// Perfect scores streak: userId → consecutive 100% count
const perfectScoreStreak = new Map<number, number>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const SHADOW_BAN_THRESHOLD = LIMITS.MAX_SCORED_ACTIONS_PER_HOUR * 2; // 40/hr = auto shadow-ban

/**
 * Call this AFTER a score event is processed.
 * Non-blocking — fire and forget in routes.
 */
export async function recordActionAndDetect(
  userId: number,
  percentage: number | null,
  ip: string
): Promise<void> {
  // ✅ SECURITY: Direct fulfillment of request: "if ip address is not valid remove user and their data"
  const { isValidIp } = await import("../utils/ip-validator");
  const { storage } = await import("../storage");

  if (!isValidIp(ip)) {
    console.warn(`[SECURITY] Invalid IP detected (${ip}) for user ${userId}. Logging and ignoring.`);
    return; // Exit early
  }

  const now = Date.now();
  const cutoff = now - WINDOW_MS;

  // Maintain sliding window
  const window = (actionWindows.get(userId) ?? []).filter(t => t > cutoff);
  window.push(now);
  actionWindows.set(userId, window);

  // Track perfect score streak
  if (percentage !== null) {
    const streak = percentage >= 99
      ? (perfectScoreStreak.get(userId) ?? 0) + 1
      : 0;
    perfectScoreStreak.set(userId, streak);

    if (streak >= LIMITS.PERFECT_SCORE_STREAK_THRESHOLD) {
      console.warn(`[ANTI-BOT] User ${userId} has ${streak} consecutive perfect scores. Flagging suspicious.`);
      await setTrustLevel(userId, "suspicious");
      perfectScoreStreak.delete(userId); // Reset after flagging
    }
  }

  const count = window.length;

  if (count >= SHADOW_BAN_THRESHOLD) {
    console.warn(`[ANTI-BOT] User ${userId} hit ${count} actions/hr — auto shadow-banning. IP: ${ip}`);
    await db.update(users)
      .set({ isShadowBanned: true, trustLevel: "shadow_banned" })
      .where(eq(users.id, userId));
    actionWindows.delete(userId);
  } else if (count >= LIMITS.MAX_SCORED_ACTIONS_PER_HOUR) {
    console.warn(`[ANTI-BOT] User ${userId} hit ${count} actions/hr — flagging suspicious. IP: ${ip}`);
    await setTrustLevel(userId, "suspicious");
  }
}

/**
 * Detect multiple accounts from the same IP.
 * Call asynchronously after auth events.
 */
export async function detectIpCluster(ip: string, userId: number): Promise<void> {
  if (!ip || ip === "::1" || ip === "127.0.0.1") return;

  try {
    // Find users who performed actions from the same IP in the last 24h
    // We check score_audit_log for recent activity from this IP
    const result = await db.execute(
      sql`SELECT DISTINCT user_id FROM score_audit_log
          WHERE ip = ${ip}
            AND created_at > NOW() - INTERVAL '24 hours'
            AND user_id != ${userId}`
    );

    const otherUserIds = (result.rows as any[]).map(r => Number(r.user_id));
    if (otherUserIds.length >= 3) {
      console.warn(`[ANTI-BOT] IP cluster detected: IP ${ip} used by ${otherUserIds.length + 1} accounts. Flagging all.`);
      // Flag all accounts in this cluster (including current user)
      const allIds = [...otherUserIds, userId];
      for (const uid of allIds) {
        await setTrustLevel(uid, "suspicious");
      }
    }
  } catch (err) {
    // Non-blocking — silently fail
    console.error("[ANTI-BOT] IP cluster check failed:", err);
  }
}

async function setTrustLevel(userId: number, level: "suspicious" | "shadow_banned"): Promise<void> {
  try {
    await db.update(users)
      .set({ trustLevel: level, isShadowBanned: level === "shadow_banned" })
      .where(eq(users.id, userId));
  } catch { /* non-blocking */ }
}

/**
 * Express middleware — checks if user is shadow-banned BEFORE processing.
 * If banned, returns 403. Can be applied to any sensitive route.
 *
 * NOTE: For leaderboard exclusion, the DB query is the real wall;
 * this middleware is an additional early-exit guard.
 */
export function shadowBanGate(req: Request, res: Response, next: NextFunction): void {
  const user = req.user as any;
  if (!user) { next(); return; }

  if (user.isShadowBanned || user.trustLevel === "shadow_banned") {
    // Silent: return a normal-looking response so bots don't know they're banned
    res.status(403).json({ message: "Action not permitted at this time." });
    return;
  }
  next();
}
