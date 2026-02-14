import { createSupabaseClient } from "@/lib/supabase/server";

/* Función para obtener los próximos conciertos */
export async function getConciertosFuturos() {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("conciertos")
    .select("*")
    .gte("fecha", new Date().toISOString()) 
    .order("fecha", { ascending: true });  

  if (error) {
    console.error("Error al cargar conciertos futuros:", error);
    return [];
  }

  return data;
}

/* Función para obtener los conciertos que ya han pasado */
export async function getConciertosPasados() {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("conciertos")
    .select("*")
    .lt("fecha", new Date().toISOString()) 
    .order("fecha", { ascending: false });  

  if (error) {
    console.error("Error al cargar conciertos pasados:", error);
    return [];
  }

  return data;
}