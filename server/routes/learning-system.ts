import { Router, type Request, type Response } from "express";
import { db } from "../db";
import {
  subjects,
  units,
  topics,
  questions,
  subjectiveQuestions,
  userSubjectiveAnswers,
  flashcardDecks,
  flashcards,
  userFlashcardReviews,
  bookmarks,
  studentActivityEvents
} from "../../shared/schema";
import { eq, and, sql, desc } from "drizzle-orm";
import aee103CompleteSubject from "../data/aee103";

const router = Router();

function paramStr(val: string | string[] | undefined): string {
  if (Array.isArray(val)) return val[0] || "";
  return val || "";
}

function isUserAuthenticated(req: Request): boolean {
  if (typeof req.isAuthenticated === "function") {
    return req.isAuthenticated() && Boolean(req.user);
  }
  return Boolean(req.user);
}

/**
 * GET /api/academic/subjects/:code/syllabus
 * Comprehensive syllabus overview, grading structure, COs, units list, and practicals.
 */
router.get(["/api/academic/subjects/:code/syllabus", "/academic/subjects/:code/syllabus"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    // If AEE103, return authoritative enriched syllabus data
    if (code === "AEE103") {
      const { metadata, units: unitData } = aee103CompleteSubject;

      // Fetch live counts from DB for data integrity verification
      const dbUnits = await db
        .select()
        .from(units)
        .where(eq(units.subjectId, subj.id));

      const [mcqCountResult] = await db
        .select({ count: sql<number>`count(*)` })
        .from(questions)
        .where(eq(questions.subjectId, subj.id));

      const [subjCountResult] = await db
        .select({ count: sql<number>`count(*)` })
        .from(subjectiveQuestions)
        .where(eq(subjectiveQuestions.subjectId, subj.id));

      const [fcCountResult] = await db
        .select({ count: sql<number>`count(*)` })
        .from(flashcardDecks)
        .innerJoin(flashcards, eq(flashcards.deckId, flashcardDecks.id))
        .where(eq(flashcardDecks.subjectId, subj.id));

      // Unit inventories come from persisted database records, not static source-array sizes.
      const [mcqCounts, subjectiveCounts, flashcardCounts] = await Promise.all([
        db.select({
          unitId: questions.unitId,
          count: sql<number>`count(*)`
        }).from(questions).where(eq(questions.subjectId, subj.id)).groupBy(questions.unitId),
        db.select({
          unitId: subjectiveQuestions.unitId,
          count: sql<number>`count(*)`
        }).from(subjectiveQuestions).where(eq(subjectiveQuestions.subjectId, subj.id)).groupBy(subjectiveQuestions.unitId),
        db.select({
          unitId: flashcardDecks.unitId,
          count: sql<number>`count(${flashcards.id})`
        }).from(flashcardDecks)
          .innerJoin(flashcards, eq(flashcards.deckId, flashcardDecks.id))
          .where(eq(flashcardDecks.subjectId, subj.id))
          .groupBy(flashcardDecks.unitId)
      ]);

      const mcqByUnit = new Map(mcqCounts.map((row: any) => [row.unitId, Number(row.count) || 0]));
      const subjectiveByUnit = new Map(subjectiveCounts.map((row: any) => [row.unitId, Number(row.count) || 0]));
      const flashcardsByUnit = new Map(flashcardCounts.map((row: any) => [row.unitId, Number(row.count) || 0]));

      const unitSummaries = unitData.map((u: any) => {
        const matchingDbUnit = dbUnits.find((du: any) => du.unitNumber === u.unitNumber);
        const unitId = matchingDbUnit?.id ?? null;
        return {
          unitNumber: u.unitNumber,
          unitId,
          title: u.title,
          shortDescription: u.shortDescription,
          overview: u.shortDescription,
          estimatedReadTimeMinutes: u.estimatedReadTimeMinutes,
          estimatedMinutes: u.estimatedReadTimeMinutes,
          syllabusTopics: u.syllabusTopics,
          topics: u.syllabusTopics,
          mcqCount: unitId === null ? 0 : (mcqByUnit.get(unitId) || 0),
          subjectiveCount: unitId === null ? 0 : (subjectiveByUnit.get(unitId) || 0),
          flashcardCount: unitId === null ? 0 : (flashcardsByUnit.get(unitId) || 0)
        };
      });

      const gradingComponents = metadata.gradingStructure.map((g: any) => ({
        name: g.component,
        type: g.component,
        weightage: Number.parseInt(g.weightage, 10),
        marks: g.marks,
        details: g.details,
        coverage: g.component.includes("Mid-Term") 
          ? "Units 1, 2 & 3" 
          : g.component.includes("End-Term") 
          ? "Units 1 through 6 (Comprehensive)" 
          : g.component.includes("Continuous") 
          ? "Continuous Assessments (Best 2 of 3)" 
          : "12 Practical Lab Activities & Viva"
      }));

      return res.json({
        subject: {
          id: subj.id,
          code: subj.code,
          name: subj.name,
          programmeCode: metadata.programmeCode,
          programmeName: metadata.programmeName,
          semester: subj.semester,
          credits: subj.credits,
          ltp: metadata.ltp,
          category: subj.category || metadata.courseCategory,
          discipline: subj.discipline,
          description: subj.description,
          syllabusPdfUrl: metadata.syllabusPdfUrl,
          totalUnits: unitSummaries.length
        },
        overview: metadata.overview,
        courseOutcomes: metadata.courseOutcomes,
        gradingStructure: metadata.gradingStructure,
        grading: metadata.gradingStructure.length > 0
          ? { totalMarks: 100, components: gradingComponents }
          : null,
        gradingDisclosure: metadata.gradingDisclosure,
        textbooks: metadata.textbooks,
        practicalsCount: metadata.practicals.length,
        practicalsSummary: metadata.practicals.map((p: any) => ({ id: p.id, title: p.title })),
        units: unitSummaries,
        stats: {
          totalUnits: unitSummaries.length,
          totalMcqs: Number(mcqCountResult?.count ?? 0),
          totalSubjectiveQuestions: Number(subjCountResult?.count ?? 0),
          totalFlashcards: Number(fcCountResult?.count ?? 0),
          totalPracticals: metadata.practicals.length
        }
      });
    }

    // Generic fallback for other subjects
    const dbUnits = await db
      .select()
      .from(units)
      .where(eq(units.subjectId, subj.id));

    return res.json({
      subject: subj,
      units: dbUnits.map((u: any) => ({
        unitNumber: u.unitNumber,
        unitId: u.id,
        title: u.unitName,
        shortDescription: `Syllabus topics for ${u.unitName}`,
        estimatedReadTimeMinutes: 15,
        mcqCount: 0,
        subjectiveCount: 0,
        flashcardCount: 0
      })),
      stats: {
        totalUnits: dbUnits.length,
        totalMcqs: 0,
        totalSubjectiveQuestions: 0,
        totalFlashcards: 0,
        totalPracticals: 0
      }
    });
  } catch (error: any) {
    console.error(`[Academic] Error loading syllabus for ${code}:`, error);
    res.status(500).json({ message: "Failed to load syllabus." });
  }
});

