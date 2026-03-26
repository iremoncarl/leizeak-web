//Función de Supabase para crear un cliente en el servidor
import { createServerClient } from "@supabase/ssr";
//API de Next.js para leer y escribir cookies en el servidor
import { cookies } from "next/headers";

//Función para obtener las variables de entorno necesarias para conectar con Supabase
function getEnvironmentVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  //Si falta alguna, error
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Falta la NEXT_PUBLIC_SUPABASE_URL o la NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  //Devolvemos las variables
  return { supabaseUrl, supabaseAnonKey };
}

//Cliente supabase para el servidor
export async function createSupabaseServerClient() {
  //Recogemos las variables
  const { supabaseUrl, supabaseAnonKey } = getEnvironmentVariables();
  //Gestor de cookies
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      //Permite leer las cookies actuales
      getAll() {
        return cookieStore.getAll(); //Se devuelven las cookies
      },
      //Permite escribir cookies
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options) //Guarda las cookeis en el navegador
        );
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
}