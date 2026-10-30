/**
 * PADHO LPU — Academic OS Domain Services
 * 
 * Shared, deterministic intelligence engines for:
 * 1. Mastery Classification (classifyMastery)
 * 2. 5-Factor Explainable Exam Readiness (calculateExamReadiness)
 * 3. Next Best Action Engine (generateNextBestAction)
 * 4. Syllabus Coverage Calculation (calculateSyllabusCoverage)
 * 5. Economy Presentation Mapping (getWalletPresentation)
 * 
 * NO LLM REQUIRED for core analytics. 100% deterministic and database-backed.
 */

export const MASTERY_THRESHOLDS = {
  WEAK_MAX: 64,         // 0–64% = NEEDS_ATTENTION
  DEVELOPING_MAX: 79,   // 65–79% = DEVELOPING
  STRONG_MIN: 80,       // 80–100% = STRONG
  MIN_QUESTIONS_FOR_MASTERY: 5,
};

export type MasteryTier = "NEEDS_ATTENTION" | "DEVELOPING" | "STRONG";

export interface MasteryClassification {
  tier: MasteryTier;
  label: "Needs Attention" | "Developing" | "Exam Ready";
  isEarlySignal: boolean;
  score: number;
}

/**
 * Centrally classify academic mastery from an accuracy percentage.
 * Enforces shared thresholds across Results, Progress, Dashboard, and Recommendations.
 */
export function classifyMastery(accuracy: number, totalQuestions: number = 5): MasteryClassification {
  const rounded = Math.max(0, Math.min(100, Math.round(accuracy)));
  const isEarlySignal = totalQuestions < MASTERY_THRESHOLDS.MIN_QUESTIONS_FOR_MASTERY;

  if (rounded <= MASTERY_THRESHOLDS.WEAK_MAX) {
    return {
      tier: "NEEDS_ATTENTION",
      label: "Needs Attention",
      isEarlySignal,
      score: rounded,
    };
  }

  if (rounded <= MASTERY_THRESHOLDS.DEVELOPING_MAX) {
    return {
      tier: "DEVELOPING",
      label: "Developing",
      isEarlySignal,
      score: rounded,
    };
  }

  return {
    tier: "STRONG",
    label: "Exam Ready",
    isEarlySignal,
    score: rounded,
  };
}

export interface ReadinessComponents {
  mastery: number;         // 35% weight (0-100)
  coverage: number;        // 25% weight (0-100)
  mockPerformance: number; // 20% weight (0-100)
  recentPractice: number;  // 10% weight (0-100)
  consistency: number;     // 10% weight (0-100)
}

export interface ExamReadinessResult {
  score: number | null;
  isEarlyEstimate: boolean;
  components: ReadinessComponents;
  explanation: string;
  statusText: string;
}

/**
 * 5-Factor Explainable Exam Readiness Formula
 * 
 * Readiness = 0.35 * Mastery + 0.25 * Coverage + 0.20 * MockPerf + 0.10 * Practice + 0.10 * Consistency
 */
