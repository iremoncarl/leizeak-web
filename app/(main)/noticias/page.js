import Image from "next/image";
import Link from "next/link";
import {getTranslations, getLocale} from 'next-intl/server';

import { getNoticias } from "@/lib/supabase/actions";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender, SlBubble} from "react-icons/sl";

export default async function Noticias() {
  const t = await getTranslations('PagNoticias');

  const locale = await getLocale();

  const noticias = await getNoticias();
  //console.log("Noticias: ", noticias);
  //const noticias_comentarios = await getComentarios();
  //console.log("Comentarios noticias: ", noticias_comentarios);

  return (
    <main className="px-4 lg:px-10 py-6 lg:py-10 flex flex-col flex-1 ">
      <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-6 lg:mb-14">{t('titulo')}</h1>


      {/* Vista general de noticias */}
      <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
      {noticias.map((noticia) => (
        <Link href={`/noticias/${noticia.id}`} key={noticia.id}>
          <div className={"bg-white/30 border border-white/30 rounded-lg max-h-[400px] overflow-hidden group hover:border-[#8b5504] transition duration-500 flex flex-col hover:cursor-pointer"}>
            {noticia.imagen && 
              <div className="relative h-[270px] w-full overflow-hidden ">
                <Image src={noticia.imagen} alt={``} fill className="object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            }
            <div className="bg-black p-4 flex flex-col justify-between flex-1">
              <div>
                <p className="text-lg group-hover:text-[#a27736] transition-all duration-500">{noticia[`titulo_${locale}`]}</p>
                <p className="text-white/80 text-sm line-clamp-3 my-4">{noticia[`noticia_${locale}`]}</p>
                <div className="w-full h-[1px] bg-white/50 my-2"></div>
                <div className="flex gap-12 mt-4">
                  <div className="flex gap-2 items-center">
                    <SlCalender />
                    <p>{noticia.fecha}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <SlBubble/>
                    <p>{noticia.noticias_comentarios[0]?.count ?? 0}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-[#a27736] text-sm opacity-0 group-hover:opacity-100 transition duration-700 ml-auto flex items-center gap-2 group-hover:-translate-x-2 mt-8">
                <p>{t('verMas')}</p>
                <FaArrowRight className=""/>
              </div>
            </div>         
          </div>
        </Link>
      ))}
      </div>
    </main>
  );
}
