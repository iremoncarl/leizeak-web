import { FaYoutube, FaInstagram, FaFacebookSquare, FaArrowRight } from "react-icons/fa";

//import Formulario from "@/app/componentes/contacto/Formulario";

export default function Contacto() {

  return (
    <main className="p-10 flex-1">
      <h1 className="font-serif text-4xl font-semibold mb-14">CONTACTO</h1>

      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 pb-30">

        {/* Info de contacto */}
        <div className="flex flex-col">
          <div>
            <p className="mb-4">¡Ponte en contacto con nosotras!</p>
            <p className="text-2xl lg:text-3xl font-serif">leizeaktaldea@gmail.com</p>
          </div>
          <div className="mt-14 md:h-full mb-10 hidden md:block">
            <p className="mb-4">O siguenos en nuestras redes sociales:</p>
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
        <form className="w-full flex flex-col justify-between border border-white/30 rounded-xl p-8">

          <div className="flex flex-col md:flex-row gap-0 md:gap-8">
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="nombre" name="nombre" type="text" placeholder="Nombre"/>
            <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="apellidos" name="apellidos" type="text" placeholder="Apellidos"/>
          </div>

          <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="correo" name="correo" type="text" placeholder="Correo electrónico"/>
          <input className="mb-8 pb-2 border-b border-white focus:border-[#a27736] outline-none placeholder-white/60" id="asunto" name="asunto" type="text" placeholder="Asunto"/>

          <p>Mensaje</p>
          <textarea className="mb-8 p-2 h-full border border-white/30 focus:border-[#a27736]/70 outline-none rounded mt-2" id="mensaje" name="mensaje" type="text" />
        
          <button className="bg-[#8b5504] hover:bg-[#a27736] transition cursor-pointer text-white font-bold py-2 px-4 rounded-3xl" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>      
    </main>
  );
}