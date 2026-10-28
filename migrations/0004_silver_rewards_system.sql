-- ============================================================
-- MIGRATION: 0004_silver_rewards_system.sql
-- Description: Tracking for daily Silver rewards and resource milestones.
-- ============================================================

-- 1. Create DAILY REWARDS table
CREATE TABLE IF NOT EXISTS daily_rewards (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date                TEXT NOT NULL, -- YYYY-MM-DD
  silver_earned       INTEGER NOT NULL DEFAULT 0,
  quiz_rewards_count  INTEGER NOT NULL DEFAULT 0,
  has_daily_bonus     BOOLEAN NOT NULL DEFAULT false,
  UNIQUE(user_id, date)
);

CREATE INDEX IF NOT EXISTS daily_rewards_user_date_idx ON daily_rewards (user_id, date);

-- 2. Create RESOURCE REWARD STATUS table
CREATE TABLE IF NOT EXISTS resource_reward_status (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resource_id   INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  reward_type   TEXT NOT NULL, -- UPLOAD_REWARD | QUALITY_BONUS
  awarded_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(resource_id, reward_type)
);
