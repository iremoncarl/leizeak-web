'use client'
import { FaYoutube, FaInstagram, FaFacebookSquare, FaArrowRight } from "react-icons/fa";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa - handleSubmit()");
  };

  return (
    <main className="p-10 flex-1">
      <h1 className="font-serif text-4xl font-semibold mb-14">
        CONTACTO
      </h1>

      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-40 pb-30">

        {/* Info de contacto */}
        <div className="flex flex-col">
          <div>
            <p>¡Ponte en contacto con nosotras!</p>
            <p className="text-3xl mt-4">leizeaktaldea@gmail.com</p>
          </div>
          <div className="mt-14 h-full mb-10">
            <p className="text-serif mb-4">O siguenos en nuestras redes sociales:</p>
            <div className="h-full flex flex-col justify-between">           
              
              <a href="https://www.youtube.com/@leizeaktaldea9731" target="_blank" rel="noopener noreferrer" aria-label="Enlace a YouTube">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaYoutube className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>YouTube</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">Leizeak Taldea</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>
              <a href="https://www.instagram.com/leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Instagram">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaInstagram className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>Instagram</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">@leizeak</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>
              <a href="https://www.facebook.com/Leizeak/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a Facebook">
                <div className="border border-white hover:border-[#8b5504] transition duration-500 rounded-md p-4 flex items-center hover:translate-x-2 group">
                  <FaFacebookSquare className="w-10 h-10 p-2 text-white text-xl bg-white/20 rounded-full border border-white group-hover:border-[#8b5504]/70 transition duration-1000 mr-4"/>
                  <div>
                    <p>Facebook</p>
                    <p className="text-sm text-white group-hover:text-[#a27736] transition-colors duration-1000">@Leizeak</p>
                  </div>
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-700 ml-auto text-[#8b5504]"/>
                </div>
              </a>          
            </div>
          </div>
        </div>




        {/* Formulario de contacto */}
        <form className="w-full flex flex-col justify-between" onSubmit={handleSubmit}>

          <div className="flex gap-8">
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="nombre" type="text" placeholder="Nombre"/>
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="apellidos" type="text" placeholder="Apellidos"/>
          </div>

          <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="correo" type="text" placeholder="Correo electrónico"/>
          <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="asunto" type="text" placeholder="Asunto"/>

          <p>Mensaje</p>
          <textarea className="mb-8 p-2 h-full border border-white/30 focus:border-[#a27736]/70 outline-none rounded mt-2" id="mensaje" type="text" />
        
          <button className="bg-[#8b5504] hover:bg-[#a27736] transition cursor-pointer text-white font-bold py-2 px-4 rounded-3xl" type="submit">
            Enviar mensaje
          </button>

        </form>
      </div>



      {/*
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
      */}
    
      
    </main>

  );
}