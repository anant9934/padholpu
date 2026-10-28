import { db } from "../db";
import { users } from "../../shared/schema";

async function listUsers() {
  const allUsers = await db.select().from(users);
  console.log("Current Users and Roles:");
  allUsers.forEach(u => {
    console.log(`- ${u.username} (${u.roles.join(", ")})`);
  });
  process.exit(0);
}

listUsers().catch(console.error);
