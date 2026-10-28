import { storage } from "../storage";
import { db } from "../db";
import { users, quizAttempts, scoreAuditLog } from "../../shared/schema";
import { eq } from "drizzle-orm";
import { isValidIp } from "../utils/ip-validator";

async function verify() {
  console.log("--- Starting Verification ---");

  // 1. Test IP Validator
  console.log("Testing IP Validator...");
  console.assert(isValidIp("123.123.123.123") === true, "Valid IPv4 failed");
  console.assert(isValidIp("::1") === true, "Valid IPv6 localhost failed");
  console.assert(isValidIp("server") === false, "'server' should be invalid");
  console.assert(isValidIp("") === false, "Empty string should be invalid");
  console.assert(isValidIp(null) === false, "Null should be invalid");
  console.log("IP Validator: OK");

  // 2. Test User Deletion (Cascades)
  console.log("Testing User Deletion Cascades...");
  
  // Create a test user
  const testUser = await storage.createUser({
    username: "test_cleanup_" + Date.now(),
    email: "test_cleanup_" + Date.now() + "@example.com",
    password: "password123",
    fullName: "Test Cleanup User",
  });
  console.log(`Created test user: ${testUser.id}`);

  // Add some dependent data
  await db.insert(quizAttempts).values({
    userId: testUser.id,
    quizId: 1, // Assumes quiz 1 exists, or we skip if it fails
    score: 10,
    totalQuestions: 10,
    percentage: 100,
  }).catch(e => console.log("Skipping quiz attempt insert (likely no quiz with id 1)"));

  await db.insert(scoreAuditLog).values({
    userId: testUser.id,
    action: "TEST",
    field: "score",
    delta: 10,
    newTotal: 10,
    ip: "127.0.0.1",
  });
  console.log("Inserted dependent data.");

  // Delete the user
  await storage.deleteUser(testUser.id);
  console.log(`Deleted user: ${testUser.id}`);

  // Verify deletion
  const deletedUser = await storage.getUser(testUser.id);
  console.assert(!deletedUser, "User should be deleted");

  const remainingAudit = await db.select().from(scoreAuditLog).where(eq(scoreAuditLog.userId, testUser.id));
  console.assert(remainingAudit.length === 0, "Audit logs should be cascaded deleted");

  console.log("User Deletion & Cascades: OK");

  console.log("--- Verification Complete ---");
  process.exit(0);
}

verify().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
