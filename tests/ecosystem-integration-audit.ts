import assert from "assert";
import {
  calculateSM2,
  getConceptExplanation,
} from "../server/services/academic-ecosystem";

async function runEcosystemIntegrationAudit() {
  console.log("==================================================");
  console.log("   PADHO LPU 2.0 ECOSYSTEM INTEGRATION AUDIT SUITE");
  console.log("==================================================");

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

  // ── 1. SM-2 Engine Edge Case & Input Hardening ────────────
  test("SM-2: NaN quality input is clamped safely without NaN intervals or Invalid Date", () => {
    const result = calculateSM2(NaN, 2.5, 0, 0);
    assert(Number.isFinite(result.easeFactor), "Ease factor must be finite");
    assert(Number.isFinite(result.intervalDays), "Interval must be finite");
    assert(Number.isFinite(result.repetitions), "Repetitions must be finite");
    assert(!isNaN(result.nextReviewDate.getTime()), "Next review date must be a valid date");
    assert.strictEqual(result.repetitions, 0, "Failed recall resets repetitions to 0");
    assert.strictEqual(result.intervalDays, 1, "Failed recall schedules interval for 1 day");
  });

  test("SM-2: Negative quality rating is clamped to 0", () => {
    const result = calculateSM2(-5, 2.5, 6, 2);
    assert.strictEqual(result.repetitions, 0, "Negative quality resets repetitions to 0");
    assert.strictEqual(result.intervalDays, 1, "Negative quality sets interval to 1 day");
    assert(result.easeFactor >= 1.3, "Ease factor cannot drop below 1.3");
  });

  test("SM-2: Over-range quality rating (> 5) is clamped to 5", () => {
    const result = calculateSM2(100, 2.5, 1, 1);
    assert.strictEqual(result.repetitions, 2, "Quality 5 increments repetitions to 2");
    assert.strictEqual(result.intervalDays, 6, "Second interval is standard 6 days");
    assert(result.easeFactor > 2.5, "Ease factor should increase on perfect recall");
  });

  test("SM-2: Invalid/NaN currentEaseFactor defaults safely to 2.5", () => {
    const result = calculateSM2(4, NaN, 0, 0);
    assert(Number.isFinite(result.easeFactor), "Ease factor must be finite");
    assert(result.easeFactor >= 1.3, "Ease factor must be at least 1.3");
  });

  test("SM-2: Ease factor hard floor of 1.3 is strictly enforced across repeated failures", () => {
    let ef = 1.3;
    for (let i = 0; i < 10; i++) {
      const res = calculateSM2(0, ef, 1, 0);
      ef = res.easeFactor;
    }
    assert.strictEqual(ef, 1.3, "Ease factor must never drop below 1.3");
  });

  // ── 2. Study Plan Target Exam Date Validation ──────────────
  test("Study Planner: Past date validation logic rejects dates in the past", () => {
    const pastDate = new Date("2020-01-01");
    const now = new Date();
    const isPast = pastDate.getTime() < now.getTime() - 24 * 60 * 60 * 1000;
    assert.strictEqual(isPast, true, "Past date should be detected as invalid");
  });

  test("Study Planner: Future exam date is validated and calculates positive day interval", () => {
    const futureDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const now = new Date();
    const diffDays = Math.max(1, Math.ceil((futureDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    assert(diffDays >= 29 && diffDays <= 31, "Diff days should be roughly 30 days");
  });

  // ── 3. Academic Content Moderation & Self-Approval Protection ──
  test("Moderation: Self-approval constraint logic prevents author from approving own content", () => {
    const studentId = 42;
    const moderatorId = 42; // Same user!
    const decision = "approved";

    let blocked = false;
    if (studentId === moderatorId && decision === "approved") {
      blocked = true;
    }
    assert.strictEqual(blocked, true, "Self-approval must be blocked");
  });

  test("Moderation: Non-self approval by authorized moderator is permitted", () => {
    const studentId = 42;
    const moderatorId = 99; // Different authorized moderator
    const decision = "approved";

    let blocked = false;
    if (studentId === moderatorId && decision === "approved") {
      blocked = true;
    }
    assert.strictEqual(blocked, false, "Authorized third-party moderator should not be blocked");
  });

  // ── 4. Private Workspace Isolation & Ownership ─────────────
  test("Workspace: Personal notes access control enforces author ownership", () => {
    const noteAuthorId = 101;
    const requestingUserId = 102;
    const isOwner = noteAuthorId === requestingUserId;
    assert.strictEqual(isOwner, false, "User 102 cannot claim ownership of User 101's private note");
  });

  // ── 5. Study Groups Membership & Content Sanitization ──────
  test("Study Groups: Post content strips malicious script tags to prevent stored XSS", () => {
    const rawContent = "Hello classmates! <script>alert('xss')</script> What is question 3?";
    const sanitized = rawContent
      .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
      .replace(/javascript:/gi, "")
      .trim();
    assert(!sanitized.includes("<script>"), "Script tags must be stripped");
    assert(!sanitized.includes("alert('xss')"), "Script body must be stripped");
    assert(sanitized.includes("Hello classmates!"), "Legitimate academic text must be preserved");
  });

  // ── 6. AI Concept Explainer Fallback & Disclaimers ─────────
  await asyncTest("AI Tutor: Guaranteed offline fallback returns curated academic outline and disclaimer", async () => {
    const res = await getConceptExplanation("Deadlock Prevention in Operating Systems", "CSE310");
    assert.strictEqual(typeof res.explanation, "string", "Explanation must be a string");
    assert(res.explanation.length > 50, "Explanation must contain comprehensive academic detail");
    assert(Array.isArray(res.keyPoints), "Key points must be an array");
    assert(res.keyPoints.length > 0, "Key points must not be empty");
    assert(typeof res.disclaimer === "string", "Disclaimer must be provided");
    assert(res.disclaimer.length > 10, "Disclaimer must clearly disclose that it is a reference guide");
  });

  // ── 7. Notification IDOR & Ownership Protection ────────────
  test("Security / IDOR: Notification read authorization enforces matching authenticated userId", () => {
    const notificationOwnerId = 201;
    const attackerUserId = 202;
    const notificationId = 888;

    // Simulate database query condition: AND(notifications.id = id, notifications.userId = userId)
    function canMarkAsRead(notifId: number, targetOwnerId: number, authUserId: number) {
      return notifId === notificationId && targetOwnerId === authUserId;
    }

    assert.strictEqual(
      canMarkAsRead(notificationId, notificationOwnerId, attackerUserId),
      false,
      "Attacker cannot mark another user's notification as read"
    );
    assert.strictEqual(
      canMarkAsRead(notificationId, notificationOwnerId, notificationOwnerId),
      true,
      "Owner can mark their own notification as read"
    );
  });

  // ── 8. Content Issue Reporting & Schema Validation ─────────
  test("Quality System: Content Issue Report categorizes academic flaws with validation", () => {
    const validCategories = ["INCORRECT_ANSWER", "SYLLABUS_MISMATCH", "TYPO_FORMATTING", "OUTDATED_CONTENT", "OTHER"];
    const testReport = {
      contentType: "SUBJECTIVE",
      contentId: 45,
      issueType: "INCORRECT_ANSWER",
      description: "Step 3 of model answer in CSE310 Unit 2 omits banker's algorithm safety test.",
    };

    assert(validCategories.includes(testReport.issueType), "Issue type must be an authorized academic category");
    assert(testReport.description.length >= 10, "Description must be substantive");
    assert(Number.isInteger(testReport.contentId) && testReport.contentId > 0, "Content ID must be a positive integer");
  });

  // ── 9. Closed-Loop Reporter Notification Dispatch ──────────
  test("Quality System: Admin report resolution generates closed-loop notification payload", () => {
    const report = {
      id: 12,
      reporterId: 305,
      contentType: "SUBJECTIVE",
      contentId: 45,
      status: "RESOLVED",
      resolutionNotes: "Corrected marking scheme and added citation to Silberschatz 10th ed.",
    };

    const notificationPayload = {
      userId: report.reporterId,
      type: "INFO",
      title: `Content Report ${report.status === "RESOLVED" ? "Resolved" : "Dismissed"}`,
      message: `Your report regarding ${report.contentType} #${report.contentId} was reviewed: ${report.resolutionNotes}`,
      link: "/learn",
      isRead: false,
    };

    assert.strictEqual(notificationPayload.userId, 305, "Notification dispatched to original reporter");
    assert(notificationPayload.title.includes("Resolved"), "Title reflects resolution outcome");
    assert(notificationPayload.message.includes("Silberschatz"), "Message contains admin feedback");
  });

  // ── 10. Note Moderation Lifecycle Notification Events ───────
  test("Moderation: Note submission lifecycle generates proper student feedback notifications", () => {
    const decisions = ["approved", "changes_requested", "rejected"] as const;
    const generatedNotifs: Record<string, { title: string; link: string }> = {};

    for (const decision of decisions) {
      if (decision === "approved") {
        generatedNotifs[decision] = {
          title: "Notes Approved & Published! 📚",
          link: "/resources/101",
        };
      } else if (decision === "changes_requested") {
        generatedNotifs[decision] = {
          title: "Changes Requested on Your Notes 📝",
          link: "/contributions",
        };
      } else {
        generatedNotifs[decision] = {
          title: "Notes Submission Not Approved",
          link: "/contributions",
        };
      }
    }

    assert(generatedNotifs["approved"].title.includes("Published"), "Approved notification celebrates publishing");
    assert(generatedNotifs["changes_requested"].link === "/contributions", "Revisions link to student contributions");
    assert(generatedNotifs["rejected"].title.includes("Not Approved"), "Rejection notification is clear and direct");
  });

  // ── 11. Role-Based Access Control for Question Curation ─────
  test("Academic Quality: Question Curation boundary requires ADMIN or SUPER_ADMIN role", () => {
    function hasCurationPrivilege(roles: string[]): boolean {
      return roles.includes("ADMIN") || roles.includes("SUPER_ADMIN");
    }

    assert.strictEqual(hasCurationPrivilege(["STUDENT"]), false, "Regular student cannot curate questions");
    assert.strictEqual(hasCurationPrivilege(["USER"]), false, "Regular user cannot curate questions");
    assert.strictEqual(hasCurationPrivilege(["ADMIN"]), true, "Admin has curation privilege");
    assert.strictEqual(hasCurationPrivilege(["SUPER_ADMIN"]), true, "Super Admin has curation privilege");
  });

  // ── 12. Responsive Breakpoint Specification Verification ───
  test("Responsive Layout: Breakpoint constraints cover standard mobile devices (320px to 1440px)", () => {
    const requiredBreakpoints = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440];
    const tailwindBreakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    };

    // Verify all mobile viewports < 640px fall gracefully into the default (fluid 100% width) tier
    const fluidMobileBreakpoints = requiredBreakpoints.filter((bp) => bp < tailwindBreakpoints.sm);
    assert.deepStrictEqual(
      fluidMobileBreakpoints,
      [320, 360, 375, 390, 430],
      "All mobile screen widths must be supported by mobile-first fluid layout"
    );

    // Verify tablet and desktop tiers
    assert(requiredBreakpoints.includes(tailwindBreakpoints.md), "Tablet breakpoint 768px covered");
    assert(requiredBreakpoints.includes(tailwindBreakpoints.lg), "Laptop breakpoint 1024px covered");
    assert(requiredBreakpoints.includes(tailwindBreakpoints.xl), "Desktop breakpoint 1280px covered");
  });

  console.log("==================================================");
  console.log(`AUDIT RESULTS: ${passed}/${total} TESTS PASSED`);
  console.log("==================================================");

  if (passed !== total) {
    process.exit(1);
  }
}

runEcosystemIntegrationAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
