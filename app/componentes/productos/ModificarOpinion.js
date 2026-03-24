'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { modificarOpinionProducto, eliminarOpinionProducto } from "@/lib/supabase/actions";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function ModificarOpinion({opinionId, opinion, textoCancelarBtn, textoGuardarBtn }) {
  const router = useRouter();

  const [nuevaOpinion, setNuevaOpinion] = useState(opinion);
  const [modifOpinion, setModifOpinion] = useState(false);

  const modificarOpinion = async () => {
    console.log("Pulsado modificar opinión con id " + opinionId)
    await modificarOpinionProducto(opinionId, nuevaOpinion);
    router.refresh();
    setModifOpinion(false);
  }
  const eliminarOpinion = async () => {
    console.log("Pulsado eliminar opinión con id " + opinionId)
    const res = await eliminarOpinionProducto(opinionId);
    console.log(res);
    router.refresh();
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
                <button onClick={() => setModifOpinion(false)} className="bg-[#ff0000] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoCancelarBtn}</p>
                </button> 
                <button onClick={modificarOpinion} className="bg-[#00ff00] hover:bg-[#a27736] transition items-center px-4 py-2 rounded cursor-pointer align-end flex gap-2 self-end">
                  <p>{textoGuardarBtn}</p>
                </button> 
              </div>
                 
              </div>
        </div>
      }
    </div>
  )
}