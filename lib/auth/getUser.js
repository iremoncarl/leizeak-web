import { createSupabaseServerClient } from "@/lib/auth/server-client"; //Importa el cliente de Supabase para servidor

export async function getUser() {
    //Se crea una instancia del cliente Supabase
    const supabase = await createSupabaseServerClient();

    //Se obtiene el usuario autenticado desde la sesión actual
    const { data, error } = await supabase.auth.getUser();

    //Si ocurre un error al obtener el usuario -> null
    if (error) {
        console.log("Error obteniendo usuario:", error.message);
        return null;
    }

    return data.user;
}