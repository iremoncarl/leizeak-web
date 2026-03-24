'use client'
import Image from "next/image";
import { useState } from "react";
import {useLocale} from 'next-intl';

export default function NoticiaDetalles({noticia}) {
  const locale = useLocale();
  const [imgVertical, setImgVertical] = useState(false);

  function configImagen(img) {
    const vertical = img.naturalHeight > img.naturalWidth;
    //console.log("Es vertical: ", vertical)
    setImgVertical(vertical);
  } 

  return (
    <div className="">
      <h1 className="font-serif text-2xl lg:text-4xl md:text-5xl font-semibold my-10">{noticia[`titulo_${locale}`]}</h1>

      <div className={`flex gap-10 flex-col ${noticia.imagen && imgVertical && "lg:flex-row"} `}> {/* lg:flex-row */}
        {/* Contenido de la noticia */}
        <div className="text-md lg:text-lg leading-relaxed whitespace-pre-line flex flex-1 text-justify">{noticia[`noticia_${locale}`]}</div>

        {/* Imagen de la noticia */}
        {noticia.imagen && (
          <div className={`relative w-full h-[400px] ${imgVertical && "lg:max-w-[350px]"}`}>
            <Image
              src={noticia.imagen}
              alt="Imagen de la noticia"
              fill
              onLoadingComplete={configImagen}
              className="object-contain"
            />
          </div>
        )}
      </div>

    </div>
  )
}