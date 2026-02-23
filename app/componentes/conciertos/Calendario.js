'use client'
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import { es, enGB, eu } from "react-day-picker/locale";
import "react-day-picker/style.css";

export default function Calendario() {

  // TODO:: Esto se lo pasaremos desde la otra pantalla
  const conciertos = ['2026-03-14', '2026-07-06']

  //const [selected, setSelected] = useState(conciertos.map(dia => new Date(dia)));
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
    <div className="bg-white text-black p-10 w-[800px] h-[520px] rounded-xl flex">
      {/*
      <div className="flex flex-col bg-yellow-200 p-2 gap-4">
        <button onClick={cambiar}>EUSKERA</button>
        <button onClick={cambiar2}>CASTELLANO</button>
        <button onClick={cambiar3}>INGLÉS</button>
      </div>
      */}
      
      <div className=" text-black p-10 flex flex-col w-full h-full bg-blue-200">

        <DayPicker
          locale={idioma} 
          className="bg-orange-200"
          classNames={{
            today: "bg-yellow-200",
            selected: "bg-amber-500 text-white rounded-xl"
          }}
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