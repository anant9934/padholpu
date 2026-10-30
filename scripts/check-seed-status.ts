import { db } from "../server/db";
import { subjects, questions, subjectiveQuestions, flashcardDecks, flashcards } from "../shared/schema";
import { sql, inArray } from "drizzle-orm";

async function checkStatus() {
  const codes = ['AEE103','AEE201','AGP218','AGR217','GPB203','HRT206','PTH214','SOL223','ENT203','PTH215','AGR233','SOL203','AGR220'];

  const rows = await db.execute(sql`
    SELECT
      s.code,
      s.name,
      COUNT(DISTINCT q.id)   AS mcq_count,
      COUNT(DISTINCT sq.id)  AS subj_count,
      COUNT(DISTINCT fc.id)  AS flash_count
    FROM subjects s
    LEFT JOIN questions          q  ON q.subject_id  = s.id
    LEFT JOIN subjective_questions sq ON sq.subject_id = s.id
    LEFT JOIN flashcard_decks    fd ON fd.subject_id  = s.id
    LEFT JOIN flashcards         fc ON fc.deck_id     = fd.id
    WHERE s.code = ANY(ARRAY['AEE103','AEE201','AGP218','AGR217','GPB203','HRT206','PTH214','SOL223','ENT203','PTH215','AGR233','SOL203','AGR220'])
    GROUP BY s.code, s.name
    ORDER BY s.code
  `);

  console.log("\n=== PADHO LPU — DB SEED STATUS ===\n");
  console.log("Code      | MCQs | Subj | Flash | Status");
  console.log("----------|------|------|-------|-------");
  for (const r of rows.rows as any[]) {
    const mcqs  = Number(r.mcq_count);
    const subj  = Number(r.subj_count);
    const flash = Number(r.flash_count);
    const ok = mcqs >= 300 && subj >= 100 && flash >= 100;
    const status = ok ? "✅ DONE" : mcqs > 0 ? "⚠️  PARTIAL" : "❌ EMPTY";
    console.log(`${r.code.padEnd(9)} | ${String(mcqs).padStart(4)} | ${String(subj).padStart(4)} | ${String(flash).padStart(5)} | ${status}`);
  }
  console.log("\nDone.\n");
}

checkStatus().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });

