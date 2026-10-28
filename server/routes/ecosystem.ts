import { Router, type Request, type Response } from "express";
import { z } from "zod";
import {
  getDecksForSubject,
  getCardsForDeck,
  recordFlashcardReview,
  getSubjectiveQuestions,
  saveSubjectiveAnswer,
  submitStudentNotes,
  getStudentSubmissions,
  updateStudentSubmission,
  withdrawStudentSubmission,
  getModerationQueue,
  moderateNoteSubmission,
  generateStudyPlan,
  getUserStudyPlans,
  toggleStudyPlanTask,
  deleteStudyPlan,
  getPersonalNotes,
  createPersonalNote,
  updatePersonalNote,
  deletePersonalNote,
  getUserBookmarks,
  getUserBookmarkStatus,
  toggleBookmark,
  getStudyGroups,
  createStudyGroup,
  joinStudyGroup,
  leaveStudyGroup,
  getGroupPosts,
  createGroupPost,
  voteResourceHelpful,
  getResourceHelpfulCount,
  reportContentIssue,
  getConceptExplanation,
} from "../services/academic-ecosystem";
import { db } from "../db";
import { flashcardDecks, flashcards, subjectiveQuestions, noteSubmissions } from "../../shared/schema";
import { eq, sql } from "drizzle-orm";
import { ecosystemPostLimiter, aiTutorLimiter } from "../middleware/action-limiters";

const router = Router();

// Middleware: Require Authenticated User
function requireAuth(req: Request, res: Response, next: () => void) {
  if (!req.isAuthenticated || !req.isAuthenticated() || !req.user) {
    return res.status(401).json({ code: "UNAUTHORIZED", message: "Authentication required to access academic ecosystem features." });
  }
  next();
}

// Middleware: Require Admin / Moderator
function requireAdmin(req: Request, res: Response, next: () => void) {
  if (!req.isAuthenticated || !req.isAuthenticated() || !req.user) {
    return res.status(401).json({ code: "UNAUTHORIZED", message: "Authentication required." });
  }
  const roles = (req.user as any).roles || [];
  if (!roles.includes("ADMIN") && !roles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ code: "FORBIDDEN", message: "Administrative privilege required." });
  }
  next();
}

// ============================================================================
// 1. FLASHCARDS & SM-2 SPACED REPETITION
// ============================================================================

/**
 * GET /api/ecosystem/flashcards/decks
 * Query: subjectId, unitId
 */
router.get("/flashcards/decks", async (req: Request, res: Response) => {
  try {
    const subjectId = req.query.subjectId ? Number(req.query.subjectId) : undefined;
    const unitId = req.query.unitId ? Number(req.query.unitId) : undefined;
    const userId = req.user ? (req.user as any).id : undefined;

    const decks = await getDecksForSubject(subjectId, unitId, userId);
    res.json(decks);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching flashcard decks:", error);
    res.status(500).json({ message: "Failed to load flashcard decks." });
  }
});

/**
 * GET /api/ecosystem/flashcards/decks/:id/cards
 * Returns all cards for a deck with personal review stats if logged in
 */
router.get("/flashcards/decks/:id/cards", async (req: Request, res: Response) => {
  try {
    const deckId = Number(req.params.id);
    if (!deckId || isNaN(deckId)) {
      return res.status(400).json({ message: "Invalid deck ID." });
    }
    const userId = req.user ? (req.user as any).id : undefined;
    const cards = await getCardsForDeck(deckId, userId);
    res.json(cards);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching deck cards:", error);
    const status = error.message.includes("Forbidden") ? 403 : error.message.includes("not found") ? 404 : 500;
    res.status(status).json({ message: error.message || "Failed to load flashcards." });
  }
});

/**
 * POST /api/ecosystem/flashcards/decks
 * Create a new flashcard deck
 */
