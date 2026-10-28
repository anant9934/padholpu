-- ============================================================
-- MIGRATION: 0003_premium_quizzes_and_resources.sql
-- Description: Premium unlocks for quizzes and resources using Gold coins.
-- Apply via: paste into Neon SQL editor or use npm run db:push
-- ============================================================

-- 1. Upgrade RESOURCES table
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'resources' AND column_name = 'premium_price') THEN
    ALTER TABLE resources RENAME COLUMN premium_price TO price_gold;
  END IF;
END $$;

ALTER TABLE resources ALTER COLUMN price_gold SET DEFAULT 0;
ALTER TABLE resources DROP CONSTRAINT IF EXISTS check_price_gold_nonnegative;
ALTER TABLE resources ADD CONSTRAINT check_price_gold_nonnegative CHECK (price_gold >= 0);

-- 2. Transition RESOURCE OWNERSHIP to UNLOCK RESOURCES
DROP TABLE IF EXISTS resource_ownership;

CREATE TABLE IF NOT EXISTS unlock_resources (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id   INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  unlocked_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, resource_id)
);

CREATE INDEX IF NOT EXISTS unlock_resources_user_id_idx ON unlock_resources (user_id);

-- 3. Upgrade QUIZZES table
ALTER TABLE quizzes
  ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS price_gold INTEGER NOT NULL DEFAULT 0;

ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS check_quiz_price_gold_nonnegative;
ALTER TABLE quizzes ADD CONSTRAINT check_quiz_price_gold_nonnegative CHECK (price_gold >= 0);

-- 4. Create UNLOCK QUIZZES table
CREATE TABLE IF NOT EXISTS unlock_quizzes (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_id       INTEGER NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, quiz_id)
);

CREATE INDEX IF NOT EXISTS unlock_quizzes_user_id_idx ON unlock_quizzes (user_id);
