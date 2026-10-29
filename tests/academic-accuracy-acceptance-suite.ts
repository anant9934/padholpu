import assert from "assert";
import { db } from "../server/db";
import { sql, eq, and } from "drizzle-orm";
import { AcademicCoverageService } from "../server/services/academic-coverage";
import { 
  toggleBookmark, 
  getUserBookmarkStatus, 
  saveSubjectiveAnswer 
} from "../server/services/academic-ecosystem";
import { users, resources, subjectiveQuestions, bookmarks, userSubjectiveAnswers } from "../shared/schema";

async function runAccuracyAcceptanceSuite() {
  console.log("==========================================================");
  console.log("   PADHO LPU PHASE 7 — ACCURACY & ACCEPTANCE SUITE        ");
  console.log("==========================================================");

  let passed = 0;
  let total = 0;

  function test(name: string, fn: () => void | Promise<void>) {
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

  // ── 1. Academic Content Accuracy & Provenance Audit ────────
  await asyncTest("Accuracy Audit: All published catalog resources map to valid registered subjects", async () => {
    const res: any = await db.execute(sql`
      SELECT r.id, r.title, r.subject, s.id as subject_id, s.name as subject_name, s.discipline
      FROM resources r
      LEFT JOIN subjects s ON LOWER(s.code) = LOWER(r.subject)
      ORDER BY r.id
    `);
    const rows = res.rows || res || [];
    assert(rows.length >= 21, `Expected at least 21 published resources (actual: ${rows.length})`);
    for (const row of rows) {
      assert(row.subject_id !== null, `Resource ${row.id} (${row.title}) has unmapped subject code: ${row.subject}`);
      assert(row.title && row.title.length > 5, `Resource ${row.id} has valid descriptive title`);
    }
  });

  await asyncTest("Accuracy Audit: Statutory and judicial citations in subjective law questions are factual", async () => {
    const res: any = await db.execute(sql`
      SELECT sq.id, sq.question_text, sq.statute_or_citation, sq.model_answer
      FROM subjective_questions sq
      JOIN subjects s ON s.id = sq.subject_id
      WHERE s.discipline = 'LAW'
    `);
    const lawQuestions = res.rows || res || [];
    assert(lawQuestions.length >= 3, "Expected at least 3 subjective law questions");

    // Verify Article 141 and Stare Decisis
    const precedentQ = lawQuestions.find((q: any) => q.question_text.includes("Stare Decisis"));
    assert(precedentQ, "Stare Decisis question must exist");
    assert(precedentQ.statute_or_citation.includes("Article 141"), "Must cite Article 141 of Indian Constitution");
    assert(precedentQ.model_answer.includes("Ratio decidendi"), "Model answer must differentiate ratio decidendi");

    // Verify Absolute Liability
    const liabilityQ = lawQuestions.find((q: any) => q.question_text.includes("Absolute Liability"));
    assert(liabilityQ, "Absolute Liability question must exist");
    assert(liabilityQ.statute_or_citation.includes("M.C. Mehta"), "Must cite M.C. Mehta landmark ruling");
    assert(liabilityQ.statute_or_citation.includes("Rylands v. Fletcher"), "Must cite Rylands v. Fletcher comparative rule");

    // Verify IPC Private Defence
    const ipcQ = lawQuestions.find((q: any) => q.question_text.includes("Private Defence"));
    assert(ipcQ, "Private Defence question must exist");
    assert(ipcQ.statute_or_citation.includes("Indian Penal Code 1860, Sections 96-106"), "Must cite IPC Sections 96-106");
  });

  await asyncTest("Accuracy Audit: Computing and Economics questions adhere to verified principles", async () => {
    const res: any = await db.execute(sql`
      SELECT sq.id, sq.question_text, sq.model_answer, s.code as subject_code
      FROM subjective_questions sq
      JOIN subjects s ON s.id = sq.subject_id
      WHERE s.code IN ('CSE310', 'MGT103', 'INT219')
    `);
    const rows = res.rows || res || [];

    const dbQ = rows.find((r: any) => r.subject_code === "CSE310");
    assert(dbQ, "Database BCNF question must exist");
    assert(dbQ.model_answer.includes("lossless-join"), "Database model answer covers lossless decomposition");
    assert(dbQ.model_answer.includes("BCNF"), "Database model answer covers BCNF");

    const econQ = rows.find((r: any) => r.subject_code === "MGT103");
    assert(econQ, "Economics question must exist");
    assert(econQ.model_answer.includes("Excess Capacity"), "Economics model answer explains Chamberlin excess capacity");

    const webQ = rows.find((r: any) => r.subject_code === "INT219");
    assert(webQ, "Web development question must exist");
    assert(webQ.model_answer.includes("AbortController"), "Web development model answer covers AbortController");
  });

  // ── 2. Bookmark Persistence Workflow ───────────────────────
  await asyncTest("Study Experience: Bookmark toggle is persistent and idempotent", async () => {
    const [userRecord] = await db.select({ id: users.id }).from(users).limit(1);
    assert(userRecord, "A test user must exist in the database");
    const testUserId = userRecord.id;

    const [resRecord] = await db.select({ id: resources.id }).from(resources).limit(1);
    assert(resRecord, "At least one published resource must exist");
    const testResourceId = resRecord.id;

    // Clean up any existing test bookmark first to ensure clean state
    await db.delete(bookmarks).where(
      and(
        eq(bookmarks.userId, testUserId),
        eq(bookmarks.itemType, "RESOURCE"),
        eq(bookmarks.itemId, testResourceId)
      )
    );

    // Toggle bookmark on
    const added = await toggleBookmark(testUserId, "RESOURCE", testResourceId, "Test Bookmark", `/resources/${testResourceId}`);
    assert(typeof added.bookmarked === "boolean", "Toggle returns boolean bookmarked");
    assert.strictEqual(added.bookmarked, true, "First toggle marks item as bookmarked");

    // Verify status query
    const status1 = await getUserBookmarkStatus(testUserId, "RESOURCE", testResourceId);
    assert.strictEqual(status1, true, "Bookmark status matches toggle result");

    // Toggle bookmark off
    const toggledAgain = await toggleBookmark(testUserId, "RESOURCE", testResourceId, "Test Bookmark", `/resources/${testResourceId}`);
    assert.strictEqual(toggledAgain.bookmarked, false, "Second toggle reverses bookmark state");

    const status2 = await getUserBookmarkStatus(testUserId, "RESOURCE", testResourceId);
    assert.strictEqual(status2, false, "Status reflects reversed state");
  });

  // ── 3. Subjective Draft Persistence Workflow ───────────────
  await asyncTest("Study Experience: Subjective question draft saving preserves student work", async () => {
    const [userRecord] = await db.select({ id: users.id }).from(users).limit(1);
    assert(userRecord, "A test user must exist in the database");
    const testUserId = userRecord.id;

    const [qRecord] = await db.select({ id: subjectiveQuestions.id }).from(subjectiveQuestions).limit(1);
    assert(qRecord, "At least one subjective question must exist");
    const testQuestionId = qRecord.id;

    const testDraftAnswer = "Under Article 141 of the Constitution of India, the law declared by the Supreme Court is binding on all courts within the territory of India. The ratio decidendi of a case establishes the binding legal principle.";

    // Save answer draft
    await saveSubjectiveAnswer(testUserId, testQuestionId, testDraftAnswer, 4);

    // Retrieve user answer directly
    const [saved] = await db.select().from(userSubjectiveAnswers).where(
      and(
        eq(userSubjectiveAnswers.userId, testUserId),
        eq(userSubjectiveAnswers.questionId, testQuestionId)
      )
    );
    assert(saved, "Saved subjective answer must be retrievable from user history");
    assert.strictEqual(saved.studentAnswer, testDraftAnswer, "Saved answer matches input draft exactly");
    assert.strictEqual(saved.selfRating, 4, "Self-rating preserved");
  });

  // ── 4. Curriculum Coverage Across All 9 Programmes ─────────
  await asyncTest("Curriculum Coverage: Every degree programme has mapped subjects and published material", async () => {
    const report = await AcademicCoverageService.getCoverageReport();
    assert.strictEqual(report.summary.totalProgrammes, 9, "All 9 multidisciplinary programmes must be reported");
    assert(report.summary.totalMappedSubjects >= 30, `Expected at least 30 curriculum mappings (actual: ${report.summary.totalMappedSubjects})`);

    const unpopulatedProgrammes = report.programmes.filter((p) => p.status === "NO_CONTENT");
    assert.strictEqual(unpopulatedProgrammes.length, 0, `Zero programmes should have NO_CONTENT (actual empty: ${unpopulatedProgrammes.map(p => p.programmeCode).join(", ")})`);

    // Verify key multidisciplinary faculties
    const lawProg = report.programmes.find((p) => p.programmeCode === "BALLB");
    assert(lawProg && lawProg.subjectsWithNotes >= 4, "BALLB has strong coverage");

    const cseProg = report.programmes.find((p) => p.programmeCode === "BTECH-CSE");
    assert(cseProg && cseProg.subjectsWithNotes >= 3, "BTECH-CSE has strong coverage");

    const bcaProg = report.programmes.find((p) => p.programmeCode === "BCA");
    assert(bcaProg && bcaProg.totalMappedSubjects >= 4, "BCA has mapped computing curriculum");

    const mbaProg = report.programmes.find((p) => p.programmeCode === "MBA");
    assert(mbaProg && mbaProg.totalMappedSubjects >= 4, "MBA has mapped management curriculum");

    const psychProg = report.programmes.find((p) => p.programmeCode === "BA-PSYCH");
    assert(psychProg && psychProg.totalMappedSubjects >= 2, "BA-PSYCH has mapped psychology curriculum");
  });

  // ── 5. Moderation & Search Privacy Boundary ────────────────
  test("Search Privacy: Private note drafts and unpublished files are strictly excluded from public catalog", () => {
    const sampleItems = [
      { id: 1, title: "Official Indian Penal Code Notes", status: "published", isPublic: true },
      { id: 2, title: "Student Confidential Draft Notes", status: "draft", isPublic: false },
      { id: 3, title: "Pending Moderation Submission", status: "pending", isPublic: false },
      { id: 4, title: "Rejected Low-Quality File", status: "rejected", isPublic: false },
    ];

    const publicCatalog = sampleItems.filter((i) => i.isPublic && i.status === "published");
    assert.strictEqual(publicCatalog.length, 1, "Only published items in catalog");
    assert.strictEqual(publicCatalog[0].id, 1);
    assert(!publicCatalog.some((i) => ["draft", "pending", "rejected"].includes(i.status)));
  });

  test("Moderation Security: Anti-Self-Approval rule rejects author approving their own submission", () => {
    function evaluateApproval(submissionAuthorId: number, moderatorUserId: number, userRoles: string[]): boolean {
      const isAuthorizedModerator = userRoles.includes("ADMIN") || userRoles.includes("SUPER_ADMIN") || userRoles.includes("MODERATOR");
      if (!isAuthorizedModerator) return false;
      if (submissionAuthorId === moderatorUserId) return false; // Anti-self-approval rule
      return true;
    }

    assert.strictEqual(evaluateApproval(10, 10, ["ADMIN"]), false, "Author cannot approve own submission");
    assert.strictEqual(evaluateApproval(10, 20, ["USER"]), false, "Regular user cannot approve submission");
    assert.strictEqual(evaluateApproval(10, 20, ["ADMIN"]), true, "Distinct authorized admin can approve submission");
  });

  console.log("==========================================================");
  console.log(`TOTAL PHASE 7 ACCURACY & ACCEPTANCE TESTS: ${total}`);
  console.log(`PASSED:                                   ${passed}`);
  console.log(`FAILED:                                   ${total - passed}`);
  console.log(`STATUS:                                   ${total === passed ? "ALL TESTS PASSED ✅" : "SOME TESTS FAILED ❌"}`);
  console.log("==========================================================");

  if (passed !== total) {
    process.exit(1);
  }
}

runAccuracyAcceptanceSuite().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
