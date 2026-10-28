import { sql } from "../server/db";

async function run() {
  console.log("Starting Neon migration using WebSocket...");
  try {
    // Add columns if they don't exist
    // Note: sql.query is available on the Pool instance from @neondatabase/serverless
    await sql.query(`
      ALTER TABLE contact_messages 
      ADD COLUMN IF NOT EXISTS ticket_id TEXT,
      ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'normal' NOT NULL,
      ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new' NOT NULL
    `);
    
    console.log("Columns added (or already exist)");

    // Set ticket_id for old records if any
    await sql.query(`
      UPDATE contact_messages 
      SET ticket_id = 'TKT-MIGRATED-' || id 
      WHERE ticket_id IS NULL
    `);

    console.log("Old records updated");

    // Now make it NOT NULL
    await sql.query(`
      ALTER TABLE contact_messages 
      ALTER COLUMN ticket_id SET NOT NULL
    `);

    console.log("Database schema updated successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

run();