router.post("/flashcards/decks", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      title: z.string().min(2, "Title must be at least 2 characters"),
      description: z.string().optional(),
      subjectId: z.number().optional().nullable(),
      unitId: z.number().optional().nullable(),
      isPublic: z.boolean().default(true),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;

    const [deck] = await db
      .insert(flashcardDecks)
      .values({
        title: body.title,
        description: body.description || null,
        subjectId: body.subjectId || null,
        unitId: body.unitId || null,
        createdBy: userId,
        isPublic: body.isPublic,
      })
      .returning();

    res.status(201).json(deck);
  } catch (error: any) {
    console.error("[Ecosystem] Error creating flashcard deck:", error);
    res.status(400).json({ message: error.message || "Failed to create deck." });
  }
});

/**
 * POST /api/ecosystem/flashcards/cards
 * Add a card to a deck (caller must be creator or admin)
 */
router.post("/flashcards/cards", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      deckId: z.number(),
      front: z.string().min(1, "Front text is required"),
      back: z.string().min(1, "Back text is required"),
      hint: z.string().optional().nullable(),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;
    const userRoles = (req.user as any).roles || [];
    const isAdmin = userRoles.includes("ADMIN") || userRoles.includes("SUPER_ADMIN");

    // Verify deck ownership
    const [deck] = await db.select().from(flashcardDecks).where(eq(flashcardDecks.id, body.deckId));
    if (!deck) {
      return res.status(404).json({ message: "Deck not found." });
    }
    if (deck.createdBy !== userId && !isAdmin) {
      return res.status(403).json({ message: "Forbidden: You do not have permission to add cards to this deck." });
    }

    const [card] = await db
      .insert(flashcards)
      .values({
        deckId: body.deckId,
        front: body.front,
        back: body.back,
        hint: body.hint || null,
      })
      .returning();

    // Increment deck cardCount
    await db
      .update(flashcardDecks)
      .set({ cardCount: sql`${flashcardDecks.cardCount} + 1` })
      .where(eq(flashcardDecks.id, body.deckId));

    res.status(201).json(card);
  } catch (error: any) {
    console.error("[Ecosystem] Error adding flashcard:", error);
    res.status(400).json({ message: error.message || "Failed to add flashcard." });
  }
});

/**
 * POST /api/ecosystem/flashcards/cards/:id/review
 * Record SM-2 Spaced Repetition review (quality 0-5)
 */
router.post("/flashcards/cards/:id/review", requireAuth, async (req: Request, res: Response) => {
  try {
    const cardId = Number(req.params.id);
    const quality = Number(req.body.quality);

    if (isNaN(quality) || quality < 0 || quality > 5) {
      return res.status(400).json({ message: "Quality rating must be an integer between 0 and 5." });
    }

    const userId = (req.user as any).id;
    const reviewResult = await recordFlashcardReview(userId, cardId, quality);
    res.json(reviewResult);
  } catch (error: any) {
    console.error("[Ecosystem] Error recording review:", error);
    const status = error.message.includes("not found") ? 404 : error.message.includes("Forbidden") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to record review." });
  }
});

// ============================================================================
// 2. SUBJECTIVE QUESTION BANK & SELF-EVALUATION
// ============================================================================

/**
 * GET /api/ecosystem/subjective
 * Query: subjectId, unitId, difficulty
 * Populates student's previously saved draft answer when authenticated!
 */
router.get("/subjective", async (req: Request, res: Response) => {
  try {
    const subjectId = req.query.subjectId ? Number(req.query.subjectId) : undefined;
    const unitId = req.query.unitId ? Number(req.query.unitId) : undefined;
    const difficulty = req.query.difficulty as string | undefined;
    const userId = req.user ? (req.user as any).id : undefined;

    const questions = await getSubjectiveQuestions({ subjectId, unitId, difficulty }, userId);
    res.json(questions);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching subjective questions:", error);
    res.status(500).json({ message: "Failed to load subjective questions." });
  }
});