/**
 * GET /api/academic/subjects/:code/units/:unitNumber
 * Detailed Unit Reader: notes, sections, definitions, reading time, and prev/next links.
 */
router.get(["/api/academic/subjects/:code/units/:unitNumber", "/academic/subjects/:code/units/:unitNumber"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();
  const unitNum = parseInt(paramStr(req.params.unitNumber), 10);

  if (isNaN(unitNum) || unitNum < 1 || unitNum > 6) {
    return res.status(400).json({ message: "Invalid unit number. Must be between 1 and 6." });
  }

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    if (code === "AEE103") {
      const uData = aee103CompleteSubject.units.find((u: any) => u.unitNumber === unitNum);
      if (!uData) {
        return res.status(404).json({ message: `Unit ${unitNum} not found for ${code}.` });
      }

      // Query DB unit to get its primary key ID
      const [dbUnit] = await db
        .select()
        .from(units)
        .where(
          and(
            eq(units.subjectId, subj.id),
            eq(units.unitNumber, unitNum)
          )
        );

      return res.json({
        subject: {
          id: subj.id,
          code: subj.code,
          name: subj.name,
          programmeCode: aee103CompleteSubject.metadata.programmeCode,
          semester: subj.semester
        },
        unit: {
          unitNumber: uData.unitNumber,
          unitId: dbUnit?.id || uData.unitNumber,
          title: uData.title,
          shortDescription: uData.shortDescription,
          estimatedReadTimeMinutes: uData.estimatedReadTimeMinutes,
          syllabusTopics: uData.syllabusTopics,
          overview: uData.shortDescription,
          learningObjectives: uData.notes.learningObjectives,
          sections: uData.notes.sections.map((sec: any) => ({
            title: sec.heading,
            content: sec.content,
            keyTakeaways: sec.subsections?.flatMap((sub: any) => sub.keyPoints || []) || [],
            table: sec.subsections?.find((sub: any) => sub.table)?.table,
            examTip: sec.subsections?.[0]?.content ? `Key focus: ${sec.subsections[0].subheading}` : undefined
          })),
          commonMisunderstandings: uData.notes.commonMisunderstandings,
          revisionPoints: uData.notes.keyTakeaways,
          summaryPoints: [uData.notes.summary],
          counts: {
            mcqs: uData.mcqs.length,
            subjective: uData.subjectiveQuestions.length,
            flashcards: uData.flashcards.length
          },
          navigation: {
            prevUnit: unitNum > 1 ? unitNum - 1 : null,
            nextUnit: unitNum < 6 ? unitNum + 1 : null,
            subjectUrl: `/programmes/BSC-AGRI/semesters/3/AEE103`
          }
        }
      });
    }

    // Generic fallback for other subjects
    const [dbUnit] = await db
      .select()
      .from(units)
      .where(
        and(
          eq(units.subjectId, subj.id),
          eq(units.unitNumber, unitNum)
        )
      );

    if (!dbUnit) {
      return res.status(404).json({ message: `Unit ${unitNum} not found for ${code}.` });
    }

    return res.json({
      subject: subj,
      unit: {
        unitNumber: dbUnit.unitNumber,
        unitId: dbUnit.id,
        title: dbUnit.unitName,
        shortDescription: `Syllabus notes for ${dbUnit.unitName}`,
        estimatedReadTimeMinutes: 15,
        syllabusTopics: [],
        overview: `Comprehensive academic study notes for Unit ${dbUnit.unitNumber}.`,
        learningObjectives: [],
        sections: [],
        commonMisunderstandings: [],
        revisionPoints: [],
        summaryPoints: [],
        counts: { mcqs: 0, subjective: 0, flashcards: 0 },
        navigation: {
          prevUnit: unitNum > 1 ? unitNum - 1 : null,
          nextUnit: unitNum < 5 ? unitNum + 1 : null,
          subjectUrl: `/subjects/${code}`
        }
      }
    });
  } catch (error: any) {
    console.error(`[Academic] Error loading unit notes for ${code} Unit ${unitNum}:`, error);
    res.status(500).json({ message: "Failed to load unit notes." });
  }
});

