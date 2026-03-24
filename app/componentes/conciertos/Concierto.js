'use client'
import Image from "next/image";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function Concierto({fecha, lugar, hora, cartel}) {

  const [cartelAbierto, setCartelAbierto] = useState(false);

  return (
    <div className="bg-gray-200/20 border rounded-lg grid grid-cols-10 mb-8 hover:border-[#8b5504] duration-300 hover:cursor-pointer group">
      <div className="col-span-5 lg:col-span-2 rounded-l-lg">
        {cartel ? 
          <Image 
            width={0}
            height={0}
            src={cartel}
            alt={`Cartel del concierto del día ${fecha}`}
            sizes="100vw"
            className="w-full h-full rounded-l-lg cursor-pointer"
            onClick={() => setCartelAbierto(true)}
          />
        :
          <div className="p-8 flex flex-col items-center bg-white/20">
            <FiAlertCircle className="text-gray-200 text-6xl mb-8"/>
            <p className="text-center text-md lg:text-2xl">Cartel próximamente</p>
          </div>
        }
        
      </div>
      
      <div className="p-8 gap-2 col-span-5 lg:col-span-8">
        <p className="mb-4 font-bold text-lg lg:text-xl group-hover:text-[#a27736] duration-300">{fecha}</p>
        <p className="text-md lg:text-lg">{lugar}</p>
        { hora &&
          <p className="mt-4">{hora}</p>
        }
        {cartel && 
          <button className="block lg:hidden border p-4 mt-2 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer text-sm" onClick={() => setCartelAbierto(true)}>
          Ver cartel 
          </button>
        }
        
      </div>

    


      {cartelAbierto && 
        <div  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setCartelAbierto(false)} >
          <div className="bg-white h-[90vh] rounded-lg border">
            <Image
            src={cartel}
            alt={`Cartel del concierto del día ${fecha}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[88vh] w-auto rounded-lg m-2"
            />
          </div>
        </div>
      }
    </div>
  )
}