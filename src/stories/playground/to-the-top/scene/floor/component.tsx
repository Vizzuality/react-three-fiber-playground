import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { BoxGeometry, Vector3 } from "three";

function Floor() {
  const geometry = useMemo(() => {
    return new BoxGeometry(1, 1, 1);
  }, []);

  const tiles = 10;
  const tileWidth = 100;
  const tileHeight = 2;
  const tileDepth = 100;

  const tilesPositions = useMemo(() => {
    const positions = [];

    for (let i = 0; i < tiles; i++) {
      for (let j = 0; j < tiles; j++) {
        const p = new Vector3(
          i * tileWidth - (tiles * tileWidth) / 2 + tileWidth / 2,
          // (Math.random() - 1) * 5,
          -tileHeight,
          j * tileDepth - (tiles * tileDepth) / 2 + tileDepth / 2
        );
        positions.push(p);
      }
    }

    return positions;
  }, [tiles, tileWidth, tileDepth]);

  return (
    <>
      {tilesPositions.map((position, index) => (
        <RigidBody key={index} type="fixed" position={position} friction={0.5}>
          <mesh
            geometry={geometry}
            scale={[tileWidth, tileHeight, tileDepth]}
            receiveShadow
          >
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}

export default Floor;
