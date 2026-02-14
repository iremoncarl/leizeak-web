import { getConciertosFuturos, getConciertosPasados } from "@/lib/supabase/actions";

export default async function Conciertos() {
  const conciertosFuturos = await getConciertosFuturos();
  console.log("futuros:")
  console.log(conciertosFuturos)
  const conciertosPasados = await getConciertosPasados();
  console.log("pasados:")
  console.log(conciertosPasados)

  /*
  const prueba = await supabase
  .from("conciertos")
  .insert([{ fecha: "2026-03-15" }]);
 
  console.log("Respuesta:", prueba);
  */

  return (
    <div>
      <main>
        <h1 className="text-3xl font-semibold">
          Página de conciertos
        </h1>
        <h2>Conciertos futuros</h2>
        {conciertosFuturos.map((concierto) => (
          <p key={concierto.id} className="text-white">{concierto.id + " - " + concierto.lugar}</p>
        ))}
        <h2>Conciertos pasados</h2>
        {conciertosPasados.map((concierto) => (
          <p key={concierto.id} className="text-white">{concierto.id + " - " + concierto.lugar}</p>
        ))}
       
      </main>
    </div>
  );
}