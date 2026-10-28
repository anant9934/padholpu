import { db } from "../../server/db";
import { users } from "../../shared/schema";
import { desc } from "drizzle-orm";

async function test() {
  try {
    console.log("Testing leaderboard query...");
    const topUsers = await db
      .select({
        id: users.id,
        name: users.fullName,
        username: users.username,
        avatar_url: users.avatarUrl,
        score: users.score,
      })
      .from(users)
      .orderBy(desc(users.score))
      .limit(5);
    
    console.log("Success! Top users:", JSON.stringify(topUsers, null, 2));
    process.exit(0);
  } catch (err) {
    console.error("Query failed:", err);
    process.exit(1);
  }
}

test();
