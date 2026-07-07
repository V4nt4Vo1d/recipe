-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/<your-project>/sql

CREATE TABLE IF NOT EXISTS user_recipes (
  id           TEXT PRIMARY KEY,
  family_slug  TEXT        NOT NULL,
  title        TEXT        NOT NULL,
  description  TEXT        NOT NULL DEFAULT '',
  category     TEXT        NOT NULL DEFAULT 'Family Additions',
  blocks       JSONB       NOT NULL DEFAULT '[]'::jsonb,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row Level Security: allow anyone to read/insert/delete
-- (no authentication required for this family-archive site).
ALTER TABLE user_recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read"
  ON user_recipes FOR SELECT USING (true);

CREATE POLICY "Public insert"
  ON user_recipes FOR INSERT WITH CHECK (true);

CREATE POLICY "Public delete"
  ON user_recipes FOR DELETE USING (true);
