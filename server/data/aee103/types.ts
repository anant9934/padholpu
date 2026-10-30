export interface CourseOutcome {
  code: string;
  title: string;
  description: string;
}

export interface GradingComponent {
  component: string;
  weightage: string;
  marks: string;
  details: string;
}

export interface PracticalActivity {
  id: number;
  title: string;
  objectives: string[];
  materialsRequired: string[];
  procedureSteps: string[];
  observationsAndRecording: string[];
  reflectionQuestions: string[];
  submissionGuidance: string;
}

export interface StudyNoteSection {
  id: string;
  heading: string;
  content: string; // Markdown supported
  subsections?: {
    subheading: string;
    content: string;
    keyPoints?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export interface UnitMCQ {
  id: string; // Stable ID e.g. "AEE103-U1-MCQ01"
  syllabusTopic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questionText: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption: "A" | "B" | "C" | "D";
  explanation: string;
  tags?: string[];
}

export interface UnitSubjectiveQuestion {
  id: string; // e.g. "AEE103-U1-SUB01"
  questionType: "DEFINITION" | "SHORT_ANSWER" | "LONG_ANSWER" | "CASE_STUDY" | "COMPARISON" | "APPLICATION";
  maxMarks: number;
  difficulty: "Easy" | "Medium" | "Hard";
  syllabusTopic: string;
  questionText: string;
  contextScenario?: string;
  modelAnswer: string;
  outlinePoints: string[];
}

export interface UnitFlashcard {
  id: string; // e.g. "AEE103-U1-FC01"
  front: string; // Concept / Term / Question
  back: string;  // Core definition / Explanation
  hint?: string;
  syllabusTopic: string;
}

export interface UnitContent {
  unitNumber: number;
  title: string;
  shortDescription: string;
  estimatedReadTimeMinutes: number;
  syllabusTopics: string[];
  notes: {
    learningObjectives: string[];
    sections: StudyNoteSection[];
    keyTakeaways: string[];
    commonMisunderstandings: {
      myth: string;
      reality: string;
    }[];
    summary: string;
  };
  mcqs: UnitMCQ[];
  subjectiveQuestions: UnitSubjectiveQuestion[];
  flashcards: UnitFlashcard[];
}

export interface SubjectMetadata {
  code: string;
  name: string;
  programmeCode: string;
  programmeName: string;
  semester: number;
  credits: number;
  ltp: string;
  courseCategory: string;
  syllabusPdfUrl: string;
  overview: string;
  courseOutcomes: CourseOutcome[];
  gradingStructure: GradingComponent[];
  gradingDisclosure?: string;
  textbooks: {
    title: string;
    author: string;
    note: string;
  }[];
  practicals: PracticalActivity[];
}
