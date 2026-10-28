import { db } from "../db";
import {
  academicSchools,
  programmes,
  programmeSubjects,
  subjects,
  units,
  resources,
  questions,
  quizzes,
  subjectiveQuestions,
  flashcardDecks,
  flashcards,
  adminLogs,
} from "../../shared/schema";
import { eq, and, sql } from "drizzle-orm";
import {
  SEED_PROGRAMMES,
  SEED_SCHOOLS,
  SEED_MULTIDISCIPLINARY_SUBJECTS,
} from "./academic-multidisciplinary";

export type AllowedResourceType =
  | "Notes"
  | "MCQ"
  | "Subjective"
  | "Case Study"
  | "Legal Case Brief"
  | "Formula Sheet"
  | "Laboratory Guide"
  | "Fieldwork Guide"
  | "Flashcard"
  | "Previous Year Paper";

export const ALLOWED_RESOURCE_TYPES: AllowedResourceType[] = [
  "Notes",
  "MCQ",
  "Subjective",
  "Case Study",
  "Legal Case Brief",
  "Formula Sheet",
  "Laboratory Guide",
  "Fieldwork Guide",
  "Flashcard",
  "Previous Year Paper",
];

export const ALLOWED_PROVENANCES = [
  "OFFICIAL_SYLLABUS",
  "ADMIN_CURATED",
  "STUDENT_CONTRIBUTED",
  "ACADEMIC_REFERENCE",
  "AI_SUPPLEMENTARY",
] as const;

export type AllowedProvenance = typeof ALLOWED_PROVENANCES[number];

export interface ResourceImportRow {
  subjectCode: string;
  programmeCode?: string;
  semester?: number | string;
  unitNumber?: number | string;
  resourceType: AllowedResourceType | string;
  title: string;
  description?: string;
  content?: string;
  url?: string;
  sourceProvenance?: "OFFICIAL_SYLLABUS" | "ADMIN_CURATED" | "STUDENT_CONTRIBUTED" | "ACADEMIC_REFERENCE" | string;
  author?: string;
  publicationStatus?: "published" | "draft" | "under_review" | string;

  // MCQ specific
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctOption?: "A" | "B" | "C" | "D" | string;
  explanation?: string;

  // Subjective specific
  modelAnswer?: string;
  contextScenario?: string;
  statuteOrCitation?: string;
  maxMarks?: number | string;
  difficulty?: "Easy" | "Medium" | "Hard" | string;

  // Flashcard specific
  front?: string;
  back?: string;
}

export interface ResourceValidationError {
  row: number;
  field: string;
  message: string;
  value?: any;
}

export interface ResourceValidationResult {
  valid: boolean;
  totalRows: number;
  validRowsCount: number;
  errorRowsCount: number;
  errors: ResourceValidationError[];
  preview: Array<{
    rowNumber: number;
    subjectCode: string;
    programmeCode?: string;
    resourceType: string;
    title: string;
    unitNumber: number;
    sourceProvenance: string;
    status: "VALID" | "INVALID";
    issues: string[];
  }>;
  summary: {
    notesCount: number;
    mcqCount: number;
    subjectiveCount: number;
    flashcardCount: number;
    caseStudyCount: number;
    otherCount: number;
  };
}