/**
 * GET /api/academic/subjects/:code/units/:unitNumber/mcqs
 * Fetch all MCQs for the unit with pedagogical explanations.
 */
router.get(["/api/academic/subjects/:code/units/:unitNumber/mcqs", "/academic/subjects/:code/units/:unitNumber/mcqs"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();
  const unitNum = parseInt(paramStr(req.params.unitNumber), 10);

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    if (code === "AEE103") {
      const uData = aee103CompleteSubject.units.find((u: any) => u.unitNumber === unitNum);
      if (!uData) {
        return res.status(404).json({ message: `Unit ${unitNum} MCQs not found.` });
      }

      return res.json({
        subjectCode: code,
        subjectName: subj.name,
        unitNumber: unitNum,
        unitTitle: uData.title,
        totalQuestions: uData.mcqs.length,
        questions: uData.mcqs.map((m: any) => ({
          id: m.id,
          questionText: m.questionText,
          optionA: m.options.A,
          optionB: m.options.B,
          optionC: m.options.C,
          optionD: m.options.D,
          options: m.options,
          correctOption: m.correctOption,
          explanation: m.explanation,
          topic: m.syllabusTopic,
          difficulty: m.difficulty
        }))
      });
    }

    res.json({ subjectCode: code, unitNumber: unitNum, totalQuestions: 0, questions: [] });
  } catch (error: any) {
    console.error(`[Academic] Error loading MCQs:`, error);
    res.status(500).json({ message: "Failed to load MCQs." });
  }
});

/**
 * GET /api/academic/subjects/:code/units/:unitNumber/subjective
 * Fetch all Subjective Questions with model answers and user drafts.
 */
