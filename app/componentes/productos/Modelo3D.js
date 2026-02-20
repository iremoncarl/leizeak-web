'use client'
import React from "react";
import { useGLTF } from "@react-three/drei";
//import modelo from '../../../public/modelos/pua/result.gltf'

export const Modelo3D = ({id}) => {
  console.log("Modelo 3D id: ", id);
  
  const ruta = id==='1' ? '/modelos/camiseta/scene.gltf' : 
              id==='2' ? '/modelos/pua/result.gltf' :
              id==='3' ? '/modelos/disco/scene.gltf' : '/modelos/camiseta_2/scene.gltf';
              
  console.log(ruta)
  const modelo = useGLTF(ruta, true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={modelo.scene}
        scale={0.5}
        position={[0, -3.25, -1.5]}
        rotation={[0, 0, 0]} 
      />
    </mesh>
  );
};