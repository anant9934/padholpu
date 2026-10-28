import { db } from "./server/db";
import { resources, users, resourceDownloads, resourceOwnership } from "./shared/schema";
import { inArray } from "drizzle-orm";

async function main() {
  const botNames = ['John', 'johnny', 'team wam'];
  
  // Find bot users
  const botUsers = await db.select().from(users).where(inArray(users.fullName, botNames));
  const botUserIds = botUsers.map(u => u.id);
  console.log("Found bot user IDs:", botUserIds);
  
  if (botUserIds.length > 0) {
    // 1. Delete any resource ownership involving bot users or resources owned by bots
    const botResources = await db.select().from(resources).where(inArray(resources.uploaderName, botNames));
    const botResourceIds = botResources.map(r => r.id);
    
    if (botResourceIds.length > 0) {
      console.log("Deleting ownerships/downloads for", botResourceIds.length, "bot resources...");
      await db.delete(resourceDownloads).where(inArray(resourceDownloads.resourceId, botResourceIds));
      await db.delete(resourceOwnership).where(inArray(resourceOwnership.resourceId, botResourceIds));
    }

    console.log("Deleting ownerships/downloads by bot users...");
    await db.delete(resourceDownloads).where(inArray(resourceDownloads.userId, botUserIds));
    await db.delete(resourceOwnership).where(inArray(resourceOwnership.userId, botUserIds));

    // 2. Delete the actual resources
    if (botResourceIds.length > 0) {
      console.log("Deleting bot resources...");
      await db.delete(resources).where(inArray(resources.id, botResourceIds));
    }
    
    // 3. Delete the users themselves
    console.log("Deleting bot users...");
    await db.delete(users).where(inArray(users.id, botUserIds));
    console.log("Cleanup complete.");
  } else {
    // Fallback: Delete any leftover resources uploaded by these names just in case they don't match the fullName
    const botResources = await db.select().from(resources).where(inArray(resources.uploaderName, botNames));
    const botResourceIds = botResources.map(r => r.id);
    if (botResourceIds.length > 0) {
       console.log("Deleting leftover bot resources...");
       await db.delete(resourceDownloads).where(inArray(resourceDownloads.resourceId, botResourceIds));
       await db.delete(resourceOwnership).where(inArray(resourceOwnership.resourceId, botResourceIds));
       await db.delete(resources).where(inArray(resources.id, botResourceIds));
    }
    console.log("No bot users found or leftover resources cleaned.");
  }
  process.exit(0);
}
main().catch(console.error);
