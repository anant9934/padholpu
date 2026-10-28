import fs from "fs";
import path from "path";
import { db } from "../server/db";
import { sql } from "drizzle-orm";
import { ensureMultidisciplinarySeedData } from "../server/services/academic-multidisciplinary";

async function runAcademicMigration() {
  console.log("==========================================================");
  console.log("   PADHO LPU — ACADEMIC DATABASE MIGRATION RUNNER         ");
  console.log("==========================================================");

  // 1. Read Migration File
  const migrationPath = path.resolve(process.cwd(), "migrations/0006_multidisciplinary_academic_architecture.sql");
  if (!fs.existsSync(migrationPath)) {
    throw new Error(`Migration file not found at: ${migrationPath}`);
  }
  const migrationSql = fs.readFileSync(migrationPath, "utf-8");

  console.log("📄 Reading migration SQL from:", migrationPath);
  console.log("🔒 Executing transactionally with IF NOT EXISTS safety...");

  // 2. Execute SQL
  await db.execute(sql.raw(migrationSql));
  console.log("✅ DDL executed successfully without errors.");

  // 3. Verify Table Creation
  console.log("🔍 Verifying table existence and row counts in database...");
  const tables = ["academic_schools", "programmes", "programme_subjects", "users", "subjects", "subjective_questions"];
  for (const t of tables) {
    const res = await db.execute(sql.raw(`SELECT count(*) as count FROM "${t}"`));
    console.log(`  • Table "${t}": ${res.rows[0].count} records`);
  }

  // 4. Run Idempotent Seed Initialization
  console.log("🌱 Applying idempotent multidisciplinary seed catalog...");
  const seedOk = await ensureMultidisciplinarySeedData();
  if (seedOk) {
    console.log("✅ Multidisciplinary academic seed successfully verified/applied!");
  } else {
    console.warn("⚠️ Seed completed with warnings.");
  }

  // 5. Final State Verification
  console.log("📊 Final Verified Database Counts:");
  const finalSchools = await db.execute(sql`SELECT count(*) as count FROM academic_schools`);
  const finalProgs = await db.execute(sql`SELECT count(*) as count FROM programmes`);
  const finalMappings = await db.execute(sql`SELECT count(*) as count FROM programme_subjects`);
  const finalSubjects = await db.execute(sql`SELECT count(*) as count FROM subjects`);

  console.log(`  • Schools:    ${finalSchools.rows[0].count}`);
  console.log(`  • Programmes: ${finalProgs.rows[0].count}`);
  console.log(`  • Subjects:   ${finalSubjects.rows[0].count}`);
  console.log(`  • Mappings:   ${finalMappings.rows[0].count}`);
  console.log("==========================================================");
  console.log("MIGRATION & SEEDING COMPLETED SAFELY");
  console.log("==========================================================");
  process.exit(0);
}

runAcademicMigration().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
