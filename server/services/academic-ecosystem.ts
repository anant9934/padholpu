import { db } from "../db";
import {
  flashcardDecks, flashcards, userFlashcardReviews,
  subjectiveQuestions, userSubjectiveAnswers,
  noteSubmissions, studyPlans, studyPlanTasks,
  personalNotes, bookmarks,
  studyGroups, studyGroupMembers, studyGroupPosts,
  contentFeedback, contentIssueReports,
  subjects, units, resources, users, notifications,
  type FlashcardDeck, type Flashcard, type UserFlashcardReview,
  type SubjectiveQuestion, type UserSubjectiveAnswer,
  type NoteSubmission, type InsertNoteSubmission,
  type StudyPlan, type StudyPlanTask,
  type PersonalNote, type Bookmark,
  type StudyGroup, type StudyGroupPost
} from "../../shared/schema";
import { eq, and, or, ne, desc, sql, asc, inArray, gte, lte } from "drizzle-orm";
import { invalidatePattern, delCache } from "../lib/redis";

// ============================================================================
// 1. FLASHCARDS & SM-2 SPACED REPETITION ENGINE
// ============================================================================

export interface SM2Result {
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  nextReviewDate: Date;
  isLearned: boolean;
}

/**
 * Computes next review schedule using the SuperMemo SM-2 algorithm.
 * Quality rating: 0 (blackout) to 5 (perfect recall).
 * Hardened against NaN, non-finite, and negative edge-case inputs.
 */
export function calculateSM2(
  quality: number, // 0 - 5
  currentEaseFactor: number = 2.5,
  currentInterval: number = 0,
  currentRepetitions: number = 0
): SM2Result {
  // 1. Sanitize & clamp quality between 0 and 5
  const validQuality = Number.isFinite(quality) ? quality : 0;
  const q = Math.max(0, Math.min(5, Math.round(validQuality)));

  // 2. Sanitize existing repetition stats
  let repetitions = Number.isFinite(currentRepetitions) && currentRepetitions >= 0 ? Math.round(currentRepetitions) : 0;
  let intervalDays = Number.isFinite(currentInterval) && currentInterval >= 0 ? Math.round(currentInterval) : 0;
  let easeFactor = Number.isFinite(currentEaseFactor) && currentEaseFactor >= 1.3 ? currentEaseFactor : 2.5;

  if (q >= 3) {
    if (repetitions === 0) {
      intervalDays = 1;
    } else if (repetitions === 1) {
      intervalDays = 6;
    } else {
      intervalDays = Math.max(1, Math.round(intervalDays * easeFactor));
    }
    repetitions += 1;
  } else {
    // Failed recall: reset repetitions and schedule for immediate review tomorrow
    repetitions = 0;
    intervalDays = 1;
  }

  // Calculate new Ease Factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReviewDate = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000);
  const isLearned = repetitions >= 3;

  return {
    easeFactor: Number(easeFactor.toFixed(2)),
    intervalDays,
    repetitions,
    nextReviewDate,
    isLearned,
  };
}

/**
 * Fetch flashcard decks for subject/unit.
 * If userId is provided, returns public decks OR user's own private decks.
 */
export async function getDecksForSubject(subjectId?: number, unitId?: number, userId?: number) {
  const conditions = [];

  if (userId) {
    conditions.push(or(eq(flashcardDecks.isPublic, true), eq(flashcardDecks.createdBy, userId)));
  } else {
    conditions.push(eq(flashcardDecks.isPublic, true));
  }

  if (subjectId) conditions.push(eq(flashcardDecks.subjectId, subjectId));
  if (unitId) conditions.push(eq(flashcardDecks.unitId, unitId));

  return db.select().from(flashcardDecks).where(and(...conditions)).orderBy(desc(flashcardDecks.createdAt));
}

/**
 * Fetch cards for deck with privacy verification.
 */
export async function getCardsForDeck(deckId: number, userId?: number) {
  const [deck] = await db.select().from(flashcardDecks).where(eq(flashcardDecks.id, deckId));
  if (!deck) {
    throw new Error("Deck not found");
  }

  // Privacy check: If deck is private, caller must be the creator
  if (!deck.isPublic && deck.createdBy !== userId) {
    throw new Error("Forbidden: This flashcard deck is private.");
  }

  const cards = await db.select().from(flashcards).where(eq(flashcards.deckId, deckId)).orderBy(asc(flashcards.orderIndex));

  if (!userId) {
    return cards.map((c: any) => ({ ...c, review: null }));
  }

  const reviews = await db.select().from(userFlashcardReviews).where(
    and(
      eq(userFlashcardReviews.userId, userId),
      inArray(userFlashcardReviews.cardId, cards.map((c: any) => c.id).concat(-1))
    )
  );

  const reviewMap = new Map(reviews.map((r: any) => [r.cardId, r]));

  return cards.map((card: any) => ({
    ...card,
    review: reviewMap.get(card.id) || null,
  }));
}

