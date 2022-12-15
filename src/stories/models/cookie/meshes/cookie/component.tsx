import { useGLTF, useTexture } from "@react-three/drei";
import { LinearEncoding, sRGBEncoding } from "three";

interface CookieProps {
  nodes: any;
  materials: any;
}

function Cookie(props: any) {

  const texture = useTexture({
    map: '/models/cookie/galleta.001.png',
    normalMap: '/models/cookie/galleta.001_normal.png',
    roughnessMap: '/models/cookie/galleta.001_roughness.png',
  }, (textures) => {
    // textures.map.encoding = THREE.sRGBEncoding

    console.log('textures', textures);
  });

  const { nodes }: CookieProps = useGLTF("/models/cookie/galleta.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        position={[0, -0.05, 0]}
      >
        <boxGeometry args={[5, 0.1, 5]} />
        <meshStandardMaterial color="grey" />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cookie001.geometry}
        rotation={[Math.PI, 0, 0]}
      >
        <meshStandardMaterial
          {...texture}
          map-flipY={false}
          map-encoding={sRGBEncoding}
          normalMap-flipY={false}
          normalMap-encoding={LinearEncoding}
          roughnessMap-flipY={false}
          roughnessMap-encoding={LinearEncoding}
        />
      </mesh>
    </group>
  );
}

export default Cookie;
