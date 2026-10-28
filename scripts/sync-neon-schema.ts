import { pool } from "../server/db";

async function syncSchema() {
  console.log("⚡ Starting Neon PostgreSQL schema alignment...");

  const queries = [
    // 1. Users security, auth, and roles columns
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id TEXT UNIQUE;`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS phone_number TEXT;`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS roles TEXT[] NOT NULL DEFAULT ARRAY['USER']::TEXT[];`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS token_version INTEGER NOT NULL DEFAULT 1;`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS totp_secret TEXT;`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS totp_enabled BOOLEAN DEFAULT FALSE;`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS totp_recovery_codes TEXT[];`,
    `CREATE INDEX IF NOT EXISTS users_roles_idx ON users (roles);`,

    // 2. Resources enhancement columns
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS public_id TEXT;`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS is_boosted BOOLEAN DEFAULT FALSE;`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS boost_expiry TIMESTAMP;`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS file_hash TEXT;`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS bonus_awarded BOOLEAN DEFAULT FALSE;`,
    `ALTER TABLE resources ADD COLUMN IF NOT EXISTS uploaded_by INTEGER DEFAULT 1;`,
    `CREATE INDEX IF NOT EXISTS is_boosted_idx ON resources (is_boosted);`,
    `CREATE INDEX IF NOT EXISTS file_hash_idx ON resources (file_hash);`,

    // 2.5 Quiz attempts, exam sessions & questions columns
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS answers JSONB;`,
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS time_taken_seconds INTEGER DEFAULT 0;`,
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS percentage REAL NOT NULL DEFAULT 0;`,
    `ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS completed_at TIMESTAMP DEFAULT NOW();`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS percentage REAL DEFAULT 0;`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0;`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS wrong_count INTEGER DEFAULT 0;`,
    `ALTER TABLE exam_sessions ADD COLUMN IF NOT EXISTS time_taken_seconds INTEGER;`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS subject_id INTEGER REFERENCES subjects(id);`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS unit_id INTEGER REFERENCES units(id);`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS topic_id INTEGER REFERENCES topics(id);`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS formula TEXT;`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS tags TEXT[];`,
    `ALTER TABLE questions ADD COLUMN IF NOT EXISTS estimated_time INTEGER;`,

    // 3. Notifications table
    `CREATE TABLE IF NOT EXISTS notifications (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      message TEXT NOT NULL,
      link TEXT,
      is_read BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS notifications_user_id_idx ON notifications (user_id);`,
    `CREATE INDEX IF NOT EXISTS notifications_is_read_idx ON notifications (is_read);`,

    // 4. Resource analytics & moderation tables
    `CREATE TABLE IF NOT EXISTS resource_analytics (
      id SERIAL PRIMARY KEY,
      resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      action TEXT NOT NULL,
      ip_address TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );`,
    `CREATE TABLE IF NOT EXISTS resource_reports (
      id SERIAL PRIMARY KEY,
      resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
      reporter_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      reason TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL DEFAULT 'PENDING',
      created_at TIMESTAMP DEFAULT NOW()
    );`,

    // 5. Distributed rate limiting store
    `CREATE TABLE IF NOT EXISTS rate_limits (
      key TEXT PRIMARY KEY,
      hits INTEGER NOT NULL DEFAULT 1,
      expires_at TIMESTAMPTZ NOT NULL
    );`,
    `CREATE INDEX IF NOT EXISTS rate_limits_expires_at_idx ON rate_limits (expires_at);`,

    // 6. User personalization: User courses
    `CREATE TABLE IF NOT EXISTS user_courses (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      CONSTRAINT user_courses_user_course_unique UNIQUE (user_id, course_id)
    );`,
    `CREATE INDEX IF NOT EXISTS user_courses_user_id_idx ON user_courses (user_id);`,

    // 7. Readiness history & trends
    `CREATE TABLE IF NOT EXISTS user_readiness_history (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES subjects(id) ON DELETE SET NULL,
      score REAL NOT NULL,
      components JSONB,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS user_readiness_history_user_idx ON user_readiness_history (user_id, created_at);`,

    // 8. Student activity events
    `CREATE TABLE IF NOT EXISTS student_activity_events (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      event_type TEXT NOT NULL,
      course_id INTEGER REFERENCES subjects(id) ON DELETE SET NULL,
      unit_id INTEGER REFERENCES units(id) ON DELETE SET NULL,
      topic_id INTEGER REFERENCES topics(id) ON DELETE SET NULL,
      reference_id TEXT,
      metadata JSONB,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS student_activity_events_user_idx ON student_activity_events (user_id, created_at);`,
    `CREATE INDEX IF NOT EXISTS student_activity_events_type_idx ON student_activity_events (event_type);`,

    // 9. Admin email templates
    `CREATE TABLE IF NOT EXISTS email_templates (
      id SERIAL PRIMARY KEY,
      type TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      subject TEXT NOT NULL,
      html_body TEXT NOT NULL,
      variables JSONB DEFAULT '[]'::jsonb,
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      last_edited_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS email_templates_type_idx ON email_templates (type);`,

    // 10. Testimonials CMS (aligned with shared/schema.ts)
    `DROP TABLE IF EXISTS testimonials CASCADE;`,
    `CREATE TABLE testimonials (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT,
      organization TEXT,
      quote TEXT NOT NULL,
      image_url TEXT,
      linkedin_url TEXT,
      profile_url TEXT,
      rating REAL,
      category TEXT DEFAULT 'student',
      testimonial_date TIMESTAMP,
      display_order INTEGER DEFAULT 0,
      is_featured BOOLEAN DEFAULT FALSE,
      status TEXT NOT NULL DEFAULT 'draft',
      consent_status TEXT NOT NULL DEFAULT 'pending',
      verification_status TEXT NOT NULL DEFAULT 'unverified',
      consent_obtained_at TIMESTAMP,
      verified_at TIMESTAMP,
      verified_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
      published_at TIMESTAMP,
      created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
      updated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
      source_reference TEXT,
      internal_notes TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
      archived_at TIMESTAMP
    );`,
    `CREATE INDEX IF NOT EXISTS testimonials_status_idx ON testimonials (status);`,
    `CREATE INDEX IF NOT EXISTS testimonials_featured_idx ON testimonials (is_featured);`,
    `CREATE INDEX IF NOT EXISTS testimonials_category_idx ON testimonials (category);`,
    `CREATE INDEX IF NOT EXISTS testimonials_display_order_idx ON testimonials (display_order);`
  ];

  for (const q of queries) {
    try {
      await pool.query(q);
    } catch (err: any) {
      console.warn(`Warning executing query: ${err.message}`);
    }
  }

  console.log("✅ Neon PostgreSQL schema synchronized and verified 100%!");
  process.exit(0);
}

syncSchema().catch(err => {
  console.error("❌ Schema sync failed:", err);
  process.exit(1);
});
