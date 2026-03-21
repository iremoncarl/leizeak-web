//import {useTranslations} from 'next-intl';
import Image from "next/image";

import { getUser } from "@/lib/auth/getUser";

import CarruselVideos from "../componentes/inicio/CarruselVideos";

import logo from '../../public/lzk_logo_txuri_simple.png'
import imagen_principal from '../../public/pag_inicio_2.jpg'

export default async function Home() {
  //const t = useTranslations('PagInicio');

  const user = await getUser();

  return (
    <main className="p-0 bg-[#080808]">

      <div>
        <Image src={logo} alt="Logo de Leizeak" width="full" height="full" className="absolute px-40 py-20"/>
        <Image src={imagen_principal} alt="Leizeak en concierto" width="full" height="full" className="top-20"/>
      </div>

      {/*
      <h1>{t('titulo')}</h1>
      */}

      {/*
      <div>
        {user ? 
          <p>SI hay user</p> 
        :
          <p>NO hay user</p>
        }
      </div>
      */}      

      <div className="p-10 mt-20 pb-20">
        <h2 className="font-serif text-3xl mb-10">Escucha nuestro primer disco</h2>
        <CarruselVideos/>
      </div>
    </main>
  );
}
