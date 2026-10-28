import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

async function audit() {
  const pool = new Pool({ connectionString });
  try {
    console.log("Auditing question distribution...");
    
    const res = await pool.query(`
      SELECT 
        s.name as subject,
        u.unit_name as unit,
        t.topic_name as topic,
        q.difficulty,
        COUNT(*)::int as count
      FROM questions q
      JOIN subjects s ON q.subject_id = s.id
      JOIN units u ON q.unit_id = u.id
      JOIN topics t ON q.topic_id = t.id
      GROUP BY s.name, u.unit_name, t.topic_name, q.difficulty
      ORDER BY s.name, u.unit_name, t.topic_name, q.difficulty;
    `);
    
    console.table(res.rows);
    
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error("Audit failed:", err);
    process.exit(1);
  }
}

audit();
