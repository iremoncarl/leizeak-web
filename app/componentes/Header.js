import Image from "next/image";
import Link from "next/link";
import SelectorIdioma from "../componentes/inicio/SelectorIdioma";
import { FiUser } from "react-icons/fi";

//import logo from '../../public/vercel.svg'
import logo from '../../public/lzk_logo_txuri_simple.png'

export default function Header() {
    return (
        <header className="bg-black/90 sticky top-0 border-b border-white/50">
            <nav className="grid grid-cols-4 items-center px-8">
                <Image src={logo} alt="Logo de Leizeak" width={130} height={50} className="flex justify-start"/>
         
                <div className="flex justify-between col-span-2 h-full items-center">
                    <Link href="/" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">INICIO</Link>
                    <Link href="/conciertos" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">CONCIERTOS</Link>
                    <Link href="/noticias" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">NOTICIAS</Link>
                    <Link href="/productos" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">PRODUCTOS</Link>
                    <Link href="/biografia" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">BIOGRAFÍA</Link>
                    <Link href="/contacto" className="hover:text-[#a27736] text-lg h-full w-full flex items-center justify-center">CONTACTO</Link>
                </div>            

                <div className="flex justify-end items-center gap-3">
                    < SelectorIdioma/>
                    <a href="/login" className="flex gap-4 items-center border border-[#6f4403] px-4 py-3 rounded-lg cursor-pointer bg-[#8b5504] hover:bg-[#a27736] transition ">
                        <FiUser className="w-5 h-5" />
                        <p>INICIAR SESIÓN</p>
                    </a>
                </div>

            </nav>
        </header>
    );
}
