import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Float32BufferAttribute, MathUtils, Mesh, Points } from "three";

import CustomPointsMaterial from 'stories/particles/animated-sphere/materials/custom-points';
import { useControls } from "leva";

extend({ CustomPointsMaterial });

function SphereParticles() {
  const pointsRef = useRef<Points>(null);
  const meshRef = useRef<Mesh>(null);


  const { count } = useControls({
    count: { value: 25000, min: 1000, max: 100000, order: -2 },
  })

  const { meshVisibility, meshColor } = useControls('Mesh', {
    meshVisibility: {
      group: 'Mesh',
      value: true,
      label: 'Sphere visibility',
      order: 2
    },
    meshColor: {
      group: 'Mesh',
      value: '#ff6900',
      label: 'Sphere color',
      order: 2
    }
  });


  const particles = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 5000 particles
    // -> thus we need 15000 items in this array
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Positions
      const distance = 1;
      const theta = MathUtils.randFloatSpread(360);
      const phi = MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi)
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
      randoms.set([MathUtils.randFloat(0, 1)], i);
    }

    return {
      positions,
      randoms
    };
  }, [count]);

  useFrame(() => {
    pointsRef.current!.geometry.setAttribute('position', new Float32BufferAttribute(particles.positions, 3));
    pointsRef.current!.geometry.setAttribute('a_random', new Float32BufferAttribute(particles.randoms, 1));

    meshRef.current!.rotation.z += 0.001;
  });

  return (
    <>
      <mesh ref={meshRef} visible={meshVisibility}>
        <sphereGeometry args={[0.975, 32, 32]} />
        <meshPhysicalMaterial emissive={"#000000"} color={meshColor} metalness={1} roughness={0.75} reflectivity={0.5} />
      </mesh>
      <points ref={pointsRef} rotation={[Math.PI, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach='attributes-a_random'
            count={particles.randoms.length}
            array={particles.randoms}
            itemSize={1}
          />
        </bufferGeometry>

        <CustomPointsMaterial />
        {/* <pointsMaterial color="#FF86F5" size={0.01} sizeAttenuation /> */}
      </points>
    </>
  );
}

export default SphereParticles;