router.get(["/api/academic/subjects/:code/units/:unitNumber/subjective", "/academic/subjects/:code/units/:unitNumber/subjective"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();
  const unitNum = parseInt(paramStr(req.params.unitNumber), 10);

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    if (code === "AEE103") {
      const uData = aee103CompleteSubject.units.find((u: any) => u.unitNumber === unitNum);
      if (!uData) {
        return res.status(404).json({ message: `Unit ${unitNum} subjective questions not found.` });
      }

      // Query DB subjective questions to get primary keys
      const dbSqList = await db
        .select()
        .from(subjectiveQuestions)
        .where(eq(subjectiveQuestions.subjectId, subj.id));

      // Query user drafts if authenticated
      const userDraftMap = new Map<number, any>();
      if (isUserAuthenticated(req) && req.user) {
        const userDrafts = await db
          .select()
          .from(userSubjectiveAnswers)
          .where(eq(userSubjectiveAnswers.userId, req.user.id));

        for (const draft of userDrafts) {
          userDraftMap.set(draft.questionId, draft);
        }
      }

      const enrichedQuestions = uData.subjectiveQuestions.map((sq: any, idx: number) => {
        const matchingDb = dbSqList.find((dbq: any) => dbq.statuteOrCitation === sq.id) || dbSqList[idx];
        const dbId = matchingDb ? matchingDb.id : idx + 1;
        const userDraft = userDraftMap.get(dbId);

        return {
          id: dbId,
          codeId: sq.id,
          questionType: sq.questionType,
          maxMarks: sq.maxMarks,
          difficulty: sq.difficulty,
          syllabusTopic: sq.syllabusTopic,
          questionText: sq.questionText,
          contextScenario: sq.contextScenario,
          modelAnswer: sq.modelAnswer,
          outlinePoints: sq.outlinePoints,
          studentAnswer: userDraft?.studentAnswer || "",
          selfRating: userDraft?.selfRating || null,
          isBookmarked: Boolean(userDraft?.isBookmarked)
        };
      });

      return res.json({
        subjectCode: code,
        subjectName: subj.name,
        unitNumber: unitNum,
        unitTitle: uData.title,
        totalQuestions: enrichedQuestions.length,
        questions: enrichedQuestions
      });
    }

    res.json({ subjectCode: code, unitNumber: unitNum, totalQuestions: 0, questions: [] });
  } catch (error: any) {
    console.error(`[Academic] Error loading subjective questions:`, error);
    res.status(500).json({ message: "Failed to load subjective questions." });
  }
});

/**
 * POST /api/academic/subjective/:questionId/draft
 * Save student draft response, self-rating, and bookmark.
 */
router.post(["/api/academic/subjective/:questionId/draft", "/academic/subjective/:questionId/draft"], async (req: Request, res: Response) => {
  if (!isUserAuthenticated(req) || !req.user) {
    return res.status(401).json({ message: "Authentication required to save draft." });
  }

  const questionId = parseInt(paramStr(req.params.questionId), 10);
  const { studentAnswer, selfRating, isBookmarked } = req.body;

  if (isNaN(questionId)) {
    return res.status(400).json({ message: "Invalid questionId." });
  }

  try {
    const [existing] = await db
      .select()
      .from(userSubjectiveAnswers)
      .where(
        and(
          eq(userSubjectiveAnswers.userId, req.user.id),
          eq(userSubjectiveAnswers.questionId, questionId)
        )
      );

    if (existing) {
      const [updated] = await db
        .update(userSubjectiveAnswers)
        .set({
          studentAnswer: studentAnswer !== undefined ? studentAnswer : existing.studentAnswer,
          selfRating: selfRating !== undefined ? selfRating : existing.selfRating,
          isBookmarked: isBookmarked !== undefined ? isBookmarked : existing.isBookmarked,
          updatedAt: new Date()
        })
        .where(eq(userSubjectiveAnswers.id, existing.id))
        .returning();

      return res.json({ success: true, draft: updated });
    }

    const [inserted] = await db
      .insert(userSubjectiveAnswers)
      .values({
        userId: req.user.id,
        questionId,
        studentAnswer: studentAnswer || "",
        selfRating: selfRating || null,
        isBookmarked: Boolean(isBookmarked)
      })
      .returning();

    res.status(201).json({ success: true, draft: inserted });
  } catch (error: any) {
    console.error("[Academic] Failed to save subjective draft:", error);
    res.status(500).json({ message: "Failed to save draft." });
  }
});

