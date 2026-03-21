import { createSupabaseServerClient } from "@/lib/auth/server-client";

export async function getUser() {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.log("Error obteniendo usuario:", error.message);
        return null;
    }

    return data.user;
}