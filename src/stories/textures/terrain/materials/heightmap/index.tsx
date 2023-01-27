//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';
import { useRef } from 'react';
import { ClampToEdgeWrapping, DoubleSide, LinearEncoding, ShaderMaterial, sRGBEncoding } from 'three';
import { useTexture } from '@react-three/drei';

function HeightMapMaterial() {
  const materialRef = useRef<ShaderMaterial>(null);


  const satelliteTexture = useTexture("/textures/terrain/terrain-color-13-4079-3014@2x.png", (texture) => {
    satelliteTexture.encoding = sRGBEncoding;
    satelliteTexture.wrapS = ClampToEdgeWrapping;
    satelliteTexture.wrapT = ClampToEdgeWrapping;
    satelliteTexture.anisotropy = 16;
  });
  const bumpTexture = useTexture("/textures/terrain/terrain-height-13-4079-3014@2x.png", () => {
    satelliteTexture.encoding = LinearEncoding;
    bumpTexture.wrapS = ClampToEdgeWrapping;
    bumpTexture.wrapT = ClampToEdgeWrapping;
    bumpTexture.anisotropy = 16;
  });


  // define your uniforms
  return (
    <shaderMaterial
      ref={materialRef}
      fragmentShader={glslify(FRAGMENT)}
      vertexShader={glslify(VERTEX)}
      uniforms={{
        u_satelliteTexture: { value: satelliteTexture },
        u_bumpTexture: { value: bumpTexture },
      }}
      side={DoubleSide}
    />
  )
}

export default HeightMapMaterial;