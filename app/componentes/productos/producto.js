import Link from "next/link";
import Image from "next/image";


export default function Producto({id, nombre, imagen}) {

  return (
    <Link href={`/pages/productos/${id}`} className="group bg-pink-200 border border-blue-200 rounded-xl cursor-pointer overflow-hidden min-h-96 hover:border-green-400">
        <div className="bg-yellow-200 min-h-3/4 relative overflow-hidden">
            <Image src={imagen} alt={nombre} fill className="object-cover group-hover:scale-105" />
        </div>
        <div className="bg-green-200 min-h-1/4 p-4">
            <p className="text-gray-800 font-medium group-hover:text-red-800 ">{nombre}</p>
        </div>    
    </Link>
  )
}