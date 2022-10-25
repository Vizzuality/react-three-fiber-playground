import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { LayerMaterial, Depth, Fresnel } from "lamina";

import { Mesh, ShaderMaterial } from 'three';

import CustomLayer, { CustomLayerProps } from './material2';
import CustomMaterial from "./material";

extend({ CustomLayer, CustomMaterial });

function Icosahedron() {
  const meshRef = useRef<Mesh>(null);
  const customMaterialRef = useRef<ShaderMaterial>();
  const customMaterial2Ref = useRef<CustomLayerProps>();

  useFrame(({ clock }) => {
    if (customMaterialRef.current) {
      customMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }

    if (customMaterial2Ref.current) {
      customMaterial2Ref.current.time = clock.getElapsedTime();
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 16]} />

      <customMaterial ref={customMaterialRef} uTime={0} />

      {/* Lamina */}
      <LayerMaterial lighting="lambert">
        <customLayer ref={customMaterial2Ref} time={0.0} />

        <Depth colorA="blue" colorB="aqua" alpha={0.9} mode="add" />

        <Fresnel color="#FEB3D9" mode="add" />
      </LayerMaterial>
    </mesh>
  );
}

export default Icosahedron;
