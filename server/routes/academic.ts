import { Router, type Request, type Response } from "express";
import { storage } from "../storage";
import { db } from "../db";
import { eq, sql } from "drizzle-orm";
import { subjects, resources, quizzes, questions, programmes } from "../../shared/schema";
import {
  getAcademicSchools,
  getDisciplines,
  getProgrammes,
  getProgrammeByCode,
  getUserAcademicProfile,
  updateUserAcademicProfile,
  ensureMultidisciplinarySeedData,
} from "../services/academic-multidisciplinary";
import { CurriculumImportService } from "../services/curriculum-import";
import { AcademicCoverageService } from "../services/academic-coverage";
import { ResourceImportService } from "../services/resource-import";

const router = Router();

/**
 * GET /api/academic/schools
 */
router.get("/academic/schools", async (_req: Request, res: Response) => {
  try {
    await ensureMultidisciplinarySeedData();
    const schools = await getAcademicSchools();
    res.json(schools);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch schools:", error);
    res.status(500).json({ message: "Failed to load academic schools" });
  }
});

/**
 * GET /api/academic/disciplines
 */
router.get("/academic/disciplines", async (_req: Request, res: Response) => {
  try {
    await ensureMultidisciplinarySeedData();
    const disciplines = await getDisciplines();
    res.json(disciplines);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch disciplines:", error);
    res.status(500).json({ message: "Failed to load disciplines" });
  }
});

/**
 * GET /api/academic/programmes
 */
router.get("/academic/programmes", async (req: Request, res: Response) => {
  try {
    await ensureMultidisciplinarySeedData();
    const schoolId = req.query.schoolId ? Number(req.query.schoolId) : undefined;
    const discipline = req.query.discipline as string | undefined;
    const degree = req.query.degree as string | undefined;
    const search = req.query.search as string | undefined;

    const list = await getProgrammes({ schoolId, discipline, degree, search });
    res.json(list);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch programmes:", error);
    res.status(500).json({ message: "Failed to load academic programmes" });
  }
});

/**
 * GET /api/academic/programmes/:code
 */
router.get("/academic/programmes/:code", async (req: Request, res: Response) => {
  try {
    await ensureMultidisciplinarySeedData();
    const code = String(req.params.code || "");
    const prog = await getProgrammeByCode(code);
    if (!prog) {
      return res.status(404).json({ message: "Programme not found" });
    }
    res.json(prog);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch programme detail:", error);
    res.status(500).json({ message: "Failed to load programme detail" });
  }
});

/**
 * GET /api/academic/profile
 */
router.get("/academic/profile", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    const profile = await getUserAcademicProfile(req.user!.id);
    res.json(profile);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch academic profile:", error);
    res.status(500).json({ message: "Failed to load academic profile" });
  }
});

/**
 * PATCH /api/academic/profile
 */
router.patch("/academic/profile", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    const { programmeId, currentSemester, specialization, academicYear } = req.body;
    
    // Validation
    const parsedProgId = programmeId !== undefined && programmeId !== null ? Number(programmeId) : undefined;
    const parsedSem = currentSemester !== undefined && currentSemester !== null ? Number(currentSemester) : undefined;

    if (parsedSem !== undefined) {
      if (isNaN(parsedSem) || parsedSem < 1 || parsedSem > 12) {
        return res.status(400).json({ message: "Current semester must be between 1 and 12" });
      }
    }

    if (parsedProgId !== undefined) {
      const [prog] = await db.select().from(programmes).where(eq(programmes.id, parsedProgId));
      if (!prog) {
        return res.status(404).json({ message: "Selected programme not found" });
      }
      if (parsedSem !== undefined && parsedSem > prog.totalSemesters) {
        return res.status(400).json({
          message: `Semester ${parsedSem} exceeds maximum ${prog.totalSemesters} semesters for ${prog.code}`,
        });
      }
    }

    const updated = await updateUserAcademicProfile(req.user!.id, {
      programmeId: parsedProgId,
      currentSemester: parsedSem,
      specialization: specialization !== undefined ? String(specialization).trim() : undefined,
      academicYear: academicYear !== undefined ? Number(academicYear) : undefined,
    });
    res.json(updated);
  } catch (error: any) {
    console.error("[Academic] Failed to update academic profile:", error);
    res.status(500).json({ message: "Failed to update academic profile" });
  }
});

