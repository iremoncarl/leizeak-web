"use client";
import { useActionState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { submitContactForm } from "@/lib/emails/actions";


export function Formulario({textosFormulario}) {
    const [currentState, formAction, isPending] = useActionState(submitContactForm, {});

    useEffect(() => {
        if (!currentState) return;

        if (currentState.success) mostrarMensajeExito(currentState.message);
        else mostrarMensajeError(currentState.message);

    }, [currentState]);
    
    const mostrarMensajeError = (mensaje) => toast.error(mensaje);
    const mostrarMensajeExito = (mensaje) => toast.success(mensaje);

    return (
        <form className="w-full flex flex-col justify-between border border-white/30 rounded-xl p-8" action={formAction} method="post">

            <div className="flex flex-col xl:flex-row gap-0 xl:gap-8">
                <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="nombre" name="nombre" type="text" placeholder={textosFormulario.nombre}/>
                <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="apellidos" name="apellidos" type="text" placeholder={textosFormulario.apellidos}/>
            </div>

            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="email" name="email" type="email" placeholder={textosFormulario.correo}/>
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="asunto" name="asunto" type="text" placeholder={textosFormulario.asunto}/>

            <p>{textosFormulario.mensaje}</p>
            <textarea className="mb-8 p-2 h-full border border-white/30 focus:border-[#a27736]/70 outline-none rounded mt-2" id="mensaje" name="mensaje" type="text" />

            <button className="bg-[#8b5504] hover:bg-[#a27736] transition cursor-pointer text-white font-bold py-2 px-4 rounded-3xl" type="submit">
                {isPending ? textosFormulario.enviando : textosFormulario.enviar}
            </button>
            
            <Toaster position="top-center" containerStyle={{top: 100}}/>
        </form>
    );
}
