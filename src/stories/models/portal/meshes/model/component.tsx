import { useGLTF, useTexture } from "@react-three/drei";

interface PortalProps {
  nodes: any;
  materials: any;
}

function Portal() {


  const texture = useTexture({map: '/models/portal/baked.jpg'});

  const { nodes }: PortalProps = useGLTF("/models/portal/portal.glb");

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.baked.geometry}
      >
        <meshBasicMaterial
          {...texture}
          map-flipY={false}
        />
      </mesh>
    </group>
  );
}

export default Portal;
