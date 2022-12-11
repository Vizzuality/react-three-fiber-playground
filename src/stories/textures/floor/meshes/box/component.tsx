import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
// import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, NearestFilter, PlaneGeometry, RepeatWrapping, Texture, Vector2 } from "three";

function Box() {
  const boxRef = useRef<Mesh<PlaneGeometry>>(null);
  // const { camera } = useThree();

  const { displacementScale, aoMapIntensity, roughness } = useControls({
    aoMapIntensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    displacementScale: {
      value: 0.15,
      min: 0,
      max: 10,
      step: 0.1,
    },
    roughness: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });


  const texture = useTexture({
    map: "/textures/floor/Stylized_Stone_Floor_005_basecolor.jpg",
    normalMap: "/textures/floor/Stylized_Stone_Floor_005_normal.jpg",
    displacementMap: "/textures/floor/Stylized_Stone_Floor_005_height.png",
    aoMap: "/textures/floor/Stylized_Stone_Floor_005_ambientOcclusion.jpg",
    roughnessMap: "/textures/floor/Stylized_Stone_Floor_005_roughness.jpg",
  }, (textures) => {
    const txts = textures as Texture[];
    const aspectRatio = boxRef.current!.geometry.parameters.height / boxRef.current!.geometry.parameters.width;

    console.log(boxRef.current!.geometry.parameters.width);
    console.log(boxRef.current!.geometry.parameters.height);

    txts.forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.offset = new Vector2(0, 0);
      texture.repeat = new Vector2(10, 10 * aspectRatio);

      texture.magFilter = NearestFilter;
    });
  });

  // useFrame(({ clock }) => {
  //   camera.position.x = Math.sin(clock.getElapsedTime()) * 3;
  //   // camera.position.z = Math.cos(clock.getElapsedTime()) * 3;
  //   camera.lookAt(boxRef.current!.position);
  // });

  useEffect(() => {
    boxRef.current?.geometry.setAttribute(
      "uv2",
      new BufferAttribute(boxRef.current?.geometry.attributes.uv.array, 2)
    )
  }, []);

  return (
    <mesh ref={boxRef} rotation={[0, 0, 0]}>
      <planeGeometry args={[100, 50, 528, 528]} />
      <meshStandardMaterial
        {...texture}
        roughness={roughness}
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        normalMap-encoding={LinearEncoding}
      />
    </mesh>
  );
}

export default Box;