/**
 * POST /api/ecosystem/subjective
 * Add subjective question (Admin or faculty)
 */
router.post("/subjective", requireAdmin, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      subjectId: z.number().optional().nullable(),
      unitId: z.number().optional().nullable(),
      questionText: z.string().min(5, "Question text required"),
      marks: z.number().min(1).default(5),
      difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
      modelAnswer: z.string().min(10, "Model answer required"),
      keyOutlinePoints: z.array(z.string()).default([]),
      markingScheme: z.string().optional().nullable(),
    });

    const body = schema.parse(req.body);

    const [newQuestion] = await db
      .insert(subjectiveQuestions)
      .values({
        subjectId: body.subjectId || null,
        unitId: body.unitId || null,
        questionText: body.questionText,
        marks: body.marks,
        difficulty: body.difficulty,
        modelAnswer: body.modelAnswer,
        keyOutlinePoints: body.keyOutlinePoints,
        markingScheme: body.markingScheme || null,
      })
      .returning();

    res.status(201).json(newQuestion);
  } catch (error: any) {
    console.error("[Ecosystem] Error adding subjective question:", error);
    res.status(400).json({ message: error.message || "Failed to add subjective question." });
  }
});

/**
 * POST /api/ecosystem/subjective/:id/answer
 * Save student subjective answer draft or submission, returning model comparison
 */
router.post("/subjective/:id/answer", requireAuth, async (req: Request, res: Response) => {
  try {
    const questionId = Number(req.params.id);
    const userId = (req.user as any).id;
    const { answerText, selfRating } = req.body;

    if (!answerText || typeof answerText !== "string") {
      return res.status(400).json({ message: "Answer text is required." });
    }

    const result = await saveSubjectiveAnswer(
      userId,
      questionId,
      answerText,
      selfRating !== undefined ? Number(selfRating) : undefined
    );

    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error saving subjective answer:", error);
    const status = error.message.includes("not found") ? 404 : 500;
    res.status(status).json({ message: error.message || "Failed to save answer." });
  }
});

// ============================================================================
// 3. STUDENT NOTES SUBMISSION & MODERATION PIPELINE
// ============================================================================

/**
 * GET /api/ecosystem/submissions/mine
 * Fetch authenticated student's submissions and moderation feedback
 */
router.get("/submissions/mine", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;
    const submissions = await getStudentSubmissions(userId);
    res.json(submissions);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching student submissions:", error);
    res.status(500).json({ message: "Failed to load your submissions." });
  }
});

/**
 * POST /api/ecosystem/submissions
 * Submit notes for moderation
 */
router.post("/submissions", requireAuth, ecosystemPostLimiter, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      title: z.string().min(3, "Title must be at least 3 characters"),
      subjectId: z.number(),
      unitNumber: z.number().default(1),
      description: z.string().optional().nullable(),
      content: z.string().optional().nullable(),
      attachmentUrl: z.string().optional().nullable(),
      attachmentName: z.string().optional().nullable(),
      attachmentSize: z.number().optional().nullable(),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;

    const submission = await submitStudentNotes({
      studentId: userId,
      subjectId: body.subjectId,
      unitNumber: body.unitNumber,
      title: body.title,
      description: body.description || null,
      content: body.content || null,
      attachmentUrl: body.attachmentUrl || null,
      attachmentName: body.attachmentName || null,
      attachmentSize: body.attachmentSize || null,
      status: "pending",
    });

    res.status(201).json(submission);
  } catch (error: any) {
    console.error("[Ecosystem] Error submitting student notes:", error);
    res.status(400).json({ message: error.message || "Failed to submit notes." });
  }
});

/**
 * PATCH /api/ecosystem/submissions/:id
 * Student updates & resubmits their submission (e.g. after changes requested)
 */
