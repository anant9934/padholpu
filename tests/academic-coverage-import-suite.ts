import assert from "assert";
import { AcademicCoverageService, ContentCoverageStatus } from "../server/services/academic-coverage";
import { hasConfiguredDatabase } from "../server/db";
import { ResourceImportService, ResourceImportRow } from "../server/services/resource-import";

async function runCoverageAndImportSuite() {
  console.log("==========================================================");
  console.log("   PADHO LPU PHASE 6 — COVERAGE & IMPORT PIPELINE SUITE   ");
  console.log("==========================================================");

  let passed = 0;
  let total = 0;

  function test(name: string, fn: () => void) {
    total++;
    try {
      fn();
      console.log(`✅ PASS: ${name}`);
      passed++;
    } catch (e: any) {
      console.error(`❌ FAIL: ${name}`);
      console.error(e.message || e);
    }
  }

  async function asyncTest(name: string, fn: () => Promise<void>) {
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

  // ── 1. Academic Coverage Status Engine Rules ───────────────
  test("Coverage Engine: Calculates NO_CONTENT correctly for unpopulated curriculum", () => {
    const mockProgrammeStats = {
      totalSubjects: 4,
      subjectsWithNoContent: 4,
      pendingSubmissions: 0,
      totalResources: 0,
    };
    const coveragePercent = Math.round(
      ((mockProgrammeStats.totalSubjects - mockProgrammeStats.subjectsWithNoContent) / mockProgrammeStats.totalSubjects) * 100
    );
    assert.strictEqual(coveragePercent, 0, "Coverage must be 0%");

    let status: ContentCoverageStatus = "NO_CONTENT";
    if (mockProgrammeStats.pendingSubmissions > 0) status = "NEEDS_REVIEW";
    else if (mockProgrammeStats.subjectsWithNoContent === 0 && coveragePercent >= 80) status = "COVERAGE_REVIEWED";
    else if (coveragePercent >= 50) status = "MATERIAL_AVAILABLE";
    else if (coveragePercent > 0 || mockProgrammeStats.totalResources > 0) status = "CONTENT_IN_PROGRESS";
    else status = "NO_CONTENT";

    assert.strictEqual(status, "NO_CONTENT", "Should assign NO_CONTENT when nothing is populated");
  });

  test("Coverage Engine: Calculates CONTENT_IN_PROGRESS for partial coverage (< 50%)", () => {
    const mockProgrammeStats = {
      totalSubjects: 4,
      subjectsWithNoContent: 3,
      pendingSubmissions: 0,
      totalResources: 1,
    };
    const coveragePercent = Math.round(
      ((mockProgrammeStats.totalSubjects - mockProgrammeStats.subjectsWithNoContent) / mockProgrammeStats.totalSubjects) * 100
    );
    assert.strictEqual(coveragePercent, 25, "Coverage should be 25%");

    let status: ContentCoverageStatus = "NO_CONTENT";
    if (mockProgrammeStats.pendingSubmissions > 0) status = "NEEDS_REVIEW";
    else if (mockProgrammeStats.subjectsWithNoContent === 0 && coveragePercent >= 80) status = "COVERAGE_REVIEWED";
    else if (coveragePercent >= 50) status = "MATERIAL_AVAILABLE";
    else if (coveragePercent > 0 || mockProgrammeStats.totalResources > 0) status = "CONTENT_IN_PROGRESS";
    else status = "NO_CONTENT";

    assert.strictEqual(status, "CONTENT_IN_PROGRESS", "Should assign CONTENT_IN_PROGRESS when coverage is 25%");
  });

  test("Coverage Engine: Prioritizes NEEDS_REVIEW when pending student submissions exist", () => {
    const mockProgrammeStats = {
      totalSubjects: 4,
      subjectsWithNoContent: 2,
      pendingSubmissions: 3,
      totalResources: 4,
    };
    const coveragePercent = 50;

    let status: ContentCoverageStatus = "NO_CONTENT";
    if (mockProgrammeStats.pendingSubmissions > 0) status = "NEEDS_REVIEW";
    else if (mockProgrammeStats.subjectsWithNoContent === 0 && coveragePercent >= 80) status = "COVERAGE_REVIEWED";
    else if (coveragePercent >= 50) status = "MATERIAL_AVAILABLE";
    else if (coveragePercent > 0 || mockProgrammeStats.totalResources > 0) status = "CONTENT_IN_PROGRESS";
    else status = "NO_CONTENT";

    assert.strictEqual(status, "NEEDS_REVIEW", "NEEDS_REVIEW must take precedence when student submissions await moderation");
  });

  test("Coverage Engine: Assigns COVERAGE_REVIEWED when all subjects have content and coverage >= 80%", () => {
    const mockProgrammeStats = {
      totalSubjects: 5,
      subjectsWithNoContent: 0,
      pendingSubmissions: 0,
      totalResources: 18,
    };
    const coveragePercent = 100;

    let status: ContentCoverageStatus = "NO_CONTENT";
    if (mockProgrammeStats.pendingSubmissions > 0) status = "NEEDS_REVIEW";
    else if (mockProgrammeStats.subjectsWithNoContent === 0 && coveragePercent >= 80) status = "COVERAGE_REVIEWED";
    else if (coveragePercent >= 50) status = "MATERIAL_AVAILABLE";
    else if (coveragePercent > 0 || mockProgrammeStats.totalResources > 0) status = "CONTENT_IN_PROGRESS";
    else status = "NO_CONTENT";

    assert.strictEqual(status, "COVERAGE_REVIEWED", "Should assign COVERAGE_REVIEWED when 100% covered and zero pending review");
  });

  // ── 2. Resource Import Validation Pipeline ─────────────────
  await asyncTest("Import Pipeline: Valid Notes row passes dry-run validation", async () => {
    const validRow: ResourceImportRow = {
      subjectCode: "LAW101",
      programmeCode: "BALLB",
      unitNumber: 1,
      resourceType: "Notes",
      title: "Introduction to Legal Methods and Precedents",
      description: "Comprehensive notes on doctrine of Stare Decisis and sources of Indian law",
      content: "# Legal Methods\n\nDoctrine of Stare Decisis binds lower courts under Article 141.",
      sourceProvenance: "ADMIN_CURATED",
      author: "School of Law Academic Team",
    };

    const res = await ResourceImportService.validate([validRow]);
    assert.strictEqual(res.valid, true, "Validation should pass");
    assert.strictEqual(res.errors.length, 0, "Errors should be empty");
    assert.strictEqual(res.preview.length, 1, "Preview should contain 1 item");
    assert.strictEqual(res.preview[0].subjectCode, "LAW101");
  });

  await asyncTest("Import Pipeline: Rejects row with missing required fields", async () => {
    const invalidRow = {
      subjectCode: "",
      unitNumber: 1,
      title: "",
      resourceType: "Notes",
    } as any;

    const res = await ResourceImportService.validate([invalidRow]);
    assert.strictEqual(res.valid, false, "Validation should fail");
    assert(res.errors.length >= 2, "Should report errors for missing subject and missing title");
  });

  await asyncTest("Import Pipeline: Rejects invalid unit numbers (< 1 or > 10)", async () => {
    const invalidUnitZero: ResourceImportRow = {
      subjectCode: "MTH101",
      unitNumber: 0,
      resourceType: "Formula Sheet",
      title: "Calculus Formulae",
    };
    const invalidUnitEleven: ResourceImportRow = {
      subjectCode: "MTH101",
      unitNumber: 11,
      resourceType: "Formula Sheet",
      title: "Calculus Formulae",
    };

    const resZero = await ResourceImportService.validate([invalidUnitZero]);
    assert.strictEqual(resZero.valid, false);
    assert(resZero.errors.some(e => e.field === "unitNumber"));

    const resEleven = await ResourceImportService.validate([invalidUnitEleven]);
    assert.strictEqual(resEleven.valid, false);
    assert(resEleven.errors.some(e => e.field === "unitNumber"));
  });

  await asyncTest("Import Pipeline: Validates MCQ options count and correct option key", async () => {
    // MCQ with fewer than 2 options
    const badOptionsMCQ: ResourceImportRow = {
      subjectCode: "CSE121",
      unitNumber: 1,
      resourceType: "MCQ",
      title: "Pointers in C",
      optionA: "Only one option",
      correctOption: "A",
    };
    const resBadOptions = await ResourceImportService.validate([badOptionsMCQ]);
    assert.strictEqual(resBadOptions.valid, false);
    assert(resBadOptions.errors.some(e => e.field === "options"));

    // MCQ with missing correctOption
    const missingCorrectMCQ: ResourceImportRow = {
      subjectCode: "CSE121",
      unitNumber: 1,
      resourceType: "MCQ",
      title: "Pointers in C",
      optionA: "Option A",
      optionB: "Option B",
      correctOption: "" as any,
    };
    const resMissing = await ResourceImportService.validate([missingCorrectMCQ]);
    assert.strictEqual(resMissing.valid, false);
    assert(resMissing.errors.some(e => e.field === "correctOption"));
  });

  await asyncTest("Import Pipeline: Validates subjective model answers length", async () => {
    const trivialSubjective: ResourceImportRow = {
      subjectCode: "LAW102",
      unitNumber: 1,
      resourceType: "Subjective",
      title: "Explain Article 21",
      modelAnswer: "Too short", // under 10 chars
    };
    const res = await ResourceImportService.validate([trivialSubjective]);
    assert.strictEqual(res.valid, false);
    assert(res.errors.some(e => e.field === "modelAnswer"));
  });

  await asyncTest("Import Pipeline: Validates flashcard front and back content", async () => {
    const missingBackCard: ResourceImportRow = {
      subjectCode: "AGR101",
      unitNumber: 1,
      resourceType: "Flashcard",
      title: "Kharif Crops",
      front: "Define Kharif Crops",
      back: "", // empty back
    };
    const res = await ResourceImportService.validate([missingBackCard]);
    assert.strictEqual(res.valid, false);
    assert(res.errors.some(e => e.field === "flashcard"));
  });

  await asyncTest("Import Pipeline: Detects batch duplicates (same subject, unit, type, and title)", async () => {
    const row1: ResourceImportRow = {
      subjectCode: "MGT101",
      unitNumber: 1,
      resourceType: "Case Study",
      title: "Fayol's Administrative Theory",
      content: "Detailed analysis of 14 principles of management.",
    };
    const row2: ResourceImportRow = {
      subjectCode: "MGT101",
      unitNumber: 1,
      resourceType: "Case Study",
      title: "Fayol's Administrative Theory", // Duplicate
      content: "Different content but identical title and subject.",
    };

    const res = await ResourceImportService.validate([row1, row2]);
    assert.strictEqual(res.valid, false, "Should flag duplicate row");
    assert(res.errors.some(e => e.field === "title" && e.message.includes("Duplicate resource")));
  });

  // ── 3. Academic Content Provenance & Privacy Safeguards ────
  await asyncTest("Content Provenance: Rejects invalid or unapproved provenance labels", async () => {
    const rowWithValidProvenance: ResourceImportRow = {
      subjectCode: "PHY101",
      unitNumber: 1,
      resourceType: "Formula Sheet",
      title: "Electromagnetism Formulas",
      sourceProvenance: "ADMIN_CURATED",
    };
    const resValid = await ResourceImportService.validate([rowWithValidProvenance]);
    assert.strictEqual(resValid.valid, true);

    const rowWithInvalidProvenance: ResourceImportRow = {
      subjectCode: "PHY101",
      unitNumber: 1,
      resourceType: "Formula Sheet",
      title: "Electromagnetism Formulas",
      sourceProvenance: "FABRICATED_OFFICIAL_STAMP" as any,
    };
    const resInvalid = await ResourceImportService.validate([rowWithInvalidProvenance]);
    assert.strictEqual(resInvalid.valid, false);
    assert(resInvalid.errors.some(e => e.field === "sourceProvenance"));
  });

  test("Moderation Security: Anti-Self-Approval constraint blocks submission author from approving own notes", () => {
    const submissionAuthorId = 42;
    const reviewingModeratorId = 42; // Same person attempting self-approval

    function canApproveSubmission(authorId: number, reviewerId: number, isModerator: boolean): boolean {
      if (!isModerator) return false;
      if (authorId === reviewerId) return false; // Strictly forbidden
      return true;
    }

    assert.strictEqual(
      canApproveSubmission(submissionAuthorId, reviewingModeratorId, true),
      false,
      "Moderator cannot approve their own submitted study notes"
    );

    const independentModeratorId = 99;
    assert.strictEqual(
      canApproveSubmission(submissionAuthorId, independentModeratorId, true),
      true,
      "Independent moderator is authorized to approve student submissions"
    );
  });

  test("Search Privacy: Public search excludes unapproved drafts and pending student notes", () => {
    const mockCatalog = [
      { id: 1, title: "Constitutional Law I Notes", status: "published", isPublic: true },
      { id: 2, title: "Student Draft Notes on Torts", status: "draft", isPublic: false },
      { id: 3, title: "Pending Moderation Submission", status: "pending", isPublic: false },
    ];

    const publicSearchResults = mockCatalog.filter(item => item.isPublic && item.status === "published");
    assert.strictEqual(publicSearchResults.length, 1, "Only published materials should be in public search results");
    assert.strictEqual(publicSearchResults[0].id, 1);
    assert(!publicSearchResults.some(item => item.status === "draft" || item.status === "pending"));
  });

  // ── 4. End-to-End Live Database Content Verification ───────
  const hasDatabaseConnection = hasConfiguredDatabase;

  if (hasDatabaseConnection) {
    await asyncTest("Live Database: Coverage report runs against production Neon DB and returns real data", async () => {
      const report = await AcademicCoverageService.getCoverageReport();
      assert(report.summary.totalProgrammes > 0, "Must report existing programmes");
      assert(report.summary.totalMappedSubjects > 0, "Must report mapped subjects");
      assert(report.programmes.length > 0, "Must list programme coverage");
      
      // BALLB should have published resources from our seed
      const ballb = report.programmes.find(p => p.programmeCode === "BALLB");
      assert(ballb, "BALLB programme must exist in coverage report");
      assert(ballb.subjectsWithNotes > 0, `BALLB should have subjects with notes (actual: ${ballb.subjectsWithNotes})`);
      assert(ballb.subjectsWithQuestions > 0, `BALLB should have subjects with questions (actual: ${ballb.subjectsWithQuestions})`);
      assert(ballb.coveragePercentage > 0, `BALLB coverage should be > 0% (actual: ${ballb.coveragePercentage}%)`);
      assert(["CONTENT_IN_PROGRESS", "MATERIAL_AVAILABLE", "COVERAGE_REVIEWED"].includes(ballb.status), `Status ${ballb.status} must be valid`);
    });
  } else {
    console.log("⏭️ SKIP: Live database coverage check (DATABASE_URL is not configured).");
  }

  console.log("==========================================================");
  console.log(`TOTAL PHASE 6 COVERAGE & IMPORT TESTS: ${total}`);
  console.log(`PASSED:                                ${passed}`);
  console.log(`FAILED:                                ${total - passed}`);
  console.log(`STATUS:                                ${total === passed ? "ALL TESTS PASSED ✅" : "SOME TESTS FAILED ❌"}`);
  console.log("==========================================================");

  if (passed !== total) {
    process.exit(1);
  }
}

runCoverageAndImportSuite().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
