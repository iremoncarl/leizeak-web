import Producto from "@/app/componentes/productos/producto";

export default function Productos() {

  //const productos = ['Camiseta 1', 'Púa', 'Disco', 'Camiseta 2'];
  const productos = [
    { id: 1, nombre: "CAMISETA NEGRA DIBUJO", imagen: "/productos_pruebas/cami_negra.png" },
    { id: 2, nombre: "PÚA GUITARRA", imagen: "/productos_pruebas/pua_2.jpg" },
    { id: 3, nombre: "DISCO - EZ DA SOINURIK", imagen: "/productos_pruebas/disco_2.jpg" },
    { id: 4, nombre: "CAMISETA BLANCA LOGO", imagen: "/productos_pruebas/cami_blanca.png" }
  ];

  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold mb-4">
        PRODUCTOS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-10">
        {productos.map(producto => (
          <Producto key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} />
        ))}
      </div>

    </main>
  );
}