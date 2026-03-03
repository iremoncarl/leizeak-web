'use client'
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import { es, enGB, eu } from "react-day-picker/locale";
import "react-day-picker/style.css";

export default function Calendario() {

  // TODO:: Esto se lo pasaremos desde la otra pantalla
  const conciertos = ['2026-03-14', '2026-07-06']

  const selected = conciertos.map(dia => new Date(dia));


  const [idioma, setIdioma] = useState(es);

  const cambiar = () => {
    setIdioma(eu);
  }
  const cambiar2 = () => {
    setIdioma(es);
  }
  const cambiar3 = () => {
    setIdioma(enGB);
  }

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
      {/*
      <div className="flex flex-col bg-yellow-200 p-2 gap-4">
        <button onClick={cambiar}>EUSKERA</button>
        <button onClick={cambiar2}>CASTELLANO</button>
        <button onClick={cambiar3}>INGLÉS</button>
      </div>
      */}
      
      <div className="flex flex-col w-full h-full">
        <p className="mb-4 font-serif">CALENDARIO</p>
        <DayPicker
          locale={idioma} 
          className="bg-black w-full rounded-lg p-2"
          classNames={{
            months: "w-full",
            month_grid: "w-full",
            //cell: "bg-yellow-200 text-center items-center justify-center",
            //day: "bg-yellow-200 text-center items-center justify-center",
            today: "bg-blue-700 rounded-full",
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