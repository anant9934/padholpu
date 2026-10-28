import { db } from "./server/db";
import { resources } from "./shared/schema";
import { desc } from "drizzle-orm";

async function main() {
  const res = await db.select().from(resources).orderBy(desc(resources.createdAt)).limit(15);
  console.log(JSON.stringify(res.map(r => ({ id: r.id, name: r.uploaderName, size: r.fileSize, title: r.title, url: r.url })), null, 2));
  process.exit(0);
}
main().catch(console.error);
