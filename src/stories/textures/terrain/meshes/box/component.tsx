// import { useFrame, useThree } from "@react-three/fiber";
import HeightMapMaterial from "../../materials/heightmap";

function Box() {

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1 / 1024, 1 / 1024, 1 / 1024]}
    >
      <planeGeometry args={[1024, 1024, 256, 256]} />
      <HeightMapMaterial />
    </mesh>
  );
}

export default Box;
