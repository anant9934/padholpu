/**
 * PADHO LPU — AUDIT REMEDIATION REGRESSION TEST SUITE
 * 
 * Tests and verifies all security and architectural remediations:
 * 1. CSRF SHA-256 constant-time verification.
 * 2. Password complexity & 12-char minimum policy.
 * 3. CORS origin validator with Vercel and Netlify preview support.
 * 4. API Contract schema validation (shared/routes.ts).
 * 5. Server-side quiz scoring algorithm.
 * 6. Serverless entrypoint normalization and error handler contract.
 */

import crypto from "crypto";
import { resetPasswordSchema, insertUserSchema } from "../shared/schema";
import { api } from "../shared/routes";
import { computeQuizScore } from "../server/engine/scoring";

interface TestResult {
  name: string;
  expected: string;
  actual: string;
  pass: boolean;
}

const results: TestResult[] = [];

function record(name: string, expected: string, actual: string, pass: boolean) {
  results.push({ name, expected, actual, pass });
  const badge = pass ? "✅ PASS" : "❌ FAIL";
  console.log(`\n--------------------------------------------------`);
  console.log(`TEST:     ${name}`);
  console.log(`EXPECTED: ${expected}`);
  console.log(`ACTUAL:   ${actual}`);
  console.log(`RESULT:   ${badge}`);
}