/**
 * Records flashcard review with card existence check and SM-2 calculation.
 */
export async function recordFlashcardReview(userId: number, cardId: number, quality: number) {
  const [card] = await db.select().from(flashcards).where(eq(flashcards.id, cardId));
  if (!card) {
    throw new Error("Flashcard not found");
  }

  const [existing] = await db.select().from(userFlashcardReviews).where(
    and(eq(userFlashcardReviews.userId, userId), eq(userFlashcardReviews.cardId, cardId))
  );

  const sm2 = calculateSM2(
    quality,
    existing?.easeFactor ?? 2.5,
    existing?.intervalDays ?? 0,
    existing?.repetitions ?? 0
  );

  if (existing) {
    const [updated] = await db.update(userFlashcardReviews).set({
      easeFactor: sm2.easeFactor,
      intervalDays: sm2.intervalDays,
      repetitions: sm2.repetitions,
      nextReviewDate: sm2.nextReviewDate,
      lastReviewedAt: new Date(),
      isLearned: sm2.isLearned,
    }).where(eq(userFlashcardReviews.id, existing.id)).returning();
    return updated;
  } else {
    const [inserted] = await db.insert(userFlashcardReviews).values({
      userId,
      cardId,
      easeFactor: sm2.easeFactor,
      intervalDays: sm2.intervalDays,
      repetitions: sm2.repetitions,
      nextReviewDate: sm2.nextReviewDate,
      lastReviewedAt: new Date(),
      isLearned: sm2.isLearned,
    }).returning();
    return inserted;
  }
}

// ============================================================================
// 2. SUBJECTIVE QUESTION BANK & MODEL ANSWERS
// ============================================================================

export async function getSubjectiveQuestions(
  params: {
    subjectId?: number;
    unitId?: number;
    difficulty?: string;
    limit?: number;
  },
  userId?: number
) {
  const conditions = [];
  if (params.subjectId) conditions.push(eq(subjectiveQuestions.subjectId, params.subjectId));
  if (params.unitId) conditions.push(eq(subjectiveQuestions.unitId, params.unitId));
  if (params.difficulty) conditions.push(eq(subjectiveQuestions.difficulty, params.difficulty));

  const questions = await db.select()
    .from(subjectiveQuestions)
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(subjectiveQuestions.createdAt))
    .limit(params.limit || 50);

  if (!userId || questions.length === 0) {
    return questions.map((q: any) => ({ ...q, userAnswer: null }));
  }

  // Load student's saved drafts/answers
  const userAnswers = await db.select()
    .from(userSubjectiveAnswers)
    .where(
      and(
        eq(userSubjectiveAnswers.userId, userId),
        inArray(userSubjectiveAnswers.questionId, questions.map((q: any) => q.id))
      )
    );

  const answerMap = new Map(userAnswers.map((a: any) => [a.questionId, a]));

  return questions.map((q: any) => ({
    ...q,
    userAnswer: answerMap.get(q.id) || null,
  }));
}

export async function saveSubjectiveAnswer(userId: number, questionId: number, studentAnswer: string, selfRating?: number) {
  const [question] = await db.select().from(subjectiveQuestions).where(eq(subjectiveQuestions.id, questionId));
  if (!question) {
    throw new Error("Subjective question not found");
  }

  const [existing] = await db.select().from(userSubjectiveAnswers).where(
    and(eq(userSubjectiveAnswers.userId, userId), eq(userSubjectiveAnswers.questionId, questionId))
  );

  if (existing) {
    const [updated] = await db.update(userSubjectiveAnswers).set({
      studentAnswer,
      selfRating: selfRating ?? existing.selfRating,
      updatedAt: new Date(),
    }).where(eq(userSubjectiveAnswers.id, existing.id)).returning();
    return updated;
  } else {
    const [created] = await db.insert(userSubjectiveAnswers).values({
      userId,
      questionId,
      studentAnswer,
      selfRating: selfRating || 3,
    }).returning();
    return created;
  }
}

// ============================================================================
// 3. STUDENT NOTES SUBMISSION & MODERATION LIFECYCLE
// ============================================================================

