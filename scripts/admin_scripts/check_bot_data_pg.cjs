const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}
const pool = new Pool({ connectionString });

async function main() {
  try {
    console.log("--- Checking 3-digit IDs in exam_attempts_detailed ---");
    const res3 = await pool.query("SELECT COUNT(*) FROM exam_attempts_detailed WHERE id >= 100 AND id <= 999");
    console.log(`Found ${res3.rows[0].count} records with 3-digit IDs.`);

    console.log("\n--- Checking Session 1 Details ---");
    const resS1 = await pool.query("SELECT * FROM exam_sessions WHERE id = 1");
    console.log("Session 1 Info:", JSON.stringify(resS1.rows, null, 2));

    if (resS1.rows.length > 0) {
      const resU1 = await pool.query("SELECT id, username, full_name FROM users WHERE id = $1", [resS1.rows[0].user_id]);
      console.log("User for Session 1:", JSON.stringify(resU1.rows, null, 2));
    }

    console.log("\n--- Checking Bot-like patterns (NULL selections) ---");
    const resNull = await pool.query("SELECT COUNT(*) FROM exam_attempts_detailed WHERE selected_option IS NULL");
    console.log(`Found ${resNull.rows[0].count} records with NULL selected_option.`);

  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

main();
