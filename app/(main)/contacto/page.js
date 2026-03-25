import {getTranslations} from 'next-intl/server';

import { getUser } from "@/lib/auth/getUser";

import { Formulario } from "@/app/componentes/contacto/Formulario";
import { FaYoutube, FaInstagram, FaFacebookSquare, FaArrowRight } from "react-icons/fa";


export default async function Contacto() {
  const t = await getTranslations('PagContacto');
  const user = await getUser();
console.log("USER:")
console.log(user)
  const textosFormulario = {
    "nombre" : t('formNombre'),
    "apellidos": t('formApellidos'),
    "correo": t('formCorreo'),
    "asunto": t('formAsunto'),
    "mensaje": t('formMensaje'),
    "enviar": t('formEnviar'),
    "enviando": t('formEnviando')
  }

  return (
    <main className="px-4 lg:px-10 py-6 lg:py-10 flex-1">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-14">{t('titulo')}</h1>

      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 pb-30">

        {/* Info de contacto */}
        <div className="flex flex-col">
          <div>
            <p className="mb-4">{t('subtitulo')}</p>
            <p className="text-2xl lg:text-3xl font-serif">leizeaktaldea@gmail.com</p>
          </div>
          <div className="mt-14 md:h-full mb-10 hidden md:block">
            <p className="mb-4">{t('subtitulo2')}</p>
            <div className="h-full flex flex-col justify-between">           
              <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" aria-label="Enlace a YouTube">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaYoutube className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>YouTube</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">Leizeak Taldea</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>
              <a href="https://www.instagram.com/leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Instagram">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaInstagram className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>Instagram</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">@leizeak</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>
              <a href="https://www.facebook.com/Leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Facebook">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaFacebookSquare className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>Facebook</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">@Leizeak</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>          
            </div>
          </div>
        </div>


        {/* Formulario de contacto */}
        < Formulario textosFormulario={textosFormulario} user={user}/>
        
      </div>      
    </main>
  );
}