export class ResourceImportService {
  /**
   * Validate a batch of academic resources before import.
   */
  static async validate(rows: ResourceImportRow[]): Promise<ResourceValidationResult> {
    const errors: ResourceValidationError[] = [];
    const preview: ResourceValidationResult["preview"] = [];

    if (!Array.isArray(rows) || rows.length === 0) {
      return {
        valid: false,
        totalRows: 0,
        validRowsCount: 0,
        errorRowsCount: 0,
        errors: [{ row: 0, field: "rows", message: "Resource import payload is empty or not an array." }],
        preview: [],
        summary: { notesCount: 0, mcqCount: 0, subjectiveCount: 0, flashcardCount: 0, caseStudyCount: 0, otherCount: 0 },
      };
    }

    if (rows.length > 500) {
      return {
        valid: false,
        totalRows: rows.length,
        validRowsCount: 0,
        errorRowsCount: 1,
        errors: [{ row: 0, field: "rows", message: "Batch size exceeds limit of 500 resources per import." }],
        preview: [],
        summary: { notesCount: 0, mcqCount: 0, subjectiveCount: 0, flashcardCount: 0, caseStudyCount: 0, otherCount: 0 },
      };
    }

    // Pre-fetch reference data with offline fallback
    let existingSubjects: any[] = [];
    let existingProgrammes: any[] = [];
    try {
      existingSubjects = await db.select().from(subjects);
      existingProgrammes = await db.select().from(programmes);
    } catch {
      // Offline fallback
    }

    if (existingSubjects.length === 0) {
      existingSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.map((s, idx) => ({ id: idx + 1, ...s }));
    }
    if (existingProgrammes.length === 0) {
      existingProgrammes = SEED_PROGRAMMES.map((p, idx) => ({ id: idx + 1, ...p }));
    }

    const subjMap = new Map<string, any>(existingSubjects.map((s: any) => [s.code.toUpperCase(), s]));
    const progMap = new Map<string, any>(existingProgrammes.map((p: any) => [p.code.toUpperCase(), p]));

    let notesCount = 0;
    let mcqCount = 0;
    let subjectiveCount = 0;
    let flashcardCount = 0;
    let caseStudyCount = 0;
    let otherCount = 0;

    const seenResourceTitles = new Set<string>();

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNumber = i + 1;
      const issues: string[] = [];

      // 1. Subject Code Validation
      const rawSubj = String(row.subjectCode || "").trim().toUpperCase();
      if (!rawSubj) {
        errors.push({ row: rowNumber, field: "subjectCode", message: "Subject code is required." });
        issues.push("Missing subjectCode");
      } else if (!subjMap.has(rawSubj)) {
        errors.push({
          row: rowNumber,
          field: "subjectCode",
          message: `Subject code "${rawSubj}" does not exist in the academic catalog.`,
          value: rawSubj,
        });
        issues.push(`Unknown subject "${rawSubj}"`);
      }

      // 2. Programme Code Validation (if provided)
      if (row.programmeCode) {
        const rawProg = String(row.programmeCode).trim().toUpperCase();
        if (!progMap.has(rawProg)) {
          errors.push({
            row: rowNumber,
            field: "programmeCode",
            message: `Programme "${rawProg}" does not exist.`,
            value: rawProg,
          });
          issues.push(`Unknown programme "${rawProg}"`);
        }
      }

      // 3. Resource Type Validation
      const rawType = String(row.resourceType || "").trim();
      const matchedType = ALLOWED_RESOURCE_TYPES.find((t) => t.toLowerCase() === rawType.toLowerCase());
      if (!matchedType) {
        errors.push({
          row: rowNumber,
          field: "resourceType",
          message: `Invalid resource type "${rawType}". Allowed types: ${ALLOWED_RESOURCE_TYPES.join(", ")}`,
          value: rawType,
        });
        issues.push(`Invalid resourceType "${rawType}"`);
      }

      // 4. Title Validation
      const rawTitle = String(row.title || "").trim();
      if (!rawTitle) {
        errors.push({ row: rowNumber, field: "title", message: "Resource title is required." });
        issues.push("Missing title");
      } else if (rawTitle.length < 3 || rawTitle.length > 255) {
        errors.push({ row: rowNumber, field: "title", message: "Title must be between 3 and 255 characters." });
        issues.push("Title length invalid");
      }

      // Duplicate check in batch
      const dedupeKey = `${rawSubj}:${rawType.toLowerCase()}:${rawTitle.toLowerCase()}`;
      if (seenResourceTitles.has(dedupeKey)) {
        errors.push({
          row: rowNumber,
          field: "title",
          message: `Duplicate resource "${rawTitle}" for subject ${rawSubj} found in batch.`,
        });
        issues.push("Duplicate resource in batch");
      } else {
        seenResourceTitles.add(dedupeKey);
      }

      // 5. Unit Number Validation
      const unitNum = row.unitNumber !== undefined && row.unitNumber !== "" ? Number(row.unitNumber) : 1;
      if (isNaN(unitNum) || !Number.isInteger(unitNum) || unitNum < 1 || unitNum > 10) {
        errors.push({ row: rowNumber, field: "unitNumber", message: "Unit number must be an integer between 1 and 10." });
        issues.push("Invalid unitNumber");
      }

      // 6. Source Provenance Validation
      if (row.sourceProvenance) {
        const rawProv = String(row.sourceProvenance).trim().toUpperCase();
        if (!ALLOWED_PROVENANCES.includes(rawProv as any)) {
          errors.push({
            row: rowNumber,
            field: "sourceProvenance",
            message: `Invalid source provenance "${rawProv}". Allowed: ${ALLOWED_PROVENANCES.join(", ")}`,
            value: rawProv,
          });
          issues.push(`Invalid sourceProvenance "${rawProv}"`);
        }
      }

      // 7. Type-Specific Validation
      if (matchedType === "MCQ") {
        mcqCount++;
        if (!row.optionA || !row.optionB || !row.optionC || !row.optionD) {
          errors.push({ row: rowNumber, field: "options", message: "MCQ requires optionA, optionB, optionC, and optionD." });
          issues.push("Missing MCQ options");
        }
        const opt = String(row.correctOption || "").trim().toUpperCase();
        if (!["A", "B", "C", "D"].includes(opt)) {
          errors.push({ row: rowNumber, field: "correctOption", message: "MCQ correctOption must be 'A', 'B', 'C', or 'D'." });
          issues.push("Invalid correctOption");
        }
      } else if (matchedType === "Subjective") {
        subjectiveCount++;
        if (!row.modelAnswer || String(row.modelAnswer).trim().length < 10) {
          errors.push({ row: rowNumber, field: "modelAnswer", message: "Subjective question requires a model answer (min 10 chars)." });
          issues.push("Missing or short modelAnswer");
        }
      } else if (matchedType === "Flashcard") {
        flashcardCount++;
        if (!row.front || !row.back) {
          errors.push({ row: rowNumber, field: "flashcard", message: "Flashcard requires both 'front' and 'back' fields." });
          issues.push("Missing flashcard front/back");
        }
      } else if (matchedType === "Notes") {
        notesCount++;
      } else if (matchedType === "Case Study" || matchedType === "Legal Case Brief") {
        caseStudyCount++;
      } else {
        otherCount++;
      }

      const isValid = issues.length === 0;
      preview.push({
        rowNumber,
        subjectCode: rawSubj,
        programmeCode: row.programmeCode ? String(row.programmeCode).trim().toUpperCase() : undefined,
        resourceType: matchedType || rawType,
        title: rawTitle,
        unitNumber: isNaN(unitNum) ? 1 : unitNum,
        sourceProvenance: String(row.sourceProvenance || "ADMIN_CURATED").toUpperCase(),
        status: isValid ? "VALID" : "INVALID",
        issues,
      });
    }

