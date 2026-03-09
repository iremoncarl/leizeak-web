import Image from "next/image";

import { getLineaTemporal } from "@/lib/supabase/actions";

import imagenPrincipal from '../../../public/biografia_principal.jpg'


export default async function Biografia() {

  const fechasLineaTemporal = await getLineaTemporal();
  //console.log("fechasLineaTemporal: ", fechasLineaTemporal);
  /*
  const fechasLineaTemporal = [
    {fecha: "fecha 1", titulo:"título 1", descripcion: "descripción 1"},
    {fecha: "fecha 2", titulo:"título 2", descripcion: "descripción 2"},
    {fecha: "fecha 3", titulo:"título 3", descripcion: "descripción 3"},
    {fecha: "fecha 4", titulo:"título 4", descripcion: "descripción 4"},
    {fecha: "fecha 5", titulo:"título 5", descripcion: "descripción 5"}
  ]
  */


  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold mb-4">
        BIOGRAFÍA
      </h1>

      <div className="grid grid-cols-2 mb-20 gap-20 p-10">
        {/*
        <div className="bg-white/10 p-6 min-h-150">Imagen del grupo</div>
        */}
        <Image src={imagenPrincipal} alt="Foto de las componentes de Leizeak" className="rounded-md"/>
        
        {/* <div className="bg-white/10 p-6">Descripción sobre el grupo</div> */}
        <div>
          <h2 className="text-3xl text-[#a27736] font-serif">Esta es la historia de nuestro grupo</h2>
          {/*
          <p className="text-2xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor non tortor at porta. Donec mattis rhoncus velit, id hendrerit turpis tempus ut. Mauris tristique in tellus ut volutpat. Phasellus semper metus ut arcu efficitur hendrerit. Quisque sollicitudin a ex quis convallis. Nulla auctor vel nunc ut auctor. Curabitur dictum justo vel sem hendrerit, ac fringilla lorem eleifend. Morbi nisl diam, varius sit amet molestie quis, porta eget ante. In ex enim, eleifend sollicitudin consectetur nec, ornare sed nunc. Curabitur quis tortor at est gravida viverra.</p>
          <p className="text-2xl mt-4"> Etiam tempus condimentum auctor. Sed mattis nibh non ante vestibulum ultrices. Aenean ac ultrices magna. Mauris gravida id lectus ut hendrerit. Cras a odio eu dui varius placerat ac a tellus.sque pulvinar. Phasellus ac mattis erat, vel maximus ligula. Ut faucibus, dolor nec fermentum tempor, orci ligula ullamcorper orci, et tempus sem nisl et massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean magna massa, ullamcorper a vehicula egestas, dapibus a tellus.</p>
          */}
          <p className="text-2xl mt-4">Leizeak nació hace algunos años como un proyecto entre tres amigas: Siobhan, Irati e Irantzu, que tenían ganas de hacer ruido y contar historias propias.</p>
          <p className="text-2xl mt-4">Desde entonces hemos pasado por distintos cambios en la formación, probando sonidos, estilos y compartiendo escenario con diferentes personas que han dejado su huella en el camino.</p>
          <p className="text-2xl mt-4">Actualmente estamos consolidadas como un trío formado por guitarra, bajo y batería. Así es como sentimos que hemos encontrado una identidad más clara y directa. </p>
          <p className="text-2xl mt-4">A través de nuestras canciones intentamos contar un poco de lo que somos y de lo que vivimos y cada concierto es para nosotras una oportunidad de compartir momentos únicos y disfrutar junto a vosotros.</p>
          <p className="text-2xl mt-4">Esperamos que vosotros también podaís disfrutar este proyecto y sentirlo vuestro.</p>
        </div>
      </div>

      <div className="mb-70">
        
      </div>

      <div className="flex justify-center">
      <ol className="relative max-w-[50%]">      
        <div className="absolute left-1/2 h-full w-0.5 bg-white -translate-x-1/2"></div>            
        {fechasLineaTemporal.map((fecha, index) => (
          <li key={index} className={`relative w-1/2 mb-10 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
            <div className={`absolute w-5 h-5 border bg-black rounded-full z-10 top-2 ${index % 2 === 0 ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}></div>
            <p className="text-lg font-serif">{fecha.fecha_es}</p>
            <h3 className="text-2xl font-semibold font-serif my-2 text-[#a27736]">{fecha.titulo_es}</h3>
            <p className="text-xl">{fecha.descripcion_es}</p>
          </li>
        ))}

      </ol>
     </div>
    </main>
  );
}