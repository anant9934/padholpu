/**
 * apply-migration-0007.ts
 * Applies migration 0007 (learning system tables) to the Neon PostgreSQL DB.
 * Safe to re-run — all CREATE TABLE / CREATE INDEX statements use IF NOT EXISTS.
 */

import { Client } from "pg";
import fs from "fs";
import path from "path";

async function applyMigration() {
  const connStr = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connStr) {
    console.error("❌ No DATABASE_URL or DIRECT_URL set. Run with --env-file=.env");
    process.exit(1);
  }

  const sqlPath = path.resolve("migrations/0007_learning_system_tables.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");

  const client = new Client({ connectionString: connStr });
  await client.connect();
  console.log("✅ Connected to Neon PostgreSQL");

  try {
    await client.query(sql);
    console.log("✅ Migration 0007 applied — flashcard_decks, flashcards,");
    console.log("   user_flashcard_reviews, subjective_questions,");
    console.log("   user_subjective_answers tables are ready.");
  } finally {
    await client.end();
  }
}

applyMigration().catch((err) => {
  console.error("❌ Migration failed:", err.message);
  process.exit(1);
});

