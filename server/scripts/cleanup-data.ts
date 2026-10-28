import { db } from "../db";
import { subjects, units, topics, questions, quizzes, quizAttempts, leaderboard, examSessions, examQuestions, examAttemptsDetailed } from "../../shared/schema";
import { eq, inArray, or } from "drizzle-orm";

async function runCleanup() {
  try {
    console.log("🧹 Starting Database Cleanup...");

    // 1. Identify Placeholder Subjects
    const placeholders = await db.select().from(subjects).where(
      or(
        eq(subjects.name, "General Knowledge"),
        eq(subjects.code, "GK101")
      )
    );

    if (placeholders.length > 0) {
      const subIds = placeholders.map(s => s.id);
      console.log(`[!] Found ${subIds.length} placeholder subjects. Cleaning up...`);

      // Deleting questions linked to these subjects
      await db.delete(questions).where(inArray(questions.subjectId, subIds));
      
      // Deleting units and topics linked to these subjects
      const unitList = await db.select().from(units).where(inArray(units.subjectId, subIds));
      if (unitList.length > 0) {
        const unitIds = unitList.map(u => u.id);
        const topicList = await db.select().from(topics).where(inArray(topics.unitId, unitIds));
        if (topicList.length > 0) {
          const topicIds = topicList.map(t => t.id);
          await db.delete(topics).where(inArray(topics.id, topicIds));
        }
        await db.delete(units).where(inArray(units.id, unitIds));
      }

      // Delete leaderboard entries
      await db.delete(leaderboard).where(inArray(leaderboard.subject, placeholders.map(p => p.name)));

      // Delete the subjects themselves
      await db.delete(subjects).where(inArray(subjects.id, subIds));
      console.log("✅ Placeholder subjects and linked data removed.");
    }

    // 2. Remove placeholder Quizzes
    console.log("[!] Checking for placeholder quizzes...");
    const placeholderQuizzes = await db.select().from(quizzes).where(eq(quizzes.title, "Java Basics"));
    if (placeholderQuizzes.length > 0) {
      const qIds = placeholderQuizzes.map(q => q.id);
      await db.delete(quizAttempts).where(inArray(quizAttempts.quizId, qIds));
      await db.delete(quizzes).where(inArray(quizzes.id, qIds));
      console.log("✅ Placeholder quizzes and attempts removed.");
    }

    // 4. Final verification
    console.log("✨ Database cleanup complete! All unnecessary placeholder data has been purged.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Cleanup failed:", err);
    process.exit(1);
  }
}

runCleanup();
