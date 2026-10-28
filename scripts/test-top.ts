import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import * as schema from "../shared/schema";
import ws from "ws";
import { eq, sql, desc, and } from "drizzle-orm";

neonConfig.webSocketConstructor = ws;

async function test() {
  const connectionString = 
    process.env.STUDYLPU_DATABASE_URL || 
    process.env.STUDYLPU_POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL;

  console.log("Connection string found:", !!connectionString);
  if (!connectionString) {
    console.error("No connection string found in process.env!");
    process.exit(1);
  }

  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema });

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  console.log("Seven days ago:", sevenDaysAgo);

  try {
    const result = await db
      .select({
        id: schema.users.id,
        name: schema.users.fullName,
        count: sql<number>`count(*)::int`,
      })
      .from(schema.resources)
      .innerJoin(schema.users, eq(schema.resources.uploaderId, schema.users.id))
      .where(sql`${schema.resources.createdAt} > ${sevenDaysAgo}`)
      .groupBy(schema.users.id, schema.users.fullName)
      .orderBy(desc(sql`count(*)`))
      .limit(5);

    console.log("Top Contributors:", JSON.stringify(result, null, 2));
    
    // Also check total resources in last 7 days
    const total = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(schema.resources)
      .where(sql`${schema.resources.createdAt} > ${sevenDaysAgo}`);
    
    console.log("Total resources in last 7 days:", total[0].count);

    // Check all resources uploader info
    const all = await db
      .select({
        id: schema.resources.id,
        title: schema.resources.title,
        uploaderId: schema.resources.uploaderId,
        createdAt: schema.resources.createdAt,
      })
      .from(schema.resources)
      .limit(5);
    console.log("Sample resources:", JSON.stringify(all, null, 2));

  } catch (err) {
    console.error("Query failed:", err);
  } finally {
    await pool.end();
    process.exit(0);
  }
}

test().catch(err => {
  console.error(err);
  process.exit(1);
});
