import assert from "node:assert/strict";
import { inspectAcademicQuality } from "../server/services/academic-quality";

const report = inspectAcademicQuality({
  subjects: [{ id: 1, code: "AEE103", name: "Fundamentals of Extension Education" }],
  units: [{ id: 10, subjectId: 1, unitNumber: 1, unitName: "Education" }],
  topics: [{ id: 100, unitId: 10, topicName: "Formal education" }],
  questions: [
    {
      id: 1,
      subjectId: 1,
      unitId: 10,
      questionType: "MCQ",
      questionText: "Which type follows a prescribed curriculum?",
      optionA: "Formal education",
      optionB: "Formal education",
      optionC: "Informal education",
      optionD: "Non-formal education",
      correctOption: "Z",
      explanation: null,
    },
    {
      id: 2,
      subjectId: 1,
      unitId: 10,
      questionType: "MCQ",
      questionText: "Which type follows a prescribed curriculum?",
      optionA: "Formal education",
      optionB: "Non-formal education",
      optionC: "Informal education",
      optionD: "Incidental learning",
      correctOption: "A",
      explanation: "Formal education follows an organised curriculum.",
    },
  ],
  subjectiveQuestions: [{
    id: 20,
    subjectId: 1,
    unitId: 10,
    questionText: "Explain education.",
    modelAnswer: "",
    outlinePoints: [],
    maxMarks: 0,
  }],
  flashcardDecks: [{ id: 30, subjectId: 1, unitId: 10 }],
  flashcards: [
    { id: 31, deckId: 30, front: "Formal education", back: "Structured education" },
    { id: 32, deckId: 30, front: "Formal education", back: "" },
  ],
  resources: [{
    id: 40,
    subject: "UNKNOWN-SUBJECT",
    title: "",
    type: "Notes",
    url: "",
    filename: "",
    fileSize: -1,
  }],
});

const codes = new Set(report.findings.map((finding) => finding.code));
assert(codes.has("MCQ_DUPLICATE_OPTIONS"), "duplicate MCQ options are detected");
assert(codes.has("MCQ_INVALID_ANSWER_KEY"), "invalid answer keys are detected");
assert(codes.has("MCQ_MISSING_EXPLANATION"), "missing MCQ explanations are detected");
assert(codes.has("DUPLICATE_MCQ"), "duplicate MCQ prompts are detected");
assert(codes.has("SUBJECTIVE_MISSING_MODEL_ANSWER"), "missing subjective model answers are detected");
assert(codes.has("SUBJECTIVE_INVALID_MARKS"), "invalid subjective mark values are detected");
assert(codes.has("DUPLICATE_FLASHCARD_FRONT"), "duplicate flashcard prompts are detected");
assert(codes.has("FLASHCARD_EMPTY_SIDE"), "empty flashcard sides are detected");
assert(codes.has("RESOURCE_UNKNOWN_SUBJECT"), "unknown resource subjects are detected");
assert(codes.has("RESOURCE_EMPTY_URL"), "missing resource URLs are detected");
assert(report.summary.errorCount > 0, "report separates error findings");
assert(report.summary.warningCount > 0, "report separates warning findings");

console.log("Academic quality audit tests passed.");
