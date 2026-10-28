# Padho LPU — Known Operational Limitations & Architecture Constraints

**Version:** 1.0.0  
**Date:** 2026-10-28T23:08:00+05:30  
**Scope:** Documented boundaries, third-party reliance, and operational constraints.

---

## 1. Third-Party Service Dependencies

1. **Neon Serverless PostgreSQL:**
   - The application relies on external PostgreSQL hosting.
   - For serverless deployments (Vercel), pooled connection strings (`-pooler`) must be used to prevent socket exhaustion during burst traffic.
2. **Cloudinary Asset Storage:**
   - Student PDF study notes and profile avatars are stored in Cloudinary.
   - If Cloudinary credentials are unset or quota is exceeded, file uploads and avatar customization will fail gracefully with clear HTTP 500 error messages.
3. **Cloudflare Turnstile:**
   - Bot protection utilizes Turnstile tokens.
   - In environments where Turnstile keys are omitted, test bypass modes (`CF_TEST_KEY`) are utilized in development/test, but production requires active credentials.

---

## 2. Serverless Execution Constraints (Vercel / Netlify)

1. **Stateless Functions:**
   - Background asynchronous cron jobs cannot run continuously on serverless functions.
   - Periodic cache evictions and telemetry cleanup are triggered on-demand or via external HTTP cron triggers.
2. **Execution Timeout:**
   - Serverless functions on Vercel have a default execution limit (configured to 15 seconds in `vercel.json`). Long-running operations like bulk CSV imports must be performed via local CLI scripts (`server/scripts/`).

---

## 3. Database Testing Offline Limitations

- Live integration tests (`tests/dynamic-product-integration.ts` and `tests/testimonial-flow.ts`) require a live PostgreSQL database connection string (`DATABASE_URL`).
- In offline development environments lacking a local PostgreSQL server, these integration tests are skipped with a clear notification, while all 119 unit, adversarial security, brand canonical, and remediation regression tests run completely in memory.
