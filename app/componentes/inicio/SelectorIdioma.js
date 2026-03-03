'use client'
import { useState } from "react";
import { FiGlobe, FiChevronDown } from "react-icons/fi";


export default function SelectorIdioma() {

  const [mostrar, setMostrar] = useState(false);

  const cambiarIdioma = (idioma) => {
    console.log(idioma);
  }

  return (
    <div className="p-5" onMouseEnter={() => setMostrar(true)} onMouseLeave={() => setMostrar(false)}>
        <button className="flex gap-2 border border-white px-4 py-3 rounded-lg cursor-pointer hover:bg-white/30 transition">
            <FiGlobe className="w-5 h-5" />
            <FiChevronDown className="w-5 h-5" />
        </button>

        {mostrar &&
            <div className="absolute mt-2 bg-black rounded-md shadow-xl border border-white/50">
                <div onClick={() => cambiarIdioma('eu')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer mr-20 py-3">Euskara</div>
                <div onClick={() => cambiarIdioma('es')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer py-3">Castellano</div>
                <div onClick={() => cambiarIdioma('en')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer py-3">Inglés</div>
            </div>
        }
    </div>
  )
}