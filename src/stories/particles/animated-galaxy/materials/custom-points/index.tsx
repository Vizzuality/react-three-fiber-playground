//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';
import { useMemo, useRef } from 'react';
import { AdditiveBlending, ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

export interface CustomPointsMaterialProps {
  distanceScale: number;
}

function CustomPointsMaterial({ distanceScale }: CustomPointsMaterialProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const { speed, noise } = useControls('Uniforms', {
    speed: { value: 0.5, min: 0.01, max: 20, order: 50 },
    noise: { value: 0.15, min: -1, max: 1, order: 51 },
  })

  const uniforms = useMemo(() => ({
    u_time: {
      value: 0.0
    },
    u_speed: {
      value: 1
    },
    u_noise: {
      value: 0
    },
    u_distanceScale: {
      value: distanceScale
    },
  }), []); // eslint-disable-line react-hooks/exhaustive-deps


  useFrame(({ clock }) => {
    materialRef.current!.uniforms.u_time.value = clock.getElapsedTime();
    materialRef.current!.uniforms.u_speed.value = speed;
    materialRef.current!.uniforms.u_noise.value = noise;
    materialRef.current!.uniforms.u_distanceScale.value = distanceScale;

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