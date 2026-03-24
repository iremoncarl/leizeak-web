'use server'
import * as z from "zod";

export async function registrarUsuario(formData) {
  try {
    //Definimos un schema zod para validar los campos
    const formSchema = z.object({
      email: z.email("El email introducido no es válido"),
      password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
      confirmarPassword: z.string()
    })
    .refine((data) => data.password === data.confirmarPassword, {
      message: "Las contraseñas no coinciden"
    });

    //Validamos los datos del formulario
    const result = formSchema.safeParse(Object.fromEntries(formData.entries()));

    //Si la validación falla, enviamos el mensaje de error
    if (!result.success) {
      const firstError = result.error.issues[0];
      return { success: false, message: firstError.message };
    }
    
		return { success: true };

  }
  catch (error) {
		console.error("Error:", error);
		return { success: false, error: "Ha sucedido un error. Por favor, prueba de nuevo más tarde." };
	} 
}


export async function validarFormLogin(formData) {
  try {
    //Definimos un schema zod para validar los campos
    const formSchema = z.object({
      email: z.email("El email introducido no es válido"),
      password: z.string().min(1, "Debes introducir una contraseña"),
    });

    //Validamos los datos del formulario
    const result = formSchema.safeParse(Object.fromEntries(formData.entries()));

    //Si la validación falla, enviamos el mensaje de error
    if (!result.success) {
      const firstError = result.error.issues[0];
      return { success: false, message: firstError.message };
    }
  
		return { success: true };
  }
  catch (error) {
		console.error("Error:", error);
		return { success: false, error: "Ha sucedido un error. Por favor, prueba de nuevo más tarde." };
	} 
}