import Link from "next/link";

import NoticiaDetalles from "@/app/componentes/noticias/NoticiaDetalles";

import { getNoticias } from "@/lib/supabase/actions";

export default async function Noticia({ params }) {
  
  const { id } = await params;
  const noticias = await getNoticias();
  const noticia = noticias.find((n) => n.id === Number(id));
  /*
  const noticia = {id: 1, titulo_es: 'titulo1', noticia_es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem hendrerit, ac fringilla lorem eleifend. Morbi nisl diam, varius sit amet molestie quis, porta eget ante. In ex enim, eleifend sollicitudin consectetur nec, ornare sed nunc. Curabitur quis tortor at est gravida viverra. Etiam tempus condimentum auctor. Sed mattis nibh non ante vestibulum ultrices. Aenean ac ultrices magna. Mauris gravida id lectus ut hendrerit. Cras a odio eu dui varius placerat ac a tellus. ', imagen: "/productos_pruebas/cami_negra.png"};
   */
  const comentarios = [{id: 1, a: "a"}, {id: 2, a: "a"}];
  return (
    <main className="p-10 flex flex-1 flex-col">
      <Link href={`/noticias`} className="px-6 hover:underline cursor-pointer text-lg">{'<- Volver a la página de noticias'}</Link>

      {!noticia ? 
        <h1 className="text-xl font-semibold mt-16 self-center">No se ha encontrado más información</h1>
      :
        <>
          <NoticiaDetalles noticia={noticia}/>

          {/* Sección de comentarios */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold my-6">Comentarios</h2>
          {comentarios.length===0 ? 
            <p>Todavía no hay comentarios de esta noticia</p>
          :
            comentarios.map((comentario) => (
              <div key={comentario.id} className="text-white w-full flex p-4 mb-5 bg-white/15 rounded-xl bg-green-300">
                <p className="text-white/85">comentario</p>
              </div>
            ))
          }
        </>
      }
    </main>
  );    
}