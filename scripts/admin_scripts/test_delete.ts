import { db } from "./server/db";
import { users } from "./shared/schema";
import { DatabaseStorage } from "./server/storage";
import { eq } from "drizzle-orm";

async function run() {
  const storage = new DatabaseStorage();
  
  // Find John or team wam user ID
  const botUsers = await db.select({ id: users.id, username: users.username }).from(users).where(eq(users.username, "team_wam123")); // Replace if needed, or query all.

  console.log("Found bot users:", botUsers);

  // Fallback to searching all logic
  const topUsers = await db.select().from(users).orderBy(users.id).limit(20);
  const bot = topUsers.find(u => u.username.includes("team wam") || u.username.includes("John") || u.name === "team wam" || u.fullName?.includes("team wam"));
  
  if (!bot) {
     console.log("Could not find a bot to test delete on");
     process.exit(1);
  }

  try {
     console.log(`Attempting to delete bot ${bot.username} (ID: ${bot.id})`);
     await storage.deleteUser(bot.id);
     console.log("Delete successful!");
  } catch (err: any) {
     console.error("DELETE FAILED WITH ERROR:");
     console.error(err.message, err.stack);
  }
  process.exit(0);
}

run();
