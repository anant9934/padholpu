import { db } from "../db";
import {
  academicSchools,
  programmes,
  programmeSubjects,
  subjects,
  resources,
  questions,
  subjectiveQuestions,
  flashcardDecks,
  flashcards,
  noteSubmissions,
} from "../../shared/schema";
import { eq, and, sql, desc, inArray } from "drizzle-orm";
import { SEED_PROGRAMMES, SEED_SCHOOLS, SEED_MULTIDISCIPLINARY_SUBJECTS } from "./academic-multidisciplinary";

export type ContentCoverageStatus =
  | "NO_CONTENT"
  | "CONTENT_IN_PROGRESS"
  | "MATERIAL_AVAILABLE"
  | "NEEDS_REVIEW"
  | "COVERAGE_REVIEWED";

export interface SubjectCoverageDetail {
  id: number;
  code: string;
  name: string;
  semester: number;
  discipline?: string;
  credits: number;
  publishedNotesCount: number;
  mcqCount: number;
  subjectiveCount: number;
  flashcardCount: number;
  caseStudyCount: number;
  pendingSubmissionsCount: number;
  hasAnyContent: boolean;
  lastUpdated: string | null;
}

export interface ProgrammeCoverageItem {
  programmeId: number;
  programmeCode: string;
  programmeName: string;
  schoolCode: string;
  schoolName: string;
  discipline: string;
  degree: string;
  totalSemesters: number;
  totalMappedSubjects: number;
  subjectsWithNotes: number;
  subjectsWithQuestions: number;
  subjectsWithFlashcards: number;
  subjectsWithCaseStudies: number;
  subjectsWithNoContent: number;
  pendingContributions: number;
  coveragePercentage: number;
  status: ContentCoverageStatus;
  lastContentUpdate: string | null;
  subjects: SubjectCoverageDetail[];
}

export interface ContentCoverageSummary {
  totalProgrammes: number;
  totalMappedSubjects: number;
  fullyCoveredProgrammes: number;
  partiallyCoveredProgrammes: number;
  emptyProgrammes: number;
  programmesNeedingReview: number;
  totalPublishedResources: number;
  totalQuestions: number;
  totalSubjective: number;
  totalPendingSubmissions: number;
  overallCoveragePercentage: number;
}

export interface ContentCoverageReport {
  summary: ContentCoverageSummary;
  programmes: ProgrammeCoverageItem[];
  generatedAt: string;
}

