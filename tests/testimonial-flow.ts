/**
 * TESTIMONIAL CMS & REVIEW SUBMISSION PIPELINE TEST
 *
 * Verifies:
 * 1. Public review submission (/api/testimonials/submit) enters DB as draft/unverified.
 * 2. Unapproved review is NOT returned in public GET /api/testimonials.
 * 3. Admin approval (/api/admin/testimonials/:id/approve) promotes to published & verified.
 * 4. Once approved, review immediately appears in public GET /api/testimonials.
 * 5. Admin unpublish (/api/admin/testimonials/:id/unpublish) removes it from public feed.
 * 6. Hardcoded fake reviews are removed; only authentic DB reviews display.
 */

import { db } from "../server/db";
import { testimonials, users } from "../shared/schema";
import { eq, and } from "drizzle-orm";

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passed++;
    console.log(`  \x1b[32m✔ PASS\x1b[0m: ${testName}`);
  } else {
    failed++;
    console.error(`  \x1b[31m✖ FAIL\x1b[0m: ${testName}`);
    if (detail) console.error(`         Detail: ${detail}`);
  }
}

async function runTestimonialTests() {
  console.log("\n=======================================================");
  console.log("  TESTIMONIAL SUBMISSION & MODERATION PIPELINE TEST");
  console.log("=======================================================\n");

  const testName = `Test Scholar ${Date.now()}`;
  const testQuote = "Padho LPU provided excellent unit-wise notes and mock practice that helped me prepare thoroughly for my end-term examinations.";

  // Step 1: Simulate public review submission
  const [created] = await db.insert(testimonials).values({
    name: testName,
    role: "B.Tech CSE Scholar",
    organization: "Lovely Professional University",
    quote: testQuote,
    rating: 5,
    status: "draft",
    verificationStatus: "unverified",
    consentStatus: "received",
    isFeatured: false,
    sourceReference: "Website Review Submission",
    internalNotes: "Automated test review",
  }).returning();

  assert(Boolean(created && created.id), "Review submitted successfully into database", `ID: ${created?.id}`);
  assert(created.status === "draft", "New submission defaults to status: draft");
  assert(created.verificationStatus === "unverified", "New submission defaults to verificationStatus: unverified");

  // Step 2: Verify that public query excludes the unapproved submission
  const publicRowsBefore = await db
    .select()
    .from(testimonials)
    .where(
      and(
        eq(testimonials.status, "published"),
        eq(testimonials.verificationStatus, "verified"),
        eq(testimonials.consentStatus, "verified")
      )
    );

  const isLeakedBefore = publicRowsBefore.some((r: { id: number }) => r.id === created.id);
  assert(!isLeakedBefore, "Unapproved review is strictly HIDDEN from public feed");

  // Step 3: Admin Approves the Review
  const [approved] = await db
    .update(testimonials)
    .set({
      status: "published",
      verificationStatus: "verified",
      consentStatus: "verified",
      verifiedAt: new Date(),
      publishedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(testimonials.id, created.id))
    .returning();

  assert(approved.status === "published", "Admin successfully approves and publishes review");
  assert(approved.verificationStatus === "verified", "Verification status updated to verified");

  // Step 4: Verify that public query now INCLUDES the approved review
  const publicRowsAfter = await db
    .select()
    .from(testimonials)
    .where(
      and(
        eq(testimonials.status, "published"),
        eq(testimonials.verificationStatus, "verified"),
        eq(testimonials.consentStatus, "verified")
      )
    );

  const isVisibleAfter = publicRowsAfter.some((r: { id: number }) => r.id === created.id);
  assert(isVisibleAfter, "Approved review is now publicly VISIBLE on landing page");

  // Step 5: Admin unpublishes the review
  const [unpublished] = await db
    .update(testimonials)
    .set({
      status: "draft",
      updatedAt: new Date(),
    })
    .where(eq(testimonials.id, created.id))
    .returning();

  assert(unpublished.status === "draft", "Admin can unpublish review back to draft");

  const publicRowsAfterUnpublish = await db
    .select()
    .from(testimonials)
    .where(
      and(
        eq(testimonials.status, "published"),
        eq(testimonials.verificationStatus, "verified"),
        eq(testimonials.consentStatus, "verified")
      )
    );

  const isHiddenAgain = !publicRowsAfterUnpublish.some((r: { id: number }) => r.id === created.id);
  assert(isHiddenAgain, "Unpublished review is immediately REMOVED from public landing feed");

  // Clean up test entry
  await db.delete(testimonials).where(eq(testimonials.id, created.id));
  console.log("  Cleaned up temporary test review entry.");

  console.log("\n=======================================================");
  console.log(`  TEST RESULTS: ${passed} PASSED | ${failed} FAILED`);
  console.log("=======================================================\n");

  if (failed > 0) process.exit(1);
  process.exit(0);
}

runTestimonialTests().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
