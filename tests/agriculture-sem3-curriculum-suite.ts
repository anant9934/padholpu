/**
 * PADHO LPU — B.Sc. (Hons.) Agriculture Semester 3 Curriculum Acceptance Test Suite
 * 
 * Verifies Section 7 acceptance criteria:
 * 1. Exactly 13 distinct subject mappings for Agriculture Semester 3.
 * 2. Exactly 9 Core subjects with matching codes and titles.
 * 3. Exactly 4 Skill Enhancement subjects with matching verified codes and titles.
 * 4. Zero foreign subjects (no BTECH, BCA, MBA, LAW, or other semesters).
 * 5. Zero duplicate subject codes or duplicate mappings.
 * 6. Other Agriculture semesters (Sem 1, Sem 2) remain intact.
 * 7. Other multidisciplinary programmes (BTECH-CSE, BCA, MBA, BALLB) remain intact.
 * 8. Search and category filtering cannot bypass programme/semester restrictions.
 * 9. Idempotency: Running enforcement/seed twice preserves exact state without duplicates.
 * 10. Existing learning resources and student contributions remain intact.
 * 11. API and UI counts match actual returned records.
 */

import assert from "assert";
import { db } from "../server/db";
import { sql, eq, and, count } from "drizzle-orm";
import { programmes, subjects, programmeSubjects, resources, units } from "../shared/schema";
import { getProgrammeByCode, ensureMultidisciplinarySeedData } from "../server/services/academic-multidisciplinary";
import { enforceAgricultureSem3Curriculum } from "../scripts/enforce-agriculture-sem3-curriculum";

const EXPECTED_CORE_SUBJECTS = [
  { code: "AEE103", name: "Fundamentals of Extension Education", credits: 2 },
  { code: "AEE201", name: "Entrepreneurship Development and Business Communication", credits: 3 },
  { code: "AGP218", name: "Crop Production Technology-I (Kharif Crops)", credits: 3 },
  { code: "AGR217", name: "Principles and Practices of Natural Farming", credits: 2 },
  { code: "AGR220", name: "Massive Open Online Course 1", credits: 2 },
  { code: "GPB203", name: "Principles of Genetics", credits: 3 },
  { code: "HRT206", name: "Production Technology of Fruit and Plantation Crops", credits: 3 },
  { code: "PTH214", name: "Fundamentals of Nematology", credits: 2 },
  { code: "SOL223", name: "Farm Machinery and Power", credits: 2 },
];

const EXPECTED_SKILL_SUBJECTS = [
  { code: "AGR233", name: "Bioherbicide Formulation and Production", credits: 2 },
  { code: "ENT203", name: "Biopesticides in Insect Pest Management", credits: 2 },
  { code: "PTH215", name: "Biopesticides and Biofertilizers in Plant Disease Management", credits: 2 },
  { code: "SOL203", name: "Manure and Fertilizer Testing", credits: 2 },
];

const ALL_EXPECTED_CODES = [
  ...EXPECTED_CORE_SUBJECTS.map((s) => s.code),
  ...EXPECTED_SKILL_SUBJECTS.map((s) => s.code),
];

