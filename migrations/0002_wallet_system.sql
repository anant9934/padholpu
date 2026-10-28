-- ============================================================
-- MIGRATION: 0002_wallet_system.sql
-- Description: Dual-currency wallet, financial ledger, and audit logs.
-- Apply via: paste into Neon SQL editor or use npm run db:push
-- ============================================================

-- 1. Upgrade USERS table
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS silver_coins INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS gold_coins INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'USER';

-- Constraints for users
ALTER TABLE users DROP CONSTRAINT IF EXISTS check_silver_coins_nonnegative;
ALTER TABLE users ADD CONSTRAINT check_silver_coins_nonnegative CHECK (silver_coins >= 0);

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_gold_coins_nonnegative;
ALTER TABLE users ADD CONSTRAINT check_gold_coins_nonnegative CHECK (gold_coins >= 0);

ALTER TABLE users DROP CONSTRAINT IF EXISTS check_user_role;
ALTER TABLE users ADD CONSTRAINT check_user_role CHECK (role IN ('USER', 'ADMIN', 'SUPER_ADMIN', 'MENTOR'));

-- Indexes for users
CREATE INDEX IF NOT EXISTS users_role_idx ON users (role);

-- 2. Create FINANCIAL LEDGER (Source of Truth)
CREATE TABLE IF NOT EXISTS ledger (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type          TEXT NOT NULL CHECK (type IN ('CREDIT', 'DEBIT')),
  currency      TEXT NOT NULL CHECK (currency IN ('SILVER', 'GOLD')),
  source        TEXT NOT NULL CHECK (source IN ('UPI', 'REWARD', 'REDEMPTION', 'ADMIN')),
  amount        INTEGER NOT NULL CHECK (amount > 0),
  reference_id  TEXT,
  status        TEXT NOT NULL DEFAULT 'CONFIRMED' CHECK (status IN ('PENDING', 'CONFIRMED')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ledger_user_id_idx ON ledger (user_id);
CREATE INDEX IF NOT EXISTS ledger_user_currency_idx ON ledger (user_id, currency);
CREATE INDEX IF NOT EXISTS ledger_created_at_idx ON ledger (created_at);

-- 3. Create ADMIN LOGS (Audit System)
CREATE TABLE IF NOT EXISTS admin_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id      INTEGER NOT NULL REFERENCES users(id),
  action        TEXT NOT NULL,
  target_type   TEXT,
  target_id     TEXT,
  before_state  JSONB,
  after_state   JSONB,
  ip            TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS admin_logs_admin_id_idx ON admin_logs (admin_id);
CREATE INDEX IF NOT EXISTS admin_logs_action_idx ON admin_logs (action);
CREATE INDEX IF NOT EXISTS admin_logs_created_at_idx ON admin_logs (created_at);

-- 4. Create ORDERS (Payment Flow)
CREATE TABLE IF NOT EXISTS orders (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount_inr     INTEGER NOT NULL CHECK (amount_inr > 0),
  gold_coins     INTEGER NOT NULL CHECK (gold_coins > 0),
  utr            TEXT UNIQUE,
  screenshot_url TEXT,
  status         TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'UPLOADED', 'VERIFIED', 'REJECTED')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS orders_user_id_idx ON orders (user_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders (status);

-- 5. Create QUIZ USAGE (Quota System)
CREATE TABLE IF NOT EXISTS quiz_usage (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  month         TEXT NOT NULL, -- YYYY-MM
  count         INTEGER NOT NULL DEFAULT 0,
  UNIQUE(user_id, month)
);

CREATE INDEX IF NOT EXISTS quiz_usage_user_id_idx ON quiz_usage (user_id);

-- 6. Create SUBSCRIPTIONS
CREATE TABLE IF NOT EXISTS subscriptions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type          TEXT NOT NULL CHECK (type = 'UNLIMITED_QUIZ'),
  expires_at    TIMESTAMPTZ NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS subscriptions_user_id_idx ON subscriptions (user_id);
CREATE INDEX IF NOT EXISTS subscriptions_expires_at_idx ON subscriptions (expires_at);