router.patch("/submissions/:id", requireAuth, ecosystemPostLimiter, async (req: Request, res: Response) => {
  try {
    const submissionId = Number(req.params.id);
    const userId = (req.user as any).id;

    const schema = z.object({
      title: z.string().min(3).optional(),
      description: z.string().optional().nullable(),
      content: z.string().optional().nullable(),
      attachmentUrl: z.string().optional().nullable(),
      attachmentName: z.string().optional().nullable(),
      attachmentSize: z.number().optional().nullable(),
    });

    const body = schema.parse(req.body);
    const updated = await updateStudentSubmission(submissionId, userId, body);
    res.json(updated);
  } catch (error: any) {
    console.error("[Ecosystem] Error updating submission:", error);
    const status = error.message.includes("Forbidden") ? 403 : error.message.includes("not found") ? 404 : 400;
    res.status(status).json({ message: error.message || "Failed to update submission." });
  }
});

/**
 * DELETE /api/ecosystem/submissions/:id
 * Student withdraws their submission
 */
router.delete("/submissions/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const submissionId = Number(req.params.id);
    const userId = (req.user as any).id;

    await withdrawStudentSubmission(submissionId, userId);
    res.json({ success: true, message: "Submission withdrawn." });
  } catch (error: any) {
    console.error("[Ecosystem] Error withdrawing submission:", error);
    const status = error.message.includes("Forbidden") ? 403 : error.message.includes("not found") ? 404 : 400;
    res.status(status).json({ message: error.message || "Failed to withdraw submission." });
  }
});

/**
 * GET /api/ecosystem/admin/moderation/queue
 * Get moderation queue (Admin only)
 */
router.get("/admin/moderation/queue", requireAdmin, async (req: Request, res: Response) => {
  try {
    const status = (req.query.status as string) || "pending";
    const queue = await getModerationQueue(status);
    res.json(queue);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching moderation queue:", error);
    res.status(500).json({ message: "Failed to load moderation queue." });
  }
});

/**
 * POST /api/ecosystem/admin/moderation/:id/review
 * Moderate submission (Approve / Reject / Request changes with notes)
 * Prevents self-approval!
 */
router.post("/admin/moderation/:id/review", requireAdmin, async (req: Request, res: Response) => {
  try {
    const submissionId = Number(req.params.id);
    const moderatorId = (req.user as any).id;
    const schema = z.object({
      decision: z.enum(["approved", "changes_requested", "rejected"]),
      feedback: z.string().optional(),
    });

    const { decision, feedback } = schema.parse(req.body);

    const result = await moderateNoteSubmission(submissionId, moderatorId, decision, feedback);
    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error reviewing submission:", error);
    const status = error.message.includes("Self-approval is strictly prohibited") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to moderate submission." });
  }
});

// ============================================================================
// 4. EXAM PREPARATION & STUDY PLANNER
// ============================================================================

/**
 * GET /api/ecosystem/study-plans
 * Get study plans and tasks for the user
 */
router.get("/study-plans", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;
    const plans = await getUserStudyPlans(userId);
    res.json(plans);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching study plans:", error);
    res.status(500).json({ message: "Failed to load study plans." });
  }
});

/**
 * POST /api/ecosystem/study-plans
 * Generate study plan with daily dynamic tasks
 */
router.post("/study-plans", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      title: z.string().min(3),
      targetExamDate: z.string().or(z.date()),
      selectedSubjectCodes: z.array(z.string()).min(1, "Select at least one subject"),
      dailyStudyHours: z.number().min(0.5).max(16).default(2.0),
      examType: z.string().default("END_TERM"),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;

    const plan = await generateStudyPlan(
      userId,
      body.title,
      new Date(body.targetExamDate),
      body.selectedSubjectCodes,
      body.dailyStudyHours,
      body.examType
    );

    res.status(201).json(plan);
  } catch (error: any) {
    console.error("[Ecosystem] Error generating study plan:", error);
    res.status(400).json({ message: error.message || "Failed to generate study plan." });
  }
});

