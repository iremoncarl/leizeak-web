import Link from "next/link";
import {getTranslations} from 'next-intl/server';
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default async function Footer() {
    const t = await getTranslations('MenuNavegacion');

    return (
        <footer className="bg-black border-t border-white/50 py-5 px-10 flex flex-col md:flex-row justify-between">
            <div className="flex justify-center gap-6">
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
            <div className="hidden md:flex justify-center items-center gap-6">
                <Link href="/" className="hover:underline">{t('inicio')}</Link>
                <Link href="/conciertos" className="hover:underline">{t('conciertos')}</Link>
                <Link href="/noticias" className="hover:underline">{t('noticias')}</Link>
                <Link href="/productos" className="hover:underline">{t('productos')}</Link>
                <Link href="/biografia" className="hover:underline">{t('biografia')}</Link>
                <Link href="/contacto" className="hover:underline">{t('contacto')}</Link>
            </div>
        </footer>
    );
}
