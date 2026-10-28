import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

async function audit() {
  const pool = new Pool({ connectionString });
  try {
    console.log("Auditing production database...");
    
    const tablesRes = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `);
    
    console.log("Tables found:", tablesRes.rows.map(r => r.table_name));
    
    for (const table of tablesRes.rows.map(r => r.table_name)) {
      const countRes = await pool.query(`SELECT COUNT(*)::int as count FROM "${table}"`);
      console.log(`- ${table}: ${countRes.rows[0].count} rows`);
      
      if (table === "users") {
        const columnsRes = await pool.query(`
          SELECT column_name, data_type 
          FROM information_schema.columns 
          WHERE table_name = 'users';
        `);
        console.log("  Columns in 'users':", columnsRes.rows.map(c => `${c.column_name} (${c.data_type})`));
      }
    }
    
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error("Audit failed:", err);
    process.exit(1);
  }
}

audit();
