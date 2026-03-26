import {getTranslations} from 'next-intl/server';
import Image from "next/image";

import CarruselVideos from "../componentes/inicio/CarruselVideos";

import logo from '../../public/lzk_logo_txuri_simple.png'
import imagen_principal from '../../public/pag_inicio.jpg'

export default async function Home() {
  const t = await getTranslations('PagInicio');

  return (
    <main className="p-0 bg-[#080808]">

      {/* Imagen de presentación del grupo + logo */}
      <div>
        <Image src={logo} alt="Logo de Leizeak" width="full" height="full" className="absolute px-10 lg:px-80 py-8 lg:py-20 xl:py-40"/>
        <Image src={imagen_principal} alt="Leizeak en concierto" width="full" height="full" className="top-20"/>
      </div>

      {/* Sección de enlaces a YouTube */}
      <div className="p-6 md:p-10 mt-20 pb-20">
        <h2 className="font-serif text-xl md:text-3xl mb-10">{t('primerDisco')}</h2>
        <CarruselVideos/>
      </div>
    </main>
  );
}
