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

      <div className="min-h-[100] my-10 flex items-center justify-center">
        <Calendario/>
      </div>

      <h2 className="text-2xl">Conciertos futuros</h2>
      {conciertosFuturos.map((concierto) => (
        <div key={concierto.id} className="bg-white text-black mt-4 min-h-20 rounded p-4">
          <p>{"ID del concierto: " + concierto.id}</p>
          <p>{"Fecha del concierto: " + concierto.fecha}</p>
        </div>
      ))}
      <h2 className="text-2xl mt-10">Conciertos pasados</h2>
      {conciertosPasados.map((concierto) => (
        <div key={concierto.id} className="bg-white text-black mt-4 min-h-20 rounded p-4">
          <p>{"ID del concierto: " + concierto.id}</p>
          <p>{"Fecha del concierto: " + concierto.fecha}</p>
        </div>
      ))}
      
    </main>

  );
}