
import { db } from "./server/db";
import { sql } from "drizzle-orm";

async function runMigration() {
  try {
    console.log("Running manual migration...");
    
    await db.execute(sql`
      ALTER TABLE mentor_requests 
      ADD COLUMN IF NOT EXISTS meeting_link TEXT,
      ADD COLUMN IF NOT EXISTS mentor_message TEXT,
      ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMP;
    `);
    
    console.log("Migration successful!");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

runMigration();