/**
 * GET /api/academic/subjects/:code/units/:unitNumber/flashcards
 * Fetch flashcards for the unit with Spaced Repetition (SM-2) state.
 */
router.get(["/api/academic/subjects/:code/units/:unitNumber/flashcards", "/academic/subjects/:code/units/:unitNumber/flashcards"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();
  const unitNum = parseInt(paramStr(req.params.unitNumber), 10);

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    if (code === "AEE103") {
      const uData = aee103CompleteSubject.units.find((u: any) => u.unitNumber === unitNum);
      if (!uData) {
        return res.status(404).json({ message: `Unit ${unitNum} flashcards not found.` });
      }

      // Query DB flashcard deck
      const [dbUnit] = await db
        .select()
        .from(units)
        .where(
          and(
            eq(units.subjectId, subj.id),
            eq(units.unitNumber, unitNum)
          )
        );

      let dbCards: any[] = [];
      if (dbUnit) {
        const [deck] = await db
          .select()
          .from(flashcardDecks)
          .where(
            and(
              eq(flashcardDecks.subjectId, subj.id),
              eq(flashcardDecks.unitId, dbUnit.id)
            )
          );

        if (deck) {
          dbCards = await db
            .select()
            .from(flashcards)
            .where(eq(flashcards.deckId, deck.id))
            .orderBy(flashcards.orderIndex);
        }
      }

      // Query user reviews if authenticated
      const userReviewMap = new Map<number, any>();
      if (isUserAuthenticated(req) && req.user) {
        const userReviews = await db
          .select()
          .from(userFlashcardReviews)
          .where(eq(userFlashcardReviews.userId, req.user.id));

        for (const rev of userReviews) {
          userReviewMap.set(rev.cardId, rev);
        }
      }

      const enrichedCards = uData.flashcards.map((fc: any, idx: number) => {
        const matchingDbCard = dbCards[idx];
        const dbId = matchingDbCard ? matchingDbCard.id : idx + 1;
        const userRev = userReviewMap.get(dbId);

        return {
          id: dbId,
          codeId: fc.id,
          front: fc.front,
          back: fc.back,
          hint: fc.hint,
          orderIndex: idx,
          isLearned: Boolean(userRev?.isLearned),
          repetitions: userRev?.repetitions || 0,
          intervalDays: userRev?.intervalDays || 0
        };
      });

      return res.json({
        subjectCode: code,
        subjectName: subj.name,
        unitNumber: unitNum,
        unitTitle: uData.title,
        totalCards: enrichedCards.length,
        cards: enrichedCards
      });
    }

    res.json({ subjectCode: code, unitNumber: unitNum, totalCards: 0, cards: [] });
  } catch (error: any) {
    console.error(`[Academic] Error loading flashcards:`, error);
    res.status(500).json({ message: "Failed to load flashcards." });
  }
});

/**
 * POST /api/academic/flashcards/:cardId/review
 * Record spaced repetition review outcome using SM-2 interval algorithm.
 */
router.post(["/api/academic/flashcards/:cardId/review", "/academic/flashcards/:cardId/review"], async (req: Request, res: Response) => {
  if (!isUserAuthenticated(req) || !req.user) {
    return res.status(401).json({ message: "Authentication required to review cards." });
  }

  const cardId = parseInt(paramStr(req.params.cardId), 10);
  const { isLearned, quality = 4 } = req.body; // quality: 0 to 5

  if (isNaN(cardId)) {
    return res.status(400).json({ message: "Invalid cardId." });
  }

  try {
    const [existing] = await db
      .select()
      .from(userFlashcardReviews)
      .where(
        and(
          eq(userFlashcardReviews.userId, req.user.id),
          eq(userFlashcardReviews.cardId, cardId)
        )
      );

    const now = new Date();
    const learned = Boolean(isLearned !== undefined ? isLearned : quality >= 3);

    if (existing) {
      const reps = learned ? existing.repetitions + 1 : 0;
      const interval = reps === 0 ? 0 : reps === 1 ? 1 : reps === 2 ? 6 : Math.round(existing.intervalDays * existing.easeFactor);
      const nextDate = new Date(now.getTime() + interval * 86400000);

      const [updated] = await db
        .update(userFlashcardReviews)
        .set({
          isLearned: learned,
          repetitions: reps,
          intervalDays: interval,
          lastReviewedAt: now,
          nextReviewDate: nextDate
        })
        .where(eq(userFlashcardReviews.id, existing.id))
        .returning();

      return res.json({ success: true, review: updated });
    }

    const [inserted] = await db
      .insert(userFlashcardReviews)
      .values({
        userId: req.user.id,
        cardId,
        isLearned: learned,
        repetitions: learned ? 1 : 0,
        intervalDays: learned ? 1 : 0,
        easeFactor: 2.5,
        lastReviewedAt: now,
        nextReviewDate: new Date(now.getTime() + (learned ? 86400000 : 0))
      })
      .returning();

    res.status(201).json({ success: true, review: inserted });
  } catch (error: any) {
    console.error("[Academic] Failed to record flashcard review:", error);
    res.status(500).json({ message: "Failed to record review." });
  }
});

