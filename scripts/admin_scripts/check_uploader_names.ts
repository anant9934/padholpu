import { db } from "./server/db";
import { resources } from "./shared/schema";
import { sql } from "drizzle-orm";

async function main() {
  const res = await db.selectDistinct({ name: resources.uploaderName }).from(resources);
  console.log("Distinct uploaders:", res.map(r => r.name));
  process.exit(0);
}
main().catch(console.error);