export class AcademicCoverageService {
  /**
   * Generate authoritative content coverage report across all degree programmes and mapped subjects.
   */
  static async getCoverageReport(filters?: {
    schoolCode?: string;
    programmeCode?: string;
    discipline?: string;
    status?: ContentCoverageStatus;
  }): Promise<ContentCoverageReport> {
    // 1. Fetch reference data with offline resilience
    let allSchools: any[] = [];
    let allProgs: any[] = [];
    let allMappings: any[] = [];
    let allSubjs: any[] = [];

    try {
      allSchools = await db.select().from(academicSchools);
      allProgs = await db.select().from(programmes);
      allMappings = await db.select().from(programmeSubjects);
      allSubjs = await db.select().from(subjects);
    } catch {
      // Fallback for offline / isolated unit test environments
    }

    if (allSchools.length === 0) {
      allSchools = SEED_SCHOOLS.map((s, idx) => ({ id: idx + 1, ...s }));
    }
    if (allProgs.length === 0) {
      allProgs = SEED_PROGRAMMES.map((p, idx) => ({ id: idx + 1, schoolId: 1, ...p }));
    }
    if (allSubjs.length === 0) {
      allSubjs = SEED_MULTIDISCIPLINARY_SUBJECTS.map((s, idx) => ({ id: idx + 1, ...s }));
    }

    const schoolMap = new Map<number | string, any>();
    allSchools.forEach((s: any) => {
      schoolMap.set(s.id, s);
      schoolMap.set(s.code, s);
    });

    const subjMap = new Map<number, any>(allSubjs.map((s: any) => [s.id, s]));

    // Pre-fetch actual resource records
    let resList: any[] = [];
    let qList: any[] = [];
    let subjQList: any[] = [];
    let flashcardList: any[] = [];
    let pendingNotesList: any[] = [];

    try {
      resList = await db.select().from(resources);
      qList = await db.select({ id: questions.id, subjectId: questions.subjectId, subject: questions.subject }).from(questions);
      subjQList = await db.select({ id: subjectiveQuestions.id, subjectId: subjectiveQuestions.subjectId, questionType: subjectiveQuestions.questionType }).from(subjectiveQuestions);
      flashcardList = await db.select({ id: flashcardDecks.id, subjectId: flashcardDecks.subjectId, cardCount: flashcardDecks.cardCount }).from(flashcardDecks);
      pendingNotesList = await db.select().from(noteSubmissions).where(eq(noteSubmissions.status, "pending"));
    } catch {
      // Empty collections in offline mode
    }

    const programmesResult: ProgrammeCoverageItem[] = [];

    for (const prog of allProgs) {
      const school = schoolMap.get(prog.schoolId) || schoolMap.get(prog.schoolCode) || {
        name: "LPU Faculty",
        code: "GEN",
      };

      // Mapped subjects for this programme
      const progMappings = allMappings.filter((m: any) => m.programmeId === prog.id);
      const subjectDetails: SubjectCoverageDetail[] = [];

      let progNotesCount = 0;
      let progQuestionsCount = 0;
      let progFlashcardsCount = 0;
      let progCaseStudiesCount = 0;
      let progPendingCount = 0;
      let latestTimestamp: Date | null = null;

      for (const m of progMappings) {
        const s = subjMap.get(m.subjectId);
        if (!s) continue;

        const subjCodeUpper = s.code.toUpperCase();
        const subjNameUpper = s.name.toUpperCase();

        // 1. Published Notes
        const matchingNotes = resList.filter((r: any) => {
          const rSubj = String(r.subject || "").toUpperCase();
          return rSubj === subjCodeUpper || rSubj === subjNameUpper || rSubj === prog.code.toUpperCase();
        });

        // 2. MCQs
        const matchingMCQs = qList.filter((q: any) => {
          return q.subjectId === s.id || String(q.subject || "").toUpperCase() === subjCodeUpper;
        });

        // 3. Subjective Questions
        const matchingSubjQ = subjQList.filter((sq: any) => sq.subjectId === s.id);

        // 4. Flashcards
        const matchingDecks = flashcardList.filter((fd: any) => fd.subjectId === s.id);
        const cardTotal = matchingDecks.reduce((acc: number, d: any) => acc + (d.cardCount || 10), 0);

        // 5. Case studies & practical guides
        const matchingCaseStudies = matchingNotes.filter((r: any) => {
          const typeStr = String(r.type || "").toLowerCase();
          return (
            typeStr.includes("case") ||
            typeStr.includes("brief") ||
            typeStr.includes("practical") ||
            typeStr.includes("lab") ||
            typeStr.includes("field")
          );
        });

        // 6. Pending Submissions
        const matchingPending = pendingNotesList.filter((pn: any) => pn.subjectId === s.id);

        // Timestamps
        for (const r of matchingNotes) {
          if (r.createdAt && (!latestTimestamp || new Date(r.createdAt) > latestTimestamp)) {
            latestTimestamp = new Date(r.createdAt);
          }
        }

        const hasAnyContent = matchingNotes.length > 0 || matchingMCQs.length > 0 || matchingSubjQ.length > 0;

        subjectDetails.push({
          id: s.id,
          code: s.code,
          name: s.name,
          semester: m.semester || s.semester || 1,
          discipline: s.discipline || prog.discipline,
          credits: m.credits || s.credits || 4,
          publishedNotesCount: matchingNotes.length,
          mcqCount: matchingMCQs.length,
          subjectiveCount: matchingSubjQ.length,
          flashcardCount: cardTotal,
          caseStudyCount: matchingCaseStudies.length,
          pendingSubmissionsCount: matchingPending.length,
          hasAnyContent,
          lastUpdated: latestTimestamp ? latestTimestamp.toISOString() : null,
        });

        if (matchingNotes.length > 0) progNotesCount++;
        if (matchingMCQs.length > 0 || matchingSubjQ.length > 0) progQuestionsCount++;
        if (cardTotal > 0) progFlashcardsCount++;
        if (matchingCaseStudies.length > 0) progCaseStudiesCount++;
        progPendingCount += matchingPending.length;
      }

      const totalMapped = subjectDetails.length;
      const subjectsWithContent = subjectDetails.filter((s) => s.hasAnyContent).length;
      const subjectsWithNoContent = totalMapped - subjectsWithContent;
      const coveragePercentage = totalMapped > 0 ? Math.round((subjectsWithContent / totalMapped) * 100) : 0;

      // Determine authoritative operational status
      let status: ContentCoverageStatus = "NO_CONTENT";
      if (progPendingCount > 0) {
        status = "NEEDS_REVIEW";
      } else if (totalMapped === 0 || subjectsWithContent === 0) {
        status = "NO_CONTENT";
      } else if (coveragePercentage >= 80) {
        status = "MATERIAL_AVAILABLE";
      } else {
        status = "CONTENT_IN_PROGRESS";
      }

      programmesResult.push({
        programmeId: prog.id,
        programmeCode: prog.code,
        programmeName: prog.name,
        schoolCode: school.code,
        schoolName: school.name,
        discipline: prog.discipline,
        degree: prog.degree,
        totalSemesters: prog.totalSemesters || 8,
        totalMappedSubjects: totalMapped,
        subjectsWithNotes: progNotesCount,
        subjectsWithQuestions: progQuestionsCount,
        subjectsWithFlashcards: progFlashcardsCount,
        subjectsWithCaseStudies: progCaseStudiesCount,
        subjectsWithNoContent,
        pendingContributions: progPendingCount,
        coveragePercentage,
        status,
        lastContentUpdate: latestTimestamp ? latestTimestamp.toISOString() : null,
        subjects: subjectDetails,
      });
    }

    // Apply filtering if provided
    let filtered = programmesResult;
    if (filters?.schoolCode) {
      const sc = filters.schoolCode.toUpperCase();
      filtered = filtered.filter((p) => p.schoolCode.toUpperCase() === sc);
    }
    if (filters?.programmeCode) {
      const pc = filters.programmeCode.toUpperCase();
      filtered = filtered.filter((p) => p.programmeCode.toUpperCase() === pc);
    }
    if (filters?.discipline) {
      const disc = filters.discipline.toUpperCase();
      filtered = filtered.filter((p) => p.discipline.toUpperCase() === disc);
    }
    if (filters?.status) {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Compute summary metrics across unfiltered programmes
    const totalProgrammes = programmesResult.length;
    const totalMappedSubjects = programmesResult.reduce((acc, p) => acc + p.totalMappedSubjects, 0);
    const fullyCoveredProgrammes = programmesResult.filter((p) => p.status === "MATERIAL_AVAILABLE").length;
    const partiallyCoveredProgrammes = programmesResult.filter((p) => p.status === "CONTENT_IN_PROGRESS").length;
    const emptyProgrammes = programmesResult.filter((p) => p.status === "NO_CONTENT").length;
    const programmesNeedingReview = programmesResult.filter((p) => p.status === "NEEDS_REVIEW").length;
    const totalPublishedResources = resList.length;
    const totalQuestions = qList.length;
    const totalSubjective = subjQList.length;
    const totalPendingSubmissions = pendingNotesList.length;
    const totalSubjectsWithContent = programmesResult.reduce(
      (acc, p) => acc + (p.totalMappedSubjects - p.subjectsWithNoContent),
      0
    );
    const overallCoveragePercentage =
      totalMappedSubjects > 0 ? Math.round((totalSubjectsWithContent / totalMappedSubjects) * 100) : 0;

    return {
      summary: {
        totalProgrammes,
        totalMappedSubjects,
        fullyCoveredProgrammes,
        partiallyCoveredProgrammes,
        emptyProgrammes,
        programmesNeedingReview,
        totalPublishedResources,
        totalQuestions,
        totalSubjective,
        totalPendingSubmissions,
        overallCoveragePercentage,
      },
      programmes: filtered,
      generatedAt: new Date().toISOString(),
    };
  }
}