export async function submitStudentNotes(submission: InsertNoteSubmission) {
  const [created] = await db.insert(noteSubmissions).values({
    ...submission,
    status: "pending",
  }).returning();

  // Create acknowledgement notification
  await db.insert(notifications).values({
    userId: submission.studentId,
    type: "INFO",
    title: "Notes Submitted for Review",
    message: `Your notes "${submission.title}" have been queued for faculty review.`,
    link: "/contributions",
    isRead: false,
  }).catch(() => {});

  return created;
}

export async function getStudentSubmissions(userId: number) {
  return db.select().from(noteSubmissions).where(eq(noteSubmissions.studentId, userId)).orderBy(desc(noteSubmissions.createdAt));
}

export async function updateStudentSubmission(
  submissionId: number,
  studentId: number,
  data: Partial<InsertNoteSubmission>
) {
  const [sub] = await db.select().from(noteSubmissions).where(eq(noteSubmissions.id, submissionId));
  if (!sub) throw new Error("Submission not found");
  if (sub.studentId !== studentId) {
    throw new Error("Forbidden: You cannot modify another student's submission.");
  }
  if (sub.status === "published") {
    throw new Error("Published notes cannot be edited directly. Please submit an update.");
  }

  const [updated] = await db.update(noteSubmissions).set({
    title: data.title ?? sub.title,
    description: data.description ?? sub.description,
    content: data.content ?? sub.content,
    attachmentUrl: data.attachmentUrl ?? sub.attachmentUrl,
    attachmentName: data.attachmentName ?? sub.attachmentName,
    attachmentSize: data.attachmentSize ?? sub.attachmentSize,
    status: "pending", // Resubmit to moderation queue
    updatedAt: new Date(),
  }).where(eq(noteSubmissions.id, submissionId)).returning();

  // Create re-submission notification
  await db.insert(notifications).values({
    userId: studentId,
    type: "INFO",
    title: "Revised Notes Resubmitted",
    message: `Your revised submission "${sub.title}" has been placed back in the moderation queue.`,
    link: "/contributions",
    isRead: false,
  }).catch(() => {});

  return updated;
}

export async function withdrawStudentSubmission(submissionId: number, studentId: number) {
  const [sub] = await db.select().from(noteSubmissions).where(eq(noteSubmissions.id, submissionId));
  if (!sub) throw new Error("Submission not found");
  if (sub.studentId !== studentId) {
    throw new Error("Forbidden: You cannot withdraw another student's submission.");
  }
  if (sub.status === "published") {
    throw new Error("Published notes cannot be withdrawn directly. Please contact moderation support.");
  }

  await db.delete(noteSubmissions).where(eq(noteSubmissions.id, submissionId));

  // Create withdraw notification
  await db.insert(notifications).values({
    userId: studentId,
    type: "INFO",
    title: "Submission Withdrawn",
    message: `Your submission "${sub.title}" has been withdrawn from review.`,
    link: "/contributions",
    isRead: false,
  }).catch(() => {});

  return true;
}

export async function getModerationQueue(status: string = "pending") {
  return db.select({
    submission: noteSubmissions,
    student: {
      id: users.id,
      fullName: users.fullName,
      username: users.username,
    },
    subject: {
      id: subjects.id,
      name: subjects.name,
      code: subjects.code,
    }
  })
  .from(noteSubmissions)
  .innerJoin(users, eq(noteSubmissions.studentId, users.id))
  .innerJoin(subjects, eq(noteSubmissions.subjectId, subjects.id))
  .where(eq(noteSubmissions.status, status))
  .orderBy(desc(noteSubmissions.createdAt));
}

