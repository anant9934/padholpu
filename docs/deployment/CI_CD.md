# Padho LPU — Continuous Integration & Deployment (CI/CD)

---

## 1. Pipeline Overview

Padho LPU uses GitHub Actions to enforce automated quality gates before any code is built or released to production.

Configuration: `.github/workflows/security.yml`
Target Branch: `main`

---

## 2. CI/CD Stage Breakdown

```text
  GitHub Push / PR to main
            │
  ┌─────────▼─────────┐
  │ Clean npm ci      │
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ SCA npm audit     │ (0 High/Critical vulnerabilities)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ TypeScript Check  │ (tsc type validation)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ Unit & Security   │ (SEO, Adversarial, Remediation, Redis suites)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ Decoupled Builds  │ (build:client, build:server, and full build)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ Secret Scan       │ (Verify no .env or key files are tracked)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ CodeQL SAST       │ (Static code analysis for security vulnerabilities)
  └─────────┬─────────┘
            │
  ┌─────────▼─────────┐
  │ Automatic Deploy  │ (Vercel Frontend + Render Backend)
  └───────────────────┘
```

---

## 3. Automated Quality Gates

1. **Clean Installation:** Uses `npm ci` with dependency caching on Node.js 20.
2. **Software Composition Analysis (SCA):** `npm audit --audit-level=high` enforces zero known high or critical supply chain vulnerabilities.
3. **TypeScript Type Verification:** `npm run check` (`tsc`) guarantees zero type errors.
4. **Automated Test Suites:**
   - `tests/seo-brand-audit.ts` (94 canonical SEO, sitemap, and redirection tests)
   - `tests/adversarial-suite.ts` (19 security and anti-cheat tests)
   - `tests/audit-remediation.ts` (8 remediation regression tests)
   - `tests/redis-cache-suite.ts` (6 Redis cache, isolation, and failover tests)
5. **Decoupled Build Validation:**
   - `npm run build:client` (Vercel target)
   - `npm run build:server` (Render target)
   - `npm run build` (Full integrated pipeline)
6. **Secret & Sensitive File Scan:**
   Executes automated check:
   `! git ls-files | grep -E '(^\.env$|^\.env\.local$|^\.env\.production$|\.pem$|\.key$)' || exit 1`
7. **CodeQL (SAST):** GitHub native semantic code analyzer for JavaScript and TypeScript.

---

## 4. Platform Deployment Ownership

- **Vercel Frontend:** Listens to GitHub webhook for pushes on `main`. Automatically triggers `npm run build:client` and deploys static assets to global edge CDN.
- **Render Backend:** Render blueprint listens to GitHub webhook on `main`. Triggers `npm run build:server` and deploys long-running web service container.
- **Single Deployment Source of Truth:** Git branch `main` is the sole release trigger; no overlapping deployment commands or conflicting webhooks.
