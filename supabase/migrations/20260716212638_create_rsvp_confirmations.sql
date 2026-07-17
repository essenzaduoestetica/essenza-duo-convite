/*
# Create RSVP Confirmations Table

## Summary
Creates the `rsvp_confirmations` table to store guest confirmations for the Essenza Duo inauguration event.

## New Tables

### rsvp_confirmations
- `id` (uuid, primary key) — unique identifier
- `name` (text, not null) — guest full name
- `whatsapp` (text, not null) — guest WhatsApp number
- `companions` (integer, default 0) — number of companions
- `created_at` (timestamptz) — submission timestamp

## Security
- RLS enabled on `rsvp_confirmations`
- Anon + authenticated INSERT allowed (public form, no sign-in)
- Anon + authenticated SELECT allowed (public access)
- No UPDATE or DELETE exposed publicly (admin-only operations)
*/

CREATE TABLE IF NOT EXISTS rsvp_confirmations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp text NOT NULL,
  companions integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp_confirmations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_rsvp" ON rsvp_confirmations;
CREATE POLICY "anon_insert_rsvp" ON rsvp_confirmations FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_rsvp" ON rsvp_confirmations;
CREATE POLICY "anon_select_rsvp" ON rsvp_confirmations FOR SELECT
TO anon, authenticated USING (true);