export async function moderateNoteSubmission(
  submissionId: number,
  moderatorId: number,
  decision: "approved" | "changes_requested" | "rejected",
  feedback?: string
) {
  const [sub] = await db.select().from(noteSubmissions).where(eq(noteSubmissions.id, submissionId));
  if (!sub) throw new Error("Submission not found");

  // Prevent self-approval (security constraint)
  if (sub.studentId === moderatorId && decision === "approved") {
    throw new Error("Self-approval is strictly prohibited under institutional academic policies.");
  }

  let publishedResourceId = sub.publishedResourceId;

  if (decision === "approved") {
    // Prevent duplicate resource creation if already approved/published
    if (!publishedResourceId) {
      const [uploader] = await db.select().from(users).where(eq(users.id, sub.studentId));
      const [subSubject] = await db.select().from(subjects).where(eq(subjects.id, sub.subjectId));

      const [published] = await db.insert(resources).values({
        title: sub.title,
        subject: subSubject?.code || "GENERAL",
        type: "Notes",
        url: sub.attachmentUrl || `/notes/submitted/${sub.id}`,
        filename: sub.attachmentName || `${sub.title.replace(/\s+/g, '_')}.pdf`,
        fileSize: sub.attachmentSize || 1024,
        uploaderId: sub.studentId,
        uploaderName: uploader?.fullName || "Student Scholar",
        uploaderUsername: uploader?.username || "contributor",
        uploadedBy: sub.studentId,
        isBoosted: false,
      }).returning();

      publishedResourceId = published.id;

      // Invalidate public catalog & system stats caches
      invalidatePattern("padholpu:resources:*").catch(() => {});
      delCache("padholpu:stats:system").catch(() => {});
    }
  }

  const [updated] = await db.update(noteSubmissions).set({
    status: decision === "approved" ? "published" : decision,
    moderatorFeedback: feedback || null,
    reviewedBy: moderatorId,
    reviewedAt: new Date(),
    publishedResourceId,
    updatedAt: new Date(),
  }).where(eq(noteSubmissions.id, submissionId)).returning();

  // Send status notification to contributor
  if (decision === "approved") {
    await db.insert(notifications).values({
      userId: sub.studentId,
      type: "INFO",
      title: "Notes Approved & Published! 📚",
      message: `Your contribution "${sub.title}" has been approved and published to the public library.`,
      link: publishedResourceId ? `/resources/${publishedResourceId}` : "/contributions",
      isRead: false,
    }).catch(() => {});
  } else if (decision === "changes_requested") {
    await db.insert(notifications).values({
      userId: sub.studentId,
      type: "INFO",
      title: "Changes Requested on Your Notes 📝",
      message: `Faculty requested revisions on "${sub.title}": ${feedback || "Please review notes and resubmit."}`,
      link: "/contributions",
      isRead: false,
    }).catch(() => {});
  } else if (decision === "rejected") {
    await db.insert(notifications).values({
      userId: sub.studentId,
      type: "INFO",
      title: "Notes Submission Not Approved",
      message: `Your submission "${sub.title}" was not approved: ${feedback || "Does not meet academic guidelines."}`,
      link: "/contributions",
      isRead: false,
    }).catch(() => {});
  }

  return updated;
}

// ============================================================================
// 4. STUDY PLANNER & EXAM PREPARATION ENGINE
// ============================================================================

export function validateStudyPlanCurriculum(
  selectedCodes: string[],
  subjectRows: Array<{ id: number; code: string }>,
  unitRows: Array<{ subjectId: number; unitNumber: number; unitName: string }>
): void {
  const foundCodes = new Set(subjectRows.map((subject) => subject.code.toUpperCase()));
  const unknownCodes = selectedCodes.filter((code) => !foundCodes.has(code.toUpperCase()));
  if (unknownCodes.length > 0) {
    throw new Error(`Unknown subject code(s): ${unknownCodes.join(", ")}. Select subjects from the academic catalogue.`);
  }

  const subjectsWithUnits = new Set(unitRows.map((unit) => unit.subjectId));
  const subjectsWithoutUnits = subjectRows
    .filter((subject) => !subjectsWithUnits.has(subject.id))
    .map((subject) => subject.code);

  if (subjectsWithoutUnits.length > 0) {
    throw new Error(
      `No syllabus units are mapped for: ${subjectsWithoutUnits.join(", ")}. Map the real syllabus before generating a study plan.`
    );
  }

  if (unitRows.length === 0) {
    throw new Error("No syllabus units are available for the selected subjects.");
  }
}

