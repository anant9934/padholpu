import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import fs from "fs";
import path from "path";

neonConfig.webSocketConstructor = ws;

const url = process.env.DATABASE_URL || process.env.STUDYLPU_POSTGRES_URL_NON_POOLING;
if (!url) {
  console.error("No database URL found in .env.production");
  process.exit(1);
}

const pool = new Pool({ connectionString: url });
const sqlPath = path.resolve(process.cwd(), 'migrations/0001_security_hardening.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

async function run() {
  if (url) {
    console.log("Applying security migration to DB ending in:", url.split('/').pop());
  }
  await pool.query(sql);
  console.log("Migration applied successfully!");
  await pool.end();
}

run().catch(err => {
  console.error("Migration failed:", err);
  pool.end();
});
