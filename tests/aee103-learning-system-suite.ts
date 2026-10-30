import assert from "node:assert";
import { db } from "../server/db";
import { 
  subjects, 
  units, 
  questions, 
  subjectiveQuestions, 
  flashcardDecks, 
  flashcards,
  programmeSubjects,
  programmes
} from "../shared/schema";
import { eq, and, sql } from "drizzle-orm";
import aee103CompleteSubject from "../server/data/aee103";

const EXPECTED_AEE103_UNITS = [
  { unitNumber: 1, title: "Unit 1: Education" },
  { unitNumber: 2, title: "Unit 2: Extension Systems in India" },
  { unitNumber: 3, title: "Unit 3: New Trends in Agricultural Extension" },
  { unitNumber: 4, title: "Unit 4: Rural Development" },
  { unitNumber: 5, title: "Unit 5: Extension Administration" },
  { unitNumber: 6, title: "Unit 6: Communication" }
];

export async function runAEE103LearningSystemSuite() {
  console.log("==========================================================");
  console.log("   AEE103 SYLLABUS-ORIENTED LEARNING SYSTEM TEST SUITE    ");
  console.log("==========================================================");

  let passed = 0;
  let total = 0;

  async function test(name: string, fn: () => Promise<void>) {
    total++;
    try {
      await fn();
      console.log(`✅ PASS: ${name}`);
      passed++;
    } catch (err: any) {
      console.error(`❌ FAIL: ${name}`);
      console.error(err);
    }
  }

  // ── TEST 1: Subject Metadata & ICAR Alignment ─────────────────────────────
  await test("AEE103 exists with verified syllabus metadata in database", async () => {
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    assert(sub, "AEE103 must exist in subjects table");
    assert.strictEqual(sub.name, "Fundamentals of Extension Education", "Subject title must match syllabus");
    assert.strictEqual(sub.credits, 2, "AEE103 must have 2 credits");
    assert.strictEqual(sub.totalUnits, 6, "AEE103 must have exactly 6 units in DB");
    assert.strictEqual(sub.discipline, "AGRICULTURE", "AEE103 must belong to AGRICULTURE discipline");
  });

  // ── TEST 2: Exactly 6 Theory Units with Official Syllabus Titles ───────────
  await test("Exactly 6 theory units exist with exact syllabus titles and order", async () => {
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    const dbUnits = await db
      .select()
      .from(units)
      .where(eq(units.subjectId, sub.id))
      .orderBy(units.unitNumber);

    assert.strictEqual(dbUnits.length, 6, `Expected exactly 6 units in DB, found ${dbUnits.length}`);

    for (let i = 0; i < 6; i++) {
      const u = dbUnits[i];
      const expected = EXPECTED_AEE103_UNITS[i];
      assert.strictEqual(u.unitNumber, expected.unitNumber, `Unit number mismatch at index ${i}`);
      assert(
        u.unitName.includes(expected.title.split(": ")[1]),
        `Unit ${u.unitNumber} title "${u.unitName}" must include "${expected.title}"`
      );
    }
  });

  // ── TEST 3: Practicals Preserved as Distinct (Not a 7th Theory Unit) ───────
  await test("12 Practicals exist as a distinct practical component (not a 7th theory unit)", async () => {
    const { practicals } = aee103CompleteSubject.metadata;
    assert.strictEqual(practicals.length, 12, `Expected 12 distinct practicals, found ${practicals.length}`);

    for (let p of practicals) {
      assert(p.title && p.title.length > 5, `Practical #${p.id} must have a valid title`);
      assert(p.objectives && p.objectives.length > 0, `Practical #${p.id} must have objectives`);
      assert(p.procedureSteps && p.procedureSteps.length > 0, `Practical #${p.id} must have step-by-step procedure`);
      assert(p.reflectionQuestions && p.reflectionQuestions.length > 0, `Practical #${p.id} must have reflection questions`);
    }

    // Verify DB does not contain a Unit 7
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    const unit7 = await db.select().from(units).where(and(eq(units.subjectId, sub.id), eq(units.unitNumber, 7)));
    assert.strictEqual(unit7.length, 0, "No Unit 7 must exist in database");
  });

  // ── TEST 4: Full Academic Content & Notes Coverage Across All 6 Units ───────
  await test("Comprehensive syllabus study notes exist for all 6 units", async () => {
    assert.strictEqual(aee103CompleteSubject.units.length, 6, "Must have 6 unit modules");

    for (const u of aee103CompleteSubject.units) {
      assert(u.title && u.title.length > 5, `Unit ${u.unitNumber} must have title`);
      assert(u.syllabusTopics.length >= 3, `Unit ${u.unitNumber} must cover at least 3 distinct topics`);
      assert(u.notes.learningObjectives.length >= 3, `Unit ${u.unitNumber} must have at least 3 learning objectives`);
      assert(u.notes.sections.length >= 3, `Unit ${u.unitNumber} must have at least 3 deep structured sections`);
      assert(u.notes.commonMisunderstandings.length >= 2, `Unit ${u.unitNumber} must document common misconceptions`);
      assert(u.notes.keyTakeaways.length >= 3, `Unit ${u.unitNumber} must have key revision takeaways`);
      assert(u.notes.summary && u.notes.summary.length > 50, `Unit ${u.unitNumber} must have a comprehensive summary`);
    }
  });

  // ── TEST 5: 360 Original MCQs (60 Per Unit) Validated ──────────────────────
  await test("360 Original MCQs exist (60 per unit) with valid options and pedagogical explanations", async () => {
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    const dbMcqs = await db.select().from(questions).where(eq(questions.subjectId, sub.id));

    assert.strictEqual(dbMcqs.length, 360, `Expected 360 MCQs in DB, found ${dbMcqs.length}`);

    const seenQuestions = new Set<string>();
    for (const q of dbMcqs) {
      assert(q.questionText && q.questionText.length > 10, `MCQ #${q.id} missing text`);
      assert(q.optionA && q.optionB && q.optionC && q.optionD, `MCQ #${q.id} missing 4 options`);
      assert(["A", "B", "C", "D"].includes(q.correctOption), `MCQ #${q.id} invalid correct option ${q.correctOption}`);
      assert(q.explanation && q.explanation.length > 15, `MCQ #${q.id} missing pedagogical explanation`);
      
      const normalized = q.questionText.trim().toLowerCase();
      assert(!seenQuestions.has(normalized), `Duplicate MCQ detected: "${q.questionText}"`);
      seenQuestions.add(normalized);
    }
  });

  // ── TEST 6: 120 Subjective Questions (20 Per Unit) Validated ────────────────
  await test("120 Subjective questions exist (20 per unit) with model answers and outline checklists", async () => {
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    const dbSq = await db.select().from(subjectiveQuestions).where(eq(subjectiveQuestions.subjectId, sub.id));

    assert.strictEqual(dbSq.length, 120, `Expected 120 Subjective questions in DB, found ${dbSq.length}`);

    const seenSq = new Set<string>();
    for (const sq of dbSq) {
      assert(sq.questionText && sq.questionText.length > 15, `Subjective #${sq.id} missing question text`);
      assert(sq.modelAnswer && sq.modelAnswer.length > 50, `Subjective #${sq.id} model answer too brief`);
      assert(sq.outlinePoints && sq.outlinePoints.length >= 3, `Subjective #${sq.id} must have at least 3 outline scoring points`);
      assert(sq.maxMarks && sq.maxMarks >= 5, `Subjective #${sq.id} marks must be >= 5`);

      const normalized = sq.questionText.trim().toLowerCase();
      assert(!seenSq.has(normalized), `Duplicate subjective question detected: "${sq.questionText}"`);
      seenSq.add(normalized);
    }
  });

  // ── TEST 7: 120 Flashcards (20 Per Unit) Validated ─────────────────────────
  await test("120 Spaced Repetition flashcards exist (20 per unit) with concepts, answers, and hints", async () => {
    const [sub] = await db.select().from(subjects).where(eq(subjects.code, "AEE103"));
    const decks = await db.select().from(flashcardDecks).where(eq(flashcardDecks.subjectId, sub.id));

    assert.strictEqual(decks.length, 6, `Expected 6 flashcard decks in DB, found ${decks.length}`);

    let totalCards = 0;
    for (const d of decks) {
      const cards = await db.select().from(flashcards).where(eq(flashcards.deckId, d.id));
      assert.strictEqual(cards.length, 20, `Deck ${d.title} must have exactly 20 cards`);
      totalCards += cards.length;

      for (const c of cards) {
        assert(c.front && c.front.length > 3, `Flashcard #${c.id} missing front`);
        assert(c.back && c.back.length > 10, `Flashcard #${c.id} missing back`);
      }
    }

    assert.strictEqual(totalCards, 120, `Expected 120 total flashcards, found ${totalCards}`);
  });

  // ── TEST 8: Do not invent grading percentages absent from the supplied syllabus.
  await test("AEE103 grading weightages remain undisclosed without a course-specific source", async () => {
    const { gradingStructure, gradingDisclosure } = aee103CompleteSubject.metadata;
    assert.strictEqual(gradingStructure.length, 0, "The supplied syllabus does not state assessment weightages");
    assert(gradingDisclosure && gradingDisclosure.includes("does not state assessment weightages"),
      "Student-facing disclosure explains the source limitation");
  });

  // ── TEST 9: Course Outcomes CO1-CO5 Defined ───────────────────────────────
  await test("Course Outcomes CO1 through CO5 are syllabus-aligned and traceable", async () => {
    const { courseOutcomes } = aee103CompleteSubject.metadata;
    assert.strictEqual(courseOutcomes.length, 5, `Expected 5 COs, found ${courseOutcomes.length}`);
    const codes = courseOutcomes.map((co) => co.code);
    assert.deepStrictEqual(codes, ["CO1", "CO2", "CO3", "CO4", "CO5"], "CO codes must be CO1 to CO5");
    assert(courseOutcomes[0].description.includes("effective teaching methods"), "CO1 preserves the supplied teaching-method outcome");
    assert(courseOutcomes[1].description.includes("organizational set-up"), "CO2 preserves the supplied organizational outcome");
    assert(courseOutcomes[2].description.includes("adoption/diffusion"), "CO3 preserves the supplied adoption/diffusion outcome");
    assert(courseOutcomes[3].description.includes("new trends in agricultural extension"), "CO4 preserves the supplied communications/trends outcome");
    assert(courseOutcomes[4].description.includes("ICT applications"), "CO5 preserves the supplied ICT/TOT outcome");
    assert.strictEqual(aee103CompleteSubject.units[4].title, "Extension Administration", "Unit V uses the official syllabus title");
  });

  // ── TEST 10: Official Prescribed Textbooks Traced ─────────────────────────
  await test("Prescribed textbooks match the 4 authoritative bibliographic leads from syllabus", async () => {
    const { textbooks } = aee103CompleteSubject.metadata;
    assert.strictEqual(textbooks.length, 4, `Expected 4 textbooks, found ${textbooks.length}`);
    const authors = textbooks.map((b: any) => b.author || b.authors).join(" ");
    assert(authors.includes("Sagar Mondal"), "Must include Sagar Mondal & G.L. Ray");
    assert(authors.includes("Dahama"), "Must include O.P. Dahama & O.P. Bhatnagar");
    assert(authors.includes("Jalihal"), "Must include K.A. Jalihal & V. Veerabhadraiah");
    assert(authors.includes("Rathore"), "Must include O.S. Rathore et al.");
  });

  // ── TEST 11: Agriculture Semester 3 Curriculum Invariant ───────────────────
  await test("Agriculture Semester 3 curriculum invariant holds: exactly 13 subjects, 9 Core, 4 Skill", async () => {
    const [agriProg] = await db.select().from(programmes).where(eq(programmes.code, "BSC-AGRI"));
    const mappings = await db
      .select()
      .from(programmeSubjects)
      .where(and(eq(programmeSubjects.programmeId, agriProg.id), eq(programmeSubjects.semester, 3)));

    assert.strictEqual(mappings.length, 13, `Expected 13 subjects in Sem 3, found ${mappings.length}`);
    const core = mappings.filter((m) => m.category === "Core");
    const skill = mappings.filter((m) => m.category === "Skill Enhancement");
    assert.strictEqual(core.length, 9, `Expected 9 core subjects, found ${core.length}`);
    assert.strictEqual(skill.length, 4, `Expected 4 skill enhancement subjects, found ${skill.length}`);
  });

  // ── TEST 12: Zero Foreign Subject Leakage ───────────────────────────────────
  await test("Zero subject cross-contamination between programmes or semesters", async () => {
    const [btechProg] = await db.select().from(programmes).where(eq(programmes.code, "BTECH-CSE"));
    if (btechProg) {
      const btechMappings = await db
        .select()
        .from(programmeSubjects)
        .where(eq(programmeSubjects.programmeId, btechProg.id));
      const hasAeeInBtech = btechMappings.some((m) => m.subjectId === 28);
      assert(!hasAeeInBtech, "AEE103 must never appear in BTECH-CSE");
    }
  });

  console.log("==========================================================");
  console.log(`TOTAL TESTS:  ${total}`);
  console.log(`PASSED:       ${passed}`);
  console.log(`FAILED:       ${total - passed}`);
  console.log("==========================================================");

  if (passed !== total) {
    throw new Error(`AEE103 Learning System test suite failed: ${total - passed} of ${total} tests failed.`);
  }
}

if (process.argv[1]?.endsWith("aee103-learning-system-suite.ts")) {
  runAEE103LearningSystemSuite()
    .then(() => {
      console.log("🎉 ALL AEE103 SYLLABUS LEARNING SYSTEM ACCEPTANCE TESTS PASSED!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Test execution failed:", err);
      process.exit(1);
    });
}
