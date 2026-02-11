import Producto from "@/app/componentes/productos/producto";

export default function Productos() {

  //const productos = ['Camiseta 1', 'Púa', 'Disco', 'Camiseta 2'];
  const productos = [
    { id: 1, nombre: "Camiseta 1", imagen: "/pua.png" },
    { id: 2, nombre: "Púa", imagen: "/pua.png" },
    { id: 3, nombre: "Disco", imagen: "/pua.png" },
    { id: 4, nombre: "Camiseta 2", imagen: "/pua.png" }
  ];

  return (
    <div>
      <main>
        <h1 className="text-3xl font-semibold">
          Página de productos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
          {productos.map(producto => (
            <Producto key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} />
          ))}
        </div>

      </main>
    </div>
  );
}