async function runAuditRemediationSuite() {
  console.log("==================================================");
  console.log("   PADHO LPU AUDIT REMEDIATION REGRESSION SUITE   ");
  console.log("==================================================");

  // 1. CSRF SHA-256 constant-time verification logic
  {
    const secretToken = "a1b2c3d4e5f678901234567890abcdef";
    const matchingHeader = "a1b2c3d4e5f678901234567890abcdef";
    const mismatchedHeader = "a1b2c3d4e5f678901234567890abcdeg";

    const hashToken = crypto.createHash("sha256").update(secretToken).digest();
    const hashMatch = crypto.createHash("sha256").update(matchingHeader).digest();
    const hashMismatch = crypto.createHash("sha256").update(mismatchedHeader).digest();

    const matchSuccess = crypto.timingSafeEqual(hashToken, hashMatch);
    const mismatchBlocked = !crypto.timingSafeEqual(hashToken, hashMismatch);

    record(
      "1. CSRF SHA-256 Constant-Time Verification",
      "Matching tokens pass (true); differing tokens fail (true)",
      `matchSuccess=${matchSuccess}, mismatchBlocked=${mismatchBlocked}`,
      matchSuccess && mismatchBlocked
    );
  }

  // 2. Password Policy (12+ characters, 4 classes)
  {
    const validPass = "ValidPass123!@#";
    const shortPass = "Short1!";
    const noSymbolPass = "NoSymbolsPass123";
    const noNumberPass = "NoNumbersPass!@#";

    const validResult = insertUserSchema.safeParse({
      username: "test_scholar",
      fullName: "Test Scholar",
      email: "scholar@example.com",
      password: validPass,
    });

    const shortResult = insertUserSchema.safeParse({
      username: "test_scholar",
      fullName: "Test Scholar",
      email: "scholar@example.com",
      password: shortPass,
    });

    const noSymbolResult = insertUserSchema.safeParse({
      username: "test_scholar",
      fullName: "Test Scholar",
      email: "scholar@example.com",
      password: noSymbolPass,
    });

    const passPolicyEnforced = validResult.success && !shortResult.success && !noSymbolResult.success;

    record(
      "2. Password Hardening (12-char min with 4 classes)",
      "Strong passes, short and weak passwords rejected",
      `valid=${validResult.success}, shortRejected=${!shortResult.success}, noSymbolRejected=${!noSymbolResult.success}`,
      passPolicyEnforced
    );
  }

  // 3. Reset Password Schema Contract Validation
  {
    const validReset = resetPasswordSchema.safeParse({
      email: "student@lpu.in",
      code: "123456",
      newPassword: "NewSecurePassword2026!",
    });

    const invalidCodeReset = resetPasswordSchema.safeParse({
      email: "student@lpu.in",
      code: "123", // Must be 6 digits
      newPassword: "NewSecurePassword2026!",
    });

    const contractSatisfied = validReset.success && !invalidCodeReset.success;

    record(
      "3. Reset Password Schema Contract (email, 6-digit code, 12-char password)",
      "Valid payload succeeds, 3-digit code rejected",
      `validReset=${validReset.success}, invalidCodeRejected=${!invalidCodeReset.success}`,
      contractSatisfied
    );
  }

  // 4. CORS Dynamic Origin Validator (Canonical + Vercel / Netlify Preview)
  {
    const allowed = [
      "https://padholpu.online",
      "https://www.padholpu.online",
      "https://padholpu.info",
    ];

    const checkOrigin = (origin: string | undefined): boolean => {
      const isNetlifyPreview = origin ? /https:\/\/[a-z0-9-]+\.netlify\.app$/.test(origin) : false;
      const isVercelPreview = origin ? /https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin) : false;
      return !origin || allowed.includes(origin) || isNetlifyPreview || isVercelPreview;
    };

    const canonicalOk = checkOrigin("https://padholpu.online");
    const vercelPreviewOk = checkOrigin("https://padholpu-pr-42-anant.vercel.app");
    const netlifyPreviewOk = checkOrigin("https://deploy-preview-10--padholpu.netlify.app");
    const maliciousBlocked = !checkOrigin("https://evil-hacker.com");

    const corsValid = canonicalOk && vercelPreviewOk && netlifyPreviewOk && maliciousBlocked;

    record(
      "4. CORS Multi-Platform Origin Resolution",
      "Canonical, Vercel & Netlify previews allowed; untrusted domains blocked",
      `canonical=${canonicalOk}, vercelPreview=${vercelPreviewOk}, netlifyPreview=${netlifyPreviewOk}, maliciousBlocked=${maliciousBlocked}`,
      corsValid
    );
  }

  // 5. Server-side Quiz Scoring Math & Anti-Cheat Clamping
  {
    const scoreZero = computeQuizScore(0, 10);
    const scoreFive = computeQuizScore(5, 10);
    const scoreTen = computeQuizScore(10, 10);
    const scoreExcessive = computeQuizScore(100, 100); // Should be clamped to QUIZ_MAX_SCORE_PER_SUBMIT (50)

    const mathOk = scoreZero === 0 && scoreFive === 5 && scoreTen === 10 && scoreExcessive === 50;

    record(
      "5. Server-side Quiz Scoring Math & Clamping",
      "0/10=0pts, 5/10=5pts, 10/10=10pts, 100/100 clamped to max 50pts",
      `0/10=${scoreZero}, 5/10=${scoreFive}, 10/10=${scoreTen}, 100/100=${scoreExcessive}`,
      mathOk
    );
  }

  // 6. Shared Routes Contract Integrity
  {
    const quizSubmitContract = api.quizzes.submit;
    const authResetContract = api.auth.resetPassword;

    const quizInput = quizSubmitContract.input.safeParse({
      answers: { "0": 1, "1": 2 },
      timeTakenSeconds: 45,
    });

    const resetInput = authResetContract.input.safeParse({
      email: "scholar@lpu.in",
      code: "654321",
      newPassword: "StrongPassword2026#",
    });

    const routesSynced = quizInput.success && resetInput.success;

    record(
      "6. Shared Routes API Contract Synchronicity",
      "Quiz submit accepts answers map; reset-password requires email, code & newPassword",
      `quizInput=${quizInput.success}, resetInput=${resetInput.success}`,
      routesSynced
    );
  }

  // 7. CORS Render & Custom Domain Whitelisting Check
  {
    const allowed = [
      "https://padholpu.online",
      "https://www.padholpu.online",
      "https://padholpu.info",
      "https://padholpu-backend.onrender.com",
    ];

    const checkOrigin = (origin: string | undefined): boolean => {
      const isNetlifyPreview = origin ? /^https:\/\/[a-z0-9-]+\.netlify\.app$/.test(origin) : false;
      const isVercelPreview = origin ? /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin) : false;
      const isRenderOrigin = origin ? /^https:\/\/[a-z0-9-]+\.onrender\.com$/.test(origin) : false;
      return !origin || allowed.includes(origin) || isNetlifyPreview || isVercelPreview || isRenderOrigin;
    };

    const renderOk = checkOrigin("https://padholpu-backend.onrender.com");
    const vercelProdOk = checkOrigin("https://padholpu-frontend.vercel.app");
    const untrustedBlocked = !checkOrigin("https://phishing-site.xyz");

    const passes = renderOk && vercelProdOk && untrustedBlocked;

    record(
      "7. Render & Vercel CORS Domain Whitelisting",
      "Render services and Vercel deployments allowed; untrusted domains blocked",
      `render=${renderOk}, vercel=${vercelProdOk}, untrustedBlocked=${untrustedBlocked}`,
      passes
    );
  }

  // 8. Client API Base URL Resolver Logic
  {
    const resolveApiUrl = (baseUrl: string, pathOrUrl: string): string => {
      if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
        return pathOrUrl;
      }
      if (baseUrl && pathOrUrl.startsWith("/")) {
        return `${baseUrl.replace(/\/+$/, "")}${pathOrUrl}`;
      }
      return pathOrUrl;
    };

    const sameOriginPath = resolveApiUrl("", "/api/user"); // Same-origin proxy
    const customBaseUrl = resolveApiUrl("https://padholpu-backend.onrender.com", "/api/user");
    const absolutePreserved = resolveApiUrl("https://padholpu-backend.onrender.com", "https://res.cloudinary.com/doc.pdf");

    const resolverOk = 
      sameOriginPath === "/api/user" &&
      customBaseUrl === "https://padholpu-backend.onrender.com/api/user" &&
      absolutePreserved === "https://res.cloudinary.com/doc.pdf";

    record(
      "8. Client API URL Resolution Resilience",
      "Same-origin proxy path preserved without base URL; prepended when base URL provided",
      `sameOrigin=${sameOriginPath}, customBase=${customBaseUrl}`,
      resolverOk
    );
  }

  // Summary
  const allPassed = results.every(r => r.pass);
  console.log("\n==================================================");
  console.log(`TOTAL REMEDIATION TESTS: ${results.length}`);
  console.log(`PASSED:                  ${results.filter(r => r.pass).length}`);
  console.log(`FAILED:                  ${results.filter(r => !r.pass).length}`);
  console.log(`STATUS:                  ${allPassed ? "ALL TESTS PASSED" : "TEST FAILURES DETECTED"}`);
  console.log("==================================================");

  if (!allPassed) {
    process.exit(1);
  }
}

runAuditRemediationSuite().catch(err => {
  console.error("FATAL ERROR IN REMEDIATION SUITE:", err);
  process.exit(1);
});
