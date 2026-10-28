# DATABASE DEAD-TABLE AUDIT

**Brand:** Padho LPU  
**Domain:** https://padholpu.online  
**Audit Date:** 2026-09-29  
**Total Production Tables Analyzed:** 34  
**AI Tables in Production Schema:** 0  
**Obsolete Tables in Production Schema:** 0  

---

## 1. Table Audit Summary Matrix

| Table Name | Schema Key | Referenced by Backend? | Used in API? | Referenced by Frontend? | Used by Admin? | Security / Audit Role? | Financial / Payment Role? | Retention Decision | Justification |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `users` | `users` | YES | YES | YES | YES | YES (Auth/RBAC) | YES (Balances) | **KEEP** | Core authentication, credentials, coin balances, streaks |
| `notifications` | `notifications` | YES | YES | YES | YES | NO | NO | **KEEP** | User notifications & alerts (/api/notifications) |
| `resources` | `resources` | YES | YES | YES | YES | NO | YES (Unlock price) | **KEEP** | Academic syllabus study material, notes, past papers |
| `resource_downloads` | `resourceDownloads` | YES | YES | NO (via API) | YES | YES (Nonce verify) | NO | **KEEP** | Download security, distributed nonces, rate limits |
| `unlock_resources` | `unlockResources` | YES | YES | YES | YES | NO | YES (Gold deduction) | **KEEP** | Access rights for premium notes unlocked with Gold coins |
| `quizzes` | `quizzes` | YES | YES | YES | YES | NO | YES (Reward grants) | **KEEP** | Topic-wise quizzes with timer and questions |
| `quiz_attempts` | `quizAttempts` | YES | YES | YES | YES | YES (Anti-cheat) | YES (Silver rewards) | **KEEP** | User quiz attempts, scores, answer arrays, mastery |
| `unlock_quizzes` | `unlockQuizzes` | YES | YES | YES | YES | NO | YES (Gold deduction) | **KEEP** | Access rights for premium quizzes unlocked with Gold coins |
| `subjects` | `subjects` | YES | YES | YES | YES | NO | NO | **KEEP** | Course taxonomy (CSE320, MTH401, etc.) |
| `units` | `units` | YES | YES | YES | YES | NO | NO | **KEEP** | Academic syllabus structure (Units 1 to 6) |
| `topics` | `topics` | YES | YES | YES | YES | NO | NO | **KEEP** | Fine-grained syllabus topics for mastery tracking |
| `questions` | `questions` | YES | YES | YES | YES | NO | NO | **KEEP** | Curated questions bank for quizzes & exams |
| `exam_sessions` | `examSessions` | YES | YES | YES | YES | YES (Anti-cheat) | YES (Silver rewards) | **KEEP** | Mock exam sessions, time allocation, completion |
| `exam_questions` | `examQuestions` | YES | YES | YES | YES | NO | NO | **KEEP** | Questions mapped to specific exam sessions |
| `exam_attempts_detailed`| `examAttemptsDetailed`| YES | YES | YES | YES | YES (Timing checks) | NO | **KEEP** | Detailed question-by-question responses & timings |
| `leaderboard` | `leaderboard` | YES | YES | YES | YES | NO | NO | **KEEP** | Public academic leaderboard and rankings |
| `score_audit_log` | `scoreAuditLog` | YES | NO (Internal) | NO | YES | YES (Forensics) | NO | **KEEP** | Immutable audit trail for score adjustments |
| `action_log` | `actionLog` | YES | NO (Internal) | NO | YES | YES (Anti-bot) | NO | **KEEP** | Bot detection and anomaly telemetry |
| `ledger` | `ledger` | YES | YES | YES | YES | YES (Idempotency) | YES (Double-entry) | **KEEP** | Financial ledger for all Silver & Gold coin movements |
| `admin_logs` | `adminLogs` | YES | YES | NO | YES | YES (Audit trail) | NO | **KEEP** | Records all staff admin actions and mutations |
| `orders` | `orders` | YES | YES | YES | YES | YES (HMAC verify) | YES (Cashfree / UPI) | **KEEP** | Payment orders, Cashfree session IDs, UPI receipts |
| `quiz_usage` | `quizUsage` | YES | YES | NO (via API) | YES | YES (Rate limiting) | NO | **KEEP** | Daily limit tracking for free quiz attempts |
| `subscriptions` | `subscriptions` | YES | YES | YES | YES | NO | YES (Pass purchase) | **KEEP** | Semester/monthly premium subscription passes |
| `daily_rewards` | `dailyRewards` | YES | YES | YES | NO | NO | YES (Silver grant) | **KEEP** | Daily login reward claims and streaks |
| `resource_reward_status`| `resourceRewardStatus`| YES | YES | YES | YES | NO | YES (Uploader coin) | **KEEP** | Uploader rewards when community notes get verified |
| `session` | `sessions` | YES | YES | NO (Cookies) | NO | YES (Auth session) | NO | **KEEP** | Connect-pg-simple session storage for Express |
| `contact_messages` | `contactMessages` | YES | YES | YES | YES | YES (Token hash) | NO | **KEEP** | Helpdesk tickets, student inquiries, support tracking |
| `resource_analytics` | `resourceAnalytics` | YES | YES | YES | YES | NO | NO | **KEEP** | View counts and engagement metrics per resource |
| `resource_reports` | `resourceReports` | YES | YES | NO (Submit) | YES | YES (Moderation) | NO | **KEEP** | Broken link and copyright moderation reporting |
| `user_subject_scores` | `userSubjectScores` | YES | YES | YES | YES | NO | NO | **KEEP** | Aggregate scores per subject for diagnostic engine |
| `rate_limits` | `rateLimits` | YES | NO (Internal) | NO | NO | YES (DDoS guard) | NO | **KEEP** | PostgreSQL-backed distributed IP rate limiting |
| `user_courses` | `userCourses` | YES | YES | YES | NO | NO | NO | **KEEP** | Student pinned/enrolled subjects on dashboard |
| `user_readiness_history`| `userReadinessHistory`| YES | YES | YES | NO | NO | NO | **KEEP** | Historical snapshots of exam readiness percentage |
| `student_activity_events`| `studentActivityEvents`| YES | YES | YES | NO | NO | NO | **KEEP** | Student activity stream for dashboard & profile |

