"use client";
import { useActionState } from "react";

import { submitContactForm } from "@/lib/emails/actions";


export function Formulario() {
    const [currentState, formAction, isPending] = useActionState(submitContactForm, {});

    return (
        <form className="w-full flex flex-col justify-between border border-white/30 rounded-xl p-8" action={formAction}>

            <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="nombre" name="nombre" type="text" placeholder="Nombre"/>
                <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="apellidos" name="apellidos" type="text" placeholder="Apellidos"/>
            </div>

            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="email" name="email" type="email" placeholder="Correo electrónico"/>
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="asunto" name="asunto" type="text" placeholder="Asunto"/>

            <p>Mensaje</p>
            <textarea className="mb-8 p-2 h-full border border-white/30 focus:border-[#a27736]/70 outline-none rounded mt-2" id="mensaje" name="mensaje" type="text" />

            <button className="bg-[#8b5504] hover:bg-[#a27736] transition cursor-pointer text-white font-bold py-2 px-4 rounded-3xl" type="submit">
                {isPending ? "Enviando..." : "Enviar mensaje"}
            </button>
            {currentState.success && currentState.message && (
                <p>{currentState.message}</p>
            )}
            {currentState.error && (
                <p>{currentState.error}</p>
            )}
        </form>
    );
}

{/*
            <div>
            <form action={formAction}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="email" required disabled={isPending}/>
                </div>
                <button className="p-8 border border-white cursor-pointer" type="submit" disabled={isPending}>{isPending ? "Cargando..." : "Enviar"}</button>

                {currentState.success && currentState.message && (
                    <p>{currentState.message}</p>
                )}
                {currentState.error && (
                    <p>{currentState.error}</p>
                )}
            </form>
        </div>
        */}