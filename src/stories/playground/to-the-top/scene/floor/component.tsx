import { RigidBody } from "@react-three/rapier";
import { Depth, LayerMaterial } from "lamina";
import { useMemo } from "react";
import { BoxGeometry } from "three";

function Floor() {
  const geometry = useMemo(() => {
    return new BoxGeometry(1, 1, 1);
  }, []);

  const tiles = 10;
  const tileWidth = 100;
  const tileHeight = 2;
  const tileDepth = 100;

  // const tilesPositions = useMemo(() => {
  //   const positions = [];

  //   for (let i = 0; i < tiles; i++) {
  //     for (let j = 0; j < tiles; j++) {
  //       const p = new Vector3(
  //         i * tileWidth - (tiles * tileWidth) / 2 + tileWidth / 2,
  //         // (Math.random() - 1) * 5,
  //         -tileHeight,
  //         j * tileDepth - (tiles * tileDepth) / 2 + tileDepth / 2
  //       );
  //       positions.push(p);
  //     }
  //   }

  //   return positions;
  // }, [tiles, tileWidth, tileDepth]);

  return (
    <>
      <RigidBody type="fixed" position={[0, -tileHeight, 0]} friction={0.5}>
        <mesh
          geometry={geometry}
          scale={[tileWidth * tiles, tileHeight, tileDepth * tiles]}
          receiveShadow
        >
          <LayerMaterial lighting="standard">
            {/* <Gradient
              colorA={"#000000"}
              colorB={"#FFFFFF"}
            /> */}
            <Depth
              colorA={"#FFCC00"}
              colorB={"#00FFCC"}
              near={0}
              far={tileWidth * tiles * 0.5}
            />
          </LayerMaterial>
        </mesh>
      </RigidBody>

      {/* {tilesPositions.map((position, index) => (
        <RigidBody key={index} type="fixed" position={position} friction={0.5}>
          <mesh
            geometry={geometry}
            scale={[tileWidth, tileHeight, tileDepth]}
            receiveShadow
          >
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>
      ))} */}
    </>
  );
}

export default Floor;
