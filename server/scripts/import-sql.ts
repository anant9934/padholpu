import pg from "pg";
import fs from "fs";
import path from "path";

// Load environment variables (assumes loaded via --env-file)

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ Error: DATABASE_URL not found in .env.local");
  process.exit(1);
}

async function runImport() {
  const sqlFile = path.join(process.cwd(), "server/scripts/questions_fixed.sql");
  
  if (!fs.existsSync(sqlFile)) {
    console.error(`❌ Error: SQL file not found at ${sqlFile}`);
    process.exit(1);
  }

  const sqlContent = fs.readFileSync(sqlFile, "utf-8");
  
  // Initialize DB connection
  const pool = new pg.Pool({ connectionString });
  const client = await pool.connect();

  try {
    console.log("🚀 Starting database import...");
    console.log(`📊 Total SQL size: ${(sqlContent.length / 1024).toFixed(2)} KB`);

    // Execute the full SQL
    await client.query("BEGIN;");
    await client.query(sqlContent);
    await client.query("COMMIT;");

    console.log("✅ Import successful! All questions, subjects, and topics synced.");
    
    // Summary verification
    const { rows: subjCount } = await client.query("SELECT count(*) FROM subjects;");
    const { rows : qCount } = await client.query("SELECT count(*) FROM questions;");
    
    console.log(`📌 Database Totals:`);
    console.log(`   - Subjects: ${subjCount[0].count}`);
    console.log(`   - Questions: ${qCount[0].count}`);

  } catch (err) {
    await client.query("ROLLBACK;");
    console.error("❌ Import failed:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

runImport();
