import pg from 'pg';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

async function run() {
  const client = new pg.Client({ connectionString });
  try {
    await client.connect();
    console.log("Connected to Neon");

    // Add columns if they don't exist
    await client.query(`
      ALTER TABLE contact_messages 
      ADD COLUMN IF NOT EXISTS ticket_id TEXT,
      ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'normal' NOT NULL,
      ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new' NOT NULL
    `);
    
    // Set ticket_id for old records if any
    await client.query(`
      UPDATE contact_messages 
      SET ticket_id = 'TKT-MIGRATED-' || id 
      WHERE ticket_id IS NULL
    `);

    // Now make it NOT NULL
    await client.query(`
      ALTER TABLE contact_messages 
      ALTER COLUMN ticket_id SET NOT NULL
    `);

    console.log("Database schema updated successfully");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await client.end();
  }
}

run();
