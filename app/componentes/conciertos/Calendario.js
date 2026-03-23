'use client'

import { DayPicker } from "react-day-picker";
import { es, enGB, eu } from "react-day-picker/locale";
import "react-day-picker/style.css";

export default function Calendario({conciertosFuturos, conciertosPasados, idioma}) {
  const idiomaCalendario = idioma==="en" ? enGB : idioma==="eu" ? eu : es;

  const conciertos = []
  conciertosFuturos.forEach(concierto => {
    //console.log(concierto.fecha)
    conciertos.push(concierto.fecha);
  });
  conciertosPasados.forEach(concierto => {
    //console.log(concierto.fecha)
    conciertos.push(concierto.fecha);
  });

  const selected = conciertos.map(dia => new Date(dia));



  const formatearFecha= (fecha) => {
    console.log("Formatear fecha: ")
    console.log(fecha)
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, "0");
    const day = String(fecha.getDate()).padStart(2, "0");
    console.log(`${year}-${month}-${day}`)
  };


  return (
    <div className="bg-gray-200/20 border p-8 rounded-lg flex">

      <div className="flex flex-col w-full h-full">
        <p className="mb-4 font-serif">CALENDARIO</p>
        <DayPicker
          locale={idiomaCalendario} 
          className="bg-black w-full rounded-lg p-2"
          classNames={{
            months: "w-full",
            month_grid: "w-full",
            //cell: "bg-yellow-200 text-center items-center justify-center",
            //day: "bg-yellow-200 text-center items-center justify-center",
            today: "bg-white/90 text-black rounded-full",
            selected: "bg-[#8b5504] rounded-xl",
          }}
          navLayout="around"
          onDayClick={(day)=>formatearFecha(day)}
          animate
          mode="multiple"
          required 
          selected={selected} 
          onSelect={() => null}
          //footer={ selected ? `Selected: ${selected[0]}` : "Pick a day." }
        />
      </div>
    </div>
  )
}