import { useRef, useMemo, useCallback, useState } from "react";

import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { RigidBody, RigidBodyApi, useRapier } from "@react-three/rapier";

import { ControlsEnum } from "../controls/component";
import { Vector3 } from "three";

function Player() {
  const RADIUS = 1;
  const playerRef = useRef<RigidBodyApi>(null);

  const [
    smoothedCameraPosition,
  ] = useState<Vector3>(new Vector3(0, 0, 0));

  // Rapier
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();

  // Keyboard controls
  const [, getKeys] = useKeyboardControls<ControlsEnum>();
  const jumpPressed = useKeyboardControls<ControlsEnum>((st) => st.jump);

  const isInAir = useCallback(() => {
    if (playerRef.current) {
      let origin = playerRef.current?.translation();
      origin.y -= (RADIUS + (RADIUS * 0.01));
      const direction = { x: 0, y: -1, z: 0 };
      const ray = new rapier.Ray(origin, direction);
      const { toi } = rapierWorld.castRay(ray, 10, true) || { toi: Infinity };

      if (toi < 0.15) {
        return false;
      }

      return true;
    }
  }, [rapier, rapierWorld]);

  // Jump
  useMemo(() => {
    if (jumpPressed && !isInAir()) {
      playerRef.current?.applyImpulse({ x: 0, y: 0.3 * 100, z: 0 });
    }
    return false;
  }, [isInAir, jumpPressed])

  useFrame(({ camera, scene }, delta) => {
    const {
      forward,
      back,
      left,
      right,
    } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 100 * delta;
    const torqueStrength = 60 * delta;

    if (forward) {
      impulse.x -= impulseStrength;
      impulse.z -= impulseStrength;

      torque.x -= torqueStrength;
      torque.z += torqueStrength;
    }

    if (back) {
      impulse.z += impulseStrength;
      impulse.x += impulseStrength;

      torque.x += torqueStrength;
      torque.z -= torqueStrength;
    }

    if (left) {
      impulse.x -= impulseStrength;
      impulse.z += impulseStrength;

      torque.x += torqueStrength;
      torque.z += torqueStrength;
    }

    if (right) {
      impulse.x += impulseStrength;
      impulse.z -= impulseStrength;

      torque.x -= torqueStrength;
      torque.z -= torqueStrength;
    }

    if (!isInAir()) {
      playerRef.current?.applyImpulse(impulse);
      playerRef.current?.applyTorqueImpulse(torque);
    }


    // Camera position
    if (playerRef.current) {
      const position = playerRef.current.translation();

      // Camera posiion
      const cameraPosition = new Vector3();
      cameraPosition.copy(position);
      smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
      camera.position.copy(smoothedCameraPosition);
    }
  });

  return (
    <RigidBody
      ref={playerRef}
      colliders="ball"
      restitution={1}
      friction={1}
      position={[0, 1, 0]}
      linearDamping={0.5}
      angularDamping={0.5}
      mass={5}
    >
      <mesh receiveShadow castShadow>
        <icosahedronGeometry args={[RADIUS, RADIUS]} />
        <meshStandardMaterial color="navy" flatShading />
      </mesh>
    </RigidBody>
  );
}

export default Player;
