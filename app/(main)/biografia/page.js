import Image from "next/image";

import imagenPrincipal from '../../../public/biografia_principal.jpg'





export default function Biografia() {

  const fechasLineaTemporal = [
    {fecha: "fecha 1", titulo:"título 1", descripcion: "descripción 1"},
    {fecha: "fecha 2", titulo:"título 2", descripcion: "descripción 2"},
    {fecha: "fecha 3", titulo:"título 3", descripcion: "descripción 3"},
    {fecha: "fecha 4", titulo:"título 4", descripcion: "descripción 4"},
    {fecha: "fecha 5", titulo:"título 5", descripcion: "descripción 5"}
  ]



  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold">
        BIOGRAFÍA
      </h1>
      <h2 className="mt-4 text-xl text-[#a27736] mb-10">Esta es la historia de nuestro grupo</h2>


      <div className="grid grid-cols-2 mb-20 gap-10">
        <Image src={imagenPrincipal} alt="Foto de las componentes de Leizeak" className="rounded-md"/>
        <div className="bg-white/10">texto</div>
      </div>

      <div className="mb-20">
        fotos
      </div>


      <ol className="relative">      
        <div className="absolute left-1/2 h-full w-0.5 bg-white -translate-x-1/2"></div>            
        {fechasLineaTemporal.map((fecha, index) => (
          <li key={index} className={`relative w-1/2 mb-10 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"}`}>
            <div className={`absolute w-5 h-5 border bg-black rounded-full z-10 top-2 ${index % 2 === 0 ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}></div>
            <p className="text-sm">{fecha.fecha}</p>
            <h3 className="text-lg font-semibold my-2 text-[#a27736]">{fecha.titulo}</h3>
            <p>{fecha.descripcion}</p>
          </li>
        ))}

      </ol>
     
    </main>
  );
}