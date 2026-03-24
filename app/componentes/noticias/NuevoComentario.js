'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from "react-icons/fi";

import { crearComentarioNoticia } from "@/lib/supabase/actions";

export default function NuevoComentario({noticiaId, textoPlaceHolder, textoEnviarBtn}) {
  const router = useRouter();

  const [comentario, setComentario] = useState("");

  const crearComentario = async () => {
    if (!comentario.trim()) {
      mostrarMensajeError('¡El campo de texto no puede estar vacío!');
      return;
    }
    const res = await crearComentarioNoticia(noticiaId, comentario.trim());
    if (!res.ok) {
      mostrarMensajeError('Se ha producido un error al enviar el comentario');
      return;
    }
    setComentario("");
    mostrarMensajeExito('¡Comentario publicado!');
    router.refresh();
  }

  const mostrarMensajeError = (mensaje) => toast.error(mensaje);
  const mostrarMensajeExito = (mensaje) => toast.success(mensaje);

  return (
    <div className="text-white p-4 mb-5 bg-white/15 rounded-xl flex flex-col mt-5">
      <textarea type="text" placeholder={textoPlaceHolder} value={comentario} onChange={(e) => setComentario(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
      <button onClick={crearComentario} className="bg-[#8b5504] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
        <p>{textoEnviarBtn}</p>
        <FiSend className="w-5 h-5"/>
      </button>  
 
      <Toaster position="top-center" containerStyle={{top: 100}}/>
   
    </div>
  )
}