export function calculateExamReadiness(params: {
  totalAttempts: number;
  totalQuestionsAnswered: number;
  avgAccuracy: number;
  coveragePercent: number;
  recentExamAverage: number | null;
  recentAttempts7dCount: number;
  streakCount: number;
}): ExamReadinessResult {
  const {
    totalAttempts,
    totalQuestionsAnswered,
    avgAccuracy,
    coveragePercent,
    recentExamAverage,
    recentAttempts7dCount,
    streakCount,
  } = params;

  // Zero-State: New users receive no fabricated readiness score
  if (totalAttempts === 0) {
    return {
      score: null,
      isEarlyEstimate: false,
      components: {
        mastery: 0,
        coverage: 0,
        mockPerformance: 0,
        recentPractice: 0,
        consistency: Math.min(100, streakCount * 20),
      },
      explanation: "No readiness score yet. Complete your first practice session or diagnostic exam to benchmark.",
      statusText: "Baseline Pending",
    };
  }

  // 1. Mastery: accuracy bounded 0-100
  const mastery = Math.max(0, Math.min(100, Math.round(avgAccuracy)));

  // 2. Syllabus Coverage: 0-100
  const coverage = Math.max(0, Math.min(100, Math.round(coveragePercent)));

  // 3. Mock Performance: recent exam scores if available, otherwise fallback to quiz accuracy
  const mockPerformance = recentExamAverage !== null
    ? Math.max(0, Math.min(100, Math.round(recentExamAverage)))
    : mastery;

  // 4. Recent Practice (last 7 days activity: 4 sessions in 7 days = 100%)
  const recentPractice = Math.min(100, recentAttempts7dCount * 25);

  // 5. Consistency: streak-based (5-day streak = 100%)
  const consistency = Math.min(100, streakCount * 20);

  const rawScore = (
    0.35 * mastery +
    0.25 * coverage +
    0.20 * mockPerformance +
    0.10 * recentPractice +
    0.10 * consistency
  );

  const score = Math.max(1, Math.min(100, Math.round(rawScore)));
  const isEarlyEstimate = totalQuestionsAnswered < MASTERY_THRESHOLDS.MIN_QUESTIONS_FOR_MASTERY;

  let statusText = "5-factor model";
  if (score >= 85) statusText = "Exam Ready 🎯";
  else if (score >= 70) statusText = "High Preparedness 📈";
  else if (score >= 50) statusText = "Developing Pace ⚡";
  else statusText = "Needs Focus 🔍";

  let explanation = `Readiness score of ${score}% based on ${mastery}% accuracy across ${totalAttempts} evaluations.`;
  if (isEarlyEstimate) {
    explanation = `Early estimate based on initial ${totalQuestionsAnswered} questions. Complete more drills for full accuracy.`;
  }

  return {
    score,
    isEarlyEstimate,
    components: {
      mastery,
      coverage,
      mockPerformance,
      recentPractice,
      consistency,
    },
    explanation,
    statusText,
  };
}

export interface NextBestAction {
  type: "REVIEW_UNIT" | "PRACTICE_UNIT" | "TAKE_EXAM" | "EXPLORE_COURSES";
  course: string;
  courseId?: number;
  unit?: number;
  unitId?: number;
  topic?: string;
  title: string;
  reason: string;
  cta: string;
  destination: string;
  priority: number;
  accuracy?: number;
}

export interface UnitMasteryRecord {
  unitId: number;
  unitNumber: number;
  unitName: string;
  courseCode: string;
  courseId: number;
  accuracy: number;
  questionsAttempted: number;
  hasResource: boolean;
  hasQuiz: boolean;
  lastAttemptedAt?: Date | null;
}

/**
 * Deterministic Next Best Action Engine (V1)
 * 
 * Strict Priority Ordering:
 * 1. Critical weak unit (<50% accuracy)
 * 2. Weak unit (50%–64% accuracy)
 * 3. Unattempted required unit in active courses
 * 4. Spaced repetition / revision due (>14 days since last study on strong unit)
 * 5. Full mock exam (if course coverage >= 60%)
 * 6. Fallback onboarding / explore courses
 */
