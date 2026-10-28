import { db } from "../server/db";
import { sql } from "drizzle-orm";

async function audit() {
  const getCount = async (query: any) => {
    try {
      const res: any = await db.execute(query);
      const rows = res.rows || res;
      return rows && rows[0] ? Number(rows[0].count) : 0;
    } catch (err: any) {
      console.warn("Count query error:", err.message);
      return 0;
    }
  };

  const getRows = async (query: any) => {
    try {
      const res: any = await db.execute(query);
      return res.rows || res || [];
    } catch (err: any) {
      console.warn("Rows query error:", err.message);
      return [];
    }
  };

  const schoolsCount = await getCount(sql`SELECT count(*)::int as count FROM academic_schools`);
  const programmesCount = await getCount(sql`SELECT count(*)::int as count FROM programmes`);
  const mappingsCount = await getCount(sql`SELECT count(*)::int as count FROM programme_subjects`);
  const subjectsCount = await getCount(sql`SELECT count(*)::int as count FROM subjects`);
  const resourcesCount = await getCount(sql`SELECT count(*)::int as count FROM resources`);
  const pendingNotesCount = await getCount(sql`SELECT count(*)::int as count FROM note_submissions WHERE status = 'pending'`);
  const approvedNotesCount = await getCount(sql`SELECT count(*)::int as count FROM note_submissions WHERE status IN ('approved', 'published')`);
  const questionsCount = await getCount(sql`SELECT count(*)::int as count FROM questions`);
  const quizzesCount = await getCount(sql`SELECT count(*)::int as count FROM quizzes`);
  const subjectiveCount = await getCount(sql`SELECT count(*)::int as count FROM subjective_questions`);
  
  // Existing resources breakdown
  const existingResources = await getRows(sql`
    SELECT r.id, r.title, r.subject, r.type, r.filename
    FROM resources r
    ORDER BY r.id
  `);

  // Existing CSE subjects vs new subjects
  const allSubjects = await getRows(sql`
    SELECT s.id, s.code, s.name, s.discipline, s.semester
    FROM subjects s
    ORDER BY s.id
  `);

  // Breakdown by programme
  const progBreakdown = await getRows(sql`
    SELECT p.id, p.code, p.name, p.discipline,
      COUNT(DISTINCT ps.id)::int as total_mapped_subjects,
      COUNT(DISTINCT r.id)::int as mapped_resources
    FROM programmes p
    LEFT JOIN programme_subjects ps ON ps.programme_id = p.id
    LEFT JOIN subjects s ON s.id = ps.subject_id
    LEFT JOIN resources r ON (
      LOWER(r.subject) = LOWER(s.code) 
      OR LOWER(r.subject) = LOWER(s.name)
      OR LOWER(r.subject) = LOWER(p.code)
    )
    GROUP BY p.id, p.code, p.name, p.discipline
    ORDER BY p.code
  `);

  console.log(JSON.stringify({
    summary: {
      schools: schoolsCount,
      programmes: programmesCount,
      subjects: subjectsCount,
      curriculumMappings: mappingsCount,
      totalResources: resourcesCount,
      pendingStudentSubmissions: pendingNotesCount,
      approvedStudentSubmissions: approvedNotesCount,
      mcqQuestions: questionsCount,
      quizzes: quizzesCount,
      subjectiveQuestions: subjectiveCount,
    },
    existingResources,
    allSubjectsCount: allSubjects.length,
    programmes: progBreakdown,
  }, null, 2));
  process.exit(0);
}

audit().catch(e => {
  console.error("Audit failed:", e);
  process.exit(1);
});
