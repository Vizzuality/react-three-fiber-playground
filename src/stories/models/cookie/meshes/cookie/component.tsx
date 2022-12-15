import { useGLTF, useTexture } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { LinearEncoding, sRGBEncoding } from "three";
import { motion } from "framer-motion-3d";
import { useState } from "react";
interface CookieProps {
  nodes: any;
  materials: any;
}

function Cookie(props: any) {
  const [selected, setSelected] = useState<boolean>(false);

  const texture = useTexture({
    map: '/models/galleta/galleta_4px_compressed.png',
    normalMap: '/models/galleta/galleta_normal_4px_compressed.png',
  });

  const { nodes, materials }: CookieProps = useGLTF("/models/galleta/galleta.gltf");

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
        onClick={(e) => {
          e.stopPropagation();
          setSelected(!selected);
        }}
      >
        <meshStandardMaterial
          {...texture}
          map-flipY={false}
          map-encoding={sRGBEncoding}
          normalMap-flipY={false}
          normalMap-encoding={LinearEncoding}
        />

        {/*
          Render all nodes that are chips with its own geometry and their own material in a loop. They should cast and receive shadow
          We are going o animate their position-y with framer-motion-3d to make them look like they are falling
        */}
        {Object.keys(nodes).map((node) => {
          if (node.includes("chip")) {
            const n = nodes[node];

            return (
              <motion.mesh
                key={node}
                {...n}
                geometry={n.geometry}
                material={materials['chocolate.001']}
                castShadow
                receiveShadow
                animate={{
                  y: selected ? n.position.y - (0.25 + (Math.random() * 0.5)) : n.position.y,
                }}
                transition={{
                  duration: 0.5,
                  ease: selected ? "backOut" : 'anticipate',
                }}
              />
            );
          }

          return null;
        })}
      </mesh>
    </group>
  );
}

export default Cookie;
