import Image from "next/image";
import Link from "next/link";
import { getNoticias } from "@/lib/supabase/actions";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender, SlBubble} from "react-icons/sl";

export default async function Noticias() {
  const noticias = await getNoticias();
  //console.log("Noticias: ", noticias);
  //const noticias_comentarios = await getComentarios();
  //console.log("Comentarios noticias: ", noticias_comentarios);

  return (
    <main className="p-10 flex flex-col flex-1 ">
      <h1 className="font-serif text-4xl font-semibold mb-14">
        NOTICIAS
      </h1>

      <div className="px-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
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
                <p className="text-lg group-hover:text-[#a27736] transition-all duration-500">{noticia.titulo_es}</p>
                <p className="text-white/80 text-sm line-clamp-3 my-4">{noticia.noticia_es}</p>
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
                <p>Ver más</p>
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


/*
<main className="p-10">
      <h1 className="font-serif text-4xl font-semibold mb-14">
        NOTICIAS
      </h1>

      <div className="px-10">
      {noticias.map((noticia) => {
        //const expandida = abiertas.includes(noticia.id);
        return (
          <div key={noticia.id} className={`bg-white/30 mb-10 p-6 rounded-lg grid grid-cols-2`}>
            <div className={` ${!noticia.imagen && "col-span-2"}`}>
              <h2 className="text-2xl mb-4">{noticia.titulo_es}</h2>
              <p className="whitespace-pre-line leading-relaxed">{noticia.noticia_es}</p>
            </div>
            {noticia.imagen && 
            <div>
              <Image
              src={noticia.imagen}
              alt={'Imagen descriptiva de la noticia'}
              width={0}
              height={0}
              sizes="100vw"
              className="px-20 w-full max-h-120 object-contain rounded-lg m-2"
              />
            </div>
            }
            
            {/* 
            <div className={`overflow-hidden ${expandida ? "max-h-[1000px]" : "max-h-24"}`}>
              <p>{noticia.noticia_es}</p>
            </div>
            <button className="bg-black p-2 px-4 rounded-lg mt-8" onClick={()=>expandir(noticia.id)}>{expandida ? "Ver menos" : "Ver más"}</button> 
            
          </div>
        )
      })}
      </div>
    </main>
*/