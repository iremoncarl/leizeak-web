"use client";

import { createBrowserClient } from "@supabase/ssr";

let client = null;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Falta la NEXT_PUBLIC_SUPABASE_URL o la NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  client = createBrowserClient(supabaseUrl, supabaseAnonKey);
  return client;
}