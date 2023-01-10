import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight } from "three";

function Lights() {
  const directionalLightRef = useRef<DirectionalLight>(null);

  useFrame(({ camera }) => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.x = camera.position.x;
      directionalLightRef.current.position.y = 5;
      directionalLightRef.current.position.z = camera.position.z;

      directionalLightRef.current.target.position.x = camera.position.x;
      directionalLightRef.current.target.position.y = 0;
      directionalLightRef.current.target.position.z = camera.position.z;

      directionalLightRef.current.target.updateMatrixWorld();
    }
  })

  return (
    <>
      <ambientLight color="#b9d5ff" intensity={0.5} />

      <directionalLight
        ref={directionalLightRef}
        name="shadow-light"
        color="#b9d5ff"
        intensity={1}
        position={[0, 5, 0]}
        castShadow
        // shadow-mapSize-width={2048}
        // shadow-mapSize-height={2048}

        // shadow-camera-near={0.5}
        // shadow-camera-far={5000}

        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
    </>
  );
}

export default Lights;
