import Image from "next/image";
import Link from "next/link";
import {getTranslations, getLocale} from 'next-intl/server';

import { getOpinionesProducto, getProducto, getUsername } from "@/lib/supabase/actions";
import { getUser } from "@/lib/auth/getUser";

import NuevaOpinion from "@/app/componentes/productos/NuevaOpinion";
import ModificarOpinion from "@/app/componentes/productos/ModificarOpinion";


export default async function ProductoDetalle({ params }) {
  const t = await getTranslations('PagProductos');
  
  const locale = await getLocale();
  
  const { id } = await params;

  const user = await getUser();


  const info = await getProducto(id); //Se recoge la información del producto específico 
  const opiniones = await getOpinionesProducto(id); //Se recogen las opiniones del producto específico 
  //Se añade a cada opinión el nombre de usuario de su autor
  const opinionesFinal = await Promise.all(
    opiniones.map(async (opinion) => {
      const username = await getUsername(opinion.usuario_id);
      return { ...opinion, username };
    })
  );

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0"); 
    const anio = date.getFullYear();

    return `${dia}-${mes}-${anio}`;
  }

  return (
    <main className="p-10">
      <Link href={`/productos`} className="px-0 lg:px-6 hover:underline cursor-pointer text-lg">{t('volver')}</Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 min-h-150 p-0 pt-8 lg:p-14">

        {/* Imagen del producto */}
        <div className="bg-white/90 rounded-lg border border-black border-2 flex justify-center">
          {info.imagen_portada &&
            <Image src={info.imagen_portada} alt={info.nombre_es} width={600} height={300} className="object-contain" />
          }
        </div>
        
        {/* Información del producto */}
        <div className="bg-white/0">
          <h1 className="mb-8 text-2xl lg:text-4xl font-bold text-white font-serif">{info[`nombre_${locale}`]}</h1>
          <p className="text-white text-md lg:text-lg font-serif text-justify">{info[`descripcion_${locale}`]}</p>
          <p></p>
        </div>
      </div>



      {/* Sección para escribir nueva opinión */}
      <div className="mt-16">
        <h2 className="mb-4 font-serif text-lg lg:text-2xl">{t('dejarOpinion')}</h2>
        {!user ? 
          <p className="text-md lg:text-lg">{t('loginComentar')}</p>
        :
          <NuevaOpinion productoId={id} opinionPlaceholder={t('escribirOpinion')} textoEnviarBtn={t('enviarOpinion')}/>
        }
        
      </div>

      {/* Sección de opiniones */}
      <div className="mt-16">
        <h2 className="mb-4 font-serif text-lg lg:text-2xl">{t('opiniones')}</h2>

        {opiniones.length===0 ? 
          <p>{t('noOpiniones')}</p>
        :
          opinionesFinal.map((opinion) => (
            <div key={opinion.id} className="text-white w-full flex p-4 mb-5 bg-white/15 rounded-xl bg-green-300">
              <div className="px-4 w-full">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-4 items-center">
                    <p className="text-lg font-semibold">{opinion.username.username}</p>
                    <p className="text-sm text-white/75">{formatearFecha(opinion.created_at)}</p>
                  </div>
                  {/* Botones de editar y eliminar opinión (para usuarios registrados) */}
                  {(user && user.id===opinion.usuario_id) &&
                    <ModificarOpinion opinionId={opinion.id} opinion={opinion.opinion} textoCancelarBtn={t('cancelar')} textoGuardarBtn={t('guardar')}/>
                  }
                </div>

                <p className="text-white/85">{opinion.opinion}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
