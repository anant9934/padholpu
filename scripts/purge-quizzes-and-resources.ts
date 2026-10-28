/**
 * PURGE ALL QUIZZES & RESOURCES FROM DATABASE
 * Explicitly authorized by user on 2026-09-30.
 *
 * Removes:
 * - All rows from `resources` (and cascading `resourceDownloads`, `resourceReports`, `resourceAnalytics`)
 * - All rows from `quizzes` (and cascading `quizAttempts`)
 */

import { db } from "../server/db";
import { 
  resources, 
  resourceDownloads, 
  resourceReports, 
  resourceAnalytics, 
  quizzes, 
  quizAttempts 
} from "../shared/schema";
import { count } from "drizzle-orm";

async function main() {
  console.log("\n=======================================================");
  console.log("  PURGING ALL RESOURCES & QUIZZES (USER CONFIRMED)");
  console.log("=======================================================\n");

  // 1. Delete dependent resource tracking tables
  await db.delete(resourceDownloads);
  console.log("✔ Deleted all resource_downloads");

  await db.delete(resourceReports);
  console.log("✔ Deleted all resource_reports");

  await db.delete(resourceAnalytics);
  console.log("✔ Deleted all resource_analytics");

  // 2. Delete all resources
  const deletedResources = await db.delete(resources).returning({ id: resources.id });
  console.log(`✔ Deleted ${deletedResources.length} resources from database`);

  // 3. Delete dependent quiz attempts
  const deletedAttempts = await db.delete(quizAttempts).returning({ id: quizAttempts.id });
  console.log(`✔ Deleted ${deletedAttempts.length} quiz_attempts from database`);

  // 4. Delete all quizzes
  const deletedQuizzes = await db.delete(quizzes).returning({ id: quizzes.id });
  console.log(`✔ Deleted ${deletedQuizzes.length} quizzes from database`);

  // 5. Verification check
  const [resCount] = await db.select({ count: count() }).from(resources);
  const [quizCount] = await db.select({ count: count() }).from(quizzes);

  console.log("\n--- Final Database Status ---");
  console.log("Remaining Resources in DB:", resCount.count);
  console.log("Remaining Quizzes in DB:", quizCount.count);

  if (Number(resCount.count) === 0 && Number(quizCount.count) === 0) {
    console.log("\n✅ ALL QUIZZES AND RESOURCES SUCCESSFULLY PURGED.\n");
    process.exit(0);
  } else {
    console.error("\n❌ Error: Some records still remain in database.");
    process.exit(1);
  }
}

main().catch(err => {
  console.error("Purge script failed:", err);
  process.exit(1);
});
