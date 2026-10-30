import { calculateSM2, getConceptExplanation, distributeStudyPlanUnits } from "../server/services/academic-ecosystem";
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

  // 6. Multidisciplinary onboarding never assumes CSE for a student without course context.
  const onboarding = generateNextBestAction({
    unitsMastery: [],
    overallCoverage: 0,
    totalAttempts: 0,
  });
  assert(onboarding.type === "EXPLORE_COURSES", "Unprofiled student is directed to programme discovery");
  assert(onboarding.destination === "/programmes", "Unprofiled student is not routed to an arbitrary CSE course");
  assert(onboarding.course === "", "No unsupported default subject code is assigned");

  // 6. The deterministic planner schedules only supplied syllabus units, before the exam date.
  const scheduled = distributeStudyPlanUnits([
    { subjectCode: "AEE103", unitNumber: 1, unitName: "Education" },
    { subjectCode: "AEE103", unitNumber: 2, unitName: "Extension Systems in India" },
    { subjectCode: "AEE103", unitNumber: 3, unitName: "New Trends in Agricultural Extension" },
  ], new Date("2026-10-30T00:00:00.000Z"), new Date("2026-11-02T00:00:00.000Z"));
  assert(scheduled.length === 3, "Planner schedules exactly the supplied syllabus units");
  assert(scheduled[0].scheduledDate === "2026-10-30", "First unit is scheduled on the planning date");
  assert(scheduled[2].scheduledDate === "2026-11-01", "Final unit is scheduled before the exam date");
  assert(scheduled.every((task) => task.title.includes(task.subjectCode)), "Scheduled tasks preserve their subject code");

  // 7. The rule-based tutor retrieves AEE103 source content and never calls a model.
  const previousGeminiKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = "must-not-trigger-a-network-call";
  try {
    const tutor = await getConceptExplanation("formal non-formal informal education", "AEE103");
    assert(tutor.isAIGenerated === false, "Tutor reports no external model inference");
    assert(tutor.mode === "RULE_BASED_RETRIEVAL", "Tutor identifies its deterministic retrieval mode");
    assert(tutor.evidenceAvailable, "Tutor detects matching evidence in AEE103 notes");
    assert(tutor.sources.some((source) => source.unitNumber === 1), "Tutor cites the matching AEE103 unit");
    assert(tutor.explanation.toLowerCase().includes("formal education"), "Tutor returns matching source material");
    assert(tutor.disclaimer.includes("No external AI inference"), "Tutor discloses its zero-inference behaviour");

    const missing = await getConceptExplanation("B-Trees in Database Systems");
    assert(!missing.evidenceAvailable, "Tutor refuses to explain without subject evidence");
    assert(missing.explanation.includes("No matching syllabus material"), "Tutor clearly reports missing evidence");
  } finally {
    if (previousGeminiKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = previousGeminiKey;
  }

  console.log("==================================================");
  console.log("ALL ACADEMIC ECOSYSTEM ASSERTIONS PASSED");
  console.log("==================================================");
}

runAcademicSuite().catch(err => {
  console.error("Test error:", err);
  process.exit(1);
});