export async function generateStudyPlan(
  userId: number,
  title: string,
  targetExamDate: Date,
  selectedSubjectCodes: string[],
  dailyStudyHours: number = 2.0,
  examType: string = "END_TERM"
) {
  const now = new Date();
  if (isNaN(targetExamDate.getTime())) {
    throw new Error("Invalid target exam date.");
  }
  if (targetExamDate.getTime() < now.getTime() - 24 * 60 * 60 * 1000) {
    throw new Error("Exam date must be scheduled in the future.");
  }

  const normalizedCodes = [...new Set(
    selectedSubjectCodes.map((code) => code.trim().toUpperCase()).filter(Boolean)
  )];
  if (normalizedCodes.length === 0) {
    throw new Error("Please specify at least one subject code.");
  }

  // Never create synthetic five-unit plans. Every task must map to a real catalogue unit.
  const subjectRows = await db.select().from(subjects).where(inArray(subjects.code, normalizedCodes));
  const subjectIds = subjectRows.map((subject: any) => subject.id);
  const unitsList = subjectIds.length
    ? await db.select().from(units).where(inArray(units.subjectId, subjectIds)).orderBy(asc(units.subjectId), asc(units.unitNumber))
    : [];

  validateStudyPlanCurriculum(normalizedCodes, subjectRows, unitsList);

  const subjectById = new Map(subjectRows.map((subject: any) => [subject.id, subject]));
  const dayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.max(1, Math.ceil((targetExamDate.getTime() - now.getTime()) / dayMs));
  const tasksToInsert = unitsList.map((unit: any, index: number) => {
    const dayOffset = Math.min(diffDays - 1, Math.floor(index * diffDays / unitsList.length));
    const targetDate = new Date(now.getTime() + dayOffset * dayMs);
    const subject = subjectById.get(unit.subjectId);
    if (!subject) {
      throw new Error(`A syllabus unit references an unselected subject (unit ID: ${unit.id}).`);
    }

    return {
      subjectCode: subject.code,
      unitNumber: unit.unitNumber,
      title: `Master Unit ${unit.unitNumber}: ${unit.unitName} (${subject.code})`,
      scheduledDate: targetDate.toISOString().split("T")[0],
      isCompleted: false,
    };
  });

  // Create the plan and its syllabus-backed tasks atomically.
  return db.transaction(async (tx) => {
    const [plan] = await tx.insert(studyPlans).values({
      userId,
      title,
      targetExamDate,
      selectedSubjectCodes: normalizedCodes,
      dailyStudyHours: Math.max(0.5, Math.min(16, dailyStudyHours)),
      examType,
      isActive: true,
    }).returning();

    await tx.insert(studyPlanTasks).values(
      tasksToInsert.map((task) => ({ ...task, planId: plan.id }))
    );

    return plan;
  });
}

export async function getUserStudyPlans(userId: number) {
  const plans = await db.select().from(studyPlans).where(eq(studyPlans.userId, userId)).orderBy(desc(studyPlans.createdAt));
  
  if (!plans.length) return [];

  const tasks = await db.select().from(studyPlanTasks).where(
    inArray(studyPlanTasks.planId, plans.map((p: any) => p.id))
  ).orderBy(asc(studyPlanTasks.scheduledDate));

  const taskMap = new Map<number, StudyPlanTask[]>();
  for (const t of tasks) {
    if (!taskMap.has(t.planId)) taskMap.set(t.planId, []);
    taskMap.get(t.planId)!.push(t);
  }

  return plans.map((p: any) => ({
    ...p,
    tasks: taskMap.get(p.id) || [],
    completedTasksCount: (taskMap.get(p.id) || []).filter(t => t.isCompleted).length,
    totalTasksCount: (taskMap.get(p.id) || []).length,
  }));
}

export async function toggleStudyPlanTask(taskId: number, userId: number, isCompleted: boolean) {
  // Join verification to ensure task belongs to user's plan
  const [task] = await db.select({ task: studyPlanTasks, plan: studyPlans })
    .from(studyPlanTasks)
    .innerJoin(studyPlans, eq(studyPlanTasks.planId, studyPlans.id))
    .where(and(eq(studyPlanTasks.id, taskId), eq(studyPlans.userId, userId)));

  if (!task) throw new Error("Task not found or access denied");

  const [updated] = await db.update(studyPlanTasks).set({
    isCompleted,
    completedAt: isCompleted ? new Date() : null,
  }).where(eq(studyPlanTasks.id, taskId)).returning();

  return updated;
}

export async function deleteStudyPlan(planId: number, userId: number) {
  const [plan] = await db.select().from(studyPlans).where(and(eq(studyPlans.id, planId), eq(studyPlans.userId, userId)));
  if (!plan) throw new Error("Study plan not found or access denied");

  await db.delete(studyPlans).where(eq(studyPlans.id, planId));
  return true;
}

// ============================================================================
// 5. PERSONAL KNOWLEDGE WORKSPACE & BOOKMARKS
// ============================================================================

export async function getPersonalNotes(userId: number) {
  return db.select().from(personalNotes).where(eq(personalNotes.userId, userId)).orderBy(desc(personalNotes.updatedAt));
}

export async function createPersonalNote(userId: number, title: string, body: string, subjectId?: number, tags: string[] = []) {
  const [note] = await db.insert(personalNotes).values({
    userId,
    title,
    body,
    subjectId,
    tags,
    isFavorite: false,
  }).returning();
  return note;
}

export async function updatePersonalNote(userId: number, noteId: number, title: string, body: string, tags?: string[], isFavorite?: boolean) {
  const [existing] = await db.select().from(personalNotes).where(and(eq(personalNotes.id, noteId), eq(personalNotes.userId, userId)));
  if (!existing) {
    throw new Error("Personal note not found or access denied");
  }

  const [updated] = await db.update(personalNotes).set({
    title,
    body,
    tags: tags ?? existing.tags,
    isFavorite: isFavorite !== undefined ? isFavorite : existing.isFavorite,
    updatedAt: new Date(),
  }).where(eq(personalNotes.id, noteId)).returning();

  return updated;
}

