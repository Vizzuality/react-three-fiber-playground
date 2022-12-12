import { useRef } from "react";
import { Mesh } from "three";

function Sphere() {
  const sphereRef = useRef<Mesh>(null);

  return (
    <>
      <mesh castShadow ref={sphereRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gold" roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="silver" roughness={0.5} metalness={0.5} />
      </mesh>
    </>
  );
}

export default Sphere;
