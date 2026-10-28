import { db } from "./db";
import { sql } from "drizzle-orm";

/**
 * Ensures that the production database schema matches the required columns
 * for authentication and Google OAuth.
 */
export async function bootstrapDatabase() {
  const dbUrlRaw =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.STUDYLPU_DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    "";
  const dbHost = dbUrlRaw.match(/@([^/:]+)/)?.[1] || "unknown-host";
  
  console.log(`[BOOTSTRAP] Connecting to host: ${dbHost.substring(0, 10)}...`);

  try {
    // 0. Base table guarantees for fresh databases (e.g. brand new Neon projects)
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        email TEXT UNIQUE,
        password TEXT NOT NULL,
        full_name TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        code TEXT NOT NULL UNIQUE,
        total_units INTEGER DEFAULT 5
      );

      CREATE TABLE IF NOT EXISTS exam_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        subject_id INTEGER,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // 1. Ensure users table has all required columns
    await db.execute(sql`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS google_id TEXT,
      ADD COLUMN IF NOT EXISTS reset_token TEXT,
      ADD COLUMN IF NOT EXISTS reset_token_expires TIMESTAMP,
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS roles TEXT[] DEFAULT ARRAY['USER']::TEXT[],
      ADD COLUMN IF NOT EXISTS is_shadow_banned BOOLEAN DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS trust_level TEXT DEFAULT 'USER',
      ADD COLUMN IF NOT EXISTS phone_number TEXT,
      ADD COLUMN IF NOT EXISTS token_version INTEGER NOT NULL DEFAULT 1,
      ADD COLUMN IF NOT EXISTS totp_secret TEXT,
      ADD COLUMN IF NOT EXISTS totp_enabled BOOLEAN DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS totp_recovery_codes TEXT[]
    `);
    console.log("[BOOTSTRAP] Verified users table (oauth, roles, security, 2fa)");

    // 2. Ensure exam_sessions table has created_at
    await db.execute(sql`
      ALTER TABLE exam_sessions 
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW()
    `);
    console.log("[BOOTSTRAP] Verified exam_sessions table (created_at)");
    
    // 5. Ensure contact_messages table and columns exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        category TEXT NOT NULL,
        message TEXT NOT NULL,
        ticket_id TEXT NOT NULL,
        priority TEXT NOT NULL DEFAULT 'normal',
        status TEXT NOT NULL DEFAULT 'new',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
      
      ALTER TABLE contact_messages 
      ADD COLUMN IF NOT EXISTS subject TEXT,
      ADD COLUMN IF NOT EXISTS organization TEXT,
      ADD COLUMN IF NOT EXISTS resolution TEXT,
      ADD COLUMN IF NOT EXISTS ticket_id TEXT,
      ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'normal',
      ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS secret_token TEXT;
    `);
    // 6. Ensure notifications, admin_logs, and resource_reports tables exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        link TEXT,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS admin_logs (
        id SERIAL PRIMARY KEY,
        admin_id INTEGER NOT NULL REFERENCES users(id),
        action TEXT NOT NULL,
        target_type TEXT,
        target_id TEXT,
        details TEXT,
        ip_address TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS resource_reports (
        id SERIAL PRIMARY KEY,
        resource_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        reason TEXT NOT NULL,
        status TEXT DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT NOW(),
        resolved_at TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS rate_limits (
        key TEXT PRIMARY KEY,
        hits INTEGER NOT NULL DEFAULT 1,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL
      );
      CREATE INDEX IF NOT EXISTS rate_limits_expires_at_idx ON rate_limits (expires_at);

      CREATE TABLE IF NOT EXISTS user_courses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        course_id INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT user_courses_user_course_unique UNIQUE (user_id, course_id)
      );
      CREATE INDEX IF NOT EXISTS user_courses_user_id_idx ON user_courses (user_id);

      CREATE TABLE IF NOT EXISTS user_readiness_history (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        course_id INTEGER REFERENCES subjects(id) ON DELETE SET NULL,
        score REAL NOT NULL,
        components JSONB,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      CREATE INDEX IF NOT EXISTS user_readiness_history_user_idx ON user_readiness_history (user_id, created_at);

      CREATE TABLE IF NOT EXISTS student_activity_events (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        event_type TEXT NOT NULL,
        course_id INTEGER REFERENCES subjects(id) ON DELETE SET NULL,
        unit_id INTEGER REFERENCES units(id) ON DELETE SET NULL,
        topic_id INTEGER REFERENCES topics(id) ON DELETE SET NULL,
        reference_id TEXT,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
      CREATE INDEX IF NOT EXISTS student_activity_events_user_idx ON student_activity_events (user_id, created_at);
      CREATE INDEX IF NOT EXISTS student_activity_events_type_idx ON student_activity_events (event_type);
    `);
    console.log("[BOOTSTRAP] Verified notifications, logs, rate limits, user_courses, readiness history, and activity events tables");



    // 5. Emergency Seed: Ensure subjects table is not empty
    const { subjects } = await import("../shared/schema");
    const existingSubjects = await db.select().from(subjects).limit(1);
    
    if (existingSubjects.length === 0) {
      console.log("[BOOTSTRAP] Subjects table is empty. Performing emergency seed...");
      const coreSubjects = [
        { name: "Java Programming", code: "CSE202", totalUnits: 5 },
        { name: "Python Programming", code: "CSE316", totalUnits: 5 },
        { name: "C Programming", code: "CSE121", totalUnits: 5 },
        { name: "Data Structures", code: "CSE205", totalUnits: 5 },
        { name: "Web Development", code: "INT219", totalUnits: 5 },
        { name: "Database Systems", code: "CSE310", totalUnits: 5 },
      ];
      
      for (const sub of coreSubjects) {
        await db.insert(subjects).values(sub).onConflictDoNothing();
      }
      console.log("[BOOTSTRAP] Emergency seed complete.");
    } else {
      console.log(`[BOOTSTRAP] Verified subjects table (${existingSubjects.length} subjects found)`);
    }

    // 6. Ensure email_templates table exists (admin email template manager)
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "email_templates" (
        "id" SERIAL PRIMARY KEY,
        "type" TEXT NOT NULL UNIQUE,
        "name" TEXT NOT NULL,
        "subject" TEXT NOT NULL,
        "html_body" TEXT NOT NULL,
        "variables" JSONB DEFAULT '[]'::jsonb,
        "is_active" BOOLEAN NOT NULL DEFAULT true,
        "last_edited_by" INTEGER REFERENCES "users"("id") ON DELETE SET NULL,
        "created_at" TIMESTAMP DEFAULT NOW() NOT NULL,
        "updated_at" TIMESTAMP DEFAULT NOW() NOT NULL
      )
    `);
    await db.execute(sql`
      CREATE INDEX IF NOT EXISTS "email_templates_type_idx" ON "email_templates"("type")
    `);
    console.log("[BOOTSTRAP] Verified email_templates table");

    console.log("[BOOTSTRAP] DATABASE SYNC COMPLETE (PUSHED TO PRODUCTION).");
  } catch (error) {
    console.error("[BOOTSTRAP] Error during database synchronization:", error);
  }
}
