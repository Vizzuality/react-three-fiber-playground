import { Text3D, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { Euler, Mesh, MeshMatcapMaterial, TorusGeometry, Vector3 } from "three";
// import { useFrame, useThree } from "@react-three/fiber";

function Box() {
  const textRef = useRef<Mesh<any>>(null);
  const count = 200;
  const texture = useTexture("/textures/matcaps/5.png");

  const material = useMemo(() => {
    return new MeshMatcapMaterial({
      matcap: texture,
    });
  }, [texture]);

  const geometry = useMemo(() => {
    return new TorusGeometry(0.3, 0.2, 20, 45);
  }, []);

  const meshes = useMemo(() => {
    const temp = [];

    for (let i = 0; i < count; i++) {

      const position = new Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      const rotation = new Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = Math.random();

      const mesh = (
        <mesh
          key={i}
          geometry={geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={[scale, scale, scale]}
        />
      );

      temp.push(mesh);
    }

    return temp;
  }, [geometry, material, count]);

  useEffect(() => {
    textRef.current!.geometry.center();
  }, []);

  console.log(meshes);



  return (
    <>
      <Text3D
        ref={textRef}
        font="/fonts/Poppins_Bold.json"
        size={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        curveSegments={4}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.02}
        material={material}
      >
        Hello World
      </Text3D>

      {meshes}
    </>
  );
}

export default Box;
