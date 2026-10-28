import { db } from "./server/db";
import { users } from "./shared/schema";
import { DatabaseStorage } from "./server/storage";
import { desc } from "drizzle-orm";

async function run() {
  const storage = new DatabaseStorage();
  
  // Find top score users
  const topUsers = await db.select().from(users).orderBy(desc(users.score)).limit(10);
  
  console.log("Found top users:", topUsers.map(b => ({id: b.id, name: b.fullName, user: b.username, score: b.score})));

  for (const bot of topUsers) {
    if (bot.username === "admin" || bot.username.includes("anant")) continue; // safe skip

    try {
      console.log(`\nAttempting to delete user ${bot.username} (ID: ${bot.id})`);
      await storage.deleteUser(bot.id);
      console.log(`Successfully deleted ${bot.username}!`);
    } catch (err: any) {
      console.log(`\n[FAILED] Error deleting ${bot.username}:`);
      console.log("MESSAGE:", err.message);
      console.log("CODE:", err.code);
      console.log("DETAIL:", err.detail);
      console.log("TABLE:", err.table);
      console.log("CONSTRAINT:", err.constraint);
      // Exit on first error so we can read it
      process.exit(0);
    }
  }
  process.exit(0);
}

run();
