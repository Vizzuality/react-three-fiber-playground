//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';
import { useMemo, useRef } from 'react';
import { AdditiveBlending, ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export interface CustomPointsMaterialProps {
  radius: number;
}

function CustomPointsMaterial({ radius }: CustomPointsMaterialProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    u_time: {
      value: 0.0
    },
    u_radius: {
      value: radius
    }
    // Add any other attributes here
  }), [radius]);


  useFrame(({ clock }) => {
    materialRef.current!.uniforms.u_time.value = clock.getElapsedTime();
  })

  // define your uniforms
  return (
    <shaderMaterial
      blending={AdditiveBlending}
      ref={materialRef}
      fragmentShader={glslify(FRAGMENT)}
      vertexShader={glslify(VERTEX)}
      uniforms={uniforms}
      transparent
      alphaTest={0.5}
      depthWrite={false}
    />
  )
}

export default CustomPointsMaterial;