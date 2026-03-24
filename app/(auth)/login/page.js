"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import {useTranslations} from 'next-intl';

import fondo from '../../../public/pag_inicio.jpg'

import { getSupabaseBrowserClient } from "@/lib/auth/browser-client";
import { useRouter } from "next/navigation";
 

export default function Login() {
  const t = useTranslations('PagLogin');

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e)  {
    e.preventDefault();
    //console.log("aaa - handleSubmit()");

    if (loading) return;
    setLoading(true);
/*
    console.log("email:")
    console.log(email)
    console.log("password:")
    console.log(password)
*/
    const supabase = getSupabaseBrowserClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
  
    if (error) {
      console.log(error.message);
      setLoading(false);
      return;
    } else {
      console.log("Login correcto");
    }
  
    setLoading(false);
    router.push("/");
    router.refresh();
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
            <label className="block text-white/90 font-bold mb-2" htmlFor="email">{t('usuario')}</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder={t('usuarioPlaceholder')}/>
          </div>

          <div>
            <label className="block text-white/90 font-bold mb-2" htmlFor="password">{t('contrasenia')}</label>
            <input className="border border-white/30 rounded w-full p-2 text-white text-sm" id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder={t('contraseniaPlaceholder')}/>
          </div>

          <div className="flex flex-col">
            <button className="border border-white/30 bg-black/50 hover:bg-white/30 transition duration-300 text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              {loading ? t('iniciandoSesion') : t('iniciarSesion')}
            </button>

            <Link href="/registro" className="hover:underline text-sm flex justify-end mt-4 text-right">{t('enlaceRegistro')}</Link>

            <Link href="/" className="hover:underline text-sm flex justify-end mt-4 text-right">{t('enlaceHome')}</Link>
          </div>
          
        </form>

      </div>
    </div>
  );
}