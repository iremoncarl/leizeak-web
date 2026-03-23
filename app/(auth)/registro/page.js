"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/auth/browser-client";

import logo from '../../../public/lzk_logo_txuri.png'
import fondo from '../../../public/pag_inicio.jpg'

import { registrarUsuario } from "@/lib/auth/actions";

export default function Registro() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [estado, setEstado] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();

    /*
    const formData = new FormData(e.target);
    console.log("formData:")
    console.log(formData)
    const result = await registrarUsuario(formData);

    if (result.error) {
      console.log("Error: ", result.error)
      setEstado(result.error)
    } else {
      setEstado(result.success)
      console.log("OK")
    }
    */
    
    if (loading) return;
    setLoading(true);

    const supabase = getSupabaseBrowserClient();
  
    const { error, data } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log("Registro con éxito -> comprueba email")
    }
    console.log(data)
    
    setLoading(false);
  };



  return (
    <div className="flex flex-1 justify-center items-center">

      <Image src={fondo} alt="Leizeak en concierto" fill className="absolute object-cover max-h-screen object-[25%_center]"/>

      <div className="w-[85vw] h-[50vh] lg:w-[60vw] lg:h-[70vh] xl:w-[40vw] bg-white/5 backdrop-blur rounded-3xl border border-white/30">
        <form className="px-16 py-8 h-full flex flex-col justify-around text-sm lg:text-lg" onSubmit={handleSubmit}>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="email">Correo electrónico</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" name="email" id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Correo electrónico"/>
          </div>
 
{/*
<div>
  <label className="block text-white/90 font-bold mb-2" htmlFor="usuario">Nombre de usuario</label>
  <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="usuario" type="text" placeholder="Escriba su nombre de usuario"/>
</div>
*/}
          
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="password">Contraseña</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" name="password" id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Escribe tu contraseña"/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="confirmarPassword">Verificar contraseña</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" name="confirmarPassword" id="confirmarPassword" type="password" placeholder="Repite tu contraseña"/>
          </div>

          <div className="flex flex-col">
            <button className="border border-white/30 bg-black/50 hover:bg-white/30 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              {loading ? "Registrando..." : "Registrarse"}
            </button>
            
            <p className="text-red-700">{estado}</p>

            <Link href="/login" className="hover:underline text-sm flex justify-end mt-4 text-right">Si ya tienes una cuenta, puedes iniciar sesión aquí</Link>

            <Link href="/" className="hover:underline text-sm flex justify-end mt-4 text-right">{'Continuar sin iniciar sesión ->'}</Link>
          </div>

        </form>
      </div>
    </div>
  );
}
