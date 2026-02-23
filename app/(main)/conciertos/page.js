import { getConciertosFuturos, getConciertosPasados } from "@/lib/supabase/actions";
import Calendario from "@/app/componentes/conciertos/Calendario";

export default async function Conciertos() {
  const conciertosFuturos = await getConciertosFuturos();
  //console.log("futuros:")
  //console.log(conciertosFuturos)
  const conciertosPasados = await getConciertosPasados();
  //console.log("pasados:")
  //console.log(conciertosPasados)

  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold">
        CONCIERTOS
      </h1>

      <div className="grid grid-cols-4 gap-10">
        <div className="justify-center">
          <div className="sticky top-20 py-10 px-2">
            <Calendario />
          </div>
        </div>
        <div className="p-10 col-span-3">
          <h2 className="text-2xl font-serif">Conciertos futuros</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosFuturos.length===0 ? 
            <p className="mb-28 text-center">No hay información sobre próximos conciertos</p>
          :
            conciertosFuturos.map((concierto) => (
              <div key={concierto.id} className="bg-white text-black mt-4 min-h-20 rounded p-4">
                <p>{"ID del concierto: " + concierto.id}</p>
                <p>{"Fecha del concierto: " + concierto.fecha}</p>
              </div>
            ))
          }
          <h2 className="text-2xl mt-10 font-serif">Conciertos pasados</h2>
          <div className="border-t border-white/70 mb-8"></div>
          {conciertosPasados.length===0 ? 
            <p className="text-center">No hay información sobre conciertos pasados</p>
          :
            conciertosPasados.map((concierto) => (
              <div key={concierto.id} className="bg-white text-black mt-4 min-h-20 rounded p-4">
                <p>{"ID del concierto: " + concierto.id}</p>
                <p>{"Fecha del concierto: " + concierto.fecha}</p>
              </div>
            ))
          }
        </div>
      </div>
      
    </main>

  );
}