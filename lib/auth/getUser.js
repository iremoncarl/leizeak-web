import { createSupabaseServerClient } from "@/lib/auth/server-client";

export async function getUser() {
    const supabase = await createSupabaseServerClient();

    const response = await supabase.auth.getUser();
    const user = response.data.user;

    return user;
}