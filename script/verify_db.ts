import { Pool } from 'pg';

const MAIN_URL = process.env.DATABASE_URL || '';

async function verify(name: string, url: string) {
  if (!url) {
    console.log(`[${name}] No database URL configured.`);
    return;
  }
  console.log(`\n--- Verifying ${name} ---`);
  const pool = new Pool({ connectionString: url, connectionTimeoutMillis: 5000 });
  try {
    const client = await pool.connect();
    console.log(`[${name}] Connected.`);
    
    // Check tables
    const tables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log(`[${name}] Tables:`, tables.rows.map(r => r.table_name).join(', '));
    
    client.release();
  } catch (e: any) {
    console.error(`[${name}] FAILED:`, e.message);
  } finally {
    await pool.end();
  }
}

async function run() {
  await verify('MAIN DATABASE', MAIN_URL);
}

run();
