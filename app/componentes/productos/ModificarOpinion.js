'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { FiTrash2, FiEdit } from "react-icons/fi";

import { modificarOpinionProducto, eliminarOpinionProducto } from "@/lib/supabase/actions";

export default function ModificarOpinion({opinionId, opinion, textoCancelarBtn, textoGuardarBtn }) {
  const router = useRouter();

  const [nuevaOpinion, setNuevaOpinion] = useState(opinion);
  const [modifOpinion, setModifOpinion] = useState(false);
  const [loading, setLoading] = useState(false);

  const modificarOpinion = async () => {
    console.log("Pulsado modificar opinión con id " + opinionId)

    if (loading) return;
    setLoading(true);

    if (!nuevaOpinion.trim()) {
      toast.error("¡El campo de texto no puede estar vacío!");
      setLoading(false);
      return;
    }
    const res = await modificarOpinionProducto(opinionId, nuevaOpinion);
    if (!res.ok) {
      toast.error('Se ha producido un error al modificar la opinión');
      setLoading(false);
      return;
    }
    toast.success('¡Opinión modificada!');
    setLoading(false);
    router.refresh();
    setModifOpinion(false);
  }

  const eliminarOpinion = async () => {
    console.log("Pulsado eliminar opinión con id " + opinionId)

    if (loading) return;
    setLoading(true);

    const res = await eliminarOpinionProducto(opinionId);
    if (!res.ok) {
      toast.error('Se ha producido un error al eliminar la opinión');
      setLoading(false);
      return;
    }
    toast.success('¡Opinión eliminada!');
    setLoading(false);
    router.refresh();
  }

  const cancelar = async () => {
    setNuevaOpinion(opinion);
    setModifOpinion(false);
  }

  return (
    <div className="flex gap-4">
      <button onClick={()=>setModifOpinion(true)} className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiEdit className="w-5 h-5 cursor-pointer" />
      </button>
      <button onClick={eliminarOpinion}  className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiTrash2 className="w-5 h-5 cursor-pointer" />
      </button>


      {modifOpinion && 
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" >
          <div className="text-white p-8 my-5 bg-black border border-white rounded-xl flex flex-col  w-[80%]">
            <textarea type="text" value={nuevaOpinion} onChange={(e) => setNuevaOpinion(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
              <div className="flex justify-between mt-8">
                <button onClick={() => cancelar()} className="bg-red-700 hover:bg-red-600 transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoCancelarBtn}</p>
                </button> 
                <button onClick={modificarOpinion} className="bg-green-700 hover:bg-green-600 transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoGuardarBtn}</p>
                </button> 
              </div>
                 
              </div>
        </div>
      }
    </div>
  )
}