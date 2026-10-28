/**
 * CONSTRAINT ENGINE
 *
 * Enforces hard limits before any score/coin write is allowed.
 * All checks run server-side inside a DB transaction.
 */
import { type User } from "../../shared/schema";
import { getDailyScoreRemaining, LIMITS } from "./scoring";

export type ConstraintResult =
  | { allowed: true; effectiveDelta: number; isNewDay: boolean }
  | { allowed: false; reason: string; code: number };

/**
 * Validate a score award attempt before writing to the database.
 *
 * @param user - Current DB user row (fetched inside transaction with FOR UPDATE)
 * @param requestedDelta - Raw score we want to award
 * @param actionType - For logging
 * @returns ConstraintResult
 */
export function enforceScoreConstraint(
  user: User,
  requestedDelta: number,
  actionType: string
): ConstraintResult {
  // 1. Shadow ban check — silently return 0 delta (user doesn't know)
  if (user.isShadowBanned || user.trustLevel === "shadow_banned") {
    return { allowed: true, effectiveDelta: 0, isNewDay: false };
  }

  // 2. Suspicious users — score is frozen
  if (user.trustLevel === "suspicious") {
    return { allowed: true, effectiveDelta: 0, isNewDay: false };
  }

  // 3. Sanity check on requested delta
  if (requestedDelta < 0) {
    return { allowed: false, reason: "Invalid score delta", code: 400 };
  }

  // 4. Daily cap enforcement
  const { remaining, isNewDay } = getDailyScoreRemaining(
    user.dailyScoreAccumulated ?? 0,
    user.dailyScoreDate ?? null
  );

  if (remaining <= 0) {
    return { allowed: false, reason: "Daily score cap reached. Try again tomorrow.", code: 403 };
  }

  // 5. Clamp to remaining daily allowance
  const effectiveDelta = Math.min(requestedDelta, remaining);

  return { allowed: true, effectiveDelta, isNewDay };
}


/**
 * Timing constraint — verify quiz/exam was not completed impossibly fast.
 * This uses DB-stored session creation time (NOT client-supplied startTime).
 */
export function enforceTimingConstraint(
  sessionCreatedAt: Date,
  now: Date,
  totalQuestions: number,
  isExam: boolean
): { valid: boolean; reason?: string } {
  const elapsed = (now.getTime() - sessionCreatedAt.getTime()) / 1000;

  if (isExam) {
    const minSeconds = totalQuestions * LIMITS.MIN_EXAM_SECONDS_PER_QUESTION;
    if (elapsed < minSeconds) {
      return {
        valid: false,
        reason: `Exam completed too fast (${Math.round(elapsed)}s). Minimum required: ${minSeconds}s.`,
      };
    }
  } else {
    if (elapsed < LIMITS.MIN_QUIZ_SECONDS) {
      return {
        valid: false,
        reason: `Quiz completed too fast (${Math.round(elapsed)}s). Minimum required: ${LIMITS.MIN_QUIZ_SECONDS}s.`,
      };
    }
  }

  return { valid: true };
}
