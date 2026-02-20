import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black py-5 px-10 flex justify-between">
            <div className="flex justify-center gap-6 ">
                <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" aria-label="Enlace a YouTube" className="group relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/50 group-hover:border-white group-hover:scale-110">
                        <FaYoutube className="text-white text-xl group-hover:text-2xl"/>
                    </div>
                </a>
                <a href="https://www.instagram.com/leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Instagram" className="group relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/50 group-hover:border-white group-hover:scale-110">
                        <FaInstagram className="text-white text-xl group-hover:text-2xl"/>
                    </div>
                </a>
                <a href="https://www.facebook.com/Leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Facebook" className="group relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/50 group-hover:border-white group-hover:scale-110">
                        <FaFacebookF className="text-white text-xl group-hover:text-2xl"/>
                    </div>
                </a>
            </div>
            <div className="flex justify-center items-center gap-6">
                <Link href="/" className="hover:underline">Inicio</Link>
                <Link href="/conciertos" className="hover:underline">Conciertos</Link>
                <Link href="/noticias" className="hover:underline">Noticias</Link>
                <Link href="/productos" className="hover:underline">Productos</Link>
                <Link href="/biografia" className="hover:underline">Biografía</Link>
                <Link href="/contacto" className="hover:underline">Contacto</Link>
            </div>
        </footer>
    );
}
