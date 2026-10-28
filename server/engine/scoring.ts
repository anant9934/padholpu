/**
 * SERVER-AUTHORITATIVE SCORING ENGINE
 *
 * This is the ONLY place where score values are computed.
 * No client-supplied score/coins/points values are ever used.
 */

// ─────────────────────────────────────────────────────────────
// HARD LIMITS  (never adjustable from client)
// ─────────────────────────────────────────────────────────────
export const LIMITS = {
  // Score awarded per correctly-answered quiz question (max 1 pt each)
  QUIZ_SCORE_PER_CORRECT: 1,
  // Hard ceiling on score from a single quiz submission
  QUIZ_MAX_SCORE_PER_SUBMIT: 50,
  // Hard ceiling on score from a single exam submission
  EXAM_MAX_SCORE_PER_SUBMIT: 100,

  // Daily cumulative score cap per user
  DAILY_SCORE_CAP: 200,

  // Minimum seconds a user must spend on a quiz (server-verified)
  MIN_QUIZ_SECONDS: 30,
  // Minimum seconds for an exam (10 seconds × question count, applied at submit time)
  MIN_EXAM_SECONDS_PER_QUESTION: 5,

  // Velocity: max scored actions per hour before auto-flag
  MAX_SCORED_ACTIONS_PER_HOUR: 20,
  // Velocity: max quiz submits per 10-minute window before rate limiting
  QUIZ_SUBMITS_PER_10MIN: 5,
  // Velocity: max exam submits per 30-minute window
  EXAM_SUBMITS_PER_30MIN: 3,

  // Consecutive perfect scores before flagging suspicious
  PERFECT_SCORE_STREAK_THRESHOLD: 5,
};

// ─────────────────────────────────────────────────────────────
// SCORE COMPUTATION FUNCTIONS (server-side only)
// ─────────────────────────────────────────────────────────────

/**
 * Compute quiz score server-side from DB quiz data and submitted answers.
 * @param correctCount - how many questions the user answered correctly (computed in route)
 * @param totalQuestions - total questions in the quiz
 * @returns clamped score points to award
 */
export function computeQuizScore(correctCount: number, totalQuestions: number): number {
  if (totalQuestions <= 0 || correctCount < 0) return 0;
  const raw = Math.min(correctCount, totalQuestions) * LIMITS.QUIZ_SCORE_PER_CORRECT;
  return Math.min(raw, LIMITS.QUIZ_MAX_SCORE_PER_SUBMIT);
}

/**
 * Compute exam score server-side.
 * @param correctCount number of correct answers
 * @param marksPerCorrect marks per correct answer (from DB session, NOT client)
 * @returns clamped score
 */
export function computeExamScore(rawScore: number): number {
  if (rawScore < 0) return 0; // negative marking allowed but floor at 0 for DB purposes
  return Math.min(rawScore, LIMITS.EXAM_MAX_SCORE_PER_SUBMIT);
}

/**
 * Check whether the quiz was completed fast enough to be human-plausible.
 * Uses server-recorded session start (NOT client-supplied startTime).
 * @param sessionCreatedAt - timestamp from DB exam_sessions.created_at
 * @param now - current server time
 * @param totalQuestions - number of questions
 * @returns true if timing is acceptable
 */
export function timingIsValid(
  sessionCreatedAt: Date,
  now: Date,
  totalQuestions: number,
  isExam = false
): boolean {
  const elapsed = (now.getTime() - sessionCreatedAt.getTime()) / 1000;
  if (isExam) {
    const minSeconds = totalQuestions * LIMITS.MIN_EXAM_SECONDS_PER_QUESTION;
    return elapsed >= minSeconds;
  }
  return elapsed >= LIMITS.MIN_QUIZ_SECONDS;
}

/**
 * Compute the remaining daily score allowance for a user.
 * Resets at UTC midnight automatically.
 * @param accumulated - from users.daily_score_accumulated
 * @param dateOfAccumulation - from users.daily_score_date (null means never set)
 * @returns { remaining: number, isNewDay: boolean }
 */
export function getDailyScoreRemaining(
  accumulated: number | null,
  dateOfAccumulation: Date | null
): { remaining: number; isNewDay: boolean } {
  const todayUtc = new Date();
  todayUtc.setUTCHours(0, 0, 0, 0);

  if (
    !dateOfAccumulation ||
    new Date(dateOfAccumulation).setUTCHours(0, 0, 0, 0) < todayUtc.getTime()
  ) {
    // New day — full cap available
    return { remaining: LIMITS.DAILY_SCORE_CAP, isNewDay: true };
  }

  const used = accumulated ?? 0;
  return { remaining: Math.max(0, LIMITS.DAILY_SCORE_CAP - used), isNewDay: false };
}
