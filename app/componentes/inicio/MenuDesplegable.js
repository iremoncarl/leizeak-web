'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation';

import { useState } from "react";

import { VscChromeClose } from "react-icons/vsc";
import { FiMenu, FiUser } from "react-icons/fi";

import CerrarSesionBtn from "../CerrarSesionBtn";


export default function MenuDesplegable({user, idioma}) {
  const router = useRouter();

  const [mostrar, setMostrar] = useState(false);

  const cambiarIdioma = (idioma) => {
    console.log(idioma);
    document.cookie = `locale=${idioma}; path=/;`;
    router.refresh();
  }

  return (
    <div className="p-4 relative" >
      <div className=" h-12 w-12">
        {mostrar ?
          <button onClick={() => setMostrar(false)} className="w-full h-full cursor-pointer">
            <VscChromeClose className="w-full h-full p-1" />
          </button>
        :
          <button onClick={() => setMostrar(true)} className="w-full h-full border border-white rounded-lg cursor-pointer hover:bg-white/30 transition">
            <FiMenu className="w-full h-full p-2" />
          </button>
        }
      </div>
        
      {mostrar &&
        <div className="fixed left-0 top-20 w-full bg-black border border-white/50 flex flex-col pb-0">
          <Link href="/" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">INICIO</Link>
          <Link href="/conciertos" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">CONCIERTOS</Link>
          <Link href="/noticias" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">NOTICIAS</Link>
          <Link href="/productos" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">PRODUCTOS</Link>
          <Link href="/biografia" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">BIOGRAFÍA</Link>
          <Link href="/contacto" className="w-full text-left px-6 py-4 text-white hover:bg-white/20 transition cursor-pointer">CONTACTO</Link>      

          <div className="border-b border-b-white/70 h-1 mx-2 my-2"></div>

          <div className="flex justify-between">
            <div className="flex p-4 mt-4">
              <button className={`cursor-pointer ${idioma==='es' ? 'text-[#a27736]' : 'text-white'}`} onClick={() => cambiarIdioma('es')}>CAS</button>
              <p className="mx-2">|</p>
              <button className={`cursor-pointer ${idioma==='eu' ? 'text-[#a27736]' : 'text-white'}`} onClick={() => cambiarIdioma('eu')}>EUS</button>
              <p className="mx-2">|</p>
              <button className={`cursor-pointer ${idioma==='en' ? 'text-[#a27736]' : 'text-white'}`} onClick={() => cambiarIdioma('en')}>EN</button>
            </div>

            {user ? 
              <div className="mr-6 self-center">
                <CerrarSesionBtn />
              </div>
            :
              <a href="/login" className="flex self-center gap-3 items-center border border-[#6f4403] px-6 py-3 mr-6 rounded-lg cursor-pointer bg-[#8b5504] hover:bg-[#a27736] transition">
                <FiUser className="w-4 xl:w-5 h-4 xl:h-5" />
                <p className="text-sm ">INICIAR SESIÓN</p>
              </a>
            }
          </div> 
        </div>          
      }
    </div>
  )
}