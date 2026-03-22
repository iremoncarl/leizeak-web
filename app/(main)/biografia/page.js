import Image from "next/image";

import { getLineaTemporal } from "@/lib/supabase/actions";

import imagenPrincipal from '../../../public/biografia_principal.jpg'


export default async function Biografia() {

  const fechasLineaTemporal = await getLineaTemporal();

  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold mb-4">
        BIOGRAFÍA
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 mb-20 gap-20 p-2 lg:p-10">

        <Image src={imagenPrincipal} alt="Foto de las componentes de Leizeak" className="rounded-md"/>
        
        <div>
          <h2 className="text-xl xl:text-3xl text-[#a27736] font-serif">Esta es la historia de nuestro grupo</h2>
          <p className="text-md xl:text-2xl mt-4">Leizeak nació hace algunos años como un proyecto entre tres amigas: Siobhan, Irati e Irantzu, que tenían ganas de hacer ruido y contar historias propias.</p>
          <p className="text-md xl:text-2xl mt-4">Desde entonces hemos pasado por distintos cambios en la formación, probando sonidos, estilos y compartiendo escenario con diferentes personas que han dejado su huella en el camino.</p>
          <p className="text-md xl:text-2xl mt-4">Actualmente estamos consolidadas como un trío formado por guitarra, bajo y batería. Así es como sentimos que hemos encontrado una identidad más clara y directa. </p>
          <p className="text-md xl:text-2xl mt-4">A través de nuestras canciones intentamos contar un poco de lo que somos y de lo que vivimos y cada concierto es para nosotras una oportunidad de compartir momentos únicos y disfrutar junto a vosotros.</p>
          <p className="text-md xl:text-2xl mt-4">Esperamos que vosotros también podaís disfrutar este proyecto y sentirlo vuestro.</p>
        </div>
      </div>

      <div className="mb-70">
        
      </div>

      <div className="flex justify-center">
      <ol className="relative max-w-[100%] xl:max-w-[50%]">      
        <div className="absolute left-1/2 h-full w-0.5 bg-white -translate-x-1/2"></div>            
        {fechasLineaTemporal.map((fecha, index) => (
          <li key={index} className={`relative w-1/2 mb-10 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
            <div className={`absolute w-5 h-5 border bg-black rounded-full z-10 top-2 ${index % 2 === 0 ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}></div>
            <p className="text-sm lg:text-lg font-serif">{fecha.fecha_es}</p>
            <h3 className="text-md lg:text-2xl font-semibold font-serif my-2 text-[#a27736]">{fecha.titulo_es}</h3>
            <p className="text-sm lg:text-xl">{fecha.descripcion_es}</p>
          </li>
        ))}

      </ol>
     </div>
    </main>
  );
}