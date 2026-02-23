//'use client'
import { getOpinionesProducto } from "@/lib/supabase/actions";
import NuevaOpinion from "@/app/componentes/productos/NuevaOpinion";
import ModificarOpinion from "@/app/componentes/productos/ModificarOpinion";
import ObjectCanvas from "@/app/componentes/productos/ObjectCanvas";
import { Modelo3D } from "@/app/componentes/productos/Modelo3D";

export default async function ProductoDetalle({ params }) {
  const { id } = await params;

  const opiniones = await getOpinionesProducto(id);
  console.log(`Opiniones del producto ${id}:`)
  console.log(opiniones)

  const producto = {
    id,
    nombre: `Producto ${id}`, 
    
  };


  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 p-5 min-h-150">


        <div className=" bg-white/90 rounded border border-black border-2">
        {/*
        <ObjectCanvas key="1">
            <Modelo3D id={producto.id}/>
          </ObjectCanvas>
        */}
          
        </div>
        
        <div className="bg-green-200 text-black p-8">
          <h1 className="mb-5">Nombre del producto - {producto.nombre}</h1>
          <p>Descripción del producto</p>
          <p></p>
        </div>
      </div>



      <div className="p-10">
        <h2 className="mb-4 font-serif text-2xl">Comparte tu opinión</h2>
        <NuevaOpinion productoId={id}/>
      </div>

      <div className="p-10">
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
                    <p className="text-sm text-white/75">fecha</p>
                  </div>
                  <ModificarOpinion opinionId={opinion.id}/>

                </div>
                {/* <p className="text-white">{opinion.titulo}</p> */}
                <p className="text-white/85">{opinion.opinion}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
