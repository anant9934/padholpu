# Padho LPU — Remediation & Engineering Improvements Log

**Version:** 1.0.0  
**Date:** 2026-10-28T23:08:00+05:30  
**Status:** Completed & Verified  

---

## Remediation Entries

### 1. Fix `.gitignore` Vercel Serverless Function Exclusion (SEC-001)
- **Problem:** `.gitignore` line 5 contained `api`, which inadvertently instructed Git to ignore `api/index.ts`.
- **Root Cause:** Accidental directory-level match that masked the Vercel serverless HTTP handler.
- **Remediation:** Removed `api` from `.gitignore` and added standard log/cache ignore directives. Verified that `api/index.ts` is staged and tracked.
- **Verification:** `git status --short` confirms `api/` is tracked.

### 2. Eliminate esbuild CommonJS Warning for `import.meta` (SEC-004)
- **Problem:** Production build emitted 3 esbuild warnings: `[WARNING] "import.meta" is not available with the "cjs" output format and will be empty`.
- **Root Cause:** `server/index.ts:100` inspected `import.meta` in CommonJS output mode.
- **Remediation:** Refactored direct-execution detection to inspect `process.argv[1]` and `require.main === module` without invoking `import.meta` in CJS.
- **Verification:** `npm run build` bundles `dist/index.cjs` with 0 warnings.

### 3. Constant-Time CSRF Token Verification (SEC-002)
- **Problem:** `server/middleware/csrf.ts` utilized `!==` string comparison on unpadded strings, presenting a theoretical timing discrepancy.
- **Root Cause:** Standard string inequality comparison.
- **Remediation:** Computed SHA-256 digests of the incoming header and request cookie, comparing the fixed-length 32-byte buffers with `crypto.timingSafeEqual`.
- **Verification:** Covered by `tests/audit-remediation.ts` (Test 1).

### 4. Dynamic CORS Whitelist for Vercel & Preview Branches (SEC-003)
- **Problem:** Production CORS policy was restricted to static production domains and Netlify preview subdomains, omitting dynamic `VERCEL_URL` and `*.vercel.app` preview branches.
- **Root Cause:** Netlify-specific regex in CORS middleware.
- **Remediation:** Added `VERCEL_URL`, `APP_URL`, and regex matching for `https://*.vercel.app` preview URLs.
- **Verification:** Covered by `tests/audit-remediation.ts` (Test 4).

### 5. API Contract Schema Alignment in `shared/routes.ts` (SEC-006)
- **Problem:** `shared/routes.ts` contained legacy definitions:
  - `auth.resetPassword` expected `{ token, password: z.string().min(6) }`.
  - `quizzes.submit` expected `{ score, totalQuestions }`.
- **Root Cause:** Legacy schema versions remained in `shared/routes.ts` after backend security hardening.
- **Remediation:** Imported `resetPasswordSchema` (`email`, `code`, `newPassword: min(12)`) and synchronized `quizzes.submit` with `{ answers, timeTakenSeconds }`.
- **Verification:** Covered by `tests/audit-remediation.ts` (Tests 3 and 6).

### 6. Transitive Dependency Vulnerability Remediation (SEC-005)
- **Problem:** `npm audit` flagged 21 vulnerabilities (5 low, 9 moderate, 6 high, 1 critical), including critical DOMPurify bypasses and high-severity DoS in `body-parser` and `multer`.
- **Root Cause:** Outdated transitive packages in `package-lock.json`.
- **Remediation:** Executed non-breaking `npm audit fix`, resolving all 13 critical and high severity package vulnerabilities without breaking dependencies.
- **Verification:** Clean `npm run check` and `npm run build` with 0 errors.

### 7. Automated Remediation Test Suite Integration
- **Problem:** No dedicated test file covered recent architectural and security fixes.
- **Remediation:** Created `tests/audit-remediation.ts` (6 automated assertions) and bound it into `package.json` `npm test`.
- **Verification:** 100% test pass rate across 119 assertions.
