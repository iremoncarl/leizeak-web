import { createClient } from "@supabase/supabase-js";

/*
Esta función sirve para crear un cliente Supabase nuevo. Habrá que utilizarla desde cada método que necesite conectarse con la db.
*/
export function createSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
