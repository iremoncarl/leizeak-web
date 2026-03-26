import {getTranslations, getLocale} from 'next-intl/server';
import { cookies } from 'next/headers';

import { getConciertosFuturos, getConciertosPasados, getCartel } from "@/lib/supabase/actions";

import Calendario from "@/app/componentes/conciertos/Calendario";
import Concierto from "@/app/componentes/conciertos/Concierto";

export default async function Conciertos() {
  const t = await getTranslations('PagConciertos');
  
  const locale = await getLocale();

  const conciertosFuturos = await getConciertosFuturos();
  //console.log("futuros:")
  //console.log(conciertosFuturos)
  const conciertosPasados = await getConciertosPasados();
  //console.log("pasados:")
  //console.log(conciertosPasados)

  //const conciertosFuturosConCartel = conciertosFuturos.map((concierto) => ({...concierto, cartelUrl: getCartel(concierto.cartel)}));
  //const conciertosPasadosConCartel = conciertosPasados.map((concierto) => ({...concierto, cartelUrl: getCartel(concierto.cartel)}));
  
  const conciertosFuturosConCartel = await Promise.all(
    conciertosFuturos.map(async (concierto) => {
      const cartel = await getCartel(concierto.cartel);
      return { ...concierto, cartelUrl: cartel};
    })
  );
  const conciertosPasadosConCartel = await Promise.all(
    conciertosPasados.map(async (concierto) => {
      const cartel = await getCartel(concierto.cartel);
      return { ...concierto, cartelUrl: cartel};
    })
  );

  const calendarioTexto = t('calendario');

  return (
    <main className="px-4 lg:px-10 py-6 lg:py-10">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold">{t('titulo')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-10">
        {/* Componente de calendario */}
        <div className="">
          <div className="sticky top-20 py-10 px-2">
            <Calendario conciertosFuturos={conciertosFuturos} conciertosPasados={conciertosPasados} idioma={locale} calendarioTitulo={calendarioTexto}/>
          </div>
        </div>
        
        <div className="p-4 lg:p-10 col-span-3">
          {/* Sección de conciertos futuros */}
          <h2 className="text-xl lg:text-2xl font-serif">{t('futuros')}</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosFuturos.length===0 ? 
            <p className="mb-28 text-center">{t('noInfoFuturos')}</p>
          :
            conciertosFuturosConCartel.map((concierto) => (    
              <Concierto key={concierto.id} fecha={concierto.fecha} lugar={concierto.lugar} hora={concierto.hora} cartel={concierto.cartelUrl}/> 
            ))
          }
          {/* Sección de conciertos pasados */}
          <h2 className="text-xl lg:text-2xl mt-10 font-serif">{t('pasados')}</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosPasados.length===0 ? 
            <p className="text-center">{t('noInfoPasados')}</p>
          :
            conciertosPasadosConCartel.map((concierto) => (
              <Concierto key={concierto.id} fecha={concierto.fecha} lugar={concierto.lugar} hora={concierto.hora} cartel={concierto.cartelUrl}/>     
            ))
          }
        </div>
      </div>
      
    </main>

  );
} 