/**
 * PATCH /api/ecosystem/study-plans/tasks/:id/toggle
 * Toggle task completion (enforces task ownership)
 */
router.patch("/study-plans/tasks/:id/toggle", requireAuth, async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);
    const userId = (req.user as any).id;
    const { isCompleted } = req.body;

    const updated = await toggleStudyPlanTask(taskId, userId, Boolean(isCompleted));
    res.json(updated);
  } catch (error: any) {
    console.error("[Ecosystem] Error toggling study plan task:", error);
    const status = error.message.includes("access denied") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to update task." });
  }
});

/**
 * DELETE /api/ecosystem/study-plans/:id
 * Delete a study plan
 */
router.delete("/study-plans/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const planId = Number(req.params.id);
    const userId = (req.user as any).id;

    await deleteStudyPlan(planId, userId);
    res.json({ success: true, message: "Study plan deleted." });
  } catch (error: any) {
    console.error("[Ecosystem] Error deleting study plan:", error);
    const status = error.message.includes("access denied") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to delete plan." });
  }
});

// ============================================================================
// 5. PERSONAL KNOWLEDGE WORKSPACE & BOOKMARKS
// ============================================================================

/**
 * GET /api/ecosystem/workspace/notes
 */
router.get("/workspace/notes", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;
    const notes = await getPersonalNotes(userId);
    res.json(notes);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching personal notes:", error);
    res.status(500).json({ message: "Failed to load personal notes." });
  }
});

/**
 * POST /api/ecosystem/workspace/notes
 */
router.post("/workspace/notes", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      title: z.string().min(1, "Title is required"),
      body: z.string().default(""),
      tags: z.array(z.string()).default([]),
      subjectId: z.number().optional().nullable(),
    });

    const parsed = schema.parse(req.body);
    const userId = (req.user as any).id;

    const note = await createPersonalNote(
      userId,
      parsed.title,
      parsed.body,
      parsed.subjectId || undefined,
      parsed.tags
    );

    res.status(201).json(note);
  } catch (error: any) {
    console.error("[Ecosystem] Error creating personal note:", error);
    res.status(400).json({ message: error.message || "Failed to create note." });
  }
});

/**
 * PATCH /api/ecosystem/workspace/notes/:id
 * Update a personal note
 */
router.patch("/workspace/notes/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const noteId = Number(req.params.id);
    const userId = (req.user as any).id;

    const schema = z.object({
      title: z.string().min(1),
      body: z.string().default(""),
      tags: z.array(z.string()).optional(),
      isFavorite: z.boolean().optional(),
    });

    const parsed = schema.parse(req.body);
    const updated = await updatePersonalNote(
      userId,
      noteId,
      parsed.title,
      parsed.body,
      parsed.tags,
      parsed.isFavorite
    );

    res.json(updated);
  } catch (error: any) {
    console.error("[Ecosystem] Error updating personal note:", error);
    const status = error.message.includes("access denied") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to update note." });
  }
});

/**
 * DELETE /api/ecosystem/workspace/notes/:id
 */
router.delete("/workspace/notes/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const noteId = Number(req.params.id);
    const userId = (req.user as any).id;

    await deletePersonalNote(userId, noteId);
    res.json({ success: true, message: "Personal note deleted." });
  } catch (error: any) {
    console.error("[Ecosystem] Error deleting personal note:", error);
    const status = error.message.includes("access denied") ? 403 : 500;
    res.status(status).json({ message: error.message || "Failed to delete note." });
  }
});

/**
 * GET /api/ecosystem/bookmarks
 */
router.get("/bookmarks", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;
    const itemType = req.query.itemType as string | undefined;

    const allBookmarks = await getUserBookmarks(userId);
    const filtered = itemType
      ? allBookmarks.filter((b: any) => b.itemType === itemType)
      : allBookmarks;

    res.json(filtered);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching bookmarks:", error);
    res.status(500).json({ message: "Failed to load bookmarks." });
  }
});

