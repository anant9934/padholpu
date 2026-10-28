import { Router } from "express";
import { db } from "../db";
import { quizzes, users } from "../../shared/schema";
import { eq, and, sql } from "drizzle-orm";
import { storage } from "../storage";
import { 
  quizSubmitLimiter, 
} from "../middleware/action-limiters";
import { botProtection } from "../middleware/bot-protection";
import { strictAuthLimiter } from "../middleware/action-limiters";
import { 
  shadowBanGate, 
  recordActionAndDetect, 
  detectIpCluster 
} from "../middleware/anti-automation";
import { computeQuizScore, LIMITS } from "../engine/scoring";
import { rewardQuizCompletion, rewardDailyActivity } from "../engine/rewards";
import { monitorUserBehavior } from "../engine/monitoring";

const router = Router();

/**
 * GET /api/quizzes
 * Fetches the list of quizzes, optionally filtered by subject.
 */
router.get("/", async (req, res) => {
  const subject = req.query.subject as string | undefined;
  const list = await storage.getQuizzes(subject);
  // All quizzes are 100% free and open to all students
  res.json(list.map(q => ({ ...q, isUnlocked: true })));
});

/**
 * GET /api/quizzes/history
 * Fetches the logged-in user's quiz attempt history.
 */
router.get("/history", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const history = await storage.getUserQuizHistory(req.user!.id);
  res.json(history);
});

/**
 * GET /api/quizzes/stats
 * Fetches the logged-in user's quiz-related statistics.
 */
router.get("/stats", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ totalAttempts: 0, averageScore: 0, timeStudiedHours: 0 });
  }
  try {
    const stats = await storage.getUserQuizStats(req.user!.id);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch stats" });
  }
});

/**
 * GET /api/quizzes/:id/summary
 * Public, safe preview metadata for search crawlers & landing pages.
 * ZERO answers or sensitive question payloads are returned; answer secrecy preserved.
 */
router.get("/:id/summary", async (req, res) => {
  const quizId = Number(req.params.id);
  if (isNaN(quizId)) return res.status(400).json({ error: "Invalid quiz ID" });

  try {
    const quiz = await storage.getQuiz(quizId);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });

    const rawQuestions = Array.isArray(quiz.questions) ? (quiz.questions as any[]) : [];
    const questionCount = rawQuestions.length;
    const estimatedTimeMinutes = Math.max(5, Math.round(questionCount * 1.5));

    // Get related quizzes in the same subject
    const related = await db
      .select({
        id: quizzes.id,
        title: quizzes.title,
        subject: quizzes.subject,
        difficulty: quizzes.difficulty,
        questionCount: sql<number>`COALESCE(jsonb_array_length(${quizzes.questions}), 0)::int`,
        isPremium: sql<boolean>`false`,
      })
      .from(quizzes)
      .where(and(eq(quizzes.subject, quiz.subject), sql`${quizzes.id} != ${quizId}`))
      .limit(4);

    res.json({
      id: quiz.id,
      title: quiz.title,
      subject: quiz.subject,
      difficulty: quiz.difficulty,
      questionCount,
      estimatedTimeMinutes,
      isPremium: false,
      priceGold: 0,
      createdAt: quiz.createdAt,
      related,
    });
  } catch (err: any) {
    res.status(500).json({ error: "Failed to fetch quiz summary" });
  }
});

/**
 * GET /api/quizzes/:id
 * Fetches a single quiz by ID. Enforces premium unlock checks.
 */
