export type AcademicQualitySeverity = "ERROR" | "WARNING";

export interface AcademicQualityFinding {
  code: string;
  severity: AcademicQualitySeverity;
  entityType: "SUBJECT" | "UNIT" | "TOPIC" | "MCQ" | "SUBJECTIVE" | "FLASHCARD" | "RESOURCE";
  entityId: number;
  subjectCode?: string;
  unitNumber?: number;
  message: string;
}

export interface AcademicQualityInput {
  subjects: Array<{ id: number; code: string; name?: string }>;
  units: Array<{ id: number; subjectId: number; unitNumber: number; unitName?: string }>;
  topics: Array<{ id: number; unitId: number; topicName: string }>;
  questions: Array<{
    id: number;
    subjectId?: number | null;
    unitId?: number | null;
    subject?: string;
    unit?: string;
    questionType?: string | null;
    questionText?: string | null;
    optionA?: string | null;
    optionB?: string | null;
    optionC?: string | null;
    optionD?: string | null;
    correctOption?: string | null;
    explanation?: string | null;
  }>;
  subjectiveQuestions: Array<{
    id: number;
    subjectId?: number | null;
    unitId?: number | null;
    questionText?: string | null;
    modelAnswer?: string | null;
    outlinePoints?: unknown;
    maxMarks?: number | null;
  }>;
  flashcards: Array<{
    id: number;
    deckId: number;
    front?: string | null;
    back?: string | null;
  }>;
  flashcardDecks: Array<{ id: number; subjectId?: number | null; unitId?: number | null }>;
  resources: Array<{
    id: number;
    subject?: string | null;
    title?: string | null;
    type?: string | null;
    url?: string | null;
    filename?: string | null;
    fileSize?: number | null;
  }>;
}