    const validRowsCount = preview.filter((p) => p.status === "VALID").length;
    const errorRowsCount = preview.filter((p) => p.status === "INVALID").length;

    return {
      valid: errors.length === 0,
      totalRows: rows.length,
      validRowsCount,
      errorRowsCount,
      errors,
      preview,
      summary: {
        notesCount,
        mcqCount,
        subjectiveCount,
        flashcardCount,
        caseStudyCount,
        otherCount,
      },
    };
  }

  /**
   * Apply validated resources transactionally.
   */
  static async apply(
    rows: ResourceImportRow[],
    adminUserId: number,
    adminUsername: string
  ): Promise<{
    appliedCount: number;
    createdNotes: number;
    createdMCQs: number;
    createdSubjective: number;
    createdFlashcards: number;
  }> {
    const validation = await this.validate(rows);
    if (!validation.valid) {
      throw new Error(`Cannot import invalid batch: ${validation.errorRowsCount} row error(s) detected.`);
    }

    return await db.transaction(async (tx: any) => {
      let createdNotes = 0;
      let createdMCQs = 0;
      let createdSubjective = 0;
      let createdFlashcards = 0;

      const allSubjs = await tx.select().from(subjects);
      const subjMap = new Map<string, any>(allSubjs.map((s: any) => [s.code.toUpperCase(), s]));

      for (const row of rows) {
        const rawSubj = String(row.subjectCode).trim().toUpperCase();
        const targetSubj = subjMap.get(rawSubj);
        if (!targetSubj) continue;

        const matchedType =
          ALLOWED_RESOURCE_TYPES.find((t) => t.toLowerCase() === String(row.resourceType).trim().toLowerCase()) ||
          "Notes";
        const unitNum = row.unitNumber ? Number(row.unitNumber) : 1;

        if (matchedType === "MCQ") {
          // 1. MCQ Question
          await tx.insert(questions).values({
            subjectId: targetSubj.id,
            subject: targetSubj.code,
            unit: `Unit ${unitNum}`,
            topic: row.title,
            difficulty: String(row.difficulty || "Medium"),
            questionType: "MCQ",
            questionText: row.title,
            optionA: String(row.optionA || ""),
            optionB: String(row.optionB || ""),
            optionC: String(row.optionC || ""),
            optionD: String(row.optionD || ""),
            correctOption: String(row.correctOption || "A").toUpperCase(),
            explanation: row.explanation || `Curated exam explanation for ${targetSubj.code} Unit ${unitNum}.`,
            createdBy: adminUserId,
          });
          createdMCQs++;
        } else if (matchedType === "Subjective") {
          // 2. Subjective Question & Model Answer
          await tx.insert(subjectiveQuestions).values({
            subjectId: targetSubj.id,
            questionType: targetSubj.discipline === "LAW" ? "LEGAL_PROBLEM" : "SHORT_ANSWER",
            questionText: row.title,
            contextScenario: row.contextScenario || row.description || null,
            statuteOrCitation: row.statuteOrCitation || null,
            modelAnswer: String(row.modelAnswer),
            maxMarks: row.maxMarks ? Number(row.maxMarks) : 5,
            difficulty: String(row.difficulty || "Medium"),
            examSession: "LPU Verified Question Bank",
          });
          createdSubjective++;
        } else if (matchedType === "Flashcard") {
          // 3. Flashcards
          // Find or create flashcard deck
          const [existingDeck] = await tx
            .select()
            .from(flashcardDecks)
            .where(and(eq(flashcardDecks.subjectId, targetSubj.id), eq(flashcardDecks.title, `${targetSubj.code} Unit ${unitNum}`)));

          let deckId = existingDeck?.id;
          if (!deckId) {
            const [newDeck] = await tx
              .insert(flashcardDecks)
              .values({
                subjectId: targetSubj.id,
                title: `${targetSubj.code} Unit ${unitNum}`,
                description: `Official revision deck for ${targetSubj.name}`,
                isPublic: true,
                createdBy: adminUserId,
              })
              .returning();
            deckId = newDeck.id;
          }

          await tx.insert(flashcards).values({
            deckId,
            front: String(row.front || row.title),
            back: String(row.back || row.modelAnswer || row.description || ""),
            hint: `${targetSubj.code} Unit ${unitNum}`,
          });
          createdFlashcards++;
        } else {
          // 4. Standard Notes / Case Studies / Lab Guides / PYQs
          const isPublished = String(row.publicationStatus || "published").toLowerCase() === "published";
          await tx.insert(resources).values({
            title: row.title,
            subject: targetSubj.code,
            type: matchedType,
            url: row.url || `/resources/verified/${targetSubj.code.toLowerCase()}-unit${unitNum}`,
            filename: `${row.title.replace(/\s+/g, "_")}.pdf`,
            fileSize: 2048,
            uploaderId: adminUserId,
            uploaderName: adminUsername,
            uploaderUsername: adminUsername,
            uploadedBy: adminUserId,
            isBoosted: false,
          });
          createdNotes++;
        }
      }

      // Record administrative audit log
      await tx.insert(adminLogs).values({
        adminId: adminUserId,
        adminUsername: adminUsername,
        action: "IMPORT_ACADEMIC_RESOURCES",
        target: "ACADEMIC_REPOSITORY",
        details: {
          totalRows: rows.length,
          createdNotes,
          createdMCQs,
          createdSubjective,
          createdFlashcards,
        },
      });

      return {
        appliedCount: rows.length,
        createdNotes,
        createdMCQs,
        createdSubjective,
        createdFlashcards,
      };
    });
  }
}
