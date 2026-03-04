"use client";
import Link from "next/link";
import Image from "next/image";

//import logo from '../../../public/lzk_logo_txuri_simple.png'
import logo from '../../../public/lzk_logo_txuri.png'
//import fondo from '../../../public/biografia_principal.jpg'
import fondo from '../../../public/pag_inicio.jpg'


export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };


  return (
    <div className="flex flex-1 justify-center items-center">
      
      <Image src={fondo} alt="Leizeak en concierto" fill className="absolute object-cover max-h-screen object-[25%_center]"/>
      
      
      <div className="w-[85vw] h-[50vh] lg:w-[60vw] lg:h-[70vh] xl:w-[40vw] bg-white/5 backdrop-blur rounded-3xl border border-white/30">
        {/*
        <Image src={logo} alt="Logo de Leizeak" width="full" height="full" className="px-70 py-10"/>
        */}
        
        <form className="px-8 lg:px-16 py-8 h-full flex flex-col justify-around text-sm lg:text-lg" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="usuario">Nombre de usuario o correo electrónico</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="usuario" type="text" placeholder="Nombre de usuario"/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="passwd">Contraseña</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="passwd" type="password" placeholder="******************"/>
          </div>

          <div className="flex flex-col">
            <button className="border border-white/30 bg-black/50 hover:bg-white/30 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              Iniciar sesión
            </button>

            <Link href="/registro" className="hover:underline text-sm flex justify-end mt-4 text-right">Si todavía no tienes una cuenta, puedes registrarte aquí</Link>

            <Link href="/" className="hover:underline text-sm flex justify-end mt-4 text-right">{'Continuar sin iniciar sesión ->'}</Link>
          </div>
          
        </form>

      </div>
    </div>
  );
}