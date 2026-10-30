-- ============================================================================
-- Migration 0007: AEE103 Learning System Tables
-- Description: Creates flashcard_decks, flashcards, user_flashcard_reviews,
--              subjective_questions, and user_subjective_answers tables
--              needed for the syllabus-oriented learning workspace.
-- Idempotency: All statements use IF NOT EXISTS / DO NOTHING.
-- Rollback safe: Additive only — no existing tables or columns are modified.
-- ============================================================================

BEGIN;

-- ──────────────────────────────────────────────────────────────────────────────
-- 1. FLASHCARD DECKS
-- ──────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS flashcard_decks (
  id           SERIAL PRIMARY KEY,
  subject_id   INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  unit_id      INTEGER REFERENCES units(id) ON DELETE SET NULL,
  title        TEXT NOT NULL,
  description  TEXT,
  is_public    BOOLEAN NOT NULL DEFAULT TRUE,
  created_by   INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  card_count   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS flashcard_decks_subject_idx ON flashcard_decks(subject_id);
CREATE INDEX IF NOT EXISTS flashcard_decks_creator_idx ON flashcard_decks(created_by);

-- ──────────────────────────────────────────────────────────────────────────────
-- 2. FLASHCARDS
-- ──────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS flashcards (
  id          SERIAL PRIMARY KEY,
  deck_id     INTEGER NOT NULL REFERENCES flashcard_decks(id) ON DELETE CASCADE,
  front       TEXT NOT NULL,
  back        TEXT NOT NULL,
  hint        TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS flashcards_deck_idx ON flashcards(deck_id);

-- ──────────────────────────────────────────────────────────────────────────────
-- 3. USER FLASHCARD REVIEWS (SM-2 spaced repetition state per card per user)
-- ──────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_flashcard_reviews (
  id                SERIAL PRIMARY KEY,
  user_id           INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  card_id           INTEGER NOT NULL REFERENCES flashcards(id) ON DELETE CASCADE,
  ease_factor       REAL NOT NULL DEFAULT 2.5,
  interval_days     INTEGER NOT NULL DEFAULT 0,
  repetitions       INTEGER NOT NULL DEFAULT 0,
  next_review_date  TIMESTAMP NOT NULL DEFAULT NOW(),
  last_reviewed_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  is_learned        BOOLEAN NOT NULL DEFAULT FALSE,
  CONSTRAINT user_flashcard_unique UNIQUE(user_id, card_id)
);

CREATE INDEX IF NOT EXISTS user_flashcard_next_review_idx
  ON user_flashcard_reviews(user_id, next_review_date);

-- ──────────────────────────────────────────────────────────────────────────────
-- 4. SUBJECTIVE QUESTIONS & MODEL ANSWERS
-- ──────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subjective_questions (
  id                  SERIAL PRIMARY KEY,
  subject_id          INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  unit_id             INTEGER REFERENCES units(id) ON DELETE SET NULL,
  topic_id            INTEGER REFERENCES topics(id) ON DELETE SET NULL,
  question_type       TEXT NOT NULL DEFAULT 'SHORT_ANSWER',
  question_text       TEXT NOT NULL,
  context_scenario    TEXT,
  statute_or_citation TEXT,
  model_answer        TEXT NOT NULL,
  outline_points      JSONB DEFAULT '[]',
  max_marks           INTEGER NOT NULL DEFAULT 5,
  difficulty          TEXT NOT NULL DEFAULT 'Medium',
  exam_session        TEXT,
  created_at          TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS subj_q_subject_idx ON subjective_questions(subject_id);
CREATE INDEX IF NOT EXISTS subj_q_unit_idx    ON subjective_questions(unit_id);

-- ──────────────────────────────────────────────────────────────────────────────
-- 5. USER SUBJECTIVE ANSWERS (student drafts & self-ratings)
-- ──────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_subjective_answers (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id     INTEGER NOT NULL REFERENCES subjective_questions(id) ON DELETE CASCADE,
  student_answer  TEXT NOT NULL,
  self_rating     INTEGER,
  is_bookmarked   BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at      TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT user_subj_ans_unique UNIQUE(user_id, question_id)
);

COMMIT;

