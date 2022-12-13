import { useMemo } from "react";
import { MeshStandardMaterial, SphereGeometry } from "three";

function Bushes() {
  const geometry = useMemo(() => {
    return new SphereGeometry(1, 16, 16);
  }, []);

  const material = useMemo(() => {
    return new MeshStandardMaterial({ color: "#89c854" });
  }, []);

  return (
    <>
      <mesh geometry={geometry} material={material} position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} castShadow />
      <mesh geometry={geometry} material={material} position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} castShadow />

      <mesh geometry={geometry} material={material} position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} castShadow />
      <mesh geometry={geometry} material={material} position={[-1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} castShadow />
    </>
  );
}

export default Bushes;
