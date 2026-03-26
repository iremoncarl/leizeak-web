'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { FiSend } from "react-icons/fi";

import { crearOpinionProducto } from "@/lib/supabase/actions";

export default function NuevaOpinion({productoId, opinionPlaceholder, textoEnviarBtn}) {
  const router = useRouter();

  const [opinion, setOpinion] = useState("");
  const [loading, setLoading] = useState(false);

  const añadirOpinion = async () => {
    if (loading) return;
    setLoading(true);

    if (!opinion.trim()) {
      toast.error('¡El campo de texto no puede estar vacío!');
      setLoading(false);
      return;
    }
    const res = await crearOpinionProducto(productoId, opinion.trim());
    if (!res.ok) {
      toast.error('Se ha producido un error al publicar la opinión');
      setLoading(false);
      return;
    }
    toast.success('¡Opinión publicada!');
    setLoading(false);
    setOpinion("");
    router.refresh();
  }

  return (
    <div className="text-white p-4 mb-5 bg-white/15 rounded-xl flex flex-col mt-5">
      <textarea type="text" placeholder={opinionPlaceholder} value={opinion} onChange={(e) => setOpinion(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
      <button onClick={añadirOpinion} className="bg-[#8b5504] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
        <p>{textoEnviarBtn}</p>
        <FiSend className="w-5 h-5"/>
      </button>  
    </div>
  )
}