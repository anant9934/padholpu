import { Router } from "express";
import { db } from "../db";
import { 
  examSessions, 
  examQuestions, 
  type QuestionBank 
} from "../../shared/schema";
import { storage } from "../storage";
import { api } from "../../shared/routes";
import { 
  examSubmitLimiter,
} from "../middleware/action-limiters";
import { botProtection } from "../middleware/bot-protection";
import { strictAuthLimiter } from "../middleware/action-limiters";
import { getGenerationLimitStatus } from "../middleware/usage";
import { enforceTimingConstraint } from "../engine/constraints";
import { 
  recordActionAndDetect, 
  detectIpCluster,
  shadowBanGate
} from "../middleware/anti-automation";
import { rewardQuizCompletion, rewardDailyActivity } from "../engine/rewards";
import { examGenerationLimiter } from "../middleware/action-limiters";
import { monitorUserBehavior } from "../engine/monitoring";

const router = Router();

// --- Sanitization Utilities ---
const sanitizeSession = (session: any) => {
  if (!session) return session;
  return {
    ...session,
    subjectName: session.subject, // Compatibility alias for old clients
    score: session.score?.toString() || "0",
    marksPerCorrect: session.marksPerCorrect?.toString() || "1",
    marksPerWrong: session.marksPerWrong?.toString() || "0"
  };
};

// GET /api/exams/subjects
router.get("/subjects", async (req, res) => {
  try {
    const subjects = await storage.getSubjects();
    console.log(`[Exams] Fetched ${subjects.length} subjects for user ${req.user?.id || 'anonymous'}`);
    res.json(subjects);
  } catch (error: any) {
    console.error("[Exams] Failed to fetch subjects. Error:", error.message || error);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
});

// GET /api/exams/units/:subjectId
router.get("/units/:subjectId", async (req, res) => {
  try {
    const units = await storage.getUnits(Number(req.params.subjectId));
    res.json(units);
  } catch (error) {
    console.error("[Exams] Failed to fetch units:", error);
    res.status(500).json({ message: "Failed to fetch units" });
  }
});

// GET /api/exams/topics/:unitId
router.get("/topics/:unitId", async (req, res) => {
  try {
    const topics = await storage.getTopics(Number(req.params.unitId));
    res.json(topics);
  } catch (error) {
    console.error("[Exams] Failed to fetch topics:", error);
    res.status(500).json({ message: "Failed to fetch topics" });
  }
});

// GET /api/exams/limit-status
router.get("/limit-status", async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  try {
    const status = await getGenerationLimitStatus(req.user.id, "standard");
    res.json(status);
  } catch (error) {
    console.error("[Exams] Failed to fetch limit status:", error);
    res.status(500).json({ message: "Failed to fetch limit status" });
  }
});

/**
 * POST /api/exams/generate
 * Generates a custom syllabus/dynamic quiz session.
 * Enforces monthly limits for free users.
 */
