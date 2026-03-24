import {getTranslations} from 'next-intl/server';

import Producto from "@/app/componentes/productos/producto";
import { getProductos } from "@/lib/supabase/actions";

export default async function Productos() {
  const t = await getTranslations('PagProductos');

  const productos = await getProductos();
  //console.log("Productos: ", productos)

  return (
    <main className="p-10 flex-1">
      <h1 className="font-serif text-4xl font-semibold mb-4">{t('titulo')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-10">
        {productos.map(producto => (
          <Producto key={producto.id} id={producto.id} nombre={producto.nombre_es} imagen={producto.imagen_portada} noImgTexto={t('noImg')}/>
        ))}
      </div>

    </main>
  );
}