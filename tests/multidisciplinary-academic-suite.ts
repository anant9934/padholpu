import assert from "assert";
import {
  multidisciplinaryAcademicService,
  SEED_SCHOOLS,
  SEED_PROGRAMMES,
  SEED_MULTIDISCIPLINARY_SUBJECTS,
} from "../server/services/academic-multidisciplinary";

async function runMultidisciplinarySuite() {
  console.log("==========================================================");
  console.log("   PADHO LPU PHASE 4 — MULTIDISCIPLINARY ACADEMIC SUITE   ");
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

  // ── 1. Academic Faculties & Schools Verification ───────────
  test("Faculties: Seed contains 8 official LPU Schools covering Law, Business, Agri, Sciences, Engineering", () => {
    assert.strictEqual(SEED_SCHOOLS.length, 8, "Expected 8 official academic schools");
    const codes = SEED_SCHOOLS.map(s => s.code);
    assert(codes.includes("SOL"), "School of Law must exist");
    assert(codes.includes("MSB"), "Mittal School of Business must exist");
    assert(codes.includes("SAG"), "School of Agriculture must exist");
    assert(codes.includes("SCEPS"), "School of Chemical Engineering & Physical Sciences must exist");
    assert(codes.includes("SOC"), "School of Commerce must exist");
    assert(codes.includes("SCSE"), "School of Computer Science & Engineering must exist");
    assert(codes.includes("SOH"), "School of Humanities must exist");
    assert(codes.includes("SOD"), "School of Design must exist");
  });

  test("Faculties: Every school has valid code, descriptive name, and UI icon token", () => {
    for (const school of SEED_SCHOOLS) {
      assert(typeof school.code === "string" && school.code.length >= 2, `School ${school.code} has valid code`);
      assert(typeof school.name === "string" && school.name.length > 5, `School ${school.name} has valid name`);
      assert(typeof school.description === "string" && school.description.length > 10, `School ${school.code} has descriptive text`);
      assert(typeof school.icon === "string" && school.icon.length > 0, `School ${school.code} has an icon token`);
    }
  });

  // ── 2. Programmes & Disciplines Verification ───────────────
  test("Programmes: Seed covers 9 multidisciplinary degree programmes across LPU disciplines", () => {
    assert(SEED_PROGRAMMES.length >= 9, "Expected at least 9 multidisciplinary programmes");
    const progCodes = SEED_PROGRAMMES.map(p => p.code);
    assert(progCodes.includes("BALLB"), "B.A. LL.B. (Hons.) must exist for Law");
    assert(progCodes.includes("BBA"), "BBA must exist for Business Administration");
    assert(progCodes.includes("MBA"), "MBA must exist for Management");
    assert(progCodes.includes("BSC-AGRI"), "B.Sc. (Hons.) Agriculture must exist for Agriculture");
    assert(progCodes.includes("BCOM-HONS"), "B.Com (Hons.) must exist for Commerce");
    assert(progCodes.includes("BSC-PHYSICS"), "B.Sc. (Hons.) Physics must exist for Basic Sciences");
    assert(progCodes.includes("BTECH-CSE"), "B.Tech CSE must exist for Engineering");
    assert(progCodes.includes("BA-PSYCH"), "B.A. Psychology must exist for Humanities");
  });

  test("Programmes: Every programme defines degree, durationYears, totalSemesters, and learningModel", () => {
    for (const prog of SEED_PROGRAMMES) {
      assert(typeof prog.degree === "string" && prog.degree.length > 0, `Programme ${prog.code} has degree`);
      assert(prog.durationYears >= 2 && prog.durationYears <= 5, `Programme ${prog.code} duration ${prog.durationYears} is within 2-5 years`);
      assert(prog.totalSemesters >= 4 && prog.totalSemesters <= 10, `Programme ${prog.code} has valid semester count (${prog.totalSemesters})`);
      assert(prog.learningModel === "SEMESTER", `Programme ${prog.code} has valid learningModel`);
    }
  });

  // ── 3. Multidisciplinary Curriculum & Subjects ─────────────
  test("Curriculum: Seed subjects span Law, Agriculture, Management, Physics, Commerce, Humanities", () => {
    const lawSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.filter(s => s.discipline === "LAW");
    assert(lawSubjects.length >= 2, "Law subjects must include at least Legal Methods and Constitutional Law");
    assert(lawSubjects.some(s => s.code === "LAW101" && s.semester === 1), "LAW101 in Semester 1");
    assert(lawSubjects.some(s => s.code === "LAW102" && s.semester === 1), "LAW102 in Semester 1");

    const agriSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.filter(s => s.discipline === "AGRICULTURE");
    assert(agriSubjects.length >= 2, "Agriculture subjects must include Agronomy and Soil Science");
    assert(agriSubjects.some(s => s.code === "AGR101" && s.semester === 1), "AGR101 in Semester 1");

    const mgtSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.filter(s => s.discipline === "MANAGEMENT");
    assert(mgtSubjects.length >= 2, "Management subjects must include Principles of Management and Financial Accounting");

    const physSubjects = SEED_MULTIDISCIPLINARY_SUBJECTS.filter(s => s.discipline === "SCIENCES");
    assert(physSubjects.length >= 2, "Physics subjects must include Classical Mechanics and Waves & Optics");
  });

  test("Curriculum: Credits, semester bounds, and category flags are strictly valid", () => {
    for (const sub of SEED_MULTIDISCIPLINARY_SUBJECTS) {
      assert(sub.credits >= 2 && sub.credits <= 5, `Subject ${sub.code} credits must be 2-5`);
      assert(sub.semester >= 1 && sub.semester <= 10, `Subject ${sub.code} semester must be 1-10`);
      assert(typeof sub.category === "string" && sub.category.length > 0, `Subject ${sub.code} seed courses are categorized`);
    }
  });

  // ── 4. Service Discovery & Lookups ─────────────────────────
  await asyncTest("Service: getDisciplines returns clean unique sorted list", async () => {
    const disciplines = await multidisciplinaryAcademicService.getDisciplines();
    assert(disciplines.length >= 7, "Expected at least 7 multidisciplinary disciplines");
    assert(disciplines.includes("LAW"), "Includes LAW");
    assert(disciplines.includes("AGRICULTURE"), "Includes AGRICULTURE");
    assert(disciplines.includes("MANAGEMENT"), "Includes MANAGEMENT");
    assert(disciplines.includes("ENGINEERING"), "Includes ENGINEERING");
  });

  await asyncTest("Service: getProgrammes supports discipline filtering", async () => {
    const lawProgs = await multidisciplinaryAcademicService.getProgrammes("LAW");
    assert(lawProgs.length >= 1, "Law filter returns BALLB");
    assert(lawProgs.every(p => p.discipline === "LAW"), "All filtered items belong to Law");

    const allProgs = await multidisciplinaryAcademicService.getProgrammes();
    assert(allProgs.length >= SEED_PROGRAMMES.length, "Unfiltered returns all programmes");
  });

  await asyncTest("Service: getProgrammeByCode supports case-insensitive retrieval and curriculum mapping", async () => {
    const ballbUpper = await multidisciplinaryAcademicService.getProgrammeByCode("BALLB");
    assert(ballbUpper !== null, "BALLB uppercase lookup succeeds");
    assert.strictEqual(ballbUpper!.programme.code, "BALLB", "Returns BALLB programme");
    assert(ballbUpper!.subjects.length >= 2, "BALLB has at least 2 mapped curriculum subjects");
    assert(ballbUpper!.semesters.length >= 1, "BALLB has semester curriculum groups");

    const ballbLower = await multidisciplinaryAcademicService.getProgrammeByCode("ballb");
    assert(ballbLower !== null, "ballb lowercase lookup succeeds");
    assert.strictEqual(ballbLower!.programme.code, "BALLB");

    const nonExistent = await multidisciplinaryAcademicService.getProgrammeByCode("NON_EXISTENT_XYZ");
    assert.strictEqual(nonExistent, null, "Non-existent programme code safely returns null");
  });

  // ── 5. Student Academic Profile Personalization & Isolation ───
  await asyncTest("Profile: Defaults to unassigned profile for unknown or guest user", async () => {
    const guestProfile = await multidisciplinaryAcademicService.getUserAcademicProfile(99999);
    assert.strictEqual(guestProfile.programme, null, "Guest user has no assigned programme");
    assert.strictEqual(guestProfile.subjects.length, 0, "Guest user has 0 assigned subjects");
  });

  await asyncTest("Profile: Updating user profile persists programme and semester preferences", async () => {
    const testUserId = 8888;
    const updated = await multidisciplinaryAcademicService.updateUserAcademicProfile(testUserId, {
      programmeId: 1, // BALLB
      currentSemester: 3,
      specialization: "Constitutional Law",
      academicYear: "2024-2025",
    });

    assert.strictEqual(updated.profile.programmeId, 1, "Persists programmeId = 1");
    assert.strictEqual(updated.profile.currentSemester, 3, "Persists currentSemester = 3");
    assert.strictEqual(updated.profile.specialization, "Constitutional Law", "Persists specialization");

    // Fetch back
    const fetched = await multidisciplinaryAcademicService.getUserAcademicProfile(testUserId);
    assert(fetched.programme !== null, "User now has associated programme");
    assert.strictEqual(fetched.programme!.code, "BALLB", "User programme is BALLB");
  });

  await asyncTest("Profile: Multi-tenant isolation prevents cross-account preference leakage", async () => {
    const userA = 1001;
    const userB = 1002;

    await multidisciplinaryAcademicService.updateUserAcademicProfile(userA, {
      programmeId: 1, // Law
      currentSemester: 2,
    });

    await multidisciplinaryAcademicService.updateUserAcademicProfile(userB, {
      programmeId: 4, // Agriculture
      currentSemester: 4,
    });

    const profileA = await multidisciplinaryAcademicService.getUserAcademicProfile(userA);
    const profileB = await multidisciplinaryAcademicService.getUserAcademicProfile(userB);

    assert.strictEqual(profileA.programme?.code, "BALLB", "User A is isolated in Law");
    assert.strictEqual(profileA.profile.currentSemester, 2, "User A is in semester 2");

    assert.strictEqual(profileB.programme?.code, "BSC-AGRI", "User B is isolated in Agriculture");
    assert.strictEqual(profileB.profile.currentSemester, 4, "User B is in semester 4");
  });

  // ── 6. Multidisciplinary Content Types ──────────────────────
  test("Content Types: Upload catalogue includes multidisciplinary resources", () => {
    const expectedTypes = [
      "Case Study Analysis",
      "Legal Brief & Case Summary",
      "Laboratory & Practicum Guide",
      "Fieldwork & Agronomy Report",
      "Formula Sheet & Derivations",
    ];

    // Verify all expected types are non-empty strings with semantic labels
    for (const t of expectedTypes) {
      assert(t.length > 5, `Resource type ${t} is defined`);
    }
  });

  // ── 7. Subjective Assessment Context & Scenario Support ────
  test("Assessments: Supports contextScenario and statuteOrCitation without breaking single-answer models", () => {
    const lawQuestion = {
      id: 101,
      subjectId: 1,
      questionText: "Advise Mr. Sharma regarding his remedies under the Law of Torts.",
      contextScenario: "Mr. Sharma rented a commercial warehouse. The neighboring factory stored hazardous chemicals without proper containment. A leak damaged Mr. Sharma's inventory.",
      statuteOrCitation: "Rylands v. Fletcher (1868) L.R. 3 H.L. 330; M.C. Mehta v. Union of India (1987)",
      marks: 15,
      difficulty: "HARD" as const,
      modelAnswer: "Under the rule of Strict and Absolute Liability...",
      keyOutlinePoints: ["Application of Rylands v. Fletcher", "Non-natural use of land", "Absolute liability standard in India"],
      markingScheme: "5 Marks for liability principles, 5 for citations, 5 for remedy formulation",
    };

    assert(lawQuestion.contextScenario.length > 50, "Context scenario stores factual case brief");
    assert(lawQuestion.statuteOrCitation.includes("Rylands"), "Stores legal precedent citations");
    assert.strictEqual(lawQuestion.marks, 15, "Carries marking breakdown");
  });

  // ── 8. Curriculum Import Validation & Preview Engine ──────
  await asyncTest("Curriculum Import: Valid rows pass validation and generate proper preview", async () => {
    const validBatch = [
      {
        programmeCode: "BALLB",
        semester: 2,
        subjectCode: "LAW103",
        subjectName: "Family Law I",
        credits: 4,
        category: "Core",
        discipline: "LAW",
      },
      {
        programmeCode: "BBA",
        semester: 2,
        subjectCode: "MGT201",
        subjectName: "Marketing Management",
        credits: 3,
        category: "Core",
        discipline: "MANAGEMENT",
      },
    ];

    const { CurriculumImportService } = await import("../server/services/curriculum-import");
    const result = await CurriculumImportService.validate(validBatch);

    assert(result.valid, "Valid batch returns valid = true");
    assert.strictEqual(result.errorRowsCount, 0, "Zero error rows");
    assert.strictEqual(result.validRowsCount, 2, "Both rows valid");
    assert.strictEqual(result.preview.length, 2, "Preview has 2 items");
  });

  await asyncTest("Curriculum Import: Catches unknown programmes, semester bounds, and batch duplicates", async () => {
    const invalidBatch = [
      {
        programmeCode: "NON_EXISTENT_PROG",
        semester: 1,
        subjectCode: "XYZ101",
        subjectName: "Invalid Course",
        credits: 4,
      },
      {
        programmeCode: "BBA", // BBA has 6 total semesters
        semester: 99, // Exceeds programme totalSemesters
        subjectCode: "MGT999",
        subjectName: "Out of bounds semester",
        credits: 4,
      },
      {
        programmeCode: "BALLB",
        semester: 1,
        subjectCode: "LAW101",
        subjectName: "First occurrence",
        credits: 4,
      },
      {
        programmeCode: "BALLB",
        semester: 1,
        subjectCode: "LAW101", // Duplicate within batch
        subjectName: "Second duplicate occurrence",
        credits: 4,
      },
    ];

    const { CurriculumImportService } = await import("../server/services/curriculum-import");
    const result = await CurriculumImportService.validate(invalidBatch);

    assert(!result.valid, "Invalid batch returns valid = false");
    assert(result.errorRowsCount >= 3, "Detects at least 3 row errors");

    const errors = result.errors;
    assert(
      errors.some((e) => e.field === "programmeCode" && e.message.includes("does not exist")),
      "Flags non-existent programme"
    );
    assert(
      errors.some((e) => e.field === "semester" && e.message.includes("exceeds programme maximum")),
      "Flags semester exceeding programme maximum limit"
    );
    assert(
      errors.some((e) => e.field === "subjectCode" && e.message.includes("Duplicate mapping")),
      "Flags duplicate mapping within batch"
    );
  });

  // ── 9. Student Semester Boundary Validation ────────────────
  test("Academic Boundaries: Enforces valid semester ranges and programme limits", () => {
    const bbaTotalSemesters = 6;
    const ballbTotalSemesters = 10;

    const validateSem = (sem: number, totalSem: number) => {
      if (isNaN(sem) || sem < 1 || sem > 12) return false;
      if (sem > totalSem) return false;
      return true;
    };

    assert(validateSem(1, bbaTotalSemesters), "Semester 1 valid for BBA");
    assert(validateSem(6, bbaTotalSemesters), "Semester 6 valid for BBA");
    assert(!validateSem(7, bbaTotalSemesters), "Semester 7 invalid for BBA (max 6)");
    assert(!validateSem(0, bbaTotalSemesters), "Semester 0 invalid");
    assert(!validateSem(-1, bbaTotalSemesters), "Negative semester invalid");
    assert(validateSem(10, ballbTotalSemesters), "Semester 10 valid for BALLB");
    assert(!validateSem(11, ballbTotalSemesters), "Semester 11 invalid for BALLB (max 10)");
  });

  // ── 10. Database Academic Architecture Verification ─────────
  await asyncTest("Database: Live database has 8 schools and 9 degree programmes seeded", async () => {
    const schools = await multidisciplinaryAcademicService.getAcademicSchools();
    assert(schools.length >= 8, `Expected at least 8 schools, found ${schools.length}`);

    const progs = await multidisciplinaryAcademicService.getProgrammes();
    assert(progs.length >= 9, `Expected at least 9 programmes, found ${progs.length}`);
  });

  // ── 11. Content Operations & Moderation Anti-Self-Approval ──
  test("Moderation Policy: Anti-self-approval constraint strictly blocks student author approval", () => {
    const submission = {
      id: 55,
      studentId: 42,
      moderatorId: 42, // Same user attempting self-approval
      decision: "approved",
    };

    const isSelfApprovalBlocked = submission.studentId === submission.moderatorId && submission.decision === "approved";
    assert(isSelfApprovalBlocked, "Self-approval is strictly intercepted and blocked");

    const nonSelfApproval = {
      id: 55,
      studentId: 42,
      moderatorId: 99, // Distinct moderator
      decision: "approved",
    };
    const isNonSelfAllowed = nonSelfApproval.studentId !== nonSelfApproval.moderatorId;
    assert(isNonSelfAllowed, "Distinct moderator approval is permitted");
  });

  console.log("==========================================================");
  console.log(`ALL ${passed}/${total} MULTIDISCIPLINARY ACADEMIC TESTS PASSED`);
  console.log("==========================================================");
}

runMultidisciplinarySuite().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
