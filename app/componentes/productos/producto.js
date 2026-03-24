import Link from "next/link";
import Image from "next/image";


export default function Producto({id, nombre, imagen, noImgTexto}) {

  return (
    <Link href={`/productos/${id}`} className="group bg-black border border-white/50 rounded-xl cursor-pointer overflow-hidden min-h-96 hover:border-white transition duration-700">
        
      {imagen ? 
        <div className="bg-white/20 min-h-4/5 relative overflow-hidden">
          <Image src={imagen} alt={nombre} fill className="object-cover group-hover:scale-110 transition duration-700" />
        </div>
      :
        <div className="flex items-center justify-center min-h-4/5">
          <p className="text-sm opacity-70">{noImgTexto}</p>
        </div>
      }
      <div className="bg-white/90 min-h-1/5 p-4">
        <p className="text-gray-800 group-hover:text-black text-lg">{nombre}</p>
      </div>    
    </Link>
  )
}