/**
 * POST /api/academic/curriculum/validate-import
 * Validates a batch of curriculum rows (preview & duplicate detection) before commit.
 * Requires ADMIN or SUPER_ADMIN role.
 */
router.post("/academic/curriculum/validate-import", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const userRoles = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ message: "Admin authorization required to import curriculum" });
  }

  try {
    const rows = req.body?.rows || req.body;
    const result = await CurriculumImportService.validate(rows);
    res.json(result);
  } catch (error: any) {
    console.error("[Academic Import] Validation failed:", error);
    res.status(500).json({ message: error.message || "Failed to validate curriculum import" });
  }
});

/**
 * POST /api/academic/curriculum/apply-import
 * Applies validated curriculum records transactionally.
 * Requires ADMIN or SUPER_ADMIN role.
 */
router.post("/academic/curriculum/apply-import", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const userRoles = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ message: "Admin authorization required to apply curriculum import" });
  }

  try {
    const rows = req.body?.rows || req.body;
    const user = req.user as any;
    const result = await CurriculumImportService.apply(rows, user.id, user.username || "admin");
    res.json(result);
  } catch (error: any) {
    console.error("[Academic Import] Apply failed:", error);
    res.status(400).json({ message: error.message || "Failed to apply curriculum import" });
  }
});

/**
 * GET /api/academic/admin/content-coverage
 * Authoritative content coverage breakdown for administrators.
 * Requires ADMIN or SUPER_ADMIN role.
 */
router.get("/academic/admin/content-coverage", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const userRoles = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ message: "Admin authorization required to view coverage reports" });
  }

  try {
    const { schoolCode, programmeCode, discipline, status } = req.query;
    const report = await AcademicCoverageService.getCoverageReport({
      schoolCode: schoolCode ? String(schoolCode) : undefined,
      programmeCode: programmeCode ? String(programmeCode) : undefined,
      discipline: discipline ? String(discipline) : undefined,
      status: status ? (String(status) as any) : undefined,
    });
    res.json(report);
  } catch (error: any) {
    console.error("[Academic Coverage] Failed to generate coverage report:", error);
    res.status(500).json({ message: "Failed to generate academic content coverage report" });
  }
});

/**
 * POST /api/academic/resources/validate-import
 * Validates a batch of academic resources before import.
 * Requires ADMIN or SUPER_ADMIN role.
 */
router.post("/academic/resources/validate-import", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const userRoles = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ message: "Admin authorization required to import resources" });
  }

  try {
    const rows = req.body?.rows || req.body;
    const result = await ResourceImportService.validate(rows);
    res.json(result);
  } catch (error: any) {
    console.error("[Resource Import] Validation error:", error);
    res.status(500).json({ message: error.message || "Failed to validate resource import" });
  }
});

/**
 * POST /api/academic/resources/apply-import
 * Applies validated academic resources transactionally.
 * Requires ADMIN or SUPER_ADMIN role.
 */
router.post("/academic/resources/apply-import", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const userRoles = (req.user as any)?.roles || [];
  if (!userRoles.includes("ADMIN") && !userRoles.includes("SUPER_ADMIN")) {
    return res.status(403).json({ message: "Admin authorization required to apply resource import" });
  }

  try {
    const rows = req.body?.rows || req.body;
    const user = req.user as any;
    const result = await ResourceImportService.apply(rows, user.id, user.username || "admin");
    res.json(result);
  } catch (error: any) {
    console.error("[Resource Import] Apply error:", error);
    res.status(400).json({ message: error.message || "Failed to apply resource import" });
  }
});

/**
 * GET /api/courses
 * Authoritative dynamic list of all academic courses/subjects with real counts.
 */
