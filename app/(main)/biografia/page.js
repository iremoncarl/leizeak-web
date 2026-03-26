import Image from "next/image";
import {getTranslations, getLocale} from 'next-intl/server';

import { getLineaTemporal } from "@/lib/supabase/actions";

import imagenPrincipal from '../../../public/biografia_principal.jpg'
import LineaTemporal from "@/app/componentes/biografia/LineaTemporal";


export default async function Biografia() {
  const t = await getTranslations('PagBiografia');
  
  const locale = await getLocale();

  const fechasLineaTemporal = await getLineaTemporal();

  return (
    <main className="px-4 lg:px-10 py-6 lg:py-10">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">{t('titulo')}</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 mb-20 gap-10 lg:gap-20 p-2 lg:p-10">

        {/* Imagen de las integrantes del grupo */}
        <Image src={imagenPrincipal} alt="Foto de las componentes de Leizeak" className="rounded-md"/>
        
        {/* Historia del grupo */}
        <div>
          <h2 className="text-xl xl:text-3xl text-[#a27736] font-serif">{t('subtitulo')}</h2>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto1')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto2')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto3')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto4')}</p>
          <p className="text-sm xl:text-2xl mt-4 text-justify">{t('texto5')}</p>
        </div>
      </div>

      <div className="mb-30 lg:mb-70"></div>

      <h2 className="text-xl xl:text-3xl text-[#a27736] font-serif mb-16">{t('linea')}</h2>
      {/* Componente de línea temporal */}
      <LineaTemporal locale={locale} fechasLineaTemporal={fechasLineaTemporal}/>

    </main>
  );
}