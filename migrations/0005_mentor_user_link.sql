-- migration: 0005_mentor_user_link.sql
-- Description: Add user_id column to mentors table to link each mentor profile to a user account.

-- 1. Add user_id column
ALTER TABLE mentors ADD COLUMN IF NOT EXISTS user_id INTEGER REFERENCES users(id);

-- 2. Create index for fast lookups
CREATE INDEX IF NOT EXISTS mentors_user_id_idx ON mentors (user_id);
