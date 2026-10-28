import { db } from "./server/db";
import { resources, users } from "./shared/schema";
import { ilike, like } from "drizzle-orm";

async function main() {
  const q1 = await db.select().from(resources).where(ilike(resources.uploaderName, "%bot%"));
  console.log("Bot resources:", q1.length);
  if (q1.length > 0) {
    console.log(q1.slice(0, 5).map(r => ({ id: r.id, name: r.uploaderName, size: r.fileSize })));
  }

  const q2 = await db.select().from(users).where(ilike(users.fullName, "%bot%"));
  console.log("Bot users:");
  console.log(q2.map(u => ({ id: u.id, name: u.fullName, username: u.username })));
  process.exit(0);
}
main().catch(console.error);