/**
 * GET /api/academic/subjects/:code/practicals
 * Return all 12 syllabus practical exercises with complete procedures.
 */
router.get(["/api/academic/subjects/:code/practicals", "/academic/subjects/:code/practicals"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();

  try {
    if (code === "AEE103") {
      const enrichedPracticals = aee103CompleteSubject.metadata.practicals.map((p: any) => ({
        ...p,
        practicalNumber: p.id,
        category: "Laboratory & Field Activity",
        objective: Array.isArray(p.objectives) ? p.objectives.join(" ") : p.objectives,
        materials: Array.isArray(p.materialsRequired) ? p.materialsRequired.join(", ") : p.materialsRequired,
        procedure: p.procedureSteps,
        observations: Array.isArray(p.observationsAndRecording) ? p.observationsAndRecording.join(" ") : p.observationsAndRecording,
        reflectionQuestions: p.reflectionQuestions,
        submissionGuidance: p.submissionGuidance
      }));

      return res.json({
        subjectCode: "AEE103",
        subjectName: aee103CompleteSubject.metadata.name,
        totalPracticals: enrichedPracticals.length,
        practicals: enrichedPracticals
      });
    }

    res.json({ subjectCode: code, totalPracticals: 0, practicals: [] });
  } catch (error: any) {
    console.error(`[Academic] Error loading practicals:`, error);
    res.status(500).json({ message: "Failed to load practicals." });
  }
});

/**
 * GET /api/academic/subjects/:code/progress
 * Real, calculated student progress derived from database events.
 */
