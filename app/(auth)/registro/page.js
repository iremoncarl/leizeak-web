"use client";
import Link from "next/link";
import Image from "next/image";

import logo from '../../../public/lzk_logo_txuri.png'
import fondo from '../../../public/pag_inicio.jpg'

export default function Registro() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };



  return (
    <div className="flex flex-1 justify-center items-center">

      <Image src={fondo} alt="Leizeak en concierto" fill className="absolute object-cover max-h-screen object-[25%_center]"/>

      <div className="w-[85vw] h-[50vh] lg:w-[60vw] lg:h-[70vh] xl:w-[40vw] bg-white/5 backdrop-blur rounded-3xl border border-white/30">
        <form className="px-16 py-8 h-full flex flex-col justify-around text-sm lg:text-lg" onSubmit={handleSubmit}>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="correo">Correo electrónico</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="correo" type="text" placeholder="Escriba su correo electrónico"/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="usuario">Nombre de usuario</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="usuario" type="text" placeholder="Escriba su nombre de usuario"/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="passwd">Contraseña</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="passwd" type="password" placeholder="Escriba su contraseña"/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="passwd">Verificar contraseña</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="passwd" type="password" placeholder="Repita su contraseña"/>
          </div>

          <div className="flex flex-col">
            <button className="border border-white/30 bg-black/50 hover:bg-white/30 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              Registrarse
            </button>

            <Link href="/login" className="hover:underline text-sm flex justify-end mt-4 text-right">Si ya tienes una cuenta, puedes iniciar sesión aquí</Link>

            <Link href="/" className="hover:underline text-sm flex justify-end mt-4 text-right">{'Continuar sin iniciar sesión ->'}</Link>
          </div>


        </form>
      </div>
    </div>
  );
}
