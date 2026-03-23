'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { crearOpinionProducto } from "@/lib/supabase/actions";
import { FiSend } from "react-icons/fi";

export default function NuevaOpinion({productoId}) {
  const router = useRouter();

  const [opinion, setOpinion] = useState("");

  const añadirOpinion = async () => {
    await crearOpinionProducto(productoId, opinion);
    router.refresh();
  }

  return (
    <div className="text-white p-4 mb-5 bg-white/15 rounded-xl flex flex-col mt-5">
      <textarea type="text" placeholder="Escribe aquí tu opinión" value={opinion} onChange={(e) => setOpinion(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
      <button onClick={añadirOpinion} className="bg-[#8b5504] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
        <p>Enviar opinión</p>
        <FiSend className="w-5 h-5"/>
      </button>  
    </div>
    
  )
}