router.get(["/api/academic/subjects/:code/progress", "/academic/subjects/:code/progress"], async (req: Request, res: Response) => {
  const code = paramStr(req.params.code).toUpperCase();

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subj) {
      return res.status(404).json({ message: `Subject ${code} not found.` });
    }

    let unitProgressList = [1, 2, 3, 4, 5, 6].map((num) => ({
      unitNumber: num,
      notesRead: false,
      mcqsCompleted: 0,
      totalMcqs: 60,
      subjectiveAnswered: 0,
      totalSubjective: 20,
      flashcardsLearned: 0,
      totalFlashcards: 20,
      unitPercent: 0
    }));

    if (isUserAuthenticated(req) && req.user) {
      // 1. Notes read activity from studentActivityEvents
      const readEvents = await db
        .select()
        .from(studentActivityEvents)
        .where(
          and(
            eq(studentActivityEvents.userId, req.user.id),
            eq(studentActivityEvents.courseId, subj.id),
            eq(studentActivityEvents.eventType, "RESOURCE_OPENED")
          )
        );

      const readUnits = new Set<number>();
      for (const ev of readEvents) {
        if (ev.metadata && typeof ev.metadata === "object" && (ev.metadata as any).unitNumber) {
          readUnits.add(Number((ev.metadata as any).unitNumber));
        }
      }

      // 2. Subjective drafts
      const userDrafts = await db
        .select()
        .from(userSubjectiveAnswers)
        .innerJoin(subjectiveQuestions, eq(userSubjectiveAnswers.questionId, subjectiveQuestions.id))
        .where(
          and(
            eq(userSubjectiveAnswers.userId, req.user.id),
            eq(subjectiveQuestions.subjectId, subj.id)
          )
        );

      const dbUnits = await db.select().from(units).where(eq(units.subjectId, subj.id));
      const unitIdToNum = new Map<number, number>();
      for (const du of dbUnits) {
        unitIdToNum.set(du.id, du.unitNumber);
      }

      const subjectiveCountPerUnit = new Map<number, number>();
      for (const d of userDrafts) {
        const uNum = d.subjective_questions.unitId ? unitIdToNum.get(d.subjective_questions.unitId) || 1 : 1;
        subjectiveCountPerUnit.set(uNum, (subjectiveCountPerUnit.get(uNum) || 0) + 1);
      }

      // 3. Flashcards learned
      const userCards = await db
        .select()
        .from(userFlashcardReviews)
        .innerJoin(flashcards, eq(userFlashcardReviews.cardId, flashcards.id))
        .innerJoin(flashcardDecks, eq(flashcards.deckId, flashcardDecks.id))
        .where(
          and(
            eq(userFlashcardReviews.userId, req.user.id),
            eq(flashcardDecks.subjectId, subj.id),
            eq(userFlashcardReviews.isLearned, true)
          )
        );

      const fcCountPerUnit = new Map<number, number>();
      for (const c of userCards) {
        const uNum = c.flashcard_decks.unitId ? unitIdToNum.get(c.flashcard_decks.unitId) || 1 : 1;
        fcCountPerUnit.set(uNum, (fcCountPerUnit.get(uNum) || 0) + 1);
      }

      // Update unit progress
      unitProgressList = unitProgressList.map((up) => {
        const notesRead = readUnits.has(up.unitNumber);
        const subjectiveAnswered = subjectiveCountPerUnit.get(up.unitNumber) || 0;
        const flashcardsLearned = fcCountPerUnit.get(up.unitNumber) || 0;

        // Calculate weighted unit percentage: Notes (30%), Flashcards (30%), Subjective (40%)
        const notesScore = notesRead ? 30 : 0;
        const fcScore = Math.min(30, Math.round((flashcardsLearned / up.totalFlashcards) * 30));
        const subjScore = Math.min(40, Math.round((subjectiveAnswered / up.totalSubjective) * 40));
        const unitPercent = Math.min(100, notesScore + fcScore + subjScore);

        return {
          ...up,
          notesRead,
          subjectiveAnswered,
          flashcardsLearned,
          unitPercent
        };
      });
    }

    const overallPercent = Math.round(
      unitProgressList.reduce((acc, u) => acc + u.unitPercent, 0) / unitProgressList.length
    );

    const unitsReadCount = unitProgressList.filter((u) => u.notesRead).length;
    const mcqAttemptedCount = unitProgressList.reduce((acc, u) => acc + (u.mcqsCompleted || 0), 0);
    const subjectiveDraftsCount = unitProgressList.reduce((acc, u) => acc + (u.subjectiveAnswered || 0), 0);
    const readUnitNumbers = unitProgressList.filter((u) => u.notesRead).map((u) => u.unitNumber);

    res.json({
      subjectCode: code,
      overallPercent,
      overallPercentage: overallPercent,
      unitsReadCount,
      mcqAttemptedCount,
      subjectiveDraftsCount,
      readUnitNumbers,
      units: unitProgressList
    });
  } catch (error: any) {
    console.error("[Academic] Error calculating progress:", error);
    res.status(500).json({ message: "Failed to calculate progress." });
  }
});

/**
 * POST /api/academic/subjects/:code/units/:unitNumber/mark-read
 * Record that student read the unit notes.
 */
router.post(["/api/academic/subjects/:code/units/:unitNumber/mark-read", "/academic/subjects/:code/units/:unitNumber/mark-read"], async (req: Request, res: Response) => {
  if (!isUserAuthenticated(req) || !req.user) {
    return res.json({ success: true, guest: true });
  }

  const code = paramStr(req.params.code).toUpperCase();
  const unitNum = parseInt(paramStr(req.params.unitNumber), 10);

  try {
    const [subj] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (subj) {
      await db.insert(studentActivityEvents).values({
        userId: req.user.id,
        eventType: "RESOURCE_OPENED",
        courseId: subj.id,
        referenceId: `AEE103-U${unitNum}-NOTES`,
        metadata: { unitNumber: unitNum, subjectCode: code }
      });
    }

    res.json({ success: true });
  } catch (error: any) {
    console.error("[Academic] Failed to log read event:", error);
    res.status(500).json({ message: "Failed to log event." });
  }
});

export default router;
