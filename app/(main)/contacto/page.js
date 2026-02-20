'use client'
import { FaYoutube, FaInstagram, FaFacebookF, FaFacebook, FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };

  return (
    <main className="p-0 m-0">
      <div className="p-0 flex align-center justify-center">
        <p className="text-5xl ">Contacta con nosotras</p>
      </div>
    
      <div className="grid grid-cols-2 gap-20">

        <div className="p-0 align-center justify-center  mt-10">
          <p className="text-xl mb-2">Contactanos</p>

          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>
          <p>Texto</p>


          <p className="text-xl mt-10 mb-2">También puedes seguirnos en nuestras redes sociales</p>

          <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" aria-label="Enlace a YouTube">
            <div className="flex items-center py-2">
              <FaYoutube className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>YouTube</p>
            </div>
          </a>
          <a href="https://www.instagram.com/leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Instagram">
            <div className="flex items-center py-2">
              <FaInstagram className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>Instagram</p>
            </div>
          </a>
          <a href="https://www.facebook.com/Leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Facebook">
            <div className="flex items-center py-2">
              <FaFacebookSquare className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-4xl border border-white mr-4"/>
              <p>Facebook</p>
            </div>
          </a>
        </div>
        

        <div className="bg-blue-200 p-0 flex align-center justify-center mt-10">
          <form className="bg-white rounded-3xl p-16 h-full w-full flex flex-col justify-between" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                Nombre de usuario o correo electrónico
              </label>
              <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="usuario" type="text" placeholder="Nombre de usuario"/>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwd">
                Contraseña
              </label>
              <input className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-red-200" id="passwd" type="password" placeholder="******************"/>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Iniciar sesión
            </button>
          </form> 
        </div>

      </div>
    </main>

  );
}