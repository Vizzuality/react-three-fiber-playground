import { CuboidCollider, InstancedRigidBodies, InstancedRigidBodyApi, RigidBody, Vector3Array } from "@react-three/rapier";
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

  const tiles = 4;
  const tileWidth = 10;
  const tileHeight = 2;
  const tileDepth = 10;

  const {
    positions: tilesPositions,
    scales: tilesScales
  } = useMemo(() => {
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
  }, [tiles, tileWidth, tileHeight, tileDepth]);

  useLayoutEffect(() => {
    if (!instancedMeshRef.current) return;

    // loop through the count of instanced meshes and asing a color for each of them
    for (let i = 0; i < instancedMeshRef.current.count; i++) {
      instancedMeshRef.current.setColorAt(i, new Color(Math.random(), Math.random(), Math.random()));
    }
  }, [])

  return (
    <>
      {/* Dead zone */}
      <RigidBody
        type="fixed"
        position={[
          0,
          -tileHeight * 4,
          0
        ]}
      >
        <CuboidCollider
          args={[tiles * 2 * tileWidth, tileHeight, tiles * 2 * tileDepth]}
          sensor
          onIntersectionEnter={() => console.log("Goal!")}
        />
      </RigidBody>


      {/* Floor */}
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
    </>
  );
}

export default Floor;
