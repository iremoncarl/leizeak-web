//"use client"
import Image from "next/image";
//import { useState } from "react";

import { getNoticias } from "@/lib/supabase/actions";

export default async function Noticias() {
  //const [abiertas, setAbiertas] = useState([]);
  const noticias = await getNoticias();
  //console.log("Noticias: ", noticias);
  /*
  const noticias = [
    {id: 1, titulo: 'titulo1', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem hendrerit, ac fringilla lorem eleifend. Morbi nisl diam, varius sit amet molestie quis, porta eget ante. In ex enim, eleifend sollicitudin consectetur nec, ornare sed nunc. Curabitur quis tortor at est gravida viverra. Etiam tempus condimentum auctor. Sed mattis nibh non ante vestibulum ultrices. Aenean ac ultrices magna. Mauris gravida id lectus ut hendrerit. Cras a odio eu dui varius placerat ac a tellus. '},
    {id: 2, titulo: 'titulo2', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem'},
    {id: 3, titulo: 'titulo3', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem'},
    {id: 4, titulo: 'titulo4', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem hendrerit, ac fringilla lorem eleifend. Morbi nisl diam, varius sit amet molestie quis, porta eget ante. In ex enim, eleifend sollicitudin consectetur nec, ornare sed nunc. Curabitur quis tortor at est gravida viverra. Etiam tempus condimentum auctor. Sed mattis nibh non ante vestibulum ultrices. Aenean ac ultrices magna. Mauris gravida id lectus ut hendrerit. Cras a odio eu dui varius placerat ac a tellus.sque pulvinar. Phasellus ac mattis erat, vel maximus ligula. Ut faucibus, dolor nec fermentum tempor, orci ligula ullamcorper orci, et tempus sem nisl et massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean magna massa, ullamcorper a vehicula egestas, dapibus a tellus. Duis vulputate maximus nibh sed sollicitudin. Morbi imperdiet imperdiet purus varius sagittis. Etiam sit amet molestie tortor, sodales hendrerit diam. Vestibulum et cursus massa. Donec at lacinia tellus. Donec vel lectus interdum, laoreet nulla sit amet, ultricies sapien. Aliquam placerat augue a nisl elementum, nec vulputate orci pulvinar. Aliquam finibus augue sit amet auctor mollis.Ut lobortis pulvinar venenatis. Etiam quis mi id urna accumsan condimentum. Nulla nec mollis eros. Donec auctor eros sagittis elit mollis malesuada. Nam eleifend lacus et tincidunt pretium. Aliquam sit amet neque ac felis commodo mollis sed in tellus. Pellentesque maximus vehicula arcu et egestas. Phasellus nec sem vel est blandit aliquet. Maecenas efficitur sem ex, in placerat lacus sollicitudin a. Quisque vel leo rutrum, cursus diam malesuada, tincidunt quam. Donec finibus ipsum sit amet ligula tincidunt pellentesque. Nulla euismod porta lacinia. '},
    {id: 5, titulo: 'titulo5', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem hendrerit, ac fringilla lorem eleifend. Morbi nisl diam, varius sit amet molestie quis, porta eget ante. In ex enim, eleifend sollicitudin consectetur nec, ornare sed nunc. Curabitur quis tortor at est gravida viverra. Etiam tempus condimentum auctor. Sed mattis nibh non ante vestibulum ultrices. Aenean ac ultrices magna. Mauris gravida id lectus ut hendrerit. Cras a odio eu dui varius placerat ac a tellus.'}
  ]
  */
  
/*
  const expandir = (id) => {
    console.log(id);
    if (abiertas.includes(id)) {
      setAbiertas((abiertas) => abiertas.filter((item) => item !== id));
    }
    else {
      setAbiertas((abiertas) => [...abiertas, id]);
    }
  }
*/

  return (
    
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
            <button className="bg-black p-2 px-4 rounded-lg mt-8" onClick={()=>expandir(noticia.id)}>{expandida ? "Ver menos" : "Ver más"}</button> */}
            
          </div>
        )
      })}
      </div>
    </main>
  );
}