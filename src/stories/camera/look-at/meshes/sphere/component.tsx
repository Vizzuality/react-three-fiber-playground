import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Sphere() {
  const sphereRef = useRef<Mesh>(null);
  const { camera } = useThree();

  useFrame(({ clock }) => {
    camera.position.x = Math.sin(clock.getElapsedTime()) * 3;
    camera.position.y = Math.sin(clock.getElapsedTime());
    camera.position.z = Math.cos(clock.getElapsedTime()) * 3;
    camera.lookAt(sphereRef.current!.position);
  });

  return (
    <mesh ref={sphereRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF86F5" />
    </mesh>
  );
}

export default Sphere;