export async function deletePersonalNote(userId: number, noteId: number) {
  const [existing] = await db.select().from(personalNotes).where(and(eq(personalNotes.id, noteId), eq(personalNotes.userId, userId)));
  if (!existing) {
    throw new Error("Personal note not found or access denied");
  }

  await db.delete(personalNotes).where(eq(personalNotes.id, noteId));
  return true;
}

export async function getUserBookmarks(userId: number) {
  return db.select().from(bookmarks).where(eq(bookmarks.userId, userId)).orderBy(desc(bookmarks.createdAt));
}

export async function getUserBookmarkStatus(userId: number, itemType: string, itemId: number): Promise<boolean> {
  const [b] = await db.select().from(bookmarks).where(
    and(
      eq(bookmarks.userId, userId),
      eq(bookmarks.itemType, itemType),
      eq(bookmarks.itemId, itemId)
    )
  );
  return !!b;
}

export async function toggleBookmark(userId: number, itemType: string, itemId: number, title: string, link: string) {
  const [existing] = await db.select().from(bookmarks).where(
    and(
      eq(bookmarks.userId, userId),
      eq(bookmarks.itemType, itemType),
      eq(bookmarks.itemId, itemId)
    )
  );

  if (existing) {
    await db.delete(bookmarks).where(eq(bookmarks.id, existing.id));
    return { bookmarked: false };
  } else {
    await db.insert(bookmarks).values({
      userId,
      itemType,
      itemId,
      title,
      link,
    });
    return { bookmarked: true };
  }
}

// ============================================================================
// 6. STUDY GROUPS & ACADEMIC COLLABORATION
// ============================================================================

export async function getStudyGroups(subjectCode?: string, userId?: number) {
  const conditions = [eq(studyGroups.isPrivate, false)];
  if (subjectCode) conditions.push(eq(studyGroups.subjectCode, subjectCode));

  const groups = await db.select().from(studyGroups).where(and(...conditions)).orderBy(desc(studyGroups.createdAt));

  if (!userId || groups.length === 0) {
    return groups.map((g: any) => ({ ...g, isMember: false }));
  }

  // Load user's memberships
  const memberships = await db.select()
    .from(studyGroupMembers)
    .where(
      and(
        eq(studyGroupMembers.userId, userId),
        inArray(studyGroupMembers.groupId, groups.map((g: any) => g.id))
      )
    );

  const memberSet = new Set(memberships.map((m: any) => m.groupId));

  return groups.map((g: any) => ({
    ...g,
    isMember: memberSet.has(g.id),
  }));
}

export async function createStudyGroup(userId: number, name: string, description: string, subjectCode?: string, isPrivate: boolean = false) {
  const [group] = await db.insert(studyGroups).values({
    name,
    description,
    subjectCode,
    creatorId: userId,
    isPrivate,
    memberCount: 1,
  }).returning();

  // Add creator as ADMIN member
  await db.insert(studyGroupMembers).values({
    groupId: group.id,
    userId,
    role: "ADMIN",
  });

  return group;
}

export async function joinStudyGroup(groupId: number, userId: number) {
  const [group] = await db.select().from(studyGroups).where(eq(studyGroups.id, groupId));
  if (!group) throw new Error("Study group not found");

  const [existing] = await db.select().from(studyGroupMembers).where(
    and(eq(studyGroupMembers.groupId, groupId), eq(studyGroupMembers.userId, userId))
  );

  if (existing) {
    return { joined: true, alreadyMember: true };
  }

  await db.insert(studyGroupMembers).values({
    groupId,
    userId,
    role: "MEMBER",
  });

  // Increment memberCount
  await db.update(studyGroups).set({
    memberCount: sql`${studyGroups.memberCount} + 1`
  }).where(eq(studyGroups.id, groupId));

  return { joined: true, alreadyMember: false };
}

export async function leaveStudyGroup(groupId: number, userId: number) {
  const [membership] = await db.select().from(studyGroupMembers).where(
    and(eq(studyGroupMembers.groupId, groupId), eq(studyGroupMembers.userId, userId))
  );

  if (!membership) {
    throw new Error("You are not a member of this study group");
  }

  await db.delete(studyGroupMembers).where(
    and(eq(studyGroupMembers.groupId, groupId), eq(studyGroupMembers.userId, userId))
  );

  // Decrement memberCount (clamp >= 0)
  await db.update(studyGroups).set({
    memberCount: sql`GREATEST(0, ${studyGroups.memberCount} - 1)`
  }).where(eq(studyGroups.id, groupId));

  return { left: true };
}