/**
 * GET /api/ecosystem/bookmarks/status
 * Check if an item is bookmarked
 */
router.get("/bookmarks/status", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;
    const itemType = String(req.query.itemType || "");
    const itemId = Number(req.query.itemId);

    if (!itemType || !itemId || isNaN(itemId)) {
      return res.status(400).json({ message: "itemType and itemId are required." });
    }

    const isBookmarked = await getUserBookmarkStatus(userId, itemType, itemId);
    res.json({ itemType, itemId, isBookmarked });
  } catch (error: any) {
    console.error("[Ecosystem] Error checking bookmark status:", error);
    res.status(500).json({ message: "Failed to check bookmark status." });
  }
});

/**
 * POST /api/ecosystem/bookmarks/toggle
 */
router.post("/bookmarks/toggle", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      itemType: z.enum(["RESOURCE", "QUESTION", "FLASHCARD", "SUBJECTIVE"]),
      itemId: z.number(),
      title: z.string().min(1),
      link: z.string().default(""),
    });

    const { itemType, itemId, title, link } = schema.parse(req.body);
    const userId = (req.user as any).id;

    const result = await toggleBookmark(userId, itemType, itemId, title, link);
    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error toggling bookmark:", error);
    res.status(400).json({ message: error.message || "Failed to toggle bookmark." });
  }
});

// ============================================================================
// 6. ACADEMIC STUDY GROUPS & COLLABORATION
// ============================================================================

/**
 * GET /api/ecosystem/study-groups
 */
router.get("/study-groups", async (req: Request, res: Response) => {
  try {
    const subjectCode = req.query.subjectCode as string | undefined;
    const userId = req.user ? (req.user as any).id : undefined;

    const groups = await getStudyGroups(subjectCode, userId);
    res.json(groups);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching study groups:", error);
    res.status(500).json({ message: "Failed to load study groups." });
  }
});

/**
 * POST /api/ecosystem/study-groups
 */
router.post("/study-groups", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      name: z.string().min(3, "Group name must be at least 3 characters"),
      description: z.string().optional(),
      subjectCode: z.string().optional().nullable(),
      isPrivate: z.boolean().default(false),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;

    const group = await createStudyGroup(
      userId,
      body.name,
      body.description || "",
      body.subjectCode || undefined,
      body.isPrivate
    );

    res.status(201).json(group);
  } catch (error: any) {
    console.error("[Ecosystem] Error creating study group:", error);
    res.status(400).json({ message: error.message || "Failed to create group." });
  }
});

/**
 * POST /api/ecosystem/study-groups/:id/join
 * Join an academic study group
 */
router.post("/study-groups/:id/join", requireAuth, async (req: Request, res: Response) => {
  try {
    const groupId = Number(req.params.id);
    const userId = (req.user as any).id;

    const result = await joinStudyGroup(groupId, userId);
    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error joining study group:", error);
    const status = error.message.includes("not found") ? 404 : 400;
    res.status(status).json({ message: error.message || "Failed to join group." });
  }
});

/**
 * POST /api/ecosystem/study-groups/:id/leave
 * Leave a study group
 */
router.post("/study-groups/:id/leave", requireAuth, async (req: Request, res: Response) => {
  try {
    const groupId = Number(req.params.id);
    const userId = (req.user as any).id;

    const result = await leaveStudyGroup(groupId, userId);
    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error leaving study group:", error);
    const status = error.message.includes("not a member") ? 400 : 500;
    res.status(status).json({ message: error.message || "Failed to leave group." });
  }
});

/**
 * GET /api/ecosystem/study-groups/:id/posts
 */
router.get("/study-groups/:id/posts", async (req: Request, res: Response) => {
  try {
    const groupId = Number(req.params.id);
    const userId = req.user ? (req.user as any).id : undefined;

    const posts = await getGroupPosts(groupId, userId);
    res.json(posts);
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching group posts:", error);
    const status = error.message.includes("Forbidden") ? 403 : error.message.includes("not found") ? 404 : 500;
    res.status(status).json({ message: error.message || "Failed to load group posts." });
  }
});

