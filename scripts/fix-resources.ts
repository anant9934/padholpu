import { sql } from "../server/db";

async function fixResources() {
  console.log("🚀 Fixing resources table schema...");

  const queries = [
    // Core missing column — this is blocking GET /api/resources
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS uploader_id INTEGER REFERENCES users(id)`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS uploader_name TEXT`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS uploader_username TEXT`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS is_boosted BOOLEAN DEFAULT FALSE`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS boost_expiry TIMESTAMP`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS bonus_awarded BOOLEAN DEFAULT FALSE`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS file_size INTEGER DEFAULT 0`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS filename TEXT DEFAULT ''`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS url TEXT DEFAULT ''`,
    `CREATE INDEX IF NOT EXISTS is_boosted_idx ON resources(is_boosted)`,

    // Fix quiz_attempts percentage column
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS percentage REAL DEFAULT 0`,

    // Check exam_sessions table
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS percentage REAL DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS wrong_count INTEGER DEFAULT 0`,
  ];

  for (const query of queries) {
    try {
      await sql.query(query);
      const shortQuery = query.trim().split('\n')[0].substring(0, 80);
      console.log(`  ✅ ${shortQuery}`);
    } catch (err: any) {
      if (err.code === '42701' || err.code === '42P07' || err.code === '42P16') {
        const shortQuery = query.trim().split('\n')[0].substring(0, 60);
        console.log(`  ⚡ Already exists: ${shortQuery}`);
      } else {
        const shortQuery = query.trim().split('\n')[0].substring(0, 80);
        console.error(`  ❌ FAILED: ${shortQuery}`);
        console.error(`     Code: ${err.code} — ${err.message}`);
      }
    }
  }

  console.log("\n🎉 Resources table fix complete!");
  process.exit(0);
}

fixResources().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