export async function getGroupPosts(groupId: number, userId?: number) {
  const [group] = await db.select().from(studyGroups).where(eq(studyGroups.id, groupId));
  if (!group) throw new Error("Study group not found");

  // If private group, user must be a member
  if (group.isPrivate) {
    if (!userId) throw new Error("Forbidden: Authentication required for private groups");
    const [membership] = await db.select().from(studyGroupMembers).where(
      and(eq(studyGroupMembers.groupId, groupId), eq(studyGroupMembers.userId, userId))
    );
    if (!membership) throw new Error("Forbidden: Membership required to view this private group");
  }

  return db.select({
    post: studyGroupPosts,
    author: {
      id: users.id,
      fullName: users.fullName,
      username: users.username,
      avatarUrl: users.avatarUrl,
    }
  })
  .from(studyGroupPosts)
  .innerJoin(users, eq(studyGroupPosts.authorId, users.id))
  .where(eq(studyGroupPosts.groupId, groupId))
  .orderBy(desc(studyGroupPosts.createdAt));
}

export async function createGroupPost(groupId: number, userId: number, content: string) {
  // Security check: User must be a member of the group
  const [membership] = await db.select().from(studyGroupMembers).where(
    and(eq(studyGroupMembers.groupId, groupId), eq(studyGroupMembers.userId, userId))
  );

  if (!membership) {
    throw new Error("You must join this study group before posting.");
  }

  // Sanitize content against stored XSS
  const sanitized = content
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .trim();

  if (sanitized.length === 0) {
    throw new Error("Post content cannot be empty.");
  }
  if (sanitized.length > 2000) {
    throw new Error("Post content exceeds 2000 character maximum limit.");
  }

  const [post] = await db.insert(studyGroupPosts).values({
    groupId,
    authorId: userId,
    content: sanitized,
  }).returning();

  return post;
}

// ============================================================================
// 7. COMMUNITY CONTENT QUALITY & FEEDBACK
// ============================================================================

export async function voteResourceHelpful(userId: number, resourceId: number, isHelpful: boolean) {
  const [existing] = await db.select().from(contentFeedback).where(
    and(eq(contentFeedback.userId, userId), eq(contentFeedback.resourceId, resourceId))
  );

  if (existing) {
    const [updated] = await db.update(contentFeedback).set({ isHelpful }).where(eq(contentFeedback.id, existing.id)).returning();
    return updated;
  } else {
    const [inserted] = await db.insert(contentFeedback).values({ userId, resourceId, isHelpful }).returning();
    return inserted;
  }
}

export async function getResourceHelpfulCount(resourceId: number) {
  const [row] = await db.select({
    helpfulCount: sql<number>`count(*) filter (where ${contentFeedback.isHelpful} = true)::int`,
    totalVotes: sql<number>`count(*)::int`,
  }).from(contentFeedback).where(eq(contentFeedback.resourceId, resourceId));

  return {
    helpfulCount: row?.helpfulCount || 0,
    totalVotes: row?.totalVotes || 0,
  };
}

export async function reportContentIssue(
  reporterId: number,
  contentType: string,
  contentId: number,
  issueType: string,
  description: string
) {
  const [report] = await db.insert(contentIssueReports).values({
    reporterId,
    contentType,
    contentId,
    issueType,
    description,
    status: "PENDING",
  }).returning();

  return report;
}

export async function getContentIssueReports(status?: string, contentType?: string) {
  const conditions = [];
  if (status && status !== "ALL") conditions.push(eq(contentIssueReports.status, status));
  if (contentType && contentType !== "ALL") conditions.push(eq(contentIssueReports.contentType, contentType));

  return db.select({
    report: contentIssueReports,
    reporter: {
      id: users.id,
      fullName: users.fullName,
      username: users.username,
      email: users.email,
    }
  })
  .from(contentIssueReports)
  .leftJoin(users, eq(contentIssueReports.reporterId, users.id))
  .where(conditions.length ? and(...conditions) : undefined)
  .orderBy(desc(contentIssueReports.createdAt));
}

export async function resolveContentIssueReport(
  reportId: number,
  adminId: number,
  status: "RESOLVED" | "DISMISSED",
  resolutionNotes?: string
) {
  const [report] = await db.select().from(contentIssueReports).where(eq(contentIssueReports.id, reportId));
  if (!report) throw new Error("Report not found");

  const [updated] = await db.update(contentIssueReports).set({
    status,
    resolutionNotes: resolutionNotes || null,
    resolvedBy: adminId,
    resolvedAt: new Date(),
  }).where(eq(contentIssueReports.id, reportId)).returning();

  // Notify reporter of outcome
  if (report.reporterId) {
    await db.insert(notifications).values({
      userId: report.reporterId,
      type: "INFO",
      title: `Content Report ${status === "RESOLVED" ? "Resolved" : "Dismissed"}`,
      message: `Your report regarding ${report.contentType} #${report.contentId} was reviewed: ${resolutionNotes || "Action completed by academic administration."}`,
      link: "/learn",
      isRead: false,
    }).catch(() => {});
  }

  return updated;
}

export async function updateSubjectiveQuestion(
  questionId: number,
  data: {
    questionText?: string;
    modelAnswer?: string;
    outlinePoints?: string[];
    maxMarks?: number;
    difficulty?: string;
  }
) {
  const [question] = await db.select().from(subjectiveQuestions).where(eq(subjectiveQuestions.id, questionId));
  if (!question) throw new Error("Question not found");

  const [updated] = await db.update(subjectiveQuestions).set({
    questionText: data.questionText ?? question.questionText,
    modelAnswer: data.modelAnswer ?? question.modelAnswer,
    outlinePoints: data.outlinePoints ?? question.outlinePoints,
    maxMarks: data.maxMarks ?? question.maxMarks,
    difficulty: data.difficulty ?? question.difficulty,
  }).where(eq(subjectiveQuestions.id, questionId)).returning();

  return updated;
}

export async function deleteSubjectiveQuestion(questionId: number) {
  const [question] = await db.select().from(subjectiveQuestions).where(eq(subjectiveQuestions.id, questionId));
  if (!question) throw new Error("Question not found");

  await db.delete(subjectiveQuestions).where(eq(subjectiveQuestions.id, questionId));
  return true;
}

// ============================================================================
// 8. AI-ASSISTED LEARNING BOUNDARY (OPTIONAL / GRACEFUL FALLBACK)
// ============================================================================

export interface AIExplanationResult {
  isAIGenerated: boolean;
  explanation: string;
  keyPoints: string[];
  disclaimer: string;
}

/**
 * Explains an academic concept or question.
 * Protected with request timeout (8s), input sanitization (max 500 chars),
 * and guaranteed 100% offline syllabus outline fallback with institutional disclaimers.
 */
export async function getConceptExplanation(topic: string, subjectCode?: string): Promise<AIExplanationResult> {
  const cleanTopic = topic.trim().slice(0, 500);
  const cleanSubject = (subjectCode || "").trim().slice(0, 100);

  // External inference is disabled unless the operator deliberately opts in.
  // A configured API key alone must never trigger an unexpected model call.
  const externalInferenceEnabled =
    process.env.ENABLE_GEMINI_TUTOR === "true" &&
    process.env.ALLOW_EXTERNAL_TUTOR_INFERENCE === "true" &&
    Boolean(process.env.GEMINI_API_KEY);

  if (externalInferenceEnabled) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are an academic tutor. The requested subject is ${cleanSubject || "not specified"}. Explain the following concept without inventing syllabus or institutional claims: "${cleanTopic}". State uncertainty and distinguish general knowledge from source-backed content. Keep response formatted in clean markdown.`
              }]
            }]
          }),
          signal: AbortSignal.timeout(8000), // 8-second strict timeout
        }
      );
      const data = await response.json();
      const generated = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generated) {
        return {
          isAIGenerated: true,
          explanation: generated,
          keyPoints: [
            "Generated in real-time by Google Gemini AI assistant.",
            "Always cross-reference with official LPU syllabus and lecture slides."
          ],
          disclaimer: "AI-generated explanation for study assistance. Not an official university grading reference."
        };
      }
    } catch (e) {
      console.warn("[AI-ASSISTANT] Gemini API call timed out or failed, falling back to curated academic knowledge base.");
    }
  }

  // Evidence-safe fallback: do not fabricate subject-specific explanations.
  const subjectContext = cleanSubject ? ` in **${cleanSubject}**` : "";
  return {
    isAIGenerated: false,
    explanation:
      `### No source-backed explanation is available yet\n\n` +
      `I could not find enough approved, subject-specific material for **${cleanTopic}**${subjectContext}. ` +
      `I will not invent an explanation or claim that it is verified. Open the relevant subject notes or choose a syllabus topic that already has published material.`,
    keyPoints: [
      "No external model was called; this is the deterministic fallback.",
      "A matching approved academic source is required before a grounded explanation can be shown.",
    ],
    disclaimer:
      "No academic answer was generated because a matching source was not available. This is not a verified explanation or an official university answer.",
  };
}
