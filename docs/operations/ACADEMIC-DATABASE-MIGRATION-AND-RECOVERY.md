# ACADEMIC DATABASE MIGRATION, IDEMPOTENT SEEDING & DISASTER RECOVERY GUIDE

**Target Platform:** Padho LPU (Production: `https://padholpu.online`)  
**Database Provider:** Neon Serverless PostgreSQL (`ep-polished-recipe-b450y4i5-pooler.c-6.us-east-2.aws.neon.tech`)  
**Architecture Migration:** Multidisciplinary Schools, Degree Programmes, and Curriculum Mapping (Phase 5)

---

## 1. Migration Overview & Safety Guarantee

The Phase 5 database migration introduces the multidisciplinary academic architecture for Lovely Professional University, expanding the platform from a CSE-centric portal into an institution-wide learning ecosystem covering Law, Management, Agriculture, Sciences, Commerce, Humanities, and Engineering.

### Core Safety Principles:
1. **100% Additive & Non-Destructive**:
   - All new structural entities (`academic_schools`, `programmes`, `programme_subjects`) use `CREATE TABLE IF NOT EXISTS`.
   - Existing tables (`users`, `subjective_questions`, `resources`) receive non-null or default-fallback nullable columns via `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`.
   - **Zero DROP TABLE, Zero TRUNCATE, Zero CASCADE DROP**.
2. **Preservation of Existing Records**:
   - Existing users (including student credentials and administrator roles) are completely preserved.
   - Existing CSE subjects, units, questions, and learning resources remain fully operational and intact.
3. **Idempotent Execution**:
   - The runner script `scripts/migrate-academic.ts` and SQL migration `migrations/0006_multidisciplinary_academic_architecture.sql` employ `ON CONFLICT (code) DO NOTHING` and `ON CONFLICT DO NOTHING`.
   - Executing the migration multiple times produces zero duplicate records and zero constraint violations.

---

## 2. Production Database Execution Procedure

### Automated Execution (Recommended):
```bash
# 1. Ensure DATABASE_URL is configured in your production environment (.env or Render/Neon environment variables)
# 2. Run the dedicated migration runner
npm run db:migrate:academic
```

### Manual SQL Execution (Neon Console / psql):
If executing directly via Neon SQL Editor or `psql`:
```bash
psql "$DATABASE_URL" -f migrations/0006_multidisciplinary_academic_architecture.sql
```

---

## 3. Seeded Academic Entities & Scope

The idempotent seeding introduces foundational academic structures based on verified LPU curriculum catalogues:

### Schools Seeded (8 Faculties):
1. `SOL` — School of Law
2. `MSB` — Mittal School of Business
3. `SAG` — School of Agriculture
4. `SCSE` — School of Computer Science & Engineering
5. `SCEPS` — School of Chemical Engineering & Physical Sciences
6. `SOC` — School of Commerce & Economics
7. `SOH` — School of Humanities & Social Sciences
8. `SOD` — School of Design & Architecture

### Programmes Seeded (9 Degree Programmes):
- `BALLB` — B.A. LL.B. (Hons.) [Integrated, 10 Semesters]
- `BBA` — Bachelor of Business Administration [UG, 6 Semesters]
- `MBA` — Master of Business Administration [PG, 4 Semesters]
- `BSC-AGRI` — B.Sc. (Hons.) Agriculture [UG, 8 Semesters]
- `BCOM-HONS` — Bachelor of Commerce (Hons.) [UG, 6 Semesters]
- `BSC-PHYSICS` — B.Sc. (Hons.) Physics [UG, 6 Semesters]
- `BTECH-CSE` — B.Tech Computer Science and Engineering [UG, 8 Semesters]
- `BCA` — Bachelor of Computer Applications [UG, 6 Semesters]
- `BA-PSYCH` — B.A. (Hons.) Psychology [UG, 6 Semesters]

---

## 4. Rollback and Disaster Recovery Procedure

In the event of an unexpected schema mismatch or data isolation issue:

### Step 1: Immediate Safety Isolation
No destructive drops are applied during rollout. If academic routes need to be temporarily paused:
- Set feature flag `DISABLE_MULTIDISCIPLINARY=true` in backend environment variables.
- Legacy CSE subject routes (`/api/subjects`, `/api/quizzes`) continue operating independently from multidisciplinary routes.

### Step 2: Rollback of Additive Tables (Emergency Only)
If explicitly instructed by the Database Administrator to remove the new tables:
```sql
-- Safe rollback sequence (in reverse foreign-key order)
DROP TABLE IF EXISTS programme_subjects;
DROP TABLE IF EXISTS programmes;
DROP TABLE IF EXISTS academic_schools;

-- Revert added nullable columns from users (optional)
ALTER TABLE users DROP COLUMN IF EXISTS programme_id;
ALTER TABLE users DROP COLUMN IF EXISTS current_semester;
ALTER TABLE users DROP COLUMN IF EXISTS specialization;
ALTER TABLE users DROP COLUMN IF EXISTS academic_year;
```
*Note: Do not drop existing tables (`users`, `subjects`, `resources`, `quizzes`).*

### Step 3: Neon Point-In-Time Restore (PITR)
Neon serverless PostgreSQL provides automated branch snapshots:
1. Log in to [Neon Console](https://console.neon.tech).
2. Navigate to your project: `ep-polished-recipe-b450y4i5`.
3. Select **Branches** -> **Create Branch from Point in Time**.
4. Select the timestamp prior to migration execution to restore an instant isolated database replica for forensic inspection.

---

## 5. Curriculum Import Architecture

Administrators can safely extend programmes and curricula using the Admin Dashboard (`/admin` -> **Curriculum Import**):
- **Validation First**: Every CSV or JSON upload undergoes dry-run validation (`POST /api/academic/curriculum/validate-import`) verifying programme existence, semester limits (`1 <= sem <= totalSemesters`), credit limits (`1 <= cr <= 12`), and detecting duplicates.
- **Transactional Application**: Approved rows are committed within a single database transaction (`POST /api/academic/curriculum/apply-import`), auto-creating subjects, initializing default syllabus units (Units 1-5), and logging operations to `admin_logs`.
