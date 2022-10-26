import { extend, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { LayerMaterial, Depth, Fresnel } from "lamina";

import { BufferAttribute, IcosahedronGeometry, Mesh } from 'three';

import CustomLayer, { CustomLayerProps } from './material2';
import CustomMaterial from "./material";

extend({ CustomLayer, CustomMaterial });

function Icosahedron() {
  const meshRef = useRef<Mesh>(null);
  const geometryRef = useRef<IcosahedronGeometry>(null);
  const customMaterialRef = useRef<CustomLayerProps>();

  useFrame(({ clock }) => {
    meshRef.current!.rotation.y = clock.getElapsedTime() / 2;

    customMaterialRef.current!.time = clock.getElapsedTime();
  });

  useEffect(() => {
    let count = geometryRef.current?.attributes.position.count || 0;
    let randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i+=3) {
      const r = Math.random();
      randoms[i] = r;
      randoms[i+1] = r;
      randoms[i+2] = r;
    }

    geometryRef.current?.setAttribute('a_random', new BufferAttribute(randoms, 1));
  }, []);

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry ref={geometryRef} args={[1, 32]} />

      {/* <customMaterial ref={customMaterialRef} uTime={0} /> */}

      {/* Lamina */}
      <LayerMaterial lighting="lambert">
        <customLayer ref={customMaterialRef} time={0.0} />

        <Depth colorA="green" colorB="aqua" alpha={0.9} mode="add" />

        <Fresnel color="#00F3D9" mode="add" />
      </LayerMaterial>
    </mesh>
  );
}

export default Icosahedron;