async function runAgricultureSem3CurriculumSuite() {
  console.log("==========================================================");
  console.log("   B.SC. AGRICULTURE SEMESTER 3 ACCEPTANCE TEST SUITE     ");
  console.log("==========================================================");

  let passed = 0;
  let total = 0;

  async function test(name: string, fn: () => Promise<void>) {
    total++;
    try {
      await fn();
      console.log(`✅ PASS: ${name}`);
      passed++;
    } catch (e: any) {
      console.error(`❌ FAIL: ${name}`);
      console.error(e.message || e);
    }
  }

  // ── TEST 1: Exact Total Subject Count (Exactly 13) ─────────────────────────
  await test("Agriculture Semester 3 returns exactly 13 distinct subject mappings", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    assert(progData, "Programme BSC-AGRI must exist");
    
    const sem3 = progData.semesters.find((s: any) => Number(s.semester) === 3);
    assert(sem3, "Semester 3 must exist in BSC-AGRI curriculum");
    assert.strictEqual(
      sem3.subjects.length,
      13,
      `Expected exactly 13 subjects, found ${sem3.subjects.length}`
    );

    // Verify distinctness of subject IDs and codes
    const distinctCodes = new Set(sem3.subjects.map((s: any) => s.code));
    assert.strictEqual(distinctCodes.size, 13, "All 13 subjects must have distinct codes");
    const distinctIds = new Set(sem3.subjects.map((s: any) => s.id));
    assert.strictEqual(distinctIds.size, 13, "All 13 subjects must have distinct IDs");
  });

  // ── TEST 2: Exact 9 Core Subjects Explicit Assertions ─────────────────────
  await test("The Core category returns exactly the nine specified core subjects with correct codes and titles", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    const sem3 = progData!.semesters.find((s: any) => Number(s.semester) === 3)!;
    
    const coreSubs = sem3.subjects.filter((s: any) => s.category === "Core" || s.isCore === true);
    assert.strictEqual(coreSubs.length, 9, `Expected exactly 9 core subjects, found ${coreSubs.length}`);

    for (const expected of EXPECTED_CORE_SUBJECTS) {
      const match = coreSubs.find((s: any) => s.code === expected.code);
      assert(match, `Missing expected core subject: ${expected.code} — ${expected.name}`);
      assert.strictEqual(
        match.name,
        expected.name,
        `Subject title mismatch for ${expected.code}: expected "${expected.name}", got "${match.name}"`
      );
      assert.strictEqual(
        match.credits,
        expected.credits,
        `Credit allocation mismatch for ${expected.code}: expected ${expected.credits}, got ${match.credits}`
      );
      assert.strictEqual(
        match.isCore,
        true,
        `Subject ${expected.code} must have isCore = true`
      );
    }
  });

  // ── TEST 3: Exact 4 Skill Enhancement Subjects Explicit Assertions ────────
  await test("The Skill Enhancement category returns exactly the four specified titles with verified codes", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    const sem3 = progData!.semesters.find((s: any) => Number(s.semester) === 3)!;
    
    const skillSubs = sem3.subjects.filter((s: any) => s.category === "Skill Enhancement");
    assert.strictEqual(skillSubs.length, 4, `Expected exactly 4 skill enhancement subjects, found ${skillSubs.length}`);

    for (const expected of EXPECTED_SKILL_SUBJECTS) {
      const match = skillSubs.find((s: any) => s.code === expected.code);
      assert(match, `Missing expected skill enhancement subject: ${expected.code} — ${expected.name}`);
      assert.strictEqual(
        match.name,
        expected.name,
        `Subject title mismatch for ${expected.code}: expected "${expected.name}", got "${match.name}"`
      );
      assert.strictEqual(
        match.credits,
        expected.credits,
        `Credit allocation mismatch for ${expected.code}: expected ${expected.credits}, got ${match.credits}`
      );
    }
  });

  // ── TEST 4: Zero Foreign Subjects (No Cross-Contamination) ────────────────
  await test("No additional subject or foreign programme subject is returned for Agriculture Semester 3", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    const sem3 = progData!.semesters.find((s: any) => Number(s.semester) === 3)!;

    for (const subj of sem3.subjects) {
      assert(
        ALL_EXPECTED_CODES.includes(subj.code),
        `Unauthorized foreign subject detected in Agriculture Semester 3: ${subj.code} (${subj.name})`
      );
      assert.strictEqual(
        subj.discipline,
        "AGRICULTURE",
        `Subject ${subj.code} must belong strictly to AGRICULTURE discipline`
      );
    }
  });

  // ── TEST 5: No Duplicate Subject Codes or Duplicate Mappings ──────────────
  await test("No duplicate subject code or duplicate mapping appears in database", async () => {
    const [agriProg] = await db
      .select()
      .from(programmes)
      .where(eq(programmes.code, "BSC-AGRI"));

    const mappings = await db
      .select()
      .from(programmeSubjects)
      .where(
        and(
          eq(programmeSubjects.programmeId, agriProg.id),
          eq(programmeSubjects.semester, 3)
        )
      );

    assert.strictEqual(mappings.length, 13, `Database mappings for Sem 3 must equal 13 (found ${mappings.length})`);

    const mappedSubjectIds = mappings.map((m) => m.subjectId);
    const uniqueSubjectIds = new Set(mappedSubjectIds);
    assert.strictEqual(uniqueSubjectIds.size, 13, "Every subject mapping must be unique with zero duplicate rows");
  });

  // ── TEST 6: Other Agriculture Semesters Preserved ─────────────────────────
  await test("Other Agriculture semesters (Sem 1, Sem 2) remain intact", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    const sem1 = progData!.semesters.find((s: any) => Number(s.semester) === 1);
    const sem2 = progData!.semesters.find((s: any) => Number(s.semester) === 2);

    assert(sem1 && sem1.subjects.length > 0, "Agriculture Semester 1 must be preserved with active subjects");
    assert(sem2 && sem2.subjects.length > 0, "Agriculture Semester 2 must be preserved with active subjects");

    const sem1Codes = sem1.subjects.map((s: any) => s.code);
    assert(sem1Codes.includes("AGR101"), "AGR101 must remain in Agriculture Semester 1");
    assert(sem1Codes.includes("AGR102"), "AGR102 must remain in Agriculture Semester 1");

    const sem2Codes = sem2.subjects.map((s: any) => s.code);
    assert(sem2Codes.includes("AGR201"), "AGR201 must remain in Agriculture Semester 2");
  });

  // ── TEST 7: Other Multidisciplinary Programmes Preserved ───────────────────
  await test("Other programmes (BTECH-CSE, BCA, MBA, BALLB) and their semester mappings remain intact", async () => {
    const btech = await getProgrammeByCode("BTECH-CSE");
    assert(btech && btech.semesters.length > 0, "BTECH-CSE programme must remain intact");
    const btechSem3 = btech.semesters.find((s: any) => Number(s.semester) === 3);
    assert(btechSem3 && btechSem3.subjects.length > 0, "BTECH-CSE Sem 3 must be preserved");

    const bca = await getProgrammeByCode("BCA");
    assert(bca && bca.semesters.length > 0, "BCA programme must remain intact");

    const mba = await getProgrammeByCode("MBA");
    assert(mba && mba.semesters.length > 0, "MBA programme must remain intact");

    const ballb = await getProgrammeByCode("BALLB");
    assert(ballb && ballb.semesters.length > 0, "BALLB programme must remain intact");
  });

  // ── TEST 8: Category & Search Isolation Cannot Bypass Scope ───────────────
  await test("Filtering by category or search cannot leak unmapped subjects into Agriculture Semester 3", async () => {
    const progData = await getProgrammeByCode("BSC-AGRI");
    const sem3 = progData!.semesters.find((s: any) => Number(s.semester) === 3)!;

    // Simulate search query matching "Bio"
    const bioMatches = sem3.subjects.filter((s: any) => 
      s.code.toLowerCase().includes("bio") || s.name.toLowerCase().includes("bio")
    );
    for (const match of bioMatches) {
      assert(ALL_EXPECTED_CODES.includes(match.code), `Search leaked unmapped subject: ${match.code}`);
    }

    // Simulate core category filter
    const coreMatches = sem3.subjects.filter((s: any) => s.category === "Core" || s.isCore === true);
    assert.strictEqual(coreMatches.length, 9, "Core filter must return exactly 9 subjects");

    // Simulate skill category filter
    const skillMatches = sem3.subjects.filter((s: any) => s.category === "Skill Enhancement");
    assert.strictEqual(skillMatches.length, 4, "Skill filter must return exactly 4 subjects");
  });

  // ── TEST 9: Idempotency (Running Enforcement Script Twice) ────────────────
  await test("Running the enforcement script twice does not create duplicates or alter counts", async () => {
    const result1 = await enforceAgricultureSem3Curriculum();
    assert.strictEqual(result1.total, 13, "First run should result in 13 subjects");
    assert.strictEqual(result1.coreCount, 9, "First run should have 9 core subjects");
    assert.strictEqual(result1.skillCount, 4, "First run should have 4 skill subjects");

    const result2 = await enforceAgricultureSem3Curriculum();
    assert.strictEqual(result2.total, 13, "Second run should result in 13 subjects (idempotent)");
    assert.strictEqual(result2.coreCount, 9, "Second run should have 9 core subjects (idempotent)");
    assert.strictEqual(result2.skillCount, 4, "Second run should have 4 skill subjects (idempotent)");

    const [agriProg] = await db
      .select()
      .from(programmes)
      .where(eq(programmes.code, "BSC-AGRI"));

    const sem3MappingsCount = await db
      .select({ count: count() })
      .from(programmeSubjects)
      .where(
        and(
          eq(programmeSubjects.programmeId, agriProg.id),
          eq(programmeSubjects.semester, 3)
        )
      );

    assert.strictEqual(Number(sem3MappingsCount[0].count), 13, "Exact mapping count in DB must remain 13");
  });

  // ── TEST 10: Existing Resources & Learning Material Intact ────────────────
  await test("Existing learning resources and student contributions remain intact", async () => {
    const [resCount] = await db.select({ count: count() }).from(resources);
    assert(Number(resCount.count) > 0, "Resources table must not be truncated or deleted");

    // Check that notes for Sem 3 subjects exist and are valid
    const agpNotes = await db.select().from(resources).where(eq(resources.subject, "AGP218"));
    assert(agpNotes.length > 0, "AGP218 must have at least one verified learning resource");

    const gpbNotes = await db.select().from(resources).where(eq(resources.subject, "GPB203"));
    assert(gpbNotes.length > 0, "GPB203 must have at least one verified learning resource");
  });

  // ── TEST 11: Syllabus Units Architecture Intact ───────────────────────────
  await test("All 13 subjects have verified academic units per syllabus (6 for AEE103, 5 for others)", async () => {
    for (const code of ALL_EXPECTED_CODES) {
      const [subj] = await db.select().from(subjects).where(eq(subjects.code, code));
      assert(subj, `Subject ${code} must exist in database`);
      
      const subjectUnits = await db.select().from(units).where(eq(units.subjectId, subj.id));
      const expectedUnits = code === "AEE103" ? 6 : 5;
      assert.strictEqual(
        subjectUnits.length,
        expectedUnits,
        `Subject ${code} must have exactly ${expectedUnits} units (found ${subjectUnits.length})`
      );
    }
  });

  console.log("==========================================================");
  console.log(`TOTAL TESTS:  ${total}`);
  console.log(`PASSED:       ${passed}`);
  console.log(`FAILED:       ${total - passed}`);
  console.log("==========================================================");

  if (passed !== total) {
    throw new Error(`Test suite failed: ${total - passed} of ${total} tests failed.`);
  }
}

if (process.argv[1]?.endsWith("agriculture-sem3-curriculum-suite.ts")) {
  runAgricultureSem3CurriculumSuite()
    .then(() => {
      console.log("🎉 ALL AGRICULTURE SEMESTER 3 ACCEPTANCE TESTS PASSED!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Test suite execution failed:", err);
      process.exit(1);
    });
}
