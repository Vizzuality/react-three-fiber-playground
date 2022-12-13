import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, RepeatWrapping, Texture } from "three";

function Floor() {
  const grassRef = useRef<Mesh>(null);

  const texture = useTexture({
    map: "/textures/grass/color.jpg",
    normalMap: "/textures/grass/normal.jpg",
    aoMap: "/textures/grass/ambientOcclusion.jpg",
    // roughnessMap: "/textures/grass/roughness.jpg",
  }, (textures) => {
    const txts = textures as Texture[];
    txts.forEach((texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping;
      texture.repeat.set(20, 20);
      // texture.encoding = LinearEncoding;
    });
  });

  useEffect(() => {
    grassRef.current?.geometry.setAttribute(
      "uv2",
      new BufferAttribute(grassRef.current?.geometry.attributes.uv.array, 2)
    )
  }, []);
  return (
    <mesh ref={grassRef} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial {...texture} />
    </mesh>
  );
}

export default Floor;
