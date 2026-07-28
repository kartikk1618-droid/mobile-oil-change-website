import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing — booking submissions will not persist.');
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '', {
  auth: { persistSession: false },
});

export type AppointmentInput = {
  customer_name: string;
  phone: string;
  email: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  address: string;
  notes?: string | null;
};
