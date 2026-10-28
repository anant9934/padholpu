import pg from "pg";
const { Client } = pg;

async function promoteUser() {
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
    console.log(`Checking user: ${email}`);
    
    const res = await client.query("SELECT id, username, email, role FROM users WHERE email = $1", [email]);
    
    if (res.rows.length === 0) {
      console.log("User NOT found. Cannot promote.");
    } else {
      const user = res.rows[0];
      console.log(`User found: ${user.username} (ID: ${user.id}, Current Role: ${user.role})`);
      
      await client.query("UPDATE users SET role = 'SUPER_ADMIN', isAdmin = true WHERE id = $1", [user.id]);
      console.log(`SUCCESS: User ${user.username} promoted to SUPER_ADMIN.`);
    }
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await client.end();
  }
}

promoteUser();
