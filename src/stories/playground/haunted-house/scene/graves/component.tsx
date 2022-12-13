import { useMemo } from "react";
import { MeshStandardMaterial, BoxGeometry, Vector3, Euler } from "three";

function Graves() {
  const geometry = useMemo(() => {
    return new BoxGeometry(0.6, 1, 0.2);
  }, []);

  const material = useMemo(() => {
    return new MeshStandardMaterial({ color: "#b2b6b1" });
  }, []);

  const count = 30;
  const HOUSE_SIZE = 4;
  const FLOOR_SIZE = 20;

  const meshes = useMemo(() => {
    const temp = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * i / count;

      const scale = Math.random() * 0.5 + 0.5;

      const position = new Vector3(
        Math.cos(angle) * (HOUSE_SIZE + (Math.random() * (FLOOR_SIZE/2 - HOUSE_SIZE))),
        0.4 * scale,
        Math.sin(angle) * (HOUSE_SIZE + (Math.random() * (FLOOR_SIZE/2 - HOUSE_SIZE)))
      );

      const rotation = new Euler(
        0,
        Math.random() * Math.PI,
        (Math.random() - 0.5) * 0.2
      );

      const mesh = (
        <mesh
          key={i}
          geometry={geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={[scale, scale, scale]}
          castShadow
        />
      );

      temp.push(mesh);
    }

    return temp;
  }, [geometry, material, count]);

  return (
    <group>
      {meshes}
    </group>
  );
}

export default Graves;
