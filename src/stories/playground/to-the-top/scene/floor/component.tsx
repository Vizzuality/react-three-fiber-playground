import { Attractor, CuboidCollider, InstancedRigidBodies, InstancedRigidBodyApi, RigidBody, Vector3Array } from "@react-three/rapier";
import { useLayoutEffect, useMemo, useRef } from "react";
import { BoxGeometry, Color, InstancedMesh, MeshStandardMaterial, Vector3 } from "three";

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
    scales: tilesScales,
    obstacles: tilesObstacles
  } = useMemo(() => {
    const positions = [];
    const scales = [];
    const colors = [];
    const obstacles = [];


    for (let i = 0; i < tiles; i++) {
      for (let j = 0; j < tiles; j++) {
        const p = [
          (i * tileWidth - (tiles * tileWidth) + tileWidth / 2) + tileWidth / 2,
          // (Math.random() - 1) * 5,
          (-tileHeight * 2) - tileHeight / 2 * (i + j) + (tiles * tileHeight),
          (j * tileDepth - (tiles * tileDepth) + tileDepth / 2) + tileDepth / 2,
        ] as Vector3Array;

        positions.push(p as Vector3Array);
        obstacles.push({
          id: `${i}-${j}`,
          type: 'vacum',
          position: new Vector3(p[0], p[1] + tileHeight / 2, p[2])
        });
        scales.push([tileWidth, tileHeight, tileDepth] as Vector3Array);
        colors.push(new Color(Math.random(), Math.random(), Math.random()));
      }
    }

    return {
      positions,
      scales,
      colors,
      obstacles
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
    <group>
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

      <Attractor
        range={10}
        strength={10}
        position={[0,1,0]}
      />

      {/* {tilesObstacles.map((p, i) => {
        const p1 = p.position.clone();

        return (
          <Attractor
            range={10}
            strength={0.1}
            position={p1.add(new Vector3(0, 1, 0))}
          />
        );
      })} */}
    </group>
  );
}

export default Floor;