router.get("/courses", async (_req: Request, res: Response) => {
  try {
    const courses = await storage.getCourses();
    res.json(courses);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch courses:", error);
    res.status(500).json({ message: "Failed to load academic courses" });
  }
});

/**
 * GET /api/courses/by-code/:code
 * Full public academic entity graph for a subject by course code.
 * Includes units, topics, questions count, matching resources, and quizzes.
 */
router.get("/courses/by-code/:code", async (req: Request, res: Response) => {
  const code = String(req.params.code || "").trim().toUpperCase();
  try {
    const [subject] = await db
      .select()
      .from(subjects)
      .where(sql`UPPER(${subjects.code}) = ${code}`);

    if (!subject) {
      return res.status(404).json({ message: "Course / Subject not found" });
    }

    // Get units with topics
    const courseUnits = await storage.getCourseUnitsWithCounts(subject.id);
    const unitsWithTopics = await Promise.all(
      courseUnits.map(async (u) => {
        const unitTopics = await storage.getTopics(u.id);
        return {
          ...u,
          topics: unitTopics,
        };
      })
    );

    // Get matching resources
    const matchingResources = await db
      .select({
        id: resources.id,
        title: resources.title,
        subject: resources.subject,
        type: resources.type,
        isPremium: sql<boolean>`false`,
        priceGold: sql<number>`0`,
        createdAt: resources.createdAt,
      })
      .from(resources)
      .where(sql`${resources.subject} ILIKE ${'%' + code + '%'} OR ${resources.subject} ILIKE ${'%' + subject.name + '%'}`);

    // Get matching quizzes
    const matchingQuizzes = await db
      .select({
        id: quizzes.id,
        title: quizzes.title,
        subject: quizzes.subject,
        difficulty: quizzes.difficulty,
        questionCount: sql<number>`COALESCE(jsonb_array_length(${quizzes.questions}), 0)::int`,
        isPremium: sql<boolean>`false`,
        createdAt: quizzes.createdAt,
      })
      .from(quizzes)
      .where(sql`UPPER(${quizzes.subject}) = ${code} OR ${quizzes.subject} ILIKE ${'%' + code + '%'}`);

    // Total questions
    const [questionCountRow] = await db
      .select({ count: sql`count(*)`.mapWith(Number) })
      .from(questions)
      .where(eq(questions.subjectId, subject.id));

    res.json({
      subject,
      units: unitsWithTopics,
      resources: matchingResources,
      quizzes: matchingQuizzes,
      stats: {
        totalUnits: subject.totalUnits || unitsWithTopics.length,
        unitsCount: unitsWithTopics.length,
        questionCount: questionCountRow?.count ?? 0,
        resourceCount: matchingResources.length,
        quizCount: matchingQuizzes.length,
      },
    });
  } catch (error: any) {
    console.error("[Academic] Failed to fetch subject by code:", error);
    res.status(500).json({ message: "Failed to load subject" });
  }
});

/**
 * GET /api/courses/my
 * Returns the logged-in student's enrolled / active courses.
 */
router.get("/courses/my", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    const userCourses = await storage.getUserCourses(req.user!.id);
    res.json(userCourses);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch user courses:", error);
    res.status(500).json({ message: "Failed to load user courses" });
  }
});

/**
 * POST /api/courses/my
 * Enrolls student in a course.
 */
router.post("/courses/my", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const courseId = Number(req.body.courseId);
  if (!courseId) return res.status(400).json({ message: "courseId is required" });

  try {
    const enrolled = await storage.enrollUserCourse(req.user!.id, courseId);
    await storage.logStudentActivity({
      userId: req.user!.id,
      eventType: "COURSE_ENROLLED",
      courseId,
    }).catch(() => {});

    res.status(201).json(enrolled);
  } catch (error: any) {
    console.error("[Academic] Failed to enroll in course:", error);
    res.status(500).json({ message: "Failed to enroll in course" });
  }
});

/**
 * DELETE /api/courses/my/:courseId
 * Un-enrolls student from a course.
 */
