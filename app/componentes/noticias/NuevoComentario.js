'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { crearComentarioNoticia } from "@/lib/supabase/actions";
import { FiSend } from "react-icons/fi";

export default function NuevoComentario({noticiaId, textoPlaceHolder, textoEnviarBtn}) {
  const router = useRouter();

  const [comentario, setComentario] = useState("");

  const crearComentario = async () => {
    await crearComentarioNoticia(noticiaId, comentario);
    router.refresh();
  }

  return (
    <div className="text-white p-4 mb-5 bg-white/15 rounded-xl flex flex-col mt-5">
      <textarea type="text" placeholder={textoPlaceHolder} value={comentario} onChange={(e) => setComentario(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
      <button onClick={crearComentario} className="bg-[#8b5504] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
        <p>{textoEnviarBtn}</p>
        <FiSend className="w-5 h-5"/>
      </button>  
    </div>
  )
}