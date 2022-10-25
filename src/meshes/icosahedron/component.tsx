import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Mesh, ShaderMaterial } from 'three';

import CustomMaterial from './material';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      customMaterial: ReactThreeFiber.Object3DNode<CustomMaterial, typeof CustomMaterial>;
    }
  }
}
extend({ CustomMaterial });

function Icosahedron() {
  const meshRef = useRef<Mesh>(null);
  const customMaterialRef = useRef<ShaderMaterial>();

  useFrame(({ clock }) => {
    if (customMaterialRef.current) {
      customMaterialRef.current.uniforms.uTime = { value: clock.getElapsedTime() };
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 16]} />
      <customMaterial ref={customMaterialRef} key={CustomMaterial.key} uTime={0} />
    </mesh>
  );
}

export default Icosahedron;
