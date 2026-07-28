/*
# Create appointments table (single-tenant, no auth)

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `customer_name` (text, not null)
  - `phone` (text, not null)
  - `email` (text, not null)
  - `vehicle_make` (text, not null)
  - `vehicle_model` (text, not null)
  - `vehicle_year` (text, not null)
  - `service` (text, not null)
  - `preferred_date` (date, not null)
  - `preferred_time` (text, not null)
  - `address` (text, not null)
  - `notes` (text, nullable)
  - `status` (text, default 'pending')
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated to insert new appointment requests (public booking form).
- No read/update/delete for anon (only staff would manage these via service role).
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  vehicle_make text NOT NULL,
  vehicle_model text NOT NULL,
  vehicle_year text NOT NULL,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  address text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments"
ON appointments FOR INSERT
TO anon, authenticated WITH CHECK (true);
