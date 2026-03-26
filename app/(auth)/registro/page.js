"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/auth/browser-client";

import logo from '../../../public/lzk_logo_txuri.png'
import fondo from '../../../public/pag_inicio.jpg'

import { registrarUsuario } from "@/lib/auth/actions";
import { insertarUsuario } from "@/lib/supabase/actions";

export default function Registro() {
  const t = useTranslations('PagRegistro');

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;
    setLoading(true);
    
    const formData = new FormData(e.target);
    //console.log("formData:")
    //console.log(formData)

    const result = await registrarUsuario(formData);
    //console.log(result)

    if (!result.success) {
      mostrarMensajeError(result.message);
      setLoading(false)
      return;
    }
   
    const supabase = getSupabaseBrowserClient();
  
    const { error, data } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      mostrarMensajeError(error.message);
      setLoading(false)
      return;
    }

    const user = data.user;
    //console.log("user: ", user.id)

    if (!user) {
      mostrarMensajeError("No se pudo crear el usuario");
      setLoading(false);
      return;
    }
    
    const res = await insertarUsuario(user.id, username)
    //console.log("res: " + res)
    mostrarMensajeExito("Registro de usuario exitoso.")
    router.push("/");
     
    setLoading(false)
  };

 
  const mostrarMensajeError = (mensaje) => toast.error(mensaje);
  const mostrarMensajeExito = (mensaje) => toast.success(mensaje);

  return (
    <div className="flex flex-1 justify-center items-center">

      <Image src={fondo} alt="Leizeak en concierto" fill className="absolute object-cover max-h-screen object-[25%_center]"/>

      <div className="w-[85vw] h-[50vh] lg:w-[60vw] lg:h-[70vh] xl:w-[40vw] bg-black/50 backdrop-blur rounded-3xl border border-white/30">
        
        {/* Formulario de registro */}
        <form className="px-8 lg:px-16 py-8 h-full flex flex-col justify-around text-sm lg:text-lg" onSubmit={handleSubmit}>

          {/* Campo de correo electrónico */}
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="email">{t('correo')}</label>
            <input className="border border-white/30 bg-black/70 rounded w-full p-2 text-white text-sm" name="email" id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder={t('correoPlaceholder')}/>
          </div>
 
          {/* Campo de nombre de usuario */}
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="username">Nombre de usuario</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" name="username" id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} required placeholder="Escriba su nombre de usuario"/>
          </div>

          {/* Campo de contraseña */}
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="password">{t('contrasenia')}</label>
            <input className="border border-white/30 bg-black/70 rounded w-full p-2 text-white text-sm" name="password" id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={t('contraseniaPlaceholder')}/>
          </div>

          {/* Campo de confirmación de contraseña */}
          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="confirmarPassword">{t('contraseniaVerif')}</label>
            <input className="border border-white/30 bg-black/70 rounded w-full p-2 text-white text-sm" name="confirmarPassword" id="confirmarPassword" type="password" placeholder={t('contraseniaVerifPlaceholder')}/>
          </div>

          {/* Botón de registro */}
          <div className="flex flex-col">
            <button className="border border-white/30 bg-black/90 hover:bg-white/30 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              {loading ? t('registrando') : t('registrar')}
            </button>

            {/* Enlace a página de inicio de sesión */}
            <Link href="/login" className="hover:underline text-sm flex justify-end mt-4 text-right">{t('enlaceLogin')}</Link>

            {/* Enlace a página de inicio */}
            <Link href="/" className="hover:underline text-sm flex justify-end mt-4 text-right">{t('enlaceHome')}</Link>
          </div>

        </form>
      </div>
      
      <Toaster position="top-center" containerStyle={{top: 100}}/>
    </div>
  );
}
