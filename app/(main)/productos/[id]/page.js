export default async function ProductoDetalle({ params }) {
  const { id } = await params;

  const producto = {
    id,
    nombre: `Producto ${id}`
  };

  return (
    <main>
      <h1>Nombre del producto - {producto.nombre}</h1>
      <p>Descripción del producto</p>
    </main>
  );
}
