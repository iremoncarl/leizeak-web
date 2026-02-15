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

/* Función para obtener las opiniones de un producto */
export async function getOpinionesProducto(id) {
  const supabase = createSupabaseClient();

  const prodcutoId = Number(id);
console.log("id recibido:", prodcutoId, typeof prodcutoId)

  const { data, error } = await supabase
    .from("productos_opiniones")
    .select("*")
    .eq('producto_id', prodcutoId)
    .order("created_at", { ascending: false });  

  if (error) {
    console.error("Error al cargar opiniones del producto con id ", id, ":", error);
    return [];
  }

  return data;
}

/* Función para crear una nueva opinión de un producto */
export async function crearOpinionProducto(producto_id, titulo, opinion) {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("productos_opiniones")
    .insert([{
      producto_id: Number(producto_id),
      usuario_id: 1,
      titulo: titulo,
      opinion: opinion
    }]);

  if (error) {
    console.error("Error al insertar nueva opinión del producto con id ", producto_id, ":", error);
    return [];
  }

  return data;
}

/* Función para modificar una opinión de un producto */
export async function modificarOpinionProducto(opinionId, titulo, opinion) {
  /*
  console.log("Se va a modificar la opinión con id " + opinionId)
  console.log("Título: " + titulo)
  console.log("Opinión: " + opinion)
  */
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("productos_opiniones")
    .update({ titulo: titulo, opinion: opinion })
    .eq('id', opinionId)

  if (error) {
    console.error("Error al modificar opinión con id ", opinionId, ":", error);
    return [];
  }

  return data;
}

/* Función para modificar una opinión de un producto */
export async function eliminarOpinionProducto(opinionId) {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("productos_opiniones")
    .delete()
    .eq('id', opinionId)

  if (error) {
    console.error("Error al eliminar opinión con id ", opinionId, ":", error);
    return [];
  }

  return data;
}