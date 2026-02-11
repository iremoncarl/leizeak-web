"use client";
import Link from "next/link";

export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };


  return (
    <div className="bg-yellow-500 flex flex-1 justify-center items-center">
      <div className="w-[40vw] h-[70vh]">

        <form className="bg-white rounded-3xl p-16 h-full flex flex-col justify-between" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
              Nombre de usuario o correo electrónico
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="usuario" type="text" placeholder="Nombre de usuario"/>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwd">
              Contraseña
            </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="passwd" type="password" placeholder="******************"/>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Iniciar sesión
          </button>

          <Link href="/registro" className="hover:text-blue-600 text-black">Si todavía no tienes una cuenta, puedes registrarte aquí</Link>

          <Link href="/" className="hover:text-blue-600 text-black">Continuar sin iniciar sesión</Link>
        </form>

      </div>
    </div>
  );
}