import pg from "pg";
const { Client } = pg;

async function checkUser() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }
  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log("Connected to database.");
    
    const email = "720anant@gmail.com";
    const res = await client.query("SELECT id, username, email, role, password FROM users WHERE email = $1 OR username = $1", [email]);
    
    if (res.rows.length === 0) {
      console.log("User NOT found.");
    } else {
      console.log("User found:");
      console.log(JSON.stringify(res.rows[0], null, 2));
    }
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await client.end();
  }
}

checkUser();
