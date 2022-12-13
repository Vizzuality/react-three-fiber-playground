import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, Texture } from "three";

function Door() {
  const doorRef = useRef<Mesh>(null);

  const texture = useTexture({
    map: "/textures/door/Door_Wood_001_basecolor.jpg",
    alphaMap: "/textures/door/Door_Wood_001_opacity.jpg",
    normalMap: "/textures/door/Door_Wood_001_normal.jpg",
    aoMap: "/textures/door/Door_Wood_001_ambientOcclusion.jpg",
    displacementMap: "/textures/door/Door_Wood_001_height.png",
    metalnessMap: "/textures/door/Door_Wood_001_metallic.jpg",
    roughnessMap: "/textures/door/Door_Wood_001_roughness.jpg",
  }, (textures) => {
    const txts = textures as Texture[];
    txts.forEach((texture) => {
      texture.encoding = LinearEncoding;
    });
  });

  useEffect(() => {
    doorRef.current?.geometry.setAttribute(
      "uv2",
      new BufferAttribute(doorRef.current?.geometry.attributes.uv.array, 2)
    )
  }, []);

  return (
    <>
      <pointLight position={[0, 2, 2.7]} color="#ff7d46" distance={7} intensity={1} castShadow />

      <mesh position={[0, 0.9, 2.01]} ref={doorRef}>
        <planeGeometry args={[2, 2, 128, 128]} />
        <meshStandardMaterial
          {...texture}
          transparent
          displacementScale={0.1}
          normalMap-encoding={LinearEncoding}
        />
      </mesh>
    </>
  );
}

export default Door;
