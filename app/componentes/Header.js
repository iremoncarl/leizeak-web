import Image from "next/image";

import logo from '../../public/vercel.svg'

export default function Header() {
    return (
        <header className="bg-black">
            <nav className="grid grid-cols-3 items-center px-8 py-4 ">
                <Image src={logo} alt="Logo de Leizeak" width={50} height={50} className="flex justify-start"/>
         
                <ul className="flex justify-center gap-6"> 
                    <li><a href="/" className="hover:text-blue-600">Inicio</a></li>
                    <li><a href="/pages/conciertos" className="hover:text-blue-600 ">Conciertos</a></li>
                    <li><a href="/pages/noticias" className="hover:text-blue-600 ">Noticias</a></li>
                    <li><a href="/pages/productos" className="hover:text-blue-600 ">Productos</a></li>
                    <li><a href="/pages/biografia" className="hover:text-blue-600 ">Biografía</a></li>
                    <li><a href="/pages/contacto" className="hover:text-blue-600 ">Contacto</a></li>
                </ul>

                <div className="flex justify-end gap-3">
                    <p>Cierre sesión</p>
                    <p>Cambio idioma</p>
                </div>

            </nav>
        </header>
    );
}
