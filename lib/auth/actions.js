'use server'
import { createSupabaseServerClient } from "./server-client";

export async function registrarUsuario(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmarPassword = formData.get("confirmarPassword");
  console.log("email: ", email)
  console.log("password: ", password)
  console.log("confirmarPassword: ", confirmarPassword)

  if (!email || !password || !confirmarPassword) return { error: "Faltan campos" };

  if (password !== confirmarPassword) return { error: "Las contraseñas no coinciden" };
  
  if (password.length < 6) return { error: "La contraseña debe tener al menos 6 caracteres" };

  const supabase = createSupabaseServerClient();

  const { error, data } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    return {error: error.message}
  } 

  console.log(data)


  return { success: "Registro correcto. Revisa tu email" };
}