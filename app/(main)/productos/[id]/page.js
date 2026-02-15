import { getOpinionesProducto } from "@/lib/supabase/actions";
import NuevaOpinion from "@/app/componentes/productos/NuevaOpinion";
import ModificarOpinion from "@/app/componentes/productos/ModificarOpinion";

export default async function ProductoDetalle({ params }) {
  const { id } = await params;

  const opiniones = await getOpinionesProducto(id);
  console.log(`Opiniones del producto ${id}:`)
  console.log(opiniones)

  const producto = {
    id,
    nombre: `Producto ${id}`
  };


  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 p-5 min-h-150">
        <div className="bg-yellow-100 p-10">
          <p className="text-black">Imágen del produto</p>
        </div>
        <div className="bg-green-200 text-black p-10">
          <h1 className="mb-5">Nombre del producto - {producto.nombre}</h1>
          <p>Descripción del producto</p>
          <p></p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl mb-4">Opiniones</h2>

        {opiniones.length===0 ? 
          <p>Todavía no hay opiniones de este producto</p>
        :
          opiniones.map((opinion) => (
            <div key={opinion.id} className="bg-white min-h-30 text-black p-4 rounded-lg mb-5">
              <div className="flex justify-between items-center">
                <p>{opinion.titulo}</p>
                < ModificarOpinion opinionId={opinion.id} />
              </div>
              <p>{opinion.opinion}</p>
            </div>
          ))
        }
      </div>


      <NuevaOpinion productoId={id}/>
      

    </main>
  );
}
