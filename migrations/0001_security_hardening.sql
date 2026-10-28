-- ============================================================
-- MIGRATION: Security Hardening (Run against Neon PostgreSQL)
-- Apply via: npm run db:push  OR  paste directly in Neon SQL editor
-- ============================================================

-- 1. New security columns on users table
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS is_shadow_banned BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS trust_level TEXT NOT NULL DEFAULT 'normal',
  ADD COLUMN IF NOT EXISTS last_action_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS daily_score_accumulated REAL NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS daily_score_date TIMESTAMPTZ;

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_score_nonnegative;
ALTER TABLE users ADD CONSTRAINT check_score_nonnegative CHECK (score >= 0);

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_slo_coins_nonnegative;
ALTER TABLE users ADD CONSTRAINT check_slo_coins_nonnegative CHECK (slo_coins >= 0);

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_daily_cap;
ALTER TABLE users ADD CONSTRAINT check_daily_cap CHECK (daily_score_accumulated >= 0);

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_trust_level;
ALTER TABLE users ADD CONSTRAINT check_trust_level CHECK (trust_level IN ('normal', 'suspicious', 'shadow_banned'));

-- 3. Indexes for new security fields
CREATE INDEX IF NOT EXISTS users_trust_idx   ON users (trust_level);
CREATE INDEX IF NOT EXISTS users_shadow_idx  ON users (is_shadow_banned);

-- 4. Score audit log table (append-only, immutable)
CREATE TABLE IF NOT EXISTS score_audit_log (
  id            SERIAL PRIMARY KEY,
  user_id       INTEGER NOT NULL REFERENCES users(id),
  action        TEXT    NOT NULL,
  field         TEXT    NOT NULL,
  delta         REAL    NOT NULL,
  new_total     REAL    NOT NULL,
  ip            TEXT,
  metadata      JSONB,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sal_user_created_idx ON score_audit_log (user_id, created_at DESC);

-- 5. Action log table (for velocity + anomaly detection)
CREATE TABLE IF NOT EXISTS action_log (
  id            SERIAL PRIMARY KEY,
  user_id       INTEGER NOT NULL REFERENCES users(id),
  action_type   TEXT    NOT NULL,
  ip            TEXT,
  score_awarded REAL    DEFAULT 0,
  percentage    REAL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS al_user_created_idx ON action_log (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS al_ip_created_idx   ON action_log (ip, created_at DESC);

-- 6. (Optional) Mark existing users as normal trust
UPDATE users SET trust_level = 'normal' WHERE trust_level IS NULL;
UPDATE users SET is_shadow_banned = FALSE WHERE is_shadow_banned IS NULL;