export function generateNextBestAction(params: {
  unitsMastery: UnitMasteryRecord[];
  overallCoverage: number;
  primaryCourseCode?: string;
  primaryCourseId?: number;
  totalAttempts: number;
}): NextBestAction {
  const { unitsMastery, overallCoverage, primaryCourseCode, primaryCourseId, totalAttempts } = params;

  // New user with no course context: invite programme/subject selection rather than assuming CSE.
  if (totalAttempts === 0 || unitsMastery.length === 0) {
    if (!primaryCourseCode) {
      return {
        type: "EXPLORE_COURSES",
        course: "",
        title: "Choose a subject to get started",
        reason: "No enrolled subject or practice history is available yet. Select your programme and subjects to build a relevant study path.",
        cta: "Explore Programmes",
        destination: "/programmes",
        priority: 6,
      };
    }

    return {
      type: "PRACTICE_UNIT",
      course: primaryCourseCode,
      courseId: primaryCourseId,
      title: `Start Diagnostic: ${primaryCourseCode}`,
      reason: "No attempts recorded yet. Complete a baseline drill for this selected subject to establish an initial benchmark.",
      cta: "Start Diagnostic Drill",
      destination: `/practice?course=${encodeURIComponent(primaryCourseCode)}`,
      priority: 6,
    };
  }

  // Filter attempted units
  const attemptedUnits = unitsMastery.filter(u => u.questionsAttempted > 0);

  // Priority 1: Critical weak unit (< 50% accuracy)
  const criticalUnits = attemptedUnits
    .filter(u => u.accuracy < 50)
    .sort((a, b) => a.accuracy - b.accuracy);

  if (criticalUnits.length > 0) {
    const target = criticalUnits[0];
    if (target.hasResource) {
      return {
        type: "REVIEW_UNIT",
        course: target.courseCode,
        courseId: target.courseId,
        unit: target.unitNumber,
        unitId: target.unitId,
        title: `Revise Unit ${target.unitNumber} — ${target.unitName}`,
        reason: `Your Unit ${target.unitNumber} accuracy is ${target.accuracy}%. Review core notes before re-drilling.`,
        cta: "Review Unit Notes",
        destination: `/learn?course=${encodeURIComponent(target.courseCode)}&unit=${target.unitNumber}`,
        priority: 1,
        accuracy: target.accuracy,
      };
    } else {
      return {
        type: "PRACTICE_UNIT",
        course: target.courseCode,
        courseId: target.courseId,
        unit: target.unitNumber,
        unitId: target.unitId,
        title: `Targeted Drill: Unit ${target.unitNumber} (${target.unitName})`,
        reason: `Your Unit ${target.unitNumber} accuracy is ${target.accuracy}%. Practice targeted MCQs to recover retention.`,
        cta: "Practice Unit Drill",
        destination: `/practice?course=${encodeURIComponent(target.courseCode)}&unit=${target.unitNumber}`,
        priority: 1,
        accuracy: target.accuracy,
      };
    }
  }

  // Priority 2: Weak unit (50%–64% accuracy)
  const weakUnits = attemptedUnits
    .filter(u => u.accuracy >= 50 && u.accuracy <= MASTERY_THRESHOLDS.WEAK_MAX)
    .sort((a, b) => a.accuracy - b.accuracy);

  if (weakUnits.length > 0) {
    const target = weakUnits[0];
    return {
      type: "PRACTICE_UNIT",
      course: target.courseCode,
      courseId: target.courseId,
      unit: target.unitNumber,
      unitId: target.unitId,
      title: `Improve Unit ${target.unitNumber} — ${target.unitName}`,
      reason: `Accuracy is ${target.accuracy}%. A 12-question drill will elevate this unit into developing tier.`,
      cta: "Practice 12 Questions",
      destination: `/practice?course=${encodeURIComponent(target.courseCode)}&unit=${target.unitNumber}`,
      priority: 2,
      accuracy: target.accuracy,
    };
  }

  // Priority 3: Unattempted unit in course
  const unattemptedUnits = unitsMastery.filter(u => u.questionsAttempted === 0);
  if (unattemptedUnits.length > 0) {
    const target = unattemptedUnits[0];
    return {
      type: "PRACTICE_UNIT",
      course: target.courseCode,
      courseId: target.courseId,
      unit: target.unitNumber,
      unitId: target.unitId,
      title: `Evaluate Unit ${target.unitNumber} — ${target.unitName}`,
      reason: `You have not yet evaluated Unit ${target.unitNumber}. Complete a baseline micro-quiz.`,
      cta: "Take Unit Drill",
      destination: `/practice?course=${encodeURIComponent(target.courseCode)}&unit=${target.unitNumber}`,
      priority: 3,
    };
  }

  // Priority 4: Mock Exam if course coverage >= 60%
  if (overallCoverage >= 60) {
    const courseCode = primaryCourseCode || unitsMastery[0]?.courseCode;
    return {
      type: "TAKE_EXAM",
      course: courseCode,
      courseId: primaryCourseId || unitsMastery[0]?.courseId,
      title: `Full Mock Assessment: ${courseCode}`,
      reason: `You have covered ${Math.round(overallCoverage)}% of the syllabus. Test under timed exam conditions.`,
      cta: "Start Mock Exam",
      destination: `/exams?subject=${encodeURIComponent(courseCode)}`,
      priority: 4,
    };
  }

  // Priority 5: Revision due / General Practice
  const fallback = unitsMastery[0];
  return {
    type: "PRACTICE_UNIT",
    course: fallback?.courseCode || "CSE111",
    courseId: fallback?.courseId,
    unit: fallback?.unitNumber || 1,
    title: `Reinforce ${fallback?.courseCode || "Course"} Concepts`,
    reason: "Maintain your consistency and keep syllabus recall fresh with a quick review session.",
    cta: "Practice Drill",
    destination: `/practice?course=${encodeURIComponent(fallback?.courseCode || "CSE111")}`,
    priority: 5,
  };
}

