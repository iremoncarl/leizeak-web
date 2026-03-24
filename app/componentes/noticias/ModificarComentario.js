'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { modificarComentarioNoticia, eliminarComentarioNoticia } from "@/lib/supabase/actions";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function ModificarComentario({comentarioId, comentario, textoCancelar, textoGuardar}) {
  const router = useRouter();
  
  const [nuevoComentario, seNuevoComentario] = useState(comentario);
  const [modifVisible, setModifVisible] = useState(false);

  const modificarComentario = async () => {
    console.log("Pulsado modificar comentario con id " + comentarioId)
    await modificarComentarioNoticia(comentarioId, nuevoComentario);
    router.refresh();
    setModifVisible(false);
  }
  const eliminarComentario = async () => {
    console.log("Pulsado eliminar comentario con id " + comentarioId)
    await eliminarComentarioNoticia(comentarioId);
    router.refresh();
  }

  return (
    <div className="flex gap-4">
      <button onClick={()=>setModifVisible(true)} className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiEdit className="w-5 h-5 cursor-pointer" />
      </button>
      <button onClick={eliminarComentario}  className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiTrash2 className="w-5 h-5 cursor-pointer" />
      </button>


      {modifVisible && 
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" >
          <div className="text-white p-8 my-5 bg-black border border-white rounded-xl flex flex-col  w-[80%]">
            <textarea type="text" value={nuevoComentario} onChange={(e) => seNuevoComentario(e.target.value)} className="w-full p-2 mb-4 min-h-30 rounded border border-white/20"/>
              <div className="flex justify-between mt-8">
                <button onClick={() => setModifVisible(false)} className="bg-[#ff0000] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoCancelar}</p>
                </button> 
                <button onClick={modificarComentario} className="bg-[#00ff00] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoGuardar}</p>
                </button> 
              </div>
                 
              </div>
        </div>
      }
    </div>
  )
}