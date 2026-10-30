import { calculateSM2, getConceptExplanation, validateStudyPlanCurriculum } from "../server/services/academic-ecosystem";
import { generateNextBestAction } from "../server/services/academic-os";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${msg}`);
}

async function runAcademicSuite() {
  console.log("==================================================");
  console.log("   PADHO LPU 2.0 ACADEMIC ECOSYSTEM TEST SUITE   ");
  console.log("==================================================");

  // 1. SM-2 Spaced Repetition Initial Repetition
  const step1 = calculateSM2(5, 2.5, 0, 0);
  assert(step1.repetitions === 1, "First successful repetition yields repetitions = 1");
  assert(step1.intervalDays === 1, "First successful repetition yields interval = 1 day");
  assert(step1.easeFactor > 2.5, "Perfect recall (quality 5) increases ease factor");
  assert(!step1.isLearned, "Single repetition does not mark as learned");

  // 2. SM-2 Second Repetition
  const step2 = calculateSM2(4, step1.easeFactor, step1.intervalDays, step1.repetitions);
  assert(step2.repetitions === 2, "Second successful repetition yields repetitions = 2");
  assert(step2.intervalDays === 6, "Second repetition standard interval is 6 days");

  // 3. SM-2 Third Repetition (Marked Learned)
  const step3 = calculateSM2(4, step2.easeFactor, step2.intervalDays, step2.repetitions);
  assert(step3.repetitions === 3, "Third repetition yields repetitions = 3");
  assert(step3.intervalDays > 6, "Third repetition interval multiplies by ease factor");
  assert(step3.isLearned, "3 successful repetitions marks card as learned");

  // 4. SM-2 Failed Recall (Lapse)
  const lapse = calculateSM2(1, step3.easeFactor, step3.intervalDays, step3.repetitions);
  assert(lapse.repetitions === 0, "Failed recall (quality 1) resets repetitions to 0");
  assert(lapse.intervalDays === 1, "Failed recall resets interval to 1 day for next-day review");
  assert(lapse.easeFactor < step3.easeFactor, "Failed recall penalizes ease factor");

  // 5. SM-2 Ease Factor Floor (1.3 minimum)
  const floor = calculateSM2(0, 1.35, 1, 0);
  assert(floor.easeFactor === 1.3, "Ease factor cannot drop below hard minimum floor of 1.3");

  // 6. Deterministic recommendation must never assume a CSE course.
  const noCourseAction = generateNextBestAction({
    unitsMastery: [],
    overallCoverage: 0,
    totalAttempts: 0,
  });
  assert(noCourseAction.type === "EXPLORE_COURSES" && noCourseAction.destination === "/programmes",
    "Students without a selected course are sent to the multidisciplinary programme catalogue");

  const agricultureAction = generateNextBestAction({
    unitsMastery: [],
    overallCoverage: 0,
    primaryCourseCode: "AEE103",
    totalAttempts: 0,
  });
  assert(agricultureAction.course === "AEE103" && agricultureAction.destination.includes("AEE103"),
    "A selected Agriculture subject is preserved in the diagnostic recommendation");

  // 7. Study plans must use real syllabus mappings and reject synthetic units.
  let rejectedUnknownSubject = false;
  try {
    validateStudyPlanCurriculum(["LAW101"], [], []);
  } catch (error) {
    rejectedUnknownSubject = String(error).includes("Unknown subject code");
  }
  assert(rejectedUnknownSubject, "Study planner rejects subject codes absent from the academic catalogue");

  let rejectedMissingUnits = false;
  try {
    validateStudyPlanCurriculum(["BBA101"], [{ id: 1, code: "BBA101" }], []);
  } catch (error) {
    rejectedMissingUnits = String(error).includes("No syllabus units are mapped");
  }
  assert(rejectedMissingUnits, "Study planner refuses to invent generic units for an unmapped subject");

  // 8. Tutor fallback must be evidence-safe and must not call an external model by default.
  const savedEnable = process.env.ENABLE_GEMINI_TUTOR;
  const savedAllow = process.env.ALLOW_EXTERNAL_TUTOR_INFERENCE;
  const savedKey = process.env.GEMINI_API_KEY;
  delete process.env.ENABLE_GEMINI_TUTOR;
  delete process.env.ALLOW_EXTERNAL_TUTOR_INFERENCE;
  delete process.env.GEMINI_API_KEY;
  const aiFallback = await getConceptExplanation("B-Trees in Database Systems", "CSE302");
  if (savedEnable !== undefined) process.env.ENABLE_GEMINI_TUTOR = savedEnable;
  if (savedAllow !== undefined) process.env.ALLOW_EXTERNAL_TUTOR_INFERENCE = savedAllow;
  if (savedKey !== undefined) process.env.GEMINI_API_KEY = savedKey;

  assert(aiFallback.isAIGenerated === false, "Tutor uses a deterministic fallback with external inference disabled");
  assert(typeof aiFallback.explanation === "string" && aiFallback.explanation.length > 50,
    "Tutor returns a useful source-limited response");
  assert(!/modular decomposition|algorithmic complexity|verified by university curriculum/i.test(aiFallback.explanation + aiFallback.disclaimer),
    "Tutor does not invent unrelated explanations or academic verification claims");
  assert(aiFallback.disclaimer.length > 0 && aiFallback.keyPoints.length > 0,
    "Source-limited tutor response explains its evidence boundary");

  console.log("==================================================");
  console.log("ALL 6 ACADEMIC ECOSYSTEM TESTS PASSED");
  console.log("==================================================");
}

runAcademicSuite().catch(err => {
  console.error("Test error:", err);
  process.exit(1);
});
