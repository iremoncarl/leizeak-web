'use client'
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";


export default function MenuDesplegable() {

  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="p-4 relative" onMouseEnter={() => setMostrar(true)} onMouseLeave={() => setMostrar(false)}>
        <button className="flex gap-2 border border-white px-4 py-3 rounded-lg cursor-pointer hover:bg-white/30 transition">
            <FiMenu className="w-5 h-5" />
        </button>

        {mostrar &&
          <div className="absolute right-0 mr-4 mt-2 bg-black rounded-md shadow-xl border border-white/50 flex flex-col">
              <Link href="/" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">INICIO</Link>
              <Link href="/conciertos" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">CONCIERTOS</Link>
              <Link href="/noticias" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">NOTICIAS</Link>
              <Link href="/productos" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">PRODUCTOS</Link>
              <Link href="/biografia" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">BIOGRAFÍA</Link>
              <Link href="/contacto" className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition cursor-pointer">CONTACTO</Link>           
          </div>
        }
    </div>
  )
}