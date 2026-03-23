//'use client'
import { getOpinionesProducto, getProducto } from "@/lib/supabase/actions";
import NuevaOpinion from "@/app/componentes/productos/NuevaOpinion";
import ModificarOpinion from "@/app/componentes/productos/ModificarOpinion";
import ObjectCanvas from "@/app/componentes/productos/ObjectCanvas";
import { Modelo3D } from "@/app/componentes/productos/Modelo3D";
import Image from "next/image";
import { getUser } from "@/lib/auth/getUser";

export default async function ProductoDetalle({ params }) {
  const { id } = await params;

  const user = await getUser();
  //const user = null;
  //console.log("USER:")
  //console.log(user)


  const info = await getProducto(id);
  const opiniones = await getOpinionesProducto(id);

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0"); 
    const anio = date.getFullYear();

    return `${dia}-${mes}-${anio}`;
  }

  return (
    <main className="p-10">
      <p className="px-6 hover:underline cursor-pointer text-lg">{'<- Volver a la página de productos'}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 p-5 min-h-150 p-14">

        <div className="bg-white/90 rounded-lg border border-black border-2 flex justify-center">
        {/*
        <ObjectCanvas key="1">
            <Modelo3D id={producto.id}/>
          </ObjectCanvas>
        */}
        {info.imagen_portada &&
          <Image src={info.imagen_portada} alt={info.nombre_es} width={600} height={300} className="object-contain" />
        }
        
        </div>
        
        <div className="bg-white/0">
          <h1 className="mb-8 text-4xl font-bold text-white font-serif">{info.nombre_es}</h1>
          <p className="text-white text-2xl font-serif">{info.descripcion_es}</p>
          <p></p>
        </div>
      </div>



      <div className="p-6 mt-10">
        <h2 className="mb-4 font-serif text-2xl">Comparte tu opinión</h2>
        {!user ? 
          <p className="text-center text-lg">Debes iniciar sesión para poder compartir tu opinión</p>
        :
          <NuevaOpinion productoId={id}/>
        }
        
      </div>

      <div className="p-6">
        <h2 className="mb-4 font-serif text-2xl">Otras opiniones</h2>

        {opiniones.length===0 ? 
          <p>Todavía no hay opiniones de este producto</p>
        :
          opiniones.map((opinion) => (
            <div key={opinion.id} className="text-white w-full flex p-4 mb-5 bg-white/15 rounded-xl bg-green-300">
              <div className="bg-[#8b5504] rounded-full w-10 h-10"></div>
              <div className="px-4 w-full">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-4 items-center">
                    <p className="text-lg font-semibold">Nombre usuario</p>
                    <p className="text-sm text-white/75">{formatearFecha(opinion.created_at)}</p>
                  </div>

                  {(user && user.id===opinion.usuario_id) &&
                    <ModificarOpinion opinionId={opinion.id} opinion={opinion.opinion}/>
                  }
                </div>

                <p className="text-white/85">{opinion.opinion}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
