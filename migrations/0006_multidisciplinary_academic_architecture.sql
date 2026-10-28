-- ============================================================================
-- Migration 0006: Multidisciplinary Academic Architecture
-- Description: Creates academic_schools, programmes, programme_subjects tables
--              and adds non-destructive academic metadata columns to users,
--              subjects, and subjective_questions.
-- Idempotency: All statements use IF NOT EXISTS.
-- Rollback safe: Additive only.
-- ============================================================================

BEGIN;

-- 1. Academic Schools / Faculties
CREATE TABLE IF NOT EXISTS academic_schools (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Degree Programmes
CREATE TABLE IF NOT EXISTS programmes (
  id SERIAL PRIMARY KEY,
  school_id INTEGER REFERENCES academic_schools(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  degree TEXT NOT NULL,
  duration_years INTEGER NOT NULL DEFAULT 4,
  total_semesters INTEGER NOT NULL DEFAULT 8,
  discipline TEXT NOT NULL,
  description TEXT,
  learning_model TEXT DEFAULT 'SEMESTER',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Programme to Subject Mappings
CREATE TABLE IF NOT EXISTS programme_subjects (
  id SERIAL PRIMARY KEY,
  programme_id INTEGER REFERENCES programmes(id) ON DELETE CASCADE NOT NULL,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE NOT NULL,
  semester INTEGER NOT NULL,
  is_core BOOLEAN DEFAULT TRUE NOT NULL,
  credits INTEGER DEFAULT 4 NOT NULL,
  category TEXT DEFAULT 'Core',
  CONSTRAINT programme_subjects_prog_subj_unique UNIQUE(programme_id, subject_id)
);

CREATE INDEX IF NOT EXISTS programme_subjects_prog_sem_idx 
  ON programme_subjects(programme_id, semester);

-- 4. User Academic Preferences (Additive)
ALTER TABLE users ADD COLUMN IF NOT EXISTS programme_id INTEGER;
ALTER TABLE users ADD COLUMN IF NOT EXISTS current_semester INTEGER DEFAULT 1;
ALTER TABLE users ADD COLUMN IF NOT EXISTS specialization TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS academic_year INTEGER DEFAULT 1;

-- 5. Subject Hierarchy Metadata (Additive)
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS programme_id INTEGER REFERENCES programmes(id) ON DELETE SET NULL;
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS school_id INTEGER REFERENCES academic_schools(id) ON DELETE SET NULL;
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS semester INTEGER;
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS credits INTEGER DEFAULT 4;
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS discipline TEXT DEFAULT 'ENGINEERING';
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'Core';

-- 6. Scenario Assessment Support (Additive)
ALTER TABLE subjective_questions ADD COLUMN IF NOT EXISTS context_scenario TEXT;
ALTER TABLE subjective_questions ADD COLUMN IF NOT EXISTS statute_or_citation TEXT;

COMMIT;
