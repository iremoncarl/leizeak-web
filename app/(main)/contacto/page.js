'use client'
import { FaYoutube, FaInstagram, FaFacebookF, FaFacebook, FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };

  return (
    <main className="p-10">
      <h1 className="font-serif text-4xl font-semibold mb-4">
        CONTACTO
      </h1>
    
      <div className="grid grid-cols-2 gap-20 p-10 bg-yellow-0">

        <div className="align-center justify-center">
          <p className="text-2xl mb-2">Contactanos</p>
          <p>Si quieres ponerte en contatco con nosotras para organizar un concierto, hacer una colaboración... o simplemente para saludar, ¡Puedes usar este formulario! </p>
          


          <p className="text-2xl mt-16 mb-2">También puedes seguirnos en nuestras redes sociales</p>

          <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" aria-label="Enlace a YouTube">
            <div className="flex items-center py-2">
              <FaYoutube className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>Nuestro canal de YouTube</p>
            </div>
          </a>
          <a href="https://www.instagram.com/leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Instagram">
            <div className="flex items-center py-2">
              <FaInstagram className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>Nuestra página de Instagram</p>
            </div>
          </a>
          <a href="https://www.facebook.com/Leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Facebook">
            <div className="flex items-center py-2">
              <FaFacebookSquare className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>Nuestra página de Facebook</p>
            </div>
          </a>
        </div>
        

        <div className="bg-white/90 rounded-3xl border flex align-center justify-center">
          <form className="px-16 py-8 h-full w-full flex flex-col justify-between" onSubmit={handleSubmit}>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
            <input className="mb-4 border rounded w-full py-2 px-3 text-gray-700 bg-white/70" id="nombre" type="text" placeholder="Tu nombre"/>
        
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto">Asunto</label>
            <input className="mb-4 border rounded w-full py-2 px-3 text-gray-700 bg-white/70" id="asunto" type="text" placeholder="Asunto del mensaje"/>
      
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">Mensaje</label>
            <textarea className="mb-8 border rounded w-full h-full py-2 px-3 text-gray-700 bg-white/70" id="mensaje" type="text" placeholder="Escribe aquí tu mensaje"/>
         
            <button className="bg-black hover:bg-black/80 cursor-pointer text-white font-bold py-2 px-4 rounded-3xl" type="submit">
              Enviar mensaje
            </button>

          </form> 
        </div>

      </div>
    </main>

  );
}