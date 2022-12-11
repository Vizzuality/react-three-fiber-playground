import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
// import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh } from "three";

function Box() {
  const boxRef = useRef<Mesh>(null);
  // const { camera } = useThree();

  const { metalness, roughness, displacementScale, aoMapIntensity } = useControls({
    aoMapIntensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    displacementScale: {
      value: 0.1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    metalness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
    roughness: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
  })

  const texture = useTexture({
    map: "/textures/door/Door_Wood_001_basecolor.jpg",
    alphaMap: "/textures/door/Door_Wood_001_opacity.jpg",
    normalMap: "/textures/door/Door_Wood_001_normal.jpg",
    aoMap: "/textures/door/Door_Wood_001_ambientOcclusion.jpg",
    displacementMap: "/textures/door/Door_Wood_001_height.png",
    metalnessMap: "/textures/door/Door_Wood_001_metallic.jpg",
    roughnessMap: "/textures/door/Door_Wood_001_roughness.jpg",
  });

  // useFrame(({ clock }) => {
  //   camera.position.x = Math.sin(clock.getElapsedTime()) * 3;
  //   camera.position.y = Math.sin(clock.getElapsedTime());
  //   camera.position.z = Math.cos(clock.getElapsedTime()) * 3;
  //   camera.lookAt(boxRef.current!.position);
  // });

  useEffect(() => {
    boxRef.current?.geometry.setAttribute(
      "uv2",
      new BufferAttribute(boxRef.current?.geometry.attributes.uv.array, 2)
    )
  }, []);

  return (
    <mesh ref={boxRef}>
      <planeGeometry args={[3, 3, 128, 128]} />
      <meshStandardMaterial
        {...texture}
        transparent
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        metalness={metalness}
        roughness={roughness}
        normalMap-encoding={LinearEncoding}
      />
    </mesh>
  );
}

export default Box;