---

## 2. AI Tables & Historical Backups Audit

- **Production Database Status:** Zero AI tables exist in `shared/schema.ts` or the active PostgreSQL database.
- **Removed Tables (from prior migrations):**
  - `ai_chats`
  - `ai_messages`
  - `ai_exam_sessions`
  - `ai_exam_questions`
  - `ai_exam_results`
- **Historical Backups Retention (Rule 7 Compliance):**
  - Historical AI tables remain archived outside the production schema in:
    - `backup/ai_exam_database_backup.json` (31 KB)
    - `backup/main_db_ai_tables_backup.json` (3.7 KB)
  - No runtime foreign keys, models, or queries reference these backup files.

---

## 3. Financial / Payment Subsystem Tables Audit

- **Decision:** Following Rule 8 & 10, the payment system is **LIVE AND REQUIRED (Option A)**.
- **Tables Retained:**
  - `orders`: Stores both automated Cashfree gateway orders and manual UPI payment proofs.
  - `ledger`: Strict double-entry ledger ensuring no negative balances, atomicity on coin conversion (30 Silver -> 1 Gold), and transparent user history.
  - `unlock_resources` & `unlock_quizzes`: User coin transaction rights.
- **Integrity Verification:**
  - Tests 5, 6, 7 in `tests/adversarial-suite.ts` verify race condition locks and double-spend protection.
  - Tests 14, 15, 16 in `tests/dynamic-product-integration.ts` verify real database order creation, ledger entries, and Silver-to-Gold exchanges.
