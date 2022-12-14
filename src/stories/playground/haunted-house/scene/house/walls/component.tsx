import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, Texture } from "three";

function Walls() {
  const wallsRef = useRef<Mesh>(null);

  const HEIGHT = 2.5;
  const WIDTH = 4;
  const DEPTH = 4;

  const texture = useTexture({
    map: "/textures/bricks/color.jpg",
    normalMap: "/textures/bricks/normal.jpg",
    aoMap: "/textures/bricks/ambientOcclusion.jpg",
    roughnessMap: "/textures/bricks/roughness.jpg",
  }, (textures) => {
    const txts = textures as Texture[];
    txts.forEach((texture) => {
      texture.encoding = LinearEncoding;
    });
  });

  useEffect(() => {
    wallsRef.current?.geometry.setAttribute(
      "uv2",
      new BufferAttribute(wallsRef.current?.geometry.attributes.uv.array, 2)
    )
  }, []);

  return (
    <mesh ref={wallsRef} position={[0, HEIGHT/2, 0]} castShadow>
      <boxGeometry args={[WIDTH, HEIGHT, DEPTH]} />
      <meshStandardMaterial {...texture} />
    </mesh>
  );
}

export default Walls;
