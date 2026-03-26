import Image from "next/image";
import Link from "next/link";
import {getTranslations, getLocale} from 'next-intl/server';

import { getUser } from "@/lib/auth/getUser";

import SelectorIdioma from "../componentes/inicio/SelectorIdioma";
import MenuDesplegable from "../componentes/inicio/MenuDesplegable";

import { FiUser } from "react-icons/fi";

import logo from '../../public/lzk_logo_txuri_simple.png'
import CerrarSesionBtn from "./CerrarSesionBtn";

export default async function Header() {
    const t = await getTranslations('MenuNavegacion');

    const user = await getUser();
    
    const locale = await getLocale();
    console.log("header - locale: ", locale)
    
    const opcionesMenu = {
        "inicio" : t('inicio').toUpperCase(),
        "conciertos": t('conciertos').toUpperCase(),
        "noticias": t('noticias').toUpperCase(),
        "productos": t('productos').toUpperCase(),
        "biografia": t('biografia').toUpperCase(),
        "contacto": t('contacto').toUpperCase(),
        "iniciarSesion": t('iniciarSesionBtn'),
        "cerrarSesion": t('cerrarSesionBtn')
    }


    return (
        <header className="bg-black/90 sticky top-0 border-b border-white/50 z-50">
            <nav className="grid grid-cols-2 lg:grid-cols-5 items-center px-4">
                
                {/* Logo del grupo */}
                <div className="flex justify-start">
                    <Image src={logo} alt="Logo de Leizeak" width={130} height={50} />
                </div>
                
                {/* Menú de navegación */}
                <div className="hidden lg:flex justify-between col-span-3 h-full items-center">
                    <Link href="/" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.inicio}</Link>
                    <Link href="/conciertos" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.conciertos}</Link>
                    <Link href="/noticias" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.noticias}</Link>
                    <Link href="/productos" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.productos}</Link>
                    <Link href="/biografia" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.biografia}</Link>
                    <Link href="/contacto" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">{opcionesMenu.contacto}</Link>
                </div>            

                {/* Selector idioma + botón de inicio/cierre de sesión */}
                <div>
                    <div className="hidden lg:flex justify-end items-center gap-3">
                        < SelectorIdioma/>
                        {user ? 
                            <CerrarSesionBtn texto={opcionesMenu.cerrarSesion}/>
                        :
                        
                            <a href="/login" className="flex gap-3 items-center border border-[#6f4403] px-2 py-3 rounded-lg cursor-pointer bg-[#8b5504] hover:bg-[#a27736] transition ">
                                <FiUser className="w-4 xl:w-5 h-4 xl:h-5" />
                                <p className="text-sm ">{opcionesMenu.iniciarSesion}</p>
                            </a>
                        }
                        
                    </div>
                    <div className="flex lg:hidden justify-end">
                        < MenuDesplegable user={user} idioma={locale} opcionesMenu={opcionesMenu}/>
                    </div>
                </div>

            </nav>
        </header>
    );
}
