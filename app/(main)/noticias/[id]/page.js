import Link from "next/link";

import NoticiaDetalles from "@/app/componentes/noticias/NoticiaDetalles";
import NuevoComentario from "@/app/componentes/noticias/NuevoComentario";
import ModificarComentario from "@/app/componentes/noticias/ModificarComentario";

import { getNoticias, getComentariosNoticia } from "@/lib/supabase/actions";
import { getUser } from "@/lib/auth/getUser";

export default async function Noticia({ params }) {
  
  const { id } = await params;
  const user = await getUser();

  const noticias = await getNoticias();
  const noticia = noticias.find((n) => n.id === Number(id));

  const comentarios = await getComentariosNoticia(id);
  //console.log("Comentarios noticias: ", comentarios);

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0"); 
    const anio = date.getFullYear();

    return `${dia}-${mes}-${anio}`;
  }

  return (
    <main className="p-10 flex flex-1 flex-col">
      <Link href={`/noticias`} className="px-6 hover:underline cursor-pointer text-lg">{'<- Volver a la página de noticias'}</Link>

      {!noticia ? 
        <h1 className="text-xl font-semibold mt-16 self-center">No se ha encontrado más información</h1>
      :
        <>
          <NoticiaDetalles noticia={noticia}/>


          {/* Sección de comentarios */}
          <div className="p-6 mt-10">
            <h2 className="mb-4 font-serif text-2xl">Deja aquí tu comentario</h2>
            {!user ? 
              <p className="text-center text-lg">Debes iniciar sesión para poder comentar</p>
            :
              <NuevoComentario noticiaId={id}/>
            }
          </div>
          <div className="p-6">
            <h2 className="mb-4 font-serif text-2xl">Otros comentarios</h2>

            
            {comentarios.length===0 ? 
              <p>Todavía no hay comentarios sobre esta noticia</p>
            :
              comentarios.map((comentario) => (
                <div key={comentario.id} className="text-white w-full flex p-4 mb-5 bg-white/15 rounded-xl bg-green-300">
                  <div className="px-4 w-full">
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-4 items-center">
                        <p className="text-lg font-semibold">Nombre usuario</p>
                        <p className="text-sm text-white/75">{formatearFecha(comentario.created_at)}</p>
                      </div>

                      {(user && user.id===comentario.usuario_id) &&
                        <ModificarComentario comentarioId={comentario.id} comentario={comentario.comentario}/>
                      }
                    </div>

                    <p className="text-white/85">{comentario.comentario}</p>
                  </div>
                </div>
              ))
            }
          </div>          
        </>
      }
    </main>
  );    
}