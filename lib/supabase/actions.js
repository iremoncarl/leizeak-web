'use server'
import { createSupabaseServerClient } from "@/lib/auth/server-client";

{/* --------------------------   PÁGINA DE CONCIERTOS   -------------------------- */}
/* Función para obtener los próximos conciertos */
export async function getConciertosFuturos() {
  const supabase = await createSupabaseServerClient();

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
  const supabase = await createSupabaseServerClient();

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

/* Función para obtener la imagen del cartel de un concierto */
export async function getCartel(ruta) {
  if (!ruta) return null

  const supabase = await createSupabaseServerClient();

  try {
    const { data, error } = supabase.storage.from('conciertos').getPublicUrl(ruta)
    if (error) throw error
    console.log("public url:", data.publicUrl)
    return data.publicUrl;
  } catch (error) {
    console.log('Error obteniendo imagen: ', error)
  }   
}



{/* --------------------------   PÁGINA DE PRODUCTOS   -------------------------- */}
/* Función para obtener los productos */
export async function getProductos() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("productos")
    .select("*")
    .order("id");  

  if (error) {
    console.error("Error al cargar productos:", error);
    return [];
  }
  return data;
}
/* Función para obtener la información de un producto */
export async function getProducto(id) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("productos")
    .select("*")
    .eq('id', id)
    .single();

  if (error) {
    console.error("Error al cargar producto:", error);
    return [];
  }
  return data;
}
/* Función para obtener las opiniones de un producto */
export async function getOpinionesProducto(id) {
  const supabase = await createSupabaseServerClient();

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
export async function crearOpinionProducto(producto_id, opinion) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("productos_opiniones")
    .insert([{
      producto_id: Number(producto_id),
      opinion: opinion
    }]);

  if (error) {
    console.error("Error al insertar nueva opinión del producto con id ", producto_id, ":", error);
    return { ok: false, error };
  }

    return { ok: true };
}

/* Función para modificar una opinión de un producto */
export async function modificarOpinionProducto(opinionId, opinion) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("productos_opiniones")
    .update({ opinion: opinion })
    .eq('id', opinionId)

  if (error) {
    console.error("Error al modificar opinión con id ", opinionId, ":", error);
    return { ok: false, error };
  }

    return { ok: true };
}

/* Función para modificar una opinión de un producto */
export async function eliminarOpinionProducto(opinionId) {
  const supabase = await createSupabaseServerClient();
  
  const { data, error } = await supabase
    .from("productos_opiniones")
    .delete()
    .eq('id', opinionId)
    
  if (error) {
    console.error("Error al eliminar opinión con id ", opinionId, ":", error);
    return { ok: false, error };
  }

    return { ok: true };
}



{/* --------------------------   PÁGINA DE NOTICIAS   -------------------------- */}
/* Función para obtener las noticias */
export async function getNoticias() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("noticias")
    .select("*,  noticias_comentarios(count)")
    .order("fecha", { ascending: false });  

  if (error) {
    console.error("Error al cargar noticias:", error);
    return [];
  }
  return data;
}
/* Función para obtener los comentarios de las noticias */
export async function getComentariosNoticia(noticiaId) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("noticias_comentarios")
    .select("*")
    .eq('noticia_id', noticiaId)
    .order("created_at", { ascending: false });  

  if (error) {
    console.error("Error al cargar comentarios de noticias:", error);
    return [];
  }
  return data;
}

/* Función para crear un nuevo comentario para una noticia */
export async function crearComentarioNoticia(noticia_id, comentario) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("noticias_comentarios")
    .insert([{
      noticia_id: Number(noticia_id),
      comentario: comentario
    }]);

  if (error) {
    console.error("Error al insertar nuevo comentario para la noticia con id ", noticia_id, ":", error);
    return { ok: false, error };
  }

  return { ok: true };
}

/* Función para modificar un comentario de una noticia */
export async function modificarComentarioNoticia(comentarioId, comentario) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("noticias_comentarios")
    .update({ comentario: comentario })
    .eq('id', comentarioId)

  if (error) {
    console.error("Error al modificar comentario de noticia con id ", comentarioId, ":", error);
    return { ok: false, error };
  }

  return { ok: true };
}

/* Función para eliminar un comentario de una noticia  */
export async function eliminarComentarioNoticia(comentarioId) {
  const supabase = await createSupabaseServerClient();
  
  const { error } = await supabase
    .from("noticias_comentarios")
    .delete()
    .eq('id', comentarioId)
    
  if (error) {
    console.error("Error al eliminar comenatrio de noticia con id ", comentarioId, ":", error);
    return { ok: false, error };
  }

    return { ok: true };
}




{/* --------------------------   PÁGINA DE BIOGRAFÍA   -------------------------- */}
/* Función para obtener las fechas de la línea temporal */
export async function getLineaTemporal() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("bio_linea_temporal")
    .select("*")
    .order("fecha", { ascending: false });  

  if (error) {
    console.error("Error al cargar fechas de la línea temporal:", error);
    return [];
  }
  return data;
}




{/* --------------------------   PÁGINA DE REGISTRO   -------------------------- */}
export async function insertarUsuario(userId, username) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("usuarios")
    .insert([{
      id: userId,
      username: username
    }]);

  if (error) {
    return { ok: false, error };
  }
  return { ok: true };
}

export async function getUsername(userId) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("usuarios")
    .select("username")
    .eq('id', userId)
    .single();

  if (error) {
    console.error("Error al obtener nombre de usuario:", error);
    return [];
  }
  return data;
}

