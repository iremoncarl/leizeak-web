import Producto from "@/app/componentes/productos/producto";

export default function Productos() {

  //const productos = ['Camiseta 1', 'Púa', 'Disco', 'Camiseta 2'];
  const productos = [
    { id: 1, nombre: "Camiseta 1", imagen: "/productos_pruebas/cami_negra.png" },
    { id: 2, nombre: "Púa", imagen: "/productos_pruebas/pua.png" },
    { id: 3, nombre: "Disco", imagen: "/productos_pruebas/disco.png" },
    { id: 4, nombre: "Camiseta 2", imagen: "/productos_pruebas/cami_blanca.png" }
  ];

  return (
    <div>
      <main>
        <h1 className="text-3xl font-semibold">
          Página de productos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-10">
          {productos.map(producto => (
            <Producto key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} />
          ))}
        </div>

      </main>
    </div>
  );
}