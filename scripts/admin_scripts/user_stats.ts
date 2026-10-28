import { db } from "./server/db";
import { resources } from "./shared/schema";
import { sql, desc } from "drizzle-orm";

async function main() {
  const res = await db.select({ 
    name: resources.uploaderName, 
    count: sql<number>`count(*)::int`, 
    avgSize: sql<number>`avg(${resources.fileSize})::int` 
  }).from(resources).groupBy(resources.uploaderName).orderBy(desc(sql`count(*)`));
  
  console.log(res);
  process.exit(0);
}
main().catch(console.error);
