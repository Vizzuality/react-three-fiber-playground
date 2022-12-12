import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { CameraHelper, DirectionalLight, OrthographicCamera, RectAreaLight, SpotLight } from "three";

function Lights() {
  const directionalLightRef = useRef<DirectionalLight>(null);
  const rectAreaLightRef = useRef<RectAreaLight>(null);
  const spotLightRef = useRef<SpotLight>(null);

  const shadowCameraRef = useRef<OrthographicCamera>(null);

  const {
    ambientEnabled,
    ambientColor,
    ambientIntensity
  } = useControls('Ambient Light', {
    ambientEnabled: {
      value: true,
      label: "Ambient Enabled",
      order: 0,
    },
    ambientColor: {
      value: "#ffffff",
      label: "Ambient Color",
      order: 1,
    },
    ambientIntensity: {
      value: 0.5,
      label: "Ambient Intensity",
      order: 2,
    }
  });

  const {
    directionalEnabled,
    directionalColor,
    directionalIntensity,
    directionalPosition,
    directionalCastShadow
  } = useControls('Directional Light', {
    directionalEnabled: {
      value: true,
      label: "Directional Enabled",
      order: 0,
    },
    directionalColor: {
      value: "#ffffff",
      label: "Directional Color",
      order: 1,
    },
    directionalIntensity: {
      value: 0.5,
      label: "Directional Intensity",
      order: 2,
    },
    directionalPosition: {
      value: [2, 5, 5],
      label: "Directional Position",
      order: 3,
    },
    directionalCastShadow: {
      value: true,
      label: "Directional Cast Shadow",
      order: 4,
    },
  });

  const {
    pointEnabled,
    pointColor,
    pointIntensity,
    pointPosition,
    pointCastShadow
  } = useControls('Point Light', {
    pointEnabled: {
      value: false,
      label: "Point Enabled",
      order: 0,
    },
    pointColor: {
      value: "#ffffff",
      label: "Point Color",
      order: 1,
    },
    pointIntensity: {
      value: 0.5,
      label: "Point Intensity",
      order: 2,
    },
    pointPosition: {
      value: [-2, 5, 5],
      label: "Point Position",
      order: 3,
    },
    pointCastShadow: {
      value: true,
      label: "Point Cast Shadow",
      order: 4,
    },
  });

  const {
    hemisphereEnabled,
    hemisphereColor,
    hemisphereGroundColor,
    hemisphereIntensity,
    hemispherePosition,
  } = useControls('Hemisphere Light', {
    hemisphereEnabled: {
      value: false,
      label: "Hemisphere Enabled",
      order: 0,
    },
    hemisphereColor: {
      value: "#ffffff",
      label: "Hemisphere Sky Color",
      order: 1,
    },
    hemisphereGroundColor: {
      value: "#000000",
      label: "Hemisphere Ground Color",
      order: 2,
    },
    hemisphereIntensity: {
      value: 1,
      label: "Hemisphere Intensity",
      order: 3,
    },
    hemispherePosition: {
      value: [0, 50, 0],
      label: "Hemisphere Position",
      order: 3,
    },
  });

  const {
    rectEnabled,
    rectColor,
    rectIntensity,
    rectPosition,
    rectWidth,
    rectHeight,
  } = useControls('Rect Light', {
    rectEnabled: {
      value: false,
      label: "Rect Enabled",
      order: 0,
    },
    rectColor: {
      value: "#ffffff",
      label: "Rect Color",
      order: 1,
    },
    rectIntensity: {
      value: 1,
      label: "Rect Intensity",
      order: 2,
    },
    rectPosition: {
      value: [0.5, 1.2, 1],
      label: "Rect Position",
      order: 3,
    },
    rectWidth: {
      value: 1,
      label: "Rect Width",
      order: 4,
    },
    rectHeight: {
      value: 1,
      label: "Rect Height",
      order: 5,
    },
  });

  const {
    spotEnabled,
    spotColor,
    spotIntensity,
    spotPosition,
    spotCastShadow,
    spotAngle,
    spotPenumbra,
    spotDistance,
  } = useControls('Spot Light', {
    spotEnabled: {
      value: false,
      label: "Spot Enabled",
      order: 0,
    },
    spotColor: {
      value: "#ffffff",
      label: "Spot Color",
      order: 1,
    },
    spotIntensity: {
      value: 1,
      label: "Spot Intensity",
      order: 2,
    },
    spotPosition: {
      value: [-2, 5, 5],
      label: "Spot Position",
      order: 3,
    },
    spotCastShadow: {
      value: true,
      label: "Spot Cast Shadow",
      order: 4,
    },
    spotAngle: {
      value: Math.PI / 8,
      label: "Spot Angle",
      order: 5,
      min: 0,
      max: Math.PI / 2,
      step: 0.01,
    },
    spotPenumbra: {
      value: 0.25,
      label: "Spot Penumbra",
      order: 6,
      min: 0,
      max: 1,
      step: 0.01,
    },
    spotDistance: {
      value: 15,
      label: "Spot Distance",
      order: 7,
      min: 0,
      max: 100,
      step: 0.01,
    },
  });

  useFrame(() => {
    if (rectAreaLightRef.current) {
      rectAreaLightRef.current.lookAt(0, 0, 0);
    }

    if (spotLightRef.current) {
      spotLightRef.current.lookAt(0, 0, 0);
    }
  });

<<<<<<< HEAD
  useHelper(shadowCameraRef, CameraHelper);

=======
>>>>>>> 045fa8da97d019810360a5b53c9b4af78dada5eb
  return (
    <>
      <ambientLight
        visible={ambientEnabled}
        color={ambientColor}
        intensity={ambientIntensity}
      />

      <directionalLight
<<<<<<< HEAD
        ref={directionalLightRef}
=======
>>>>>>> 045fa8da97d019810360a5b53c9b4af78dada5eb
        visible={directionalEnabled}
        color={directionalColor}
        intensity={directionalIntensity}
        position={directionalPosition}
        castShadow={directionalCastShadow}
<<<<<<< HEAD
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
=======
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
>>>>>>> 045fa8da97d019810360a5b53c9b4af78dada5eb
      />

      <pointLight
        color={pointColor}
        intensity={pointIntensity}
        position={pointPosition}
        castShadow={pointCastShadow}
        visible={pointEnabled}
      />

      <hemisphereLight
        color={hemisphereColor}
        groundColor={hemisphereGroundColor}
        intensity={hemisphereIntensity}
        position={hemispherePosition}
        visible={hemisphereEnabled}
      />

      <rectAreaLight
        ref={rectAreaLightRef}
        visible={rectEnabled}
        color={rectColor}
        intensity={rectIntensity}
        position={rectPosition}
        width={rectWidth}
        height={rectHeight}
      />

      <spotLight
        ref={spotLightRef}
        visible={spotEnabled}
        color={spotColor}
        intensity={spotIntensity}
        position={spotPosition}
        angle={spotAngle}
        penumbra={spotPenumbra}
        distance={spotDistance}
        castShadow={spotCastShadow}
      />
    </>
  );
}

export default Lights;
