import Image from "next/image";
import { getConciertosFuturos, getConciertosPasados, getCartel } from "@/lib/supabase/actions";
import Calendario from "@/app/componentes/conciertos/Calendario";
import Concierto from "@/app/componentes/conciertos/Concierto";

export default async function Conciertos() {
  const conciertosFuturos = await getConciertosFuturos();
  //console.log("futuros:")
  //console.log(conciertosFuturos)
  const conciertosPasados = await getConciertosPasados();
  //console.log("pasados:")
  //console.log(conciertosPasados)

  const conciertosFuturosConCartel = conciertosFuturos.map((concierto) => ({...concierto, cartelUrl: getCartel(concierto.cartel)}));
  //conciertosFuturosConCartel.forEach(conciertoo => {console.log(conciertoo)});
  const conciertosPasadosConCartel = conciertosPasados.map((concierto) => ({...concierto, cartelUrl: getCartel(concierto.cartel)}));


  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold">
        CONCIERTOS
      </h1>


      <div className="grid grid-cols-4 gap-10">
        <div className="justify-center">
          <div className="sticky top-20 py-10 px-2">
            <Calendario conciertosFuturos={conciertosFuturos} conciertosPasados={conciertosPasados}/>
          </div>
        </div>
        <div className="p-10 col-span-3">
          <h2 className="text-2xl font-serif">Conciertos futuros</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosFuturos.length===0 ? 
            <p className="mb-28 text-center">No hay información sobre próximos conciertos</p>
          :
            conciertosFuturosConCartel.map((concierto) => (    
              <Concierto key={concierto.id} fecha={concierto.fecha} lugar={concierto.lugar} hora={concierto.hora} cartel={concierto.cartelUrl}/> 
            ))
          }
          <h2 className="text-2xl mt-10 font-serif">Conciertos pasados</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosPasados.length===0 ? 
            <p className="text-center">No hay información sobre conciertos pasados</p>
          :
            conciertosPasadosConCartel.map((concierto) => (
              <Concierto key={concierto.id} fecha={concierto.fecha} lugar={concierto.lugar} hora={concierto.hora} cartel={concierto.cartelUrl}/>     
            ))
          }
        </div>
      </div>
      
    </main>

  );
} 