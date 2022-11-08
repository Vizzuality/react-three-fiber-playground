import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function City() {
  const gltf = useGLTF('/models/city.glb');

  // const MESHES = useMemo(() => {
  //   return Object.values(nodes)
  //     .map((node) => {
  //       if (node.type === 'Mesh') {
  //         return (
  //           <mesh castShadow receiveShadow geometry={node.geometry} material={materials['Material.001']} />
  //         )
  //       }

  //       return null;
  //     })
  //     .filter(n => !!n);
  // }, [nodes, materials]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}

export default City;
