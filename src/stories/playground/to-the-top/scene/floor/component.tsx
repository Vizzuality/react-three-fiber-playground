import { InstancedRigidBodies, InstancedRigidBodyApi, Vector3Array } from "@react-three/rapier";
import { useLayoutEffect, useMemo, useRef } from "react";
import { BoxGeometry, Color, InstancedMesh, MeshStandardMaterial } from "three";

function Floor() {
  const instancedRigidRef = useRef<InstancedRigidBodyApi>(null);
  const instancedMeshRef = useRef<InstancedMesh>(null);

  const geometry = useMemo(() => {
    return new BoxGeometry(1, 1, 1);
  }, []);

  const material = useMemo(() => {
    return new MeshStandardMaterial({ color: "white" });
  }, []);

  const tiles = 100;
  const tileWidth = 10;
  const tileHeight = 2;
  const tileDepth = 10;

  const { positions: tilesPositions, scales: tilesScales } = useMemo(() => {
    const positions = [];
    const scales = [];
    const colors = [];


    for (let i = 0; i < tiles; i++) {
      for (let j = 0; j < tiles; j++) {
        const p = [
          (i * tileWidth - (tiles * tileWidth) + tileWidth / 2) + tileWidth / 2,
          // (Math.random() - 1) * 5,
          (-tileHeight * 2) - tileHeight / 2 * (i + j) + (tiles * tileHeight),
          (j * tileDepth - (tiles * tileDepth) + tileDepth / 2) + tileDepth / 2,
        ] as Vector3Array;

        positions.push(p);
        scales.push([tileWidth, tileHeight, tileDepth] as Vector3Array);
        colors.push(new Color(Math.random(), Math.random(), Math.random()));
      }
    }

    return {
      positions,
      scales,
      colors
    };
  }, [tiles, tileWidth, tileDepth]);

  useLayoutEffect(() => {
    if (!instancedMeshRef.current) return;

    // loop through the count of instanced meshes and asing a color for each of them
    for (let i = 0; i < instancedMeshRef.current.count; i++) {
      instancedMeshRef.current.setColorAt(i, new Color(Math.random(), Math.random(), Math.random()));
    }
  }, [])

  return (
    <>
      {/* <RigidBody type="fixed" position={[0, -tileHeight, 0]} friction={0.5}>
        <mesh
          geometry={geometry}
          scale={[tileWidth * tiles, tileHeight, tileDepth * tiles]}
          receiveShadow
        >
          <LayerMaterial lighting="standard">
            <Depth
              colorA={"#FFCC00"}
              colorB={"#00FFCC"}
              near={0}
              far={tileWidth * tiles * 0.5}
            />
          </LayerMaterial>
        </mesh>
      </RigidBody> */}

      <InstancedRigidBodies
        ref={instancedRigidRef}
        positions={tilesPositions}
        scales={tilesScales}
        colliders="cuboid"
        type="fixed"
      >
        <instancedMesh
          ref={instancedMeshRef}
          args={[geometry, material, tiles * tiles]}
          receiveShadow
        />
      </InstancedRigidBodies>
      {/* {tilesPositions.map((position, index) => (
        <RigidBody key={index} type="fixed" position={position} friction={0.5}>
          <mesh
            geometry={geometry}
            scale={[tileWidth, tileHeight, tileDepth]}
            receiveShadow
          >
            <meshStandardMaterial color={tilesColors[index]} />
          </mesh>
        </RigidBody>
      ))} */}
    </>
  );
}

export default Floor;
