import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import { LayerMaterial, Depth, Fresnel } from "lamina";

import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  IcosahedronGeometry
} from 'three';

import Triangles, { TrianglesProps } from 'stories/grass/materials/triangles';

extend({ Triangles });

function Grass() {
  const meshRef = useRef<Mesh>(null);
  const geometryRef = useRef<BufferGeometry>(null);
  const customMaterialRef = useRef<TrianglesProps>();

  const NON_INDEXED_GEOMETRY = useMemo(() => {
    const geometry = new IcosahedronGeometry(1, 32);
    // const geometry = new BoxGeometry(1, 1, 1, 100, 100, 100);
    // const geometry = new SphereGeometry(1, 100, 100);
    // const geometry = new PlaneGeometry(1, 1, 100, 100);
    const nonIndexedGeometry = geometry.toNonIndexed();

    let count = nonIndexedGeometry.attributes.position.count || 0;
    let randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i+=3) {
      const r = Math.random();
      randoms[i] = r;
      randoms[i+1] = r;
      randoms[i+2] = r;
    }

    nonIndexedGeometry.setAttribute('a_random', new BufferAttribute(randoms, 1));

    return nonIndexedGeometry;

  }, []);

  useFrame(({ clock }) => {
    meshRef.current!.rotation.z = clock.getElapsedTime() / 2;

    customMaterialRef.current!.time = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={'attributes-position'}
          count={NON_INDEXED_GEOMETRY.attributes.position.count}
          array={NON_INDEXED_GEOMETRY.attributes.position.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.position.itemSize}
        />
        <bufferAttribute
          attach={'attributes-normal'}
          count={NON_INDEXED_GEOMETRY.attributes.normal.count}
          array={NON_INDEXED_GEOMETRY.attributes.normal.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.normal.itemSize}
        />
        <bufferAttribute
          attach={'attributes-a_random'}
          count={NON_INDEXED_GEOMETRY.attributes.a_random.count}
          array={NON_INDEXED_GEOMETRY.attributes.a_random.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.a_random.itemSize}
        />
        <bufferAttribute
          attach={'attributes-uv'}
          count={NON_INDEXED_GEOMETRY.attributes.uv.count}
          array={NON_INDEXED_GEOMETRY.attributes.uv.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.uv.itemSize}
        />
      </bufferGeometry>

      {/* Lamina */}
      <LayerMaterial lighting="lambert">
        <triangles ref={customMaterialRef} time={0.0} />

        <Depth colorA="green" colorB="aqua" alpha={0.9} mode="add" />

        <Fresnel color="#00F3D9" mode="add" />
      </LayerMaterial>
    </mesh>
  );
}

export default Grass;