router.delete("/courses/my/:courseId", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  const courseId = Number(req.params.courseId);
  if (!courseId) return res.status(400).json({ message: "Invalid course ID" });

  try {
    await storage.unenrollUserCourse(req.user!.id, courseId);
    res.sendStatus(204);
  } catch (error: any) {
    console.error("[Academic] Failed to unenroll course:", error);
    res.status(500).json({ message: "Failed to unenroll course" });
  }
});

/**
 * GET /api/courses/:courseId/units
 * Returns units for a course with topic and question counts.
 */
router.get("/courses/:courseId/units", async (req: Request, res: Response) => {
  const courseId = Number(req.params.courseId);
  if (!courseId) return res.status(400).json({ message: "Invalid course ID" });

  try {
    const unitsList = await storage.getCourseUnitsWithCounts(courseId);
    res.json(unitsList);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch course units:", error);
    res.status(500).json({ message: "Failed to load course units" });
  }
});

/**
 * GET /api/units/:unitId/topics
 * Returns topics for a unit.
 */
router.get("/units/:unitId/topics", async (req: Request, res: Response) => {
  const unitId = Number(req.params.unitId);
  if (!unitId) return res.status(400).json({ message: "Invalid unit ID" });

  try {
    const topicsList = await storage.getTopics(unitId);
    res.json(topicsList);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch unit topics:", error);
    res.status(500).json({ message: "Failed to load unit topics" });
  }
});

/**
 * GET /api/dashboard
 * Aggregated, single-call endpoint for the logged-in student dashboard.
 * Real DB data only — zero hardcoding.
 */
router.get("/dashboard", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);

  try {
    const diagnostics = await storage.getUserAcademicDiagnostics(req.user!.id);
    res.json(diagnostics);
  } catch (error: any) {
    console.error("[Academic] Failed to generate dashboard diagnostics:", error);
    res.status(500).json({ message: "We couldn't load your progress right now. Please try again." });
  }
});

/**
 * GET /api/progress
 * Comprehensive academic progress endpoint for Progress Page.
 */
router.get("/progress", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);

  try {
    const diagnostics = await storage.getUserAcademicDiagnostics(req.user!.id);
    res.json(diagnostics);
  } catch (error: any) {
    console.error("[Academic] Failed to fetch progress analytics:", error);
    res.status(500).json({ message: "We couldn't load your progress right now." });
  }
});

/**
 * GET /api/recommendations/next
 * Server-authoritative Next Best Action recommendation.
 */
router.get("/recommendations/next", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);

  try {
    const diagnostics = await storage.getUserAcademicDiagnostics(req.user!.id);
    res.json(diagnostics.nextBestAction);
  } catch (error: any) {
    console.error("[Academic] Failed to generate next action:", error);
    res.status(500).json({ message: "Failed to generate recommendation" });
  }
});

/**
 * GET /api/search?q=
 * Live PostgreSQL academic search across courses, units, topics, resources, and quizzes.
 */
router.get("/search", async (req: Request, res: Response) => {
  const query = (req.query.q as string || "").trim();
  if (!query) return res.json([]);

  try {
    const results = await storage.searchAcademic(query, 15);
    res.json(results);
  } catch (error: any) {
    console.error("[Academic] Search error:", error);
    res.status(500).json({ message: "Search failed" });
  }
});



/**
 * POST /api/activity/event
 * Log meaningful academic events.
 */
router.post("/activity/event", async (req: Request, res: Response) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);

  const { eventType, courseId, unitId, topicId, referenceId, metadata } = req.body;
  if (!eventType) return res.status(400).json({ message: "eventType is required" });

  try {
    const event = await storage.logStudentActivity({
      userId: req.user!.id,
      eventType,
      courseId: courseId ? Number(courseId) : undefined,
      unitId: unitId ? Number(unitId) : undefined,
      topicId: topicId ? Number(topicId) : undefined,
      referenceId: referenceId ? String(referenceId) : undefined,
      metadata,
    });
    res.status(201).json(event);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to log event" });
  }
});

export default router;