router.post("/generate", strictAuthLimiter, examGenerationLimiter, botProtection, async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  
  const validated = api.exams.generate.input.safeParse(req.body);
  if (!validated.success) return res.status(400).json({ message: "Invalid input", errors: validated.error.errors });

  const { 
    subjectId, unitIds, topicIds, difficulty, 
    questionCount, durationMinutes, negativeMarking, 
    marksPerCorrect, marksPerWrong 
  } = validated.data;
  
  try {
    // 0b. NEW WEEKLY LIMITS (2 free standard exams per rolling 7 days)
    console.log(`[Exams] Checking limits for user ${req.user!.id} (type: standard)`);
    const weeklyStatus = await getGenerationLimitStatus(req.user!.id, "standard");
    console.log(`[Exams] Limit status: ${JSON.stringify(weeklyStatus)}`);
    const cost = weeklyStatus.cost;
    // 1. Fetch Question Pool (NOW USING EFFICIENT DATABASE FILTERING)
    console.log(`[Exams] Fetching pool for subject ${subjectId}`);
    const selectedQuestions = await storage.getQuestions({
      subjectId,
      unitIds,
      topicIds,
      difficulty,
      limit: questionCount * 2 // Fetch extra for shuffling
    });

    if (selectedQuestions.length < questionCount) {
      console.warn(`[Exams] Not enough questions. Found ${selectedQuestions.length}, requested ${questionCount}`);
      return res.status(400).json({ message: "Not enough questions available for the selected criteria." });
    }

    const shuffledQuestions = [...selectedQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);

    if (selectedQuestions.length === 0) {
      return res.status(400).json({ message: "Not enough questions available for this subject." });
    }

    // Pre-fetch subjects before transaction
    const subNameList = await storage.getSubjects();
    const subName = subNameList.find((s: any) => s.id === subjectId)?.name || "Unknown";

    // 2. ATOMIC CREATION + USAGE INCREMENT
    const session = await db.transaction(async (tx: any) => {
      // Create Session
      const [newSession] = await tx.insert(examSessions).values({
        userId: req.user!.id,
        subject: subName,
        difficulty,
        totalQuestions: shuffledQuestions.length,
        durationMinutes,
        negativeMarking,
        marksPerCorrect: marksPerCorrect.toString(),
        marksPerWrong: marksPerWrong.toString(),
        status: "ongoing",
        score: "0",
        percentage: 0,
        correctCount: 0,
        wrongCount: 0
      }).returning();

      // Add Questions with orderIndex
      const questionLinks = shuffledQuestions.map((q, idx) => ({
        sessionId: newSession.id,
        questionId: q.id,
        orderIndex: idx
      }));
      await tx.insert(examQuestions).values(questionLinks);

      // Mock exams are 100% free and open for student preparation

      return newSession;
    });

    // Telemetry: EXAM_STARTED
    storage.logStudentActivity({
      userId: req.user!.id,
      eventType: "EXAM_STARTED",
      courseId: subjectId,
      unitId: unitIds && unitIds.length > 0 ? Number(unitIds[0]) : undefined,
      referenceId: String(session.id),
      metadata: { totalQuestions: session.totalQuestions, subject: session.subject },
    }).catch(() => {});

    res.status(201).json(sanitizeSession(session));

  } catch (error: any) {
    console.error("[Exams] Generation failed with detailed error:", {
      message: error.message,
      stack: error.stack,
      user: req.user?.id,
      body: req.body
    });

    // Handle specific user-rectifiable errors
    if (error.message.includes("Insufficient Gold") || error.message.includes("weekly exams")) {
      return res.status(403).json({ 
        message: error.message 
      });
    }

    res.status(500).json({ 
      message: "Failed to generate quiz.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

/**
 * GET /api/exams/session/:id
 * Fetches an ongoing exam session with its questions (sanitized).
 */
router.get("/session/:id", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const sessionId = Number(req.params.id);
  if (!Number.isInteger(sessionId) || sessionId <= 0) return res.status(400).json({ message: "Invalid session ID" });
  
  try {
    const session = await storage.getExamSession(sessionId);
    if (!session || session.userId !== req.user!.id) return res.status(404).json({ message: "Session not found" });

    const questions = await storage.getExamQuestions(session.id);
    const sanitizedQuestions = questions.map(({ correctOption, ...rest }) => rest);

    res.json({ session: sanitizeSession(session), questions: sanitizedQuestions });
  } catch (err) {
    res.status(500).json({ message: "Error fetching session" });
  }
});

/**
 * POST /api/exams/submit
 * Handles exam submission and final scoring with detailed attempt tracking.
 */
router.post("/submit", examSubmitLimiter, shadowBanGate, async (req, res) => {
  if (!req.isAuthenticated()) {
    console.warn(`[Exams] UNAUTHORIZED SUBMISSION ATTEMPT from IP: ${req.ip}. Likely stale frontend cache.`);
    return res.status(401).json({ message: "Session expired. Please click 'Update App' or refresh the page." });
  }
  
  const validated = api.exams.submit.input.safeParse(req.body);
  if (!validated.success) return res.status(400).json({ message: "Invalid input", errors: validated.error.errors });

  const { sessionId, answers: userAnswers, timeTakenSeconds } = validated.data;
  const ip = req.ip ?? "unknown";

  try {
    const session = await storage.getExamSession(sessionId);
    if (!session || session.userId !== req.user!.id) return res.status(404).json({ message: "Session not found" });
    if (session.status === "completed") return res.status(400).json({ message: "Exam already submitted" });

    // Timing Constraint engine
    const timingCheck = enforceTimingConstraint(
      session.createdAt || new Date(), 
      new Date(),
      session.totalQuestions,
      true
    );
    if (!timingCheck.valid) {
      return res.status(400).json({ message: timingCheck.reason });
    }

    const questions = await storage.getExamQuestions(sessionId);
    const marksPerCorrect = parseFloat(session.marksPerCorrect || "1");
    const marksPerWrong = parseFloat(session.marksPerWrong || "0");

    let correct = 0;
    let wrong = 0;
    let totalScore = 0;

    const detailedAttempts: any[] = [];
    const answerMap = new Map(userAnswers.map(a => [a.questionId, a.selectedOption]));

    questions.forEach(q => {
      const selected = answerMap.get(q.id);
      let isCorrect = false;
      let awarded = 0;

      if (selected !== undefined && selected !== null && selected !== "") {
        if (selected === q.correctOption) {
          correct++;
          awarded = marksPerCorrect;
          totalScore += marksPerCorrect;
          isCorrect = true;
        } else {
          wrong++;
          awarded = -marksPerWrong;
          totalScore -= marksPerWrong;
          isCorrect = false;
        }
      }

      detailedAttempts.push({
        sessionId,
        questionId: q.id,
        selectedOption: selected || null,
        isCorrect,
        marksAwarded: awarded.toString()
      });
    });

    const finalScore = Math.max(0, totalScore).toFixed(2);
    const percentage = Math.round((correct / session.totalQuestions) * 100);

    // Save detailed results for future reviews
    await storage.bulkSubmitExamAttemptsDetailed(detailedAttempts);

    const updated = await storage.updateExamSession(sessionId, {
      status: "completed",
      score: finalScore,
      percentage,
      correctCount: correct,
      wrongCount: wrong,
      timeTakenSeconds
    });

    // Telemetry: EXAM_COMPLETED
    storage.logStudentActivity({
      userId: req.user!.id,
      eventType: "EXAM_COMPLETED",
      referenceId: String(sessionId),
      metadata: { subject: session.subject, score: finalScore, percentage, correctCount: correct, totalQuestions: session.totalQuestions },
    }).catch(() => {});

    // Reward engine & Monitoring
    Promise.all([
      recordActionAndDetect(req.user!.id, percentage, ip),
      detectIpCluster(ip, req.user!.id),
      rewardQuizCompletion(req.user!.id, sessionId),
      rewardDailyActivity(req.user!.id),
      monitorUserBehavior(req.user!.id)
    ]).catch(err => console.error("[Exams] Background task failed:", err));

    res.json(sanitizeSession(updated));
  } catch (err) {
    console.error("[Exams] Submission failed:", err);
    res.status(500).json({ message: "Internal server error during submission" });
  }
});

/**
 * GET /api/exams/attempt/:id
 * Fetches detailed results for a completed exam session.
 */
router.get("/attempt/:id", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const sessionId = Number(req.params.id);
  if (!Number.isInteger(sessionId) || sessionId <= 0) return res.status(400).json({ message: "Invalid attempt ID" });
  
  try {
    const session = await storage.getExamSession(sessionId);
    
    if (!session || (session.userId !== req.user!.id && !req.user!.isAdmin)) {
      return res.status(404).json({ message: "Exam session not found" });
    }

    const questions = await storage.getExamQuestions(sessionId);
    const detailedAnswers = await storage.getExamAttemptsDetailed(sessionId);

    res.json({
      attempt: {
        ...sanitizeSession(session),
        answers: detailedAnswers
      },
      questions,
      session: sanitizeSession(session)
    });
  } catch (err) {
    console.error("[Exams] Failed to fetch detailed attempt:", err);
    res.status(500).json({ message: "Error fetching exam results" });
  }
});

export default router;