function normalizeContent(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function isEmpty(value: unknown): boolean {
  return typeof value !== "string" || value.trim().length === 0;
}

/**
 * Read-only deterministic academic quality scan.
 * Findings are suggestions for human review; this function never edits source data.
 */
export function inspectAcademicQuality(input: AcademicQualityInput) {
  const findings: AcademicQualityFinding[] = [];
  const subjectsById = new Map(input.subjects.map((subject) => [subject.id, subject]));
  const unitsById = new Map(input.units.map((unit) => [unit.id, unit]));
  const decksById = new Map(input.flashcardDecks.map((deck) => [deck.id, deck]));
  const subjectCodeFor = (subjectId?: number | null) =>
    subjectId ? subjectsById.get(subjectId)?.code : undefined;

  const add = (
    code: string,
    severity: AcademicQualitySeverity,
    entityType: AcademicQualityFinding["entityType"],
    entityId: number,
    message: string,
    subjectCode?: string,
    unitNumber?: number
  ) => findings.push({ code, severity, entityType, entityId, message, subjectCode, unitNumber });

  // Unit/topic integrity.
  const topicsByUnit = new Map<number, Array<{ id: number; topicName: string }>>();
  for (const topic of input.topics) {
    const unit = unitsById.get(topic.unitId);
    if (!unit) {
      add("TOPIC_ORPHANED", "ERROR", "TOPIC", topic.id, "Topic points to a missing unit.");
      continue;
    }
    const list = topicsByUnit.get(topic.unitId) || [];
    list.push(topic);
    topicsByUnit.set(topic.unitId, list);
    if (isEmpty(topic.topicName)) {
      add("TOPIC_EMPTY_NAME", "ERROR", "TOPIC", topic.id, "Topic has no title.", subjectCodeFor(unit.subjectId), unit.unitNumber);
    }
  }

  for (const unit of input.units) {
    if (!subjectsById.has(unit.subjectId)) {
      add("UNIT_ORPHANED", "ERROR", "UNIT", unit.id, "Unit points to a missing subject.");
    }
    const topicList = topicsByUnit.get(unit.id) || [];
    if (topicList.length === 0) {
      add("UNIT_WITHOUT_TOPICS", "WARNING", "UNIT", unit.id, "No syllabus topics are mapped to this unit.", subjectCodeFor(unit.subjectId), unit.unitNumber);
    }
    const seenTopics = new Set<string>();
    for (const topic of topicList) {
      const key = normalizeContent(topic.topicName);
      if (key && seenTopics.has(key)) {
        add("DUPLICATE_TOPIC", "WARNING", "TOPIC", topic.id, "A normalized duplicate topic exists in the same unit.", subjectCodeFor(unit.subjectId), unit.unitNumber);
      }
      if (key) seenTopics.add(key);
    }
  }

  // MCQ answer-key, explanation, relationship, and duplicate checks.
  const seenMcqs = new Map<string, number>();
  for (const question of input.questions) {
    const unit = question.unitId ? unitsById.get(question.unitId) : undefined;
    const subjectCode = subjectCodeFor(question.subjectId) || question.subject;
    const unitNumber = unit?.unitNumber;

    if (question.subjectId && !subjectsById.has(question.subjectId)) {
      add("MCQ_ORPHANED_SUBJECT", "ERROR", "MCQ", question.id, "MCQ points to a missing subject.", subjectCode);
    }
    if (question.unitId && !unit) {
      add("MCQ_ORPHANED_UNIT", "ERROR", "MCQ", question.id, "MCQ points to a missing unit.", subjectCode);
    } else if (unit && question.subjectId && unit.subjectId !== question.subjectId) {
      add("MCQ_CROSS_SUBJECT", "ERROR", "MCQ", question.id, "MCQ subject does not match the subject owning its unit.", subjectCode, unitNumber);
    }
    if (isEmpty(question.questionText)) {
      add("MCQ_EMPTY_PROMPT", "ERROR", "MCQ", question.id, "MCQ has no question text.", subjectCode, unitNumber);
    }

    if (!question.questionType || question.questionType.toUpperCase() === "MCQ") {
      const options = [question.optionA, question.optionB, question.optionC, question.optionD];
      if (options.some(isEmpty)) {
        add("MCQ_MISSING_OPTION", "ERROR", "MCQ", question.id, "Single-correct MCQ must have four non-empty options.", subjectCode, unitNumber);
      } else {
        const normalizedOptions = options.map(normalizeContent);
        if (new Set(normalizedOptions).size !== normalizedOptions.length) {
          add("MCQ_DUPLICATE_OPTIONS", "WARNING", "MCQ", question.id, "Two or more answer options contain identical normalized text.", subjectCode, unitNumber);
        }
      }
      if (!["A", "B", "C", "D"].includes(String(question.correctOption || "").trim().toUpperCase())) {
        add("MCQ_INVALID_ANSWER_KEY", "ERROR", "MCQ", question.id, "Correct option must be A, B, C or D.", subjectCode, unitNumber);
      }
      if (isEmpty(question.explanation)) {
        add("MCQ_MISSING_EXPLANATION", "WARNING", "MCQ", question.id, "MCQ has no explanation for the answer.", subjectCode, unitNumber);
      }
    }

    const normalizedQuestion = normalizeContent(question.questionText);
    if (normalizedQuestion) {
      const key = `${question.subjectId ?? question.subject ?? "unknown"}:${question.unitId ?? question.unit ?? "unknown"}:${normalizedQuestion}`;
      const originalId = seenMcqs.get(key);
      if (originalId !== undefined) {
        add("DUPLICATE_MCQ", "WARNING", "MCQ", question.id, `Duplicate or near-identical prompt candidate; compare with question #${originalId}.`, subjectCode, unitNumber);
      } else {
        seenMcqs.set(key, question.id);
      }
    }
  }

  // Subjective answer quality.
  const seenSubjective = new Map<string, number>();
  for (const question of input.subjectiveQuestions) {
    const unit = question.unitId ? unitsById.get(question.unitId) : undefined;
    const subjectCode = subjectCodeFor(question.subjectId);
    if (question.subjectId && !subjectsById.has(question.subjectId)) {
      add("SUBJECTIVE_ORPHANED_SUBJECT", "ERROR", "SUBJECTIVE", question.id, "Subjective question points to a missing subject.", subjectCode);
    }
    if (question.unitId && !unit) {
      add("SUBJECTIVE_ORPHANED_UNIT", "ERROR", "SUBJECTIVE", question.id, "Subjective question points to a missing unit.", subjectCode);
    } else if (unit && question.subjectId && unit.subjectId !== question.subjectId) {
      add("SUBJECTIVE_CROSS_SUBJECT", "ERROR", "SUBJECTIVE", question.id, "Subjective question subject does not match its unit.", subjectCode, unit.unitNumber);
    }
    if (isEmpty(question.questionText)) {
      add("SUBJECTIVE_EMPTY_PROMPT", "ERROR", "SUBJECTIVE", question.id, "Subjective question has no prompt.", subjectCode, unit?.unitNumber);
    }
    if (isEmpty(question.modelAnswer)) {
      add("SUBJECTIVE_MISSING_MODEL_ANSWER", "ERROR", "SUBJECTIVE", question.id, "Subjective question has no model answer.", subjectCode, unit?.unitNumber);
    }
    if (!Array.isArray(question.outlinePoints) || question.outlinePoints.length === 0) {
      add("SUBJECTIVE_MISSING_OUTLINE", "WARNING", "SUBJECTIVE", question.id, "No marking-outline points are recorded.", subjectCode, unit?.unitNumber);
    }
    if (!Number.isFinite(Number(question.maxMarks)) || Number(question.maxMarks) <= 0) {
      add("SUBJECTIVE_INVALID_MARKS", "WARNING", "SUBJECTIVE", question.id, "Question has no positive maximum mark value.", subjectCode, unit?.unitNumber);
    }

    const normalized = normalizeContent(question.questionText);
    if (normalized) {
      const key = `${question.subjectId ?? "unknown"}:${question.unitId ?? "unknown"}:${normalized}`;
      const originalId = seenSubjective.get(key);
      if (originalId !== undefined) {
        add("DUPLICATE_SUBJECTIVE", "WARNING", "SUBJECTIVE", question.id, `Duplicate prompt candidate; compare with question #${originalId}.`, subjectCode, unit?.unitNumber);
      } else {
        seenSubjective.set(key, question.id);
      }
    }
  }

  // Flashcard validity and duplicate fronts per deck.
  const cardsByDeck = new Map<number, Set<string>>();
  for (const card of input.flashcards) {
    const deck = decksById.get(card.deckId);
    const subjectCode = subjectCodeFor(deck?.subjectId);
    const unitNumber = deck?.unitId ? unitsById.get(deck.unitId)?.unitNumber : undefined;
    if (!deck) {
      add("FLASHCARD_ORPHANED_DECK", "ERROR", "FLASHCARD", card.id, "Flashcard points to a missing deck.");
    }
    if (isEmpty(card.front) || isEmpty(card.back)) {
      add("FLASHCARD_EMPTY_SIDE", "ERROR", "FLASHCARD", card.id, "Flashcard must have both a front and a back.", subjectCode, unitNumber);
    }
    const normalizedFront = normalizeContent(card.front);
    if (normalizedFront) {
      const seen = cardsByDeck.get(card.deckId) || new Set<string>();
      if (seen.has(normalizedFront)) {
        add("DUPLICATE_FLASHCARD_FRONT", "WARNING", "FLASHCARD", card.id, "Duplicate flashcard front detected within the same deck.", subjectCode, unitNumber);
      }
      seen.add(normalizedFront);
      cardsByDeck.set(card.deckId, seen);
    }
  }

  // Resource metadata checks. Do not infer a publication status from uploader identity.
  const subjectByCode = new Map(input.subjects.map((subject) => [subject.code.toUpperCase(), subject]));
  for (const resource of input.resources) {
    const subject = subjectByCode.get(String(resource.subject || "").trim().toUpperCase());
    if (!subject && !isEmpty(resource.subject)) {
      add("RESOURCE_UNKNOWN_SUBJECT", "WARNING", "RESOURCE", resource.id, "Resource subject code/name does not match a registered subject.");
    }
    if (isEmpty(resource.title)) add("RESOURCE_EMPTY_TITLE", "ERROR", "RESOURCE", resource.id, "Resource title is empty.", subject?.code);
    if (isEmpty(resource.url)) add("RESOURCE_EMPTY_URL", "ERROR", "RESOURCE", resource.id, "Resource URL is empty.", subject?.code);
    if (isEmpty(resource.filename)) add("RESOURCE_MISSING_FILENAME", "WARNING", "RESOURCE", resource.id, "Resource filename is missing.", subject?.code);
    if (!Number.isFinite(Number(resource.fileSize)) || Number(resource.fileSize) < 0) {
      add("RESOURCE_INVALID_SIZE", "WARNING", "RESOURCE", resource.id, "Resource file size is missing or invalid.", subject?.code);
    }
  }

  const errorCount = findings.filter((finding) => finding.severity === "ERROR").length;
  const warningCount = findings.length - errorCount;
  return {
    summary: {
      totalFindings: findings.length,
      errorCount,
      warningCount,
      subjectsScanned: input.subjects.length,
      unitsScanned: input.units.length,
      topicsScanned: input.topics.length,
      mcqsScanned: input.questions.length,
      subjectiveQuestionsScanned: input.subjectiveQuestions.length,
      flashcardsScanned: input.flashcards.length,
      resourcesScanned: input.resources.length,
    },
    findings,
    generatedAt: new Date().toISOString(),
  };
}