/**
 * POST /api/ecosystem/study-groups/:id/posts
 */
router.post("/study-groups/:id/posts", requireAuth, ecosystemPostLimiter, async (req: Request, res: Response) => {
  try {
    const groupId = Number(req.params.id);
    const userId = (req.user as any).id;
    const { content } = req.body;

    if (!content || typeof content !== "string" || !content.trim()) {
      return res.status(400).json({ message: "Post content cannot be empty." });
    }

    const post = await createGroupPost(groupId, userId, content.trim());
    res.status(201).json(post);
  } catch (error: any) {
    console.error("[Ecosystem] Error creating group post:", error);
    const status = error.message.includes("join this study group") ? 403 : 400;
    res.status(status).json({ message: error.message || "Failed to create post." });
  }
});

// ============================================================================
// 7. COMMUNITY QUALITY FEEDBACK & ISSUE REPORTING
// ============================================================================

/**
 * POST /api/ecosystem/feedback/helpful
 */
router.post("/feedback/helpful", requireAuth, async (req: Request, res: Response) => {
  try {
    const resourceId = Number(req.body.resourceId);
    const isHelpful = req.body.isHelpful !== undefined ? Boolean(req.body.isHelpful) : true;
    const userId = (req.user as any).id;

    if (!resourceId || isNaN(resourceId)) {
      return res.status(400).json({ message: "Invalid resource ID." });
    }

    const result = await voteResourceHelpful(userId, resourceId, isHelpful);
    res.json(result);
  } catch (error: any) {
    console.error("[Ecosystem] Error recording helpful vote:", error);
    res.status(500).json({ message: "Failed to register feedback." });
  }
});

/**
 * GET /api/ecosystem/feedback/helpful/:resourceId
 */
router.get("/feedback/helpful/:resourceId", async (req: Request, res: Response) => {
  try {
    const resourceId = Number(req.params.resourceId);
    const stats = await getResourceHelpfulCount(resourceId);
    res.json({ resourceId, ...stats });
  } catch (error: any) {
    console.error("[Ecosystem] Error fetching helpful count:", error);
    res.status(500).json({ message: "Failed to fetch feedback stats." });
  }
});

/**
 * POST /api/ecosystem/feedback/report
 */
router.post("/feedback/report", requireAuth, async (req: Request, res: Response) => {
  try {
    const schema = z.object({
      contentType: z.string().default("RESOURCE"),
      contentId: z.number(),
      issueType: z.string().min(2),
      description: z.string().min(5),
    });

    const body = schema.parse(req.body);
    const userId = (req.user as any).id;

    const report = await reportContentIssue(
      userId,
      body.contentType,
      body.contentId,
      body.issueType,
      body.description
    );

    res.status(201).json(report);
  } catch (error: any) {
    console.error("[Ecosystem] Error reporting issue:", error);
    res.status(400).json({ message: error.message || "Failed to report issue." });
  }
});

// ============================================================================
// 8. AI-ASSISTED LEARNING BOUNDARY
// ============================================================================

/**
 * POST /api/ecosystem/ai/explain
 * Explain concept with guaranteed syllabus-linked fallback and rate limiting
 */
router.post("/ai/explain", aiTutorLimiter, async (req: Request, res: Response) => {
  try {
    const { concept, subjectCode } = req.body;
    if (!concept || typeof concept !== "string" || !concept.trim()) {
      return res.status(400).json({ message: "Concept query is required." });
    }

    const explanation = await getConceptExplanation(
      concept.trim(),
      subjectCode || undefined
    );

    res.json(explanation);
  } catch (error: any) {
    console.error("[Ecosystem] Error in AI concept explanation:", error);
    res.status(500).json({ message: "Failed to generate concept explanation." });
  }
});

export default router;
