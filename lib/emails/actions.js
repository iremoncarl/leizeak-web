"use server";

import { Resend } from "resend";
import * as z from "zod";
import ContenidoEmail from "@/app/componentes/contacto/ContenidoEmail";

// Inicializamos Resend con la API KEY
const resend = new Resend(process.env.RESEND_API_KEY);

// Server action para enviar el formulario de contacto
export async function submitContactForm(_prevState,	formData) {
    
	try {
		//Definimos un schema zod para validar los campos
		const formSchema = z.object({
			nombre: z.string().min(1, "Introduce tu nombre, por favor"),
			apellidos: z.string().min(1, "Introduce tus apellidos, por favor"),
      		email: z.email("El email introducido no es válido"),
			asunto: z.string().min(1, "Introduce un asunto, por favor"),
      		mensaje: z.string().min(10, "El mensaje es demasiado corto"),
		});

		//Validamos los datos del formulario
		const result = formSchema.safeParse(Object.fromEntries(formData.entries()));

		//Si la validación falla, enviamos el mensaje de error
		if (!result.success) {
			const firstError = result.error.issues[0];
			return { success: false, message: firstError.message };
		}

		//Si la validación es correcta, obtenemos los datos
		const data = result.data;

		//Enviamos el email usando Resend
		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "iremoncdam1@gmail.com",
			subject: "Nuevo mensaje recibido desde página web",
			react: ContenidoEmail({nombre: data.nombre, apellidos: data.apellidos, emailRemitente: data.email, asunto: data.asunto, mensaje: data.mensaje}),
		});

		//Sise produce un error, enviamos el mensaje al componente de formulario
		if (error) {
			console.error("Resend error:", error);
			return { success: false, error: "Error al enviar mensaje. Por favor, prueba de nuevo más tarde."};
		}

		//Si todo sale bien, secces=true. Devolvemos estado y mensaje
		return { success: true, message: "¡Mensaje enviado con éxito!" };
		
	} catch (error) {
		console.error("Server action error:", error);
		return { success: false, error: "Ha sucedido un error. Por favor, prueba de nuevo más tarde." };
	}
    
}