router.get("/:id", async (req, res) => {
  const quizId = Number(req.params.id);
  if (!Number.isInteger(quizId) || quizId <= 0) return res.status(400).json({ error: "Invalid quiz ID" });
  const quiz = await storage.getQuiz(quizId);
  if (!quiz) return res.sendStatus(404);

  // Telemetry: PRACTICE_STARTED
  if (req.isAuthenticated()) {
    storage.logStudentActivity({
      userId: req.user!.id,
      eventType: "PRACTICE_STARTED",
      referenceId: String(quiz.id),
      metadata: { quizTitle: quiz.title, subject: quiz.subject, difficulty: quiz.difficulty },
    }).catch(() => {});
  }

  // Check if answers are authorized for review (user is admin or has a completed attempt)
  const wantsAnswers = req.query.includeAnswers === "true";
  let authorizedForAnswers = false;
  if (wantsAnswers && req.isAuthenticated()) {
    if (req.user!.isAdmin) {
      authorizedForAnswers = true;
    } else {
      const history = await storage.getUserQuizHistory(req.user!.id);
      authorizedForAnswers = history.some(a => a.quizId === quizId);
    }
  }

  const rawQuestions = (quiz.questions as any[]) ?? [];
  const sanitizedQuestions = authorizedForAnswers
    ? rawQuestions
    : rawQuestions.map(({ correctAnswer, explanation, formula, ...rest }) => rest);

  res.json({
    ...quiz,
    questions: sanitizedQuestions,
  });
});

/**
 * POST /api/quizzes/:id/submit
 * Submits answers for a quiz attempt. Enforces unlock checks and server-side scoring.
 */
router.post("/:id/submit", strictAuthLimiter, quizSubmitLimiter, shadowBanGate, botProtection, async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);

  const quizId = Number(req.params.id);
  if (!Number.isInteger(quizId) || quizId <= 0) return res.status(400).json({ message: "Invalid quiz ID" });
  const userId = req.user!.id;
  const ip = req.ip ?? "unknown";

  try {
    const quiz = await storage.getQuiz(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    // 1. FREE ACCESS (All quizzes are 100% open)

    // 2. SERVER-SIDE SCORING
    const dbQuestions = quiz.questions as Array<{ question: string; options: string[]; correctAnswer: number }>;
    const totalQuestions = dbQuestions.length;
    const submittedAnswers: Record<number, number> = req.body.answers ?? {};
    
    let correctCount = 0;
    for (let i = 0; i < dbQuestions.length; i++) {
      const userAns = submittedAnswers[i];
      if (userAns !== undefined && userAns !== null && Number(userAns) === dbQuestions[i].correctAnswer) {
        correctCount++;
      }
    }

    const score = computeQuizScore(correctCount, totalQuestions);
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // 3. PERSIST ATTEMPT
    const timeTakenSeconds = req.body.timeTakenSeconds ? Number(req.body.timeTakenSeconds) : 0;
    const attempt = await storage.createQuizAttempt({
      quizId,
      userId,
      score: correctCount,
      totalQuestions,
      percentage,
      answers: submittedAnswers,
      timeTakenSeconds,
    });

    // 4. AWARDS & ACADEMIC AUDIT
    await storage.recordMarks(userId, quiz.subject, score, ip, "QUIZ_SUBMIT", { quizId });

    // Telemetry: PRACTICE_COMPLETED
    storage.logStudentActivity({
      userId,
      eventType: "PRACTICE_COMPLETED",
      referenceId: String(quizId),
      metadata: { score: correctCount, totalQuestions, percentage, quizTitle: quiz.title, subject: quiz.subject },
    }).catch(() => {});

    // NON-BLOCKING ANOMALY DETECTION
    recordActionAndDetect(userId, percentage, ip).catch(() => {});
    detectIpCluster(ip, userId).catch(() => {});
    monitorUserBehavior(userId).catch(() => {});

    res.status(201).json({ 
      ...attempt, 
      earnedScore: score, 
      questions: dbQuestions 
    });

  } catch (error) {
    console.error("[Quizzes] Submit failure:", error);
    res.status(500).json({ message: "Internal server error during submission." });
  }
});

/**
 * POST /api/quizzes/unlock
 */
router.post("/unlock", async (_req, res) => {
  return res.json({ success: true, message: "All quizzes are 100% free and open on Padho LPU." });
});

export default router;
