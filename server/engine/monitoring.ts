import { db } from "../db";
import { adminLogs, quizAttempts, users } from "../../shared/schema";
import { eq, and, gte, count } from "drizzle-orm";

/**
 * Monitoring Thresholds
 */
const THRESHOLDS = {
  QUIZ_ATTEMPTS_PER_HOUR: 20,
};

/**
 * Logs a security alert for administrative review.
 */
export async function logSecurityAlert(
  userId: number | null,
  type: "ABUSE_DETECTED" | "HIGH_VALUE_ACTION" | "INTEGRITY_VIOLATION",
  reason: string,
  metadata: any = {}
) {
  try {
    await db.insert(adminLogs).values({
      adminId: 1, // System default or 0
      action: type,
      targetType: "USER",
      targetId: userId?.toString() || "system",
      beforeState: { reason },
      afterState: metadata,
      ip: metadata.ip || "internal",
    });

    console.warn(`[SECURITY ALERT] ${type}: ${reason} for user ${userId}`);

    // If critical, flag user for review
    if (userId && type === "ABUSE_DETECTED") {
      await db.update(users)
        .set({ trustLevel: "suspicious" })
        .where(eq(users.id, userId));
    }
  } catch (err) {
    console.error("[Monitoring] Failed to log security alert:", err);
  }
}

/**
 * Checks for user-level abuse patterns and flags suspicious accounts.
 * Triggered on high velocity events.
 */
export async function monitorUserBehavior(userId: number) {
  try {
    // 1. Quiz Submission Velocity
    const oneHourAgo = new Date(Date.now() - 3600000);
    const [stats] = await db.select({ count: count() })
      .from(quizAttempts)
      .where(and(eq(quizAttempts.userId, userId), gte(quizAttempts.completedAt, oneHourAgo)));

    if (Number(stats.count) > THRESHOLDS.QUIZ_ATTEMPTS_PER_HOUR) {
      await logSecurityAlert(userId, "ABUSE_DETECTED", "High quiz submission velocity detected (>20/hr).", { count: stats.count });
    }
  } catch (error) {
    console.error(`[Monitoring] Behavior check failed for user ${userId}:`, error);
  }
}
