"use server";

import { Resend } from "resend";
import * as z from "zod";
import ContenidoEmail from "@/app/componentes/contacto/ContenidoEmail";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function submitContactForm(_prevState,	formData) {
    
	try {
		const formSchema = z.object({
			email: z.email(),
		});

		const { data, success } = formSchema.safeParse(
			Object.fromEntries(formData.entries()),
		);
		if (!success)
			return {
				success: false,
				error: "Introduce un email válido por favor",
			};

		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "iremoncdam1@gmail.com",
			subject: "Nuevo mensaje recibido desde página web",
			react: ContenidoEmail({nombre: "Iratxe", apellidos: "Remón Carlos", emailRemitente: "iratxe@gmail.com", asunto:"Email de prueba", mensaje: "Este es un email de prueba"}),
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				error: "Error al enviar mensaje. Por favor, prueba de nuevo más tarde.",
			};
		}

		return {
			success: true,
			message: "¡Mensaje enviado con éxito!",
		};
	} catch (error) {
		console.error("Server action error:", error);
		return {
			success: false,
			error: "Ha sucedido un error. Por favor, prueba de nuevo más tarde.",
		};
	}
    
}
