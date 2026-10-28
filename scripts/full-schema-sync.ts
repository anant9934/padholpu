import { sql } from "../server/db";

async function run() {
  console.log("🚀 Starting full schema sync with Neon...");

  const queries = [
    // ===== USERS TABLE =====
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token TEXT`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token_expires TIMESTAMP`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS score REAL DEFAULT 0`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS slo_coins REAL DEFAULT 0`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS last_active_date TIMESTAMP`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS streak_count INTEGER DEFAULT 0`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS bio TEXT`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT`,

    // ===== RESOURCES TABLE =====
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS uploader_username TEXT`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS is_boosted BOOLEAN DEFAULT FALSE`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS boost_expiry TIMESTAMP`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS bonus_awarded BOOLEAN DEFAULT FALSE`,

    // ===== QUIZ ATTEMPTS TABLE =====
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS percentage REAL DEFAULT 0`,

    // ===== CONTACT MESSAGES TABLE =====
    `ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS ticket_id TEXT`,
    `ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'normal' NOT NULL`,
    `ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new' NOT NULL`,
    `ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS organization TEXT`,
    `ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS subject TEXT`,
    `UPDATE contact_messages SET ticket_id = 'TKT-MIGRATED-' || id WHERE ticket_id IS NULL`,

    // ===== EXAM SESSIONS TABLE =====
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS percentage REAL DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS wrong_count INTEGER DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS marks_per_correct NUMERIC DEFAULT 1`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS marks_per_wrong NUMERIC DEFAULT 0`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS negative_marking BOOLEAN DEFAULT FALSE`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS duration_minutes INTEGER`,

    // ===== LEADERBOARD TABLE =====
    `CREATE TABLE IF NOT EXISTS leaderboard (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      subject TEXT NOT NULL,
      score NUMERIC NOT NULL,
      rank INTEGER,
      created_at TIMESTAMP DEFAULT NOW()
    )`,

    // ===== RESOURCE DOWNLOADS TABLE =====
    `CREATE TABLE IF NOT EXISTS resource_downloads (
      id SERIAL PRIMARY KEY,
      resource_id INTEGER REFERENCES resources(id) NOT NULL,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )`,

    // ===== MENTORS TABLE =====
    `CREATE TABLE IF NOT EXISTS mentors (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      expertise TEXT[] NOT NULL DEFAULT '{}',
      badge TEXT NOT NULL,
      status TEXT NOT NULL,
      image_url TEXT,
      linkedin_url TEXT,
      rating REAL DEFAULT 4.8,
      sessions_completed INTEGER DEFAULT 0,
      session_duration TEXT DEFAULT '45 min',
      created_at TIMESTAMP DEFAULT NOW()
    )`,

    // ===== MENTOR REQUESTS TABLE =====
    `CREATE TABLE IF NOT EXISTS mentor_requests (
      id SERIAL PRIMARY KEY,
      student_name TEXT NOT NULL,
      student_email TEXT NOT NULL,
      goal TEXT NOT NULL,
      message TEXT NOT NULL,
      mentor_id INTEGER REFERENCES mentors(id) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )`,

    // ===== USER SUBJECT SCORES TABLE =====
    `CREATE TABLE IF NOT EXISTS user_subject_scores (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      subject_name TEXT NOT NULL,
      marks INTEGER DEFAULT 0 NOT NULL,
      last_updated TIMESTAMP DEFAULT NOW()
    )`,

    // ===== INDEXES =====
    `CREATE INDEX IF NOT EXISTS users_score_idx ON users(score)`,
    `CREATE INDEX IF NOT EXISTS users_coins_idx ON users(slo_coins)`,
    `CREATE INDEX IF NOT EXISTS is_boosted_idx ON resources(is_boosted)`,
    `CREATE INDEX IF NOT EXISTS user_subject_idx ON user_subject_scores(user_id, subject_name)`,
    `CREATE INDEX IF NOT EXISTS subject_marks_idx ON user_subject_scores(subject_name, marks)`,
  ];

  for (const query of queries) {
    try {
      await sql.query(query);
      const shortQuery = query.trim().split('\n')[0].substring(0, 80);
      console.log(`  ✅ ${shortQuery}...`);
    } catch (err: any) {
      // Ignore "already exists" type errors
      if (err.code === '42701' || err.code === '42P07') {
        const shortQuery = query.trim().split('\n')[0].substring(0, 60);
        console.log(`  ⚡ Already exists: ${shortQuery}...`);
      } else {
        console.error(`  ❌ FAILED: ${query.trim().substring(0, 80)}`);
        console.error(`     Error: ${err.message}`);
      }
    }
  }

  console.log("\n🎉 Full schema sync complete!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
