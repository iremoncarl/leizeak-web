"use client";
import Link from "next/link";

export default function Registro() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };



  return (
    <div className="bg-yellow-500 flex flex-1 justify-center items-center">
      <div className="w-[40vw] h-[70vh]">
        <form className="bg-white rounded-3xl p-16 h-full flex flex-col justify-between" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
              Correo electrónico
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="correo" type="text" placeholder="Escriba su correo electrónico"/>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
              Nombre de usuario
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="usuario" type="text" placeholder="Escriba su nombre de usuario"/>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwd">
              Contraseña
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="passwd" type="password" placeholder="Escriba su contraseña"/>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwd">
              Verificar contraseña
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="passwd" type="password" placeholder="Repita su contraseña"/>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Registrarse
          </button>

          <Link href="/login" className="hover:text-blue-600 text-black">Si ya tienes una cuenta, puedes iniciar sesión aquí</Link>

          <Link href="/" className="hover:text-blue-600 text-black">Continuar sin iniciar sesión</Link>
        </form>
      </div>
    </div>
  );
}
