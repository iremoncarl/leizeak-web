import Image from "next/image";
import Link from "next/link";
import SelectorIdioma from "../componentes/inicio/SelectorIdioma";
import MenuDesplegable from "../componentes/inicio/MenuDesplegable";
import { FiUser } from "react-icons/fi";
import { getUser } from "@/lib/auth/getUser";

//import logo from '../../public/vercel.svg'
import logo from '../../public/lzk_logo_txuri_simple.png'
import CerrarSesionBtn from "./CerrarSesionBtn";

export default async function Header() {
    const user = await getUser();
    
    return (
        <header className="bg-black/90 sticky top-0 border-b border-white/50 z-50">
            <nav className="grid grid-cols-2 lg:grid-cols-5 items-center px-4">
                <div className="flex justify-start">
                    <Image src={logo} alt="Logo de Leizeak" width={130} height={50} />
                </div>
                
         
                <div className="hidden lg:flex justify-between col-span-3 h-full items-center">
                    <Link href="/" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">INICIO</Link>
                    <Link href="/conciertos" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">CONCIERTOS</Link>
                    <Link href="/noticias" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">NOTICIAS</Link>
                    <Link href="/productos" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">PRODUCTOS</Link>
                    <Link href="/biografia" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">BIOGRAFÍA</Link>
                    <Link href="/contacto" className="hover:text-[#a27736] text-sm xl:text-lg h-full w-full flex items-center justify-center">CONTACTO</Link>
                </div>            

                <div>
                    <div className="hidden lg:flex justify-end items-center gap-3">
                        < SelectorIdioma/>
                        {user ? 
                            <CerrarSesionBtn/>
                        :
                        
                            <a href="/login" className="flex gap-3 items-center border border-[#6f4403] px-2 py-3 rounded-lg cursor-pointer bg-[#8b5504] hover:bg-[#a27736] transition ">
                                <FiUser className="w-4 xl:w-5 h-4 xl:h-5" />
                                <p className="text-sm ">INICIAR SESIÓN</p>
                            </a>
                        }
                        
                    </div>
                    <div className="flex lg:hidden justify-end">
                        < SelectorIdioma/>
                        < MenuDesplegable/>
                    </div>
                </div>

            </nav>
        </header>
    );
}
