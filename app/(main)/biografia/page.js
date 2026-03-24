import Image from "next/image";
import {getTranslations, getLocale} from 'next-intl/server';

import { getLineaTemporal } from "@/lib/supabase/actions";

import imagenPrincipal from '../../../public/biografia_principal.jpg'


export default async function Biografia() {
  const t = await getTranslations('PagBiografia');
  
  const locale = await getLocale();

  const fechasLineaTemporal = await getLineaTemporal();

  return (
    <main className="px-4 lg:px-10 py-6 lg:py-10">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">{t('titulo')}</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 mb-20 gap-10 lg:gap-20 p-2 lg:p-10">

        <Image src={imagenPrincipal} alt="Foto de las componentes de Leizeak" className="rounded-md"/>
        
        <div>
          <h2 className="text-xl xl:text-3xl text-[#a27736] font-serif">{t('subtitulo')}</h2>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto1')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto2')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto3')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto4')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto5')}</p>
        </div>
      </div>

      <div className="mb-30 lg:mb-70">
        
      </div>
      <h2 className="text-xl xl:text-3xl text-[#a27736] font-serif mb-16">{t('linea')}</h2>
      <div className="flex justify-center">
      <ol className="relative w-[100%] xl:max-w-[50%]">      
        <div className="absolute left-1/2 h-full w-0.5 bg-white -translate-x-1/2"></div>            
        {fechasLineaTemporal.map((fecha, index) => (
          <li key={index} className={`relative w-1/2 mb-10 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
            <div className={`absolute w-5 h-5 border bg-black rounded-full z-10 top-2 ${index % 2 === 0 ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}></div>
            {/*
            <p className="text-sm lg:text-lg font-serif">{fecha.fecha_es}</p>
            <h3 className="text-md lg:text-2xl font-semibold font-serif my-2 text-[#a27736]">{fecha.titulo_es}</h3>
            <p className="text-sm lg:text-xl">{fecha.descripcion_es}</p>
            */}
            <p className="text-sm lg:text-lg font-serif">{fecha[`fecha_${locale}`]}</p>
            <h3 className="text-md lg:text-2xl font-semibold font-serif my-2 text-[#a27736]">{fecha[`titulo_${locale}`]}</h3>
            <p className="text-sm lg:text-xl hidden md:block">{fecha[`descripcion_${locale}`]}</p>
            <button className="text-sm lg:hidden">Ver más</button>
          </li>
        ))}

      </ol>
     </div>
    </main>
  );
}