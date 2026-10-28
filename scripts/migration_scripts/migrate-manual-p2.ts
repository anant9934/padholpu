import pg from 'pg';

const { Client } = pg;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

async function migrate() {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to database');

    console.log('Adding rating and review columns to mentor_requests...');
    await client.query(`
      ALTER TABLE mentor_requests 
      ADD COLUMN IF NOT EXISTS rating INTEGER,
      ADD COLUMN IF NOT EXISTS review TEXT;
    `);

    console.log('Migration successful');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await client.end();
  }
}

migrate();
