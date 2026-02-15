import { getConciertosFuturos, getConciertosPasados } from "@/lib/supabase/actions";

export default async function Conciertos() {
  const conciertosFuturos = await getConciertosFuturos();
  //console.log("futuros:")
  //console.log(conciertosFuturos)
  const conciertosPasados = await getConciertosPasados();
  //console.log("pasados:")
  //console.log(conciertosPasados)

  return (
    <div>
      <main>
        <h1 className="text-3xl font-semibold">
          Página de conciertos
        </h1>

        <div className="min-h-[100] my-10 flex items-center justify-center">
          <p>Espacio para calendario</p>
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
    </div>
  );
}