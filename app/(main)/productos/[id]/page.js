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
  //console.log(`productoInfo:`, info)

  const opiniones = await getOpinionesProducto(id);
  //console.log(`Opiniones del producto ${id}:`)
  //console.log(opiniones)

/*
  const nombre = (id==='1') ? "CAMISETA NEGRA DIBUJO" : 
                  (id==='2') ? "PÚA GUITARRA" :
                  (id==='3') ? "DISCO - EZ DA SOINURIK" : "CAMISETA BLANCA LOGO";
  const descripcion = (id==='1') ? "Nuestra camiseta negra es un básico que nunca falla. Sencilla, cómoda y con nuestro diseño en el centro. Es suave, fácil de combinar y perfecta tanto para venir a un concierto como para llevarla en tu día a día" : 
                  (id==='2') ? "Esta es nuestra púa, con nuestro logo grabado en blanco. Es ligera, cómoda y perfecta para que te acompañe mientras tocas tu instrumento o para decorar tu casa. Un pequeño detalle, pero muy nuestro." :
                  (id==='3') ? "‘Ez da soinurik’ es nuestro primer disco y uno de los proyectos más importantes que hemos creado juntas. Está formado por once temas que cuentan quiénes somos, de dónde venimos y todo lo que hemos vivido en este camino." : "Esta vez queriamos hacer algo diferente: una camiseta con un diseño más simple pero sin perder nuestra identidad. Con las mangas negras y nuestro logo en la parte izquierda, que le da un toque elegante para que vistas chulísimo en cualquier situación.";
  const imagen = (id==='1') ? "/productos_pruebas/cami_negra.png" : 
                  (id==='2') ? "/productos_pruebas/pua_2.jpg" : 
                  (id==='3') ? "/productos_pruebas/disco_2.jpg" : "/productos_pruebas/cami_blanca.png";
  */

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
