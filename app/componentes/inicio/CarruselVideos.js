"use client";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

const videos = [
  {
    id: 1,
    imagen: "/inicio/diska.png",
    titulo: "DISCO COMPLETO",
    enlace: "https://youtu.be/rZWUMpBWUe0?si=rrpjWyx7--0Wra8x",
  },
  {
    id: 2,
    imagen: "/inicio/tatxers.png",
    titulo: "EZER ESATEKO",
    enlace: "https://youtu.be/690Slph2n1I?si=G00CKMfVNvMzgBPN",
  },
  {
    id: 3,
    imagen: "/inicio/aurresku.png",
    titulo: "AURRESKU",
    enlace: "https://youtu.be/ZrQAIr3dXic?si=MDqLPeCgAD6m9tRJ",
  },
  {
    id: 4,
    imagen: "/inicio/malko.png",
    titulo: "MALKO GAZIAK",
    enlace: "https://youtu.be/ZrQAIr3dXic?si=MDqLPeCgAD6m9tRJ",
  },
  {
    id: 5,
    imagen: "/inicio/beraien.png",
    titulo: "BERAIEN ONERAKO",
    enlace: "https://youtu.be/ZrQAIr3dXic?si=MDqLPeCgAD6m9tRJ",
  },
  {
    id: 6,
    imagen: "/inicio/deabruak.png",
    titulo: "DEABRUAK",
    enlace: "https://youtu.be/ZrQAIr3dXic?si=MDqLPeCgAD6m9tRJ",
  },
];

export default function CarruselVideos() {
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true });

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex-[0_0_80%] lg:flex-[0_0_25%]" >
              <div onClick={() => window.open(video.enlace, "_blank")} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                <Image src={video.imagen} alt={video.titulo} width={1200} height={600} className="w-full h-[300px] lg:h-[400px] object-cover duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/60 flex opacity-100 lg:opacity-0 group-hover:opacity-100 duration-300">
                  <h2 className="text-white text-4xl font-bold self-end p-10">{video.titulo}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}