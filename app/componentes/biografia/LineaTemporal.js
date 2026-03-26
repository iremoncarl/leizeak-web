'use client'

import { useState } from "react";

export default function LineaTemporal({fechasLineaTemporal, locale}) {

  const [abierto, setAbierto] = useState(null)

  return (
    <div className="flex justify-center">
      <ol className="relative w-[100%] xl:max-w-[50%]">      
        <div className="absolute left-1/2 h-full w-0.5 bg-white -translate-x-1/2"></div>            
        {fechasLineaTemporal.map((fecha, index) => (
          <li key={index} className={`relative w-1/2 mb-10 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
            <div className={`absolute w-5 h-5 border bg-black rounded-full z-10 top-2 ${index % 2 === 0 ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}></div>
            <p className="text-sm lg:text-lg font-serif">{fecha[`fecha_${locale}`]}</p>
            <h3 className="text-md lg:text-2xl font-semibold font-serif my-2 text-[#a27736]">{fecha[`titulo_${locale}`]}</h3>
            <p className={`text-sm lg:text-xl ${abierto === index ? "block" : "hidden"} md:block`}> 
              {fecha[`descripcion_${locale}`]}
            </p>

            <button className="text-sm md:hidden underline" onClick={() => setAbierto(abierto === index ? null : index)}>
              {abierto === index ? "Ver menos" : "Ver más"}
            </button>

          </li>
        ))}
      </ol>
    </div>
  )
}