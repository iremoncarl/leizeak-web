'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { modificarOpinionProducto, eliminarOpinionProducto } from "@/lib/supabase/actions";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function ModificarOpinion({opinionId}) {
  const router = useRouter();

  const [titulo, setTitulo] = useState("Título modificado");
  const [opinion, setOpinion] = useState("Opinión modificada");

  const modificarOpinion = async () => {
    console.log("Pulsado modificar opinión con id " + opinionId)
    await modificarOpinionProducto(opinionId, titulo, opinion);
    router.refresh();
  }
  const eliminarOpinion = async () => {
    console.log("Pulsado eliminar opinión con id " + opinionId)
    const res = await eliminarOpinionProducto(opinionId);
    console.log(res);
    router.refresh();
  }

  return (
    <div className="flex gap-4">
      <button onClick={modificarOpinion} className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiEdit className="w-5 h-5 cursor-pointer" />
      </button>
      <button onClick={eliminarOpinion}  className="hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center">
        <FiTrash2 className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
  )
}

/*
<div className="p-5">
  <div>
    <button onClick={modificarOpinion} className="cursor-pointer bg-black text-white p-2 mr-2">Editar</button>
    <button onClick={eliminarOpinion} className="cursor-pointer bg-black text-white p-2">Eliminar</button>
  </div>
</div>
*/