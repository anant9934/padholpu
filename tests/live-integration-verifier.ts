import assert from "node:assert";
import express from "express";
import http from "http";
import learningSystemRouter from "../server/routes/learning-system";

async function runLiveVerification() {
  console.log("==========================================================");
  console.log("   LIVE INTEGRATION VERIFICATION — AEE103 LEARNING SYSTEM ");
  console.log("==========================================================");

  const app = express();
  app.use(express.json());
  app.use(learningSystemRouter);

  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const port = (server.address() as any).port;
  const baseUrl = `http://localhost:${port}`;

  try {
    // 1. Verify Syllabus Endpoint
    console.log("Testing GET /api/academic/subjects/AEE103/syllabus...");
    const resSyllabus = await fetch(`${baseUrl}/api/academic/subjects/AEE103/syllabus`);
    assert.strictEqual(resSyllabus.status, 200, "Syllabus should return 200 OK");
    const syllabus = await resSyllabus.json();
    assert.strictEqual(syllabus.subject.code, "AEE103");
    assert.strictEqual(syllabus.units.length, 6, "Must have exactly 6 units");
    assert.strictEqual(syllabus.courseOutcomes.length, 5, "Must have 5 Course Outcomes (CO1-CO5)");
    assert(syllabus.grading, "Must have grading breakdown");
    assert.strictEqual(syllabus.grading.components.length, 4, "Must have 4 grading components");
    assert.strictEqual(syllabus.stats.totalMcqs, 360, "Must have 360 total MCQs");
    assert.strictEqual(syllabus.stats.totalSubjectiveQuestions, 120, "Must have 120 total subjective questions");
    assert.strictEqual(syllabus.stats.totalFlashcards, 120, "Must have 120 total flashcards");
    console.log("  ✔ Syllabus endpoint verified (6 units, 4 grading components, 5 COs, 360 MCQs, 120 Subjective, 120 Flashcards).");

    // 2. Verify all 6 Unit Notes Endpoints
    for (let u = 1; u <= 6; u++) {
      console.log(`Testing GET /api/academic/subjects/AEE103/units/${u}...`);
      const resUnit = await fetch(`${baseUrl}/api/academic/subjects/AEE103/units/${u}`);
      assert.strictEqual(resUnit.status, 200, `Unit ${u} notes should return 200 OK`);
      const unitData = await resUnit.json();
      assert.strictEqual(unitData.unit.unitNumber, u);
      assert(unitData.unit.sections.length > 0, `Unit ${u} must have structured syllabus sections`);
      assert(unitData.unit.learningObjectives.length > 0, `Unit ${u} must have learning objectives`);
      assert(unitData.unit.commonMisunderstandings.length > 0, `Unit ${u} must have exam misunderstandings`);
      assert(unitData.unit.revisionPoints.length > 0, `Unit ${u} must have revision points`);
      
      // Prev/Next unit links
      if (u === 1) {
        assert.strictEqual(unitData.unit.navigation.prevUnit, null);
        assert.strictEqual(unitData.unit.navigation.nextUnit, 2);
      } else if (u === 6) {
        assert.strictEqual(unitData.unit.navigation.prevUnit, 5);
        assert.strictEqual(unitData.unit.navigation.nextUnit, null);
      } else {
        assert.strictEqual(unitData.unit.navigation.prevUnit, u - 1);
        assert.strictEqual(unitData.unit.navigation.nextUnit, u + 1);
      }
      console.log(`  ✔ Unit ${u} Notes verified (${unitData.unit.sections.length} sections, ~${unitData.unit.estimatedReadTimeMinutes} min read).`);
    }

    // 3. Verify MCQs Endpoint for each unit
    for (let u = 1; u <= 6; u++) {
      console.log(`Testing GET /api/academic/subjects/AEE103/units/${u}/mcqs...`);
      const resMcqs = await fetch(`${baseUrl}/api/academic/subjects/AEE103/units/${u}/mcqs`);
      assert.strictEqual(resMcqs.status, 200);
      const mcqData = await resMcqs.json();
      assert.strictEqual(mcqData.totalQuestions, 60, `Unit ${u} must have exactly 60 MCQs`);
      assert.strictEqual(mcqData.questions.length, 60);

      // Verify every question has 4 valid options, correctOption in [A,B,C,D], and explanation
      for (const q of mcqData.questions) {
        assert(["A", "B", "C", "D"].includes(q.correctOption), `Question ${q.id} has invalid correctOption: ${q.correctOption}`);
        assert(q.optionA && q.optionB && q.optionC && q.optionD, `Question ${q.id} is missing options`);
        assert(q.explanation && q.explanation.length > 15, `Question ${q.id} explanation is too short`);
      }
      console.log(`  ✔ Unit ${u} MCQs verified (60 valid questions with options & explanations).`);
    }

    // 4. Verify Subjective Questions Endpoint for each unit
    for (let u = 1; u <= 6; u++) {
      console.log(`Testing GET /api/academic/subjects/AEE103/units/${u}/subjective...`);
      const resSubj = await fetch(`${baseUrl}/api/academic/subjects/AEE103/units/${u}/subjective`);
      assert.strictEqual(resSubj.status, 200);
      const subjData = await resSubj.json();
      assert.strictEqual(subjData.totalQuestions, 20, `Unit ${u} must have exactly 20 subjective questions`);
      assert.strictEqual(subjData.questions.length, 20);

      for (const q of subjData.questions) {
        assert(q.questionText && q.questionText.length > 10, `Question ${q.codeId} text missing`);
        assert(q.modelAnswer && q.modelAnswer.length > 50, `Question ${q.codeId} model answer too brief`);
        assert(q.outlinePoints && q.outlinePoints.length > 0, `Question ${q.codeId} outline checklist missing`);
      }
      console.log(`  ✔ Unit ${u} Subjective Questions verified (20 model answers with scoring points).`);
    }

    // 5. Verify Flashcards Endpoint for each unit
    for (let u = 1; u <= 6; u++) {
      console.log(`Testing GET /api/academic/subjects/AEE103/units/${u}/flashcards...`);
      const resFc = await fetch(`${baseUrl}/api/academic/subjects/AEE103/units/${u}/flashcards`);
      assert.strictEqual(resFc.status, 200);
      const fcData = await resFc.json();
      assert.strictEqual(fcData.totalCards, 20, `Unit ${u} must have exactly 20 flashcards`);
      assert.strictEqual(fcData.cards.length, 20);

      for (const c of fcData.cards) {
        assert(c.front && c.front.length > 2, `Card ${c.codeId} front missing`);
        assert(c.back && c.back.length > 5, `Card ${c.codeId} back missing`);
      }
      console.log(`  ✔ Unit ${u} Flashcards verified (20 cards with active recall terms & explanations).`);
    }

    // 6. Verify Practicals Endpoint
    console.log("Testing GET /api/academic/subjects/AEE103/practicals...");
    const resPrac = await fetch(`${baseUrl}/api/academic/subjects/AEE103/practicals`);
    assert.strictEqual(resPrac.status, 200);
    const pracData = await resPrac.json();
    assert.strictEqual(pracData.totalPracticals, 12, "Must have exactly 12 practicals");
    assert.strictEqual(pracData.practicals.length, 12);
    for (const p of pracData.practicals) {
      assert(p.title, `Practical ${p.id} missing title`);
      assert(p.objective, `Practical ${p.id} missing objective`);
      assert(p.procedure && p.procedure.length > 0, `Practical ${p.id} missing procedure`);
      assert(p.observations, `Practical ${p.id} missing observations`);
      assert(p.reflectionQuestions && p.reflectionQuestions.length > 0, `Practical ${p.id} missing reflection`);
    }
    console.log("  ✔ Practicals component verified (12 experiments, fully structured protocols).");

    // 7. Verify Progress Endpoint
    console.log("Testing GET /api/academic/subjects/AEE103/progress...");
    const resProg = await fetch(`${baseUrl}/api/academic/subjects/AEE103/progress`);
    assert.strictEqual(resProg.status, 200);
    const progData = await resProg.json();
    assert.strictEqual(progData.subjectCode, "AEE103");
    assert.strictEqual(progData.units.length, 6);
    console.log("  ✔ Progress calculation verified across all 6 units.");

    // 8. Verify Mark-Read Endpoint
    console.log("Testing POST /api/academic/subjects/AEE103/units/1/mark-read...");
    const resMark = await fetch(`${baseUrl}/api/academic/subjects/AEE103/units/1/mark-read`, {
      method: "POST"
    });
    assert.strictEqual(resMark.status, 200);
    const markData = await resMark.json();
    assert(markData.success, "Mark-read should succeed");
    console.log("  ✔ Mark-read action verified.");

    console.log("\n==========================================================");
    console.log("🎉 ALL LIVE INTEGRATION VERIFICATION CHECKS PASSED!");
    console.log("==========================================================");
  } finally {
    server.close();
  }
}

runLiveVerification().catch((err) => {
  console.error("Live verification failed:", err);
  process.exit(1);
});
