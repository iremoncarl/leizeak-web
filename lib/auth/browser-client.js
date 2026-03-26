"use client";
//Función de Supabase para crear un cliente en el navegador
import { createBrowserClient } from "@supabase/ssr";

//Variable para guardar instancia del cliente
let client = null;

//Cliente supabase para el navegador
export function getSupabaseBrowserClient() {
  //Si ya existe el cliente, se reutiliza
  if (client) {
    return client;
  }

  //Se obtienen las variables de entorno necesarias para conectar con Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  //Si falta alguna, error
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Falta la NEXT_PUBLIC_SUPABASE_URL o la NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  //Se crea el cliente de Supabase
  client = createBrowserClient(supabaseUrl, supabaseAnonKey);
  return client;
}