# Padho LPU — Complete Codebase Inventory (Phase 1)

**Total Tracked/Applicable Files:** 301  
**Generated At:** 2026-10-28T22:45:00+05:30  
**Audit Scope:** Full repository source tree excluding generated build artifacts (`dist/`), runtime caches, and dependencies (`node_modules/`).

---

## Summary by Category

| Category | Count |
|---|:---:|
| Frontend UI Primitive | 55 |
| Operational Script | 36 |
| Frontend Page | 29 |
| Backend Core | 25 |
| Static Asset / PWA | 24 |
| Configuration | 23 |
| Frontend Component | 17 |
| Database Migration | 16 |
| Frontend Library | 9 |
| Security Middleware | 8 |
| Backend Utility | 8 |
| Documentation | 7 |
| Backend API Route | 7 |
| Exam Simulation Component | 7 |
| Frontend Hook | 5 |
| Test Suite | 4 |
| Academic Engine | 4 |
| Backend Admin Route | 4 |
| Shared Type / Schema | 3 |
| Frontend Admin Component | 3 |
| Branding Asset | 2 |
| Serverless Function | 2 |
| Frontend Admin Page | 2 |
| Backend Service | 1 |

---

## Detailed File Inventory

| File Path | Category | Purpose | Sensitivity | Coverage | Audit Status | Findings | Remediation |
|---|---|---|---|---|---|---|---|
| `.env.example` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `.gitignore` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `.replit` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `CLEANUP-INVENTORY.md` | Documentation | System documentation (CLEANUP-INVENTORY.md) | Public | N/A | Audited | None | Clean |
| `DATABASE-CLEANUP-AUDIT.md` | Documentation | System documentation (DATABASE-CLEANUP-AUDIT.md) | Public | N/A | Audited | None | Clean |
| `Padhlo-LPU-CODEBASE-CLEANUP-REPORT.md` | Documentation | System documentation (Padhlo-LPU-CODEBASE-CLEANUP-REPORT.md) | Public | N/A | Audited | None | Clean |
| `README.md` | Documentation | System documentation (README.md) | Public | N/A | Audited | None | Clean |
| `banner padho lpu.png` | Branding Asset | Visual brand asset (banner padho lpu.png) | Public | N/A | Audited | None | Clean |
| `capacitor.config.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `components.json` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `drizzle.config.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `googleee60ae8be7807896.html` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `icon padho lpu.png` | Branding Asset | Visual brand asset (icon padho lpu.png) | Public | N/A | Audited | None | Clean |
| `netlify.toml` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `package-lock.json` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `package.json` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `postcss.config.js` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `tailwind.config.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `tsconfig.json` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `vercel.json` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `vite.config.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `migrations/0000_uneven_the_spike.sql` | Database Migration | PostgreSQL schema DDL migration (0000_uneven_the_spike.sql) | High | Verified | Audited | None | Clean |
| `migrations/0001_magenta_komodo.sql` | Database Migration | PostgreSQL schema DDL migration (0001_magenta_komodo.sql) | High | Verified | Audited | None | Clean |
| `migrations/0001_pink_korath.sql` | Database Migration | PostgreSQL schema DDL migration (0001_pink_korath.sql) | High | Verified | Audited | None | Clean |
| `migrations/0001_security_hardening.sql` | Database Migration | PostgreSQL schema DDL migration (0001_security_hardening.sql) | High | Verified | Audited | None | Clean |
| `migrations/0002_silent_agent_zero.sql` | Database Migration | PostgreSQL schema DDL migration (0002_silent_agent_zero.sql) | High | Verified | Audited | None | Clean |
| `migrations/0002_wallet_system.sql` | Database Migration | PostgreSQL schema DDL migration (0002_wallet_system.sql) | High | Verified | Audited | None | Clean |
| `migrations/0003_premium_quizzes_and_resources.sql` | Database Migration | PostgreSQL schema DDL migration (0003_premium_quizzes_and_resources.sql) | High | Verified | Audited | None | Clean |
| `migrations/0004_silver_rewards_system.sql` | Database Migration | PostgreSQL schema DDL migration (0004_silver_rewards_system.sql) | High | Verified | Audited | None | Clean |
| `migrations/0005_mentor_user_link.sql` | Database Migration | PostgreSQL schema DDL migration (0005_mentor_user_link.sql) | High | Verified | Audited | None | Clean |
| `migrations/meta/0000_snapshot.json` | Database Migration | PostgreSQL schema DDL migration (0000_snapshot.json) | High | Verified | Audited | None | Clean |
| `migrations/meta/0001_snapshot.json` | Database Migration | PostgreSQL schema DDL migration (0001_snapshot.json) | High | Verified | Audited | None | Clean |
| `migrations/meta/0002_snapshot.json` | Database Migration | PostgreSQL schema DDL migration (0002_snapshot.json) | High | Verified | Audited | None | Clean |
| `migrations/meta/_journal.json` | Database Migration | PostgreSQL schema DDL migration (_journal.json) | High | Verified | Audited | None | Clean |
| `tests/adversarial-suite.ts` | Test Suite | Automated test harness (adversarial-suite.ts) | Low | Self-verifying | Audited | None | Clean |
| `tests/dynamic-product-integration.ts` | Test Suite | Automated test harness (dynamic-product-integration.ts) | Low | Self-verifying | Audited | None | Clean |
| `tests/seo-brand-audit.ts` | Test Suite | Automated test harness (seo-brand-audit.ts) | Low | Self-verifying | Audited | None | Clean |
| `tests/testimonial-flow.ts` | Test Suite | Automated test harness (testimonial-flow.ts) | Low | Self-verifying | Audited | None | Clean |
| `server/auth.ts` | Backend Core | Database, server bootstrap, or auth core (auth.ts) | High | Covered | Audited | None | Clean |
| `server/bootstrap.ts` | Backend Core | Database, server bootstrap, or auth core (bootstrap.ts) | High | Covered | Audited | None | Clean |
| `server/db.ts` | Backend Core | Database, server bootstrap, or auth core (db.ts) | High | Covered | Audited | None | Clean |
| `server/email.ts` | Backend Core | Database, server bootstrap, or auth core (email.ts) | High | Covered | Audited | None | Clean |
| `server/index.ts` | Backend Core | Database, server bootstrap, or auth core (index.ts) | High | Covered | Audited | None | Clean |
| `server/routes.ts` | Backend Core | Database, server bootstrap, or auth core (routes.ts) | High | Covered | Audited | None | Clean |
| `server/static.ts` | Backend Core | Database, server bootstrap, or auth core (static.ts) | High | Covered | Audited | None | Clean |
| `server/storage.ts` | Backend Core | Database, server bootstrap, or auth core (storage.ts) | High | Covered | Audited | None | Clean |
| `server/types.d.ts` | Backend Core | Database, server bootstrap, or auth core (types.d.ts) | High | Covered | Audited | None | Clean |
| `server/vite.ts` | Backend Core | Database, server bootstrap, or auth core (vite.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/action-limiters.ts` | Security Middleware | Express request security & rate limiter (action-limiters.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/anti-automation.ts` | Security Middleware | Express request security & rate limiter (anti-automation.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/bot-protection.ts` | Security Middleware | Express request security & rate limiter (bot-protection.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/csrf.ts` | Security Middleware | Express request security & rate limiter (csrf.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/permissions.ts` | Security Middleware | Express request security & rate limiter (permissions.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/postgres-store.ts` | Security Middleware | Express request security & rate limiter (postgres-store.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/security.ts` | Security Middleware | Express request security & rate limiter (security.ts) | High | Covered | Audited | None | Clean |
| `server/middleware/usage.ts` | Security Middleware | Express request security & rate limiter (usage.ts) | High | Covered | Audited | None | Clean |
| `server/utils/audit.ts` | Backend Utility | Cryptographic, token, or session helper (audit.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/captcha.ts` | Backend Utility | Cryptographic, token, or session helper (captcha.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/crypto.ts` | Backend Utility | Cryptographic, token, or session helper (crypto.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/env-guard.ts` | Backend Utility | Cryptographic, token, or session helper (env-guard.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/ip-validator.ts` | Backend Utility | Cryptographic, token, or session helper (ip-validator.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/observability.ts` | Backend Utility | Cryptographic, token, or session helper (observability.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/token.ts` | Backend Utility | Cryptographic, token, or session helper (token.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/utils/totp.ts` | Backend Utility | Cryptographic, token, or session helper (totp.ts) | High (Crypto/Auth) | Covered | Audited | None | Clean |
| `server/scripts/cleanup-data.ts` | Backend Core | Database, server bootstrap, or auth core (cleanup-data.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/execute-migration.ts` | Backend Core | Database, server bootstrap, or auth core (execute-migration.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/generate_sql.py` | Backend Core | Database, server bootstrap, or auth core (generate_sql.py) | High | Covered | Audited | None | Clean |
| `server/scripts/import-sql.ts` | Backend Core | Database, server bootstrap, or auth core (import-sql.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/import_sql.py` | Backend Core | Database, server bootstrap, or auth core (import_sql.py) | High | Covered | Audited | None | Clean |
| `server/scripts/list-users.ts` | Backend Core | Database, server bootstrap, or auth core (list-users.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/normalize_units.py` | Backend Core | Database, server bootstrap, or auth core (normalize_units.py) | High | Covered | Audited | None | Clean |
| `server/scripts/questions (1).csv` | Backend Core | Database, server bootstrap, or auth core (questions (1).csv) | High | Covered | Audited | None | Clean |
| `server/scripts/questions_fixed.sql` | Backend Core | Database, server bootstrap, or auth core (questions_fixed.sql) | High | Covered | Audited | None | Clean |
| `server/scripts/reset-admin.ts` | Backend Core | Database, server bootstrap, or auth core (reset-admin.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/seed-admin-data.ts` | Backend Core | Database, server bootstrap, or auth core (seed-admin-data.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/seed-questions.ts` | Backend Core | Database, server bootstrap, or auth core (seed-questions.ts) | High | Covered | Audited | None | Clean |
| `server/scripts/verify-security.ts` | Backend Core | Database, server bootstrap, or auth core (verify-security.ts) | High | Covered | Audited | None | Clean |
| `server/lib/cloudinary.ts` | Backend Core | Database, server bootstrap, or auth core (cloudinary.ts) | High | Covered | Audited | None | Clean |
| `server/data/questions.json` | Backend Core | Database, server bootstrap, or auth core (questions.json) | High | Covered | Audited | None | Clean |
| `server/engine/constraints.ts` | Academic Engine | Grading, rewards, and constraints logic (constraints.ts) | Medium | Covered | Audited | None | Clean |
| `server/engine/monitoring.ts` | Academic Engine | Grading, rewards, and constraints logic (monitoring.ts) | Medium | Covered | Audited | None | Clean |
| `server/engine/rewards.ts` | Academic Engine | Grading, rewards, and constraints logic (rewards.ts) | Medium | Covered | Audited | None | Clean |
| `server/engine/scoring.ts` | Academic Engine | Grading, rewards, and constraints logic (scoring.ts) | Medium | Covered | Audited | None | Clean |
| `server/routes/academic.ts` | Backend API Route | REST API endpoint handler (academic.ts) | High | Covered | Audited | None | Clean |
| `server/routes/exams.ts` | Backend API Route | REST API endpoint handler (exams.ts) | High | Covered | Audited | None | Clean |
| `server/routes/notifications.ts` | Backend API Route | REST API endpoint handler (notifications.ts) | High | Covered | Audited | None | Clean |
| `server/routes/quizzes.ts` | Backend API Route | REST API endpoint handler (quizzes.ts) | High | Covered | Audited | None | Clean |
| `server/routes/resources.ts` | Backend API Route | REST API endpoint handler (resources.ts) | High | Covered | Audited | None | Clean |
| `server/routes/sitemaps.ts` | Backend API Route | REST API endpoint handler (sitemaps.ts) | High | Covered | Audited | None | Clean |
| `server/routes/testimonials.ts` | Backend API Route | REST API endpoint handler (testimonials.ts) | High | Covered | Audited | None | Clean |
| `server/routes/admin/email-templates.ts` | Backend Admin Route | Admin API endpoint (email-templates.ts) | High (RBAC) | Covered | Audited | None | Clean |
| `server/routes/admin/index.ts` | Backend Admin Route | Admin API endpoint (index.ts) | High (RBAC) | Covered | Audited | None | Clean |
| `server/routes/admin/testimonials.ts` | Backend Admin Route | Admin API endpoint (testimonials.ts) | High (RBAC) | Covered | Audited | None | Clean |
| `server/routes/admin/totp.ts` | Backend Admin Route | Admin API endpoint (totp.ts) | High (RBAC) | Covered | Audited | None | Clean |
| `server/services/academic-os.ts` | Backend Service | Domain service layer (academic-os.ts) | Medium | Covered | Audited | None | Clean |
| `shared/routes.ts` | Shared Type / Schema | Isomorphic Drizzle schema & type contracts (routes.ts) | High | Covered | Audited | None | Clean |
| `shared/schema.ts` | Shared Type / Schema | Isomorphic Drizzle schema & type contracts (schema.ts) | High | Covered | Audited | None | Clean |
| `shared/site-config.ts` | Shared Type / Schema | Isomorphic Drizzle schema & type contracts (site-config.ts) | High | Covered | Audited | None | Clean |
| `docs/SECURITY-AUDIT-REPORT.md` | Documentation | System documentation (SECURITY-AUDIT-REPORT.md) | Public | N/A | Audited | None | Clean |
| `docs/SECURITY-HARDENING-BASELINE.md` | Documentation | System documentation (SECURITY-HARDENING-BASELINE.md) | Public | N/A | Audited | None | Clean |
| `script/build.js` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `script/migrate-to-new-db.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `script/verify_db.ts` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `netlify/functions/api.ts` | Serverless Function | Netlify serverless HTTP entrypoint | High | Covered | Audited | None | Clean |
| `scripts/audit-inventory.ts` | Operational Script | Database audit, migration, or maintenance script (audit-inventory.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/cdp-browser.ts` | Operational Script | Database audit, migration, or maintenance script (cdp-browser.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/db-push.ts` | Operational Script | Database audit, migration, or maintenance script (db-push.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/fix-db-schema.ts` | Operational Script | Database audit, migration, or maintenance script (fix-db-schema.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/fix-resources.ts` | Operational Script | Database audit, migration, or maintenance script (fix-resources.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/forensic-audit.ts` | Operational Script | Database audit, migration, or maintenance script (forensic-audit.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/forensic-current-state-audit.json` | Operational Script | Database audit, migration, or maintenance script (forensic-current-state-audit.json) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/full-schema-sync.ts` | Operational Script | Database audit, migration, or maintenance script (full-schema-sync.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/generate-sitemaps.ts` | Operational Script | Database audit, migration, or maintenance script (generate-sitemaps.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/lighthouse-after.json` | Operational Script | Database audit, migration, or maintenance script (lighthouse-after.json) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/measure-db-latency.ts` | Operational Script | Database audit, migration, or maintenance script (measure-db-latency.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/measure-production.ts` | Operational Script | Database audit, migration, or maintenance script (measure-production.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/neon-migrate.ts` | Operational Script | Database audit, migration, or maintenance script (neon-migrate.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/parse-lighthouse.ts` | Operational Script | Database audit, migration, or maintenance script (parse-lighthouse.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/production-api-benchmark.json` | Operational Script | Database audit, migration, or maintenance script (production-api-benchmark.json) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/production-closure-evidence.json` | Operational Script | Database audit, migration, or maintenance script (production-closure-evidence.json) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/purge-quizzes-and-resources.ts` | Operational Script | Database audit, migration, or maintenance script (purge-quizzes-and-resources.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/sync-resources.ts` | Operational Script | Database audit, migration, or maintenance script (sync-resources.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/test-top.ts` | Operational Script | Database audit, migration, or maintenance script (test-top.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/verify-production-closure.ts` | Operational Script | Database audit, migration, or maintenance script (verify-production-closure.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/migration_scripts/migrate-manual-p2.ts` | Operational Script | Database audit, migration, or maintenance script (migrate-manual-p2.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/migration_scripts/migrate-manual.ts` | Operational Script | Database audit, migration, or maintenance script (migrate-manual.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check-user.ts` | Operational Script | Database audit, migration, or maintenance script (check-user.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_bot.ts` | Operational Script | Database audit, migration, or maintenance script (check_bot.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_bot_data_pg.cjs` | Operational Script | Database audit, migration, or maintenance script (check_bot_data_pg.cjs) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_constraints.ts` | Operational Script | Database audit, migration, or maintenance script (check_constraints.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_db.ts` | Operational Script | Database audit, migration, or maintenance script (check_db.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_distribution.ts` | Operational Script | Database audit, migration, or maintenance script (check_distribution.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/check_uploader_names.ts` | Operational Script | Database audit, migration, or maintenance script (check_uploader_names.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/clean_bots.ts` | Operational Script | Database audit, migration, or maintenance script (clean_bots.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/production_audit.ts` | Operational Script | Database audit, migration, or maintenance script (production_audit.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/promote-user.ts` | Operational Script | Database audit, migration, or maintenance script (promote-user.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/quick-db-check.ts` | Operational Script | Database audit, migration, or maintenance script (quick-db-check.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/test-leaderboard.ts` | Operational Script | Database audit, migration, or maintenance script (test-leaderboard.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/test_delete.ts` | Operational Script | Database audit, migration, or maintenance script (test_delete.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `scripts/admin_scripts/user_stats.ts` | Operational Script | Database audit, migration, or maintenance script (user_stats.ts) | Medium | Ad-hoc | Audited | None | Clean |
| `.github/workflows/security.yml` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `api/index.ts` | Serverless Function | Vercel serverless HTTP entrypoint | High | Covered | Audited | Ignored by .gitignore in baseline | Unignore in .gitignore |
| `client/index.html` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `client/requirements.md` | Documentation | System documentation (requirements.md) | Public | N/A | Audited | None | Clean |
| `client/public/_headers` | Static Asset / PWA | Static asset, sitemap, or manifest (_headers) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/_redirects` | Static Asset / PWA | Static asset, sitemap, or manifest (_redirects) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/ads.txt` | Static Asset / PWA | Static asset, sitemap, or manifest (ads.txt) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/app-icon.png` | Static Asset / PWA | Static asset, sitemap, or manifest (app-icon.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/apple-touch-icon.png` | Static Asset / PWA | Static asset, sitemap, or manifest (apple-touch-icon.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/favicon-32x32.png` | Static Asset / PWA | Static asset, sitemap, or manifest (favicon-32x32.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/favicon.png` | Static Asset / PWA | Static asset, sitemap, or manifest (favicon.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/googleee60ae8be7807896.html` | Static Asset / PWA | Static asset, sitemap, or manifest (googleee60ae8be7807896.html) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/icon-192.png` | Static Asset / PWA | Static asset, sitemap, or manifest (icon-192.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/icon-512.png` | Static Asset / PWA | Static asset, sitemap, or manifest (icon-512.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/llms.txt` | Static Asset / PWA | Static asset, sitemap, or manifest (llms.txt) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/logo.png` | Static Asset / PWA | Static asset, sitemap, or manifest (logo.png) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/robots.txt` | Static Asset / PWA | Static asset, sitemap, or manifest (robots.txt) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-exams.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-exams.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-quizzes.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-quizzes.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-resources.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-resources.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-semesters.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-semesters.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-static.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-static.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap-subjects.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap-subjects.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/sitemap.xml` | Static Asset / PWA | Static asset, sitemap, or manifest (sitemap.xml) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/.well-known/security.txt` | Static Asset / PWA | Static asset, sitemap, or manifest (security.txt) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/fonts/inter-latin.woff2` | Static Asset / PWA | Static asset, sitemap, or manifest (inter-latin.woff2) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/fonts/playfair-display-italic-latin.woff2` | Static Asset / PWA | Static asset, sitemap, or manifest (playfair-display-italic-latin.woff2) | Public | Covered (SEO) | Audited | None | Clean |
| `client/public/fonts/playfair-display-latin.woff2` | Static Asset / PWA | Static asset, sitemap, or manifest (playfair-display-latin.woff2) | Public | Covered (SEO) | Audited | None | Clean |
| `client/src/App.tsx` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `client/src/index.css` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `client/src/main.tsx` | Configuration | Root configuration or project file | Low | Partial | Audited | None | Clean |
| `client/src/components/BrainBreak.tsx` | Frontend Component | Application layout and feature component (BrainBreak.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ErrorBoundary.tsx` | Frontend Component | Application layout and feature component (ErrorBoundary.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ErrorPage.tsx` | Frontend Component | Application layout and feature component (ErrorPage.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/InstallPWA.tsx` | Frontend Component | Application layout and feature component (InstallPWA.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ReportResourceModal.tsx` | Frontend Component | Application layout and feature component (ReportResourceModal.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ScrollToTop.tsx` | Frontend Component | Application layout and feature component (ScrollToTop.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/StudyWisdom.tsx` | Frontend Component | Application layout and feature component (StudyWisdom.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/TestimonialCard.tsx` | Frontend Component | Application layout and feature component (TestimonialCard.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/TestimonialsSection.tsx` | Frontend Component | Application layout and feature component (TestimonialsSection.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/cookie-consent.tsx` | Frontend Component | Application layout and feature component (cookie-consent.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/footer.tsx` | Frontend Component | Application layout and feature component (footer.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/layout.tsx` | Frontend Component | Application layout and feature component (layout.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/seo.tsx` | Frontend Component | Application layout and feature component (seo.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ads/AdSlot.tsx` | Frontend Component | Application layout and feature component (AdSlot.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/ui/AmbientOrb.tsx` | Frontend UI Primitive | Reusable UI primitive component (AmbientOrb.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/EmptyState.tsx` | Frontend UI Primitive | Reusable UI primitive component (EmptyState.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/ErrorState.tsx` | Frontend UI Primitive | Reusable UI primitive component (ErrorState.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/LoadingSkeleton.tsx` | Frontend UI Primitive | Reusable UI primitive component (LoadingSkeleton.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/MobileBottomNav.tsx` | Frontend UI Primitive | Reusable UI primitive component (MobileBottomNav.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/PageHeader.tsx` | Frontend UI Primitive | Reusable UI primitive component (PageHeader.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/QuizCard.tsx` | Frontend UI Primitive | Reusable UI primitive component (QuizCard.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/ResourceCard.tsx` | Frontend UI Primitive | Reusable UI primitive component (ResourceCard.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/accordion.tsx` | Frontend UI Primitive | Reusable UI primitive component (accordion.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/alert-dialog.tsx` | Frontend UI Primitive | Reusable UI primitive component (alert-dialog.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/alert.tsx` | Frontend UI Primitive | Reusable UI primitive component (alert.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/aspect-ratio.tsx` | Frontend UI Primitive | Reusable UI primitive component (aspect-ratio.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/avatar.tsx` | Frontend UI Primitive | Reusable UI primitive component (avatar.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/badge.tsx` | Frontend UI Primitive | Reusable UI primitive component (badge.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/breadcrumb.tsx` | Frontend UI Primitive | Reusable UI primitive component (breadcrumb.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/button.tsx` | Frontend UI Primitive | Reusable UI primitive component (button.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/calendar.tsx` | Frontend UI Primitive | Reusable UI primitive component (calendar.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/card.tsx` | Frontend UI Primitive | Reusable UI primitive component (card.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/carousel.tsx` | Frontend UI Primitive | Reusable UI primitive component (carousel.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/chart.tsx` | Frontend UI Primitive | Reusable UI primitive component (chart.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/checkbox.tsx` | Frontend UI Primitive | Reusable UI primitive component (checkbox.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/collapsible.tsx` | Frontend UI Primitive | Reusable UI primitive component (collapsible.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/command.tsx` | Frontend UI Primitive | Reusable UI primitive component (command.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/context-menu.tsx` | Frontend UI Primitive | Reusable UI primitive component (context-menu.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/dialog.tsx` | Frontend UI Primitive | Reusable UI primitive component (dialog.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/drawer.tsx` | Frontend UI Primitive | Reusable UI primitive component (drawer.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/dropdown-menu.tsx` | Frontend UI Primitive | Reusable UI primitive component (dropdown-menu.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/form.tsx` | Frontend UI Primitive | Reusable UI primitive component (form.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/hover-card.tsx` | Frontend UI Primitive | Reusable UI primitive component (hover-card.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/input-otp.tsx` | Frontend UI Primitive | Reusable UI primitive component (input-otp.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/input.tsx` | Frontend UI Primitive | Reusable UI primitive component (input.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/label.tsx` | Frontend UI Primitive | Reusable UI primitive component (label.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/menubar.tsx` | Frontend UI Primitive | Reusable UI primitive component (menubar.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/navigation-menu.tsx` | Frontend UI Primitive | Reusable UI primitive component (navigation-menu.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/pagination.tsx` | Frontend UI Primitive | Reusable UI primitive component (pagination.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/popover.tsx` | Frontend UI Primitive | Reusable UI primitive component (popover.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/progress.tsx` | Frontend UI Primitive | Reusable UI primitive component (progress.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/radio-group.tsx` | Frontend UI Primitive | Reusable UI primitive component (radio-group.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/resizable.tsx` | Frontend UI Primitive | Reusable UI primitive component (resizable.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/scroll-area.tsx` | Frontend UI Primitive | Reusable UI primitive component (scroll-area.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/select.tsx` | Frontend UI Primitive | Reusable UI primitive component (select.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/separator.tsx` | Frontend UI Primitive | Reusable UI primitive component (separator.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/sheet.tsx` | Frontend UI Primitive | Reusable UI primitive component (sheet.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/sidebar.tsx` | Frontend UI Primitive | Reusable UI primitive component (sidebar.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/skeleton.tsx` | Frontend UI Primitive | Reusable UI primitive component (skeleton.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/slider.tsx` | Frontend UI Primitive | Reusable UI primitive component (slider.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/switch.tsx` | Frontend UI Primitive | Reusable UI primitive component (switch.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/table.tsx` | Frontend UI Primitive | Reusable UI primitive component (table.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/tabs.tsx` | Frontend UI Primitive | Reusable UI primitive component (tabs.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/textarea.tsx` | Frontend UI Primitive | Reusable UI primitive component (textarea.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/toast.tsx` | Frontend UI Primitive | Reusable UI primitive component (toast.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/toaster.tsx` | Frontend UI Primitive | Reusable UI primitive component (toaster.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/toggle-group.tsx` | Frontend UI Primitive | Reusable UI primitive component (toggle-group.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/toggle.tsx` | Frontend UI Primitive | Reusable UI primitive component (toggle.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/ui/tooltip.tsx` | Frontend UI Primitive | Reusable UI primitive component (tooltip.tsx) | Public | Partial | Audited | None | Clean |
| `client/src/components/admin/AdminTotpManager.tsx` | Frontend Admin Component | Admin management subcomponent (AdminTotpManager.tsx) | High (RBAC) | Covered | Audited | None | Clean |
| `client/src/components/admin/EmailTemplatesManager.tsx` | Frontend Admin Component | Admin management subcomponent (EmailTemplatesManager.tsx) | High (RBAC) | Covered | Audited | None | Clean |
| `client/src/components/admin/TestimonialsManager.tsx` | Frontend Admin Component | Admin management subcomponent (TestimonialsManager.tsx) | High (RBAC) | Covered | Audited | None | Clean |
| `client/src/components/search/GlobalSearchModal.tsx` | Frontend Component | Application layout and feature component (GlobalSearchModal.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/pwa/PWAUpdatePrompt.tsx` | Frontend Component | Application layout and feature component (PWAUpdatePrompt.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/components/exam/ExamHeader.tsx` | Exam Simulation Component | Mock examination simulation widget (ExamHeader.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/NavigationControls.tsx` | Exam Simulation Component | Mock examination simulation widget (NavigationControls.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/QuestionCard.tsx` | Exam Simulation Component | Mock examination simulation widget (QuestionCard.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/QuestionPalette.tsx` | Exam Simulation Component | Mock examination simulation widget (QuestionPalette.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/ResultScreen.tsx` | Exam Simulation Component | Mock examination simulation widget (ResultScreen.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/SubmitModal.tsx` | Exam Simulation Component | Mock examination simulation widget (SubmitModal.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/exam/Timer.tsx` | Exam Simulation Component | Mock examination simulation widget (Timer.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/components/notifications/NotificationBell.tsx` | Frontend Component | Application layout and feature component (NotificationBell.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/hooks/use-auth.tsx` | Frontend Hook | React query & state abstraction hook (use-auth.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/hooks/use-mobile.tsx` | Frontend Hook | React query & state abstraction hook (use-mobile.tsx) | Medium | Covered | Audited | None | Clean |
| `client/src/hooks/use-quizzes.ts` | Frontend Hook | React query & state abstraction hook (use-quizzes.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/hooks/use-resources.ts` | Frontend Hook | React query & state abstraction hook (use-resources.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/hooks/use-toast.ts` | Frontend Hook | React query & state abstraction hook (use-toast.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/ad-placement-config.ts` | Frontend Library | Client helper & configuration utility (ad-placement-config.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/ad-utils.ts` | Frontend Library | Client helper & configuration utility (ad-utils.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/analytics.ts` | Frontend Library | Client helper & configuration utility (analytics.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/anti-inspect.ts` | Frontend Library | Client helper & configuration utility (anti-inspect.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/error-utils.ts` | Frontend Library | Client helper & configuration utility (error-utils.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/queryClient.ts` | Frontend Library | Client helper & configuration utility (queryClient.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/semester-data.ts` | Frontend Library | Client helper & configuration utility (semester-data.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/site-config.ts` | Frontend Library | Client helper & configuration utility (site-config.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/lib/utils.ts` | Frontend Library | Client helper & configuration utility (utils.ts) | Medium | Covered | Audited | None | Clean |
| `client/src/pages/AdminSupport.tsx` | Frontend Page | Client routed application page (AdminSupport.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/SupportTracker.tsx` | Frontend Page | Client routed application page (SupportTracker.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/about-page.tsx` | Frontend Page | Client routed application page (about-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/auth-page.tsx` | Frontend Page | Client routed application page (auth-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/contact-page.tsx` | Frontend Page | Client routed application page (contact-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/cookie-policy.tsx` | Frontend Page | Client routed application page (cookie-policy.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/disclaimer.tsx` | Frontend Page | Client routed application page (disclaimer.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/exam-generator-page.tsx` | Frontend Page | Client routed application page (exam-generator-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/exam-result-page.tsx` | Frontend Page | Client routed application page (exam-result-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/exam-start-page.tsx` | Frontend Page | Client routed application page (exam-start-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/home-page.tsx` | Frontend Page | Client routed application page (home-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/leaderboard-page.tsx` | Frontend Page | Client routed application page (leaderboard-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/not-found.tsx` | Frontend Page | Client routed application page (not-found.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/privacy-policy.tsx` | Frontend Page | Client routed application page (privacy-policy.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/privacy-requests.tsx` | Frontend Page | Client routed application page (privacy-requests.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/profile-edit-page.tsx` | Frontend Page | Client routed application page (profile-edit-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/progress-page.tsx` | Frontend Page | Client routed application page (progress-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/quiz-detail-page.tsx` | Frontend Page | Client routed application page (quiz-detail-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/quiz-page.tsx` | Frontend Page | Client routed application page (quiz-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/quiz-review-page.tsx` | Frontend Page | Client routed application page (quiz-review-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/quizzes-page.tsx` | Frontend Page | Client routed application page (quizzes-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/resource-detail-page.tsx` | Frontend Page | Client routed application page (resource-detail-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/resources-page.tsx` | Frontend Page | Client routed application page (resources-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/semester-page.tsx` | Frontend Page | Client routed application page (semester-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/subject-page.tsx` | Frontend Page | Client routed application page (subject-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/subjects-directory-page.tsx` | Frontend Page | Client routed application page (subjects-directory-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/terms-of-service.tsx` | Frontend Page | Client routed application page (terms-of-service.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/upload-page.tsx` | Frontend Page | Client routed application page (upload-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/user-profile-page.tsx` | Frontend Page | Client routed application page (user-profile-page.tsx) | Public / Auth | Covered | Audited | None | Clean |
| `client/src/pages/admin/Dashboard.tsx` | Frontend Admin Page | Administrative dashboard page (Dashboard.tsx) | High (RBAC) | Covered | Audited | None | Clean |
| `client/src/pages/admin/Login.tsx` | Frontend Admin Page | Administrative dashboard page (Login.tsx) | High (RBAC) | Covered | Audited | None | Clean |
| `drizzle/0000_stormy_brother_voodoo.sql` | Database Migration | PostgreSQL schema DDL migration (0000_stormy_brother_voodoo.sql) | High | Verified | Audited | None | Clean |
| `drizzle/meta/0000_snapshot.json` | Database Migration | PostgreSQL schema DDL migration (0000_snapshot.json) | High | Verified | Audited | None | Clean |
| `drizzle/meta/_journal.json` | Database Migration | PostgreSQL schema DDL migration (_journal.json) | High | Verified | Audited | None | Clean |
