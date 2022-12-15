import { useGLTF, useTexture } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { LinearEncoding, sRGBEncoding } from "three";

interface CookieProps {
  nodes: any;
  materials: any;
}

function Cookie(props: any) {

  const texture = useTexture({
    map: '/models/galleta/galleta_4px_compressed.png',
    normalMap: '/models/galleta/galleta_normal_4px_compressed.png',
  });

  const { nodes, materials }: CookieProps = useGLTF("/models/galleta/galleta.gltf");

  console.log(materials["chocolate.001"]);

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        position={[0, -0.05, 0]}
      >
        <boxGeometry args={[5, 0.1, 5]} />

        <LayerMaterial lighting="standard" color="grey">
          <Gradient colorA="#555555" colorB="#998899" mapping="uv" axes="y" />
        </LayerMaterial>
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cookie.geometry}
        rotation={[Math.PI, 0, 0]}
      >
        <meshStandardMaterial
          {...texture}
          map-flipY={false}
          map-encoding={sRGBEncoding}
          normalMap-flipY={false}
          normalMap-encoding={LinearEncoding}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip001.geometry}
          material={materials["chocolate.001"]}
          position={[-0.09, -0.13, 0.35]}
          rotation={[2.81, 0.98, -0.98]}
          scale={[-0.07, 0.13, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip002.geometry}
          material={materials["chocolate.001"]}
          position={[-0.52, -0.06, -0.03]}
          rotation={[-2.94, -0.7, -1.41]}
          scale={[0.04, 0.1, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip003.geometry}
          material={materials["chocolate.001"]}
          position={[-0.1, -0.06, 0.04]}
          rotation={[0, -1.03, -Math.PI]}
          scale={[-0.19, 0.1, 0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip004.geometry}
          material={materials["chocolate.001"]}
          position={[-0.05, -0.06, 0.01]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.1, 0.1, 0.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip005.geometry}
          material={materials["chocolate.001"]}
          position={[-0.26, -0.06, 0.12]}
          rotation={[-2.94, -0.7, -1.41]}
          scale={[0.05, 0.13, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip006.geometry}
          material={materials["chocolate.001"]}
          position={[-0.1, -0.06, 0.04]}
          rotation={[-Math.PI, 1.03, 0]}
          scale={[0.11, 0.08, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip007.geometry}
          material={materials["chocolate.001"]}
          position={[0.13, -0.17, -0.07]}
          rotation={[-1.92, 0, -1.21]}
          scale={[0.11, 0.15, 0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip008.geometry}
          material={materials["chocolate.001"]}
          position={[-0.1, -0.06, 0.04]}
          rotation={[-1.34, 0.97, -1.84]}
          scale={[0.09, 0.09, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip009.geometry}
          material={materials["chocolate.001"]}
          position={[-0.23, -0.06, 0.23]}
          rotation={[-Math.PI, 1.03, 0]}
          scale={[0.12, 0.09, 0.14]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip010.geometry}
          material={materials["chocolate.001"]}
          position={[1.02, -0.21, 0.45]}
          rotation={[0.77, -0.43, -0.53]}
          scale={[0.16, 0.13, 0.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip011.geometry}
          material={materials["chocolate.001"]}
          position={[-0.57, -0.06, 0.23]}
          rotation={[-1.86, -1.44, -0.38]}
          scale={[0.05, 0.14, 0.19]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip012.geometry}
          material={materials["chocolate.001"]}
          position={[-0.1, -0.06, 0.04]}
          rotation={[-0.03, 0.46, 1.44]}
          scale={[0.05, 0.14, 0.19]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chip013.geometry}
          material={materials["chocolate.001"]}
          position={[-0.03, 0, 0.32]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.11, 0.11, 0.13]}
        />
      </mesh>
    </group>
  );
}

export default Cookie;
