import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Float32BufferAttribute, MathUtils, Points } from "three";

import CustomPointsMaterial from 'stories/particles/animated-galaxy/materials/custom-points';
import { useControls } from "leva";

extend({ CustomPointsMaterial });

function SphereParticles() {
  const pointsRef = useRef<Points>(null);


  const { count, branches, spin } = useControls('Parameters', {
    count: { value: 25000, min: 1000, max: 100000, order: 0 },
    branches: { value: 10, min: 3, max: 20, order: 1, step: 1 },
    spin: { value: 1, min: -1, max: 1, step: 0.01, order: 2 },
  })

  const { distance, distanceScale } = useControls('Distance', {
    distance: { value: 5, min: 1, max: 10, step: 0.01, order: 3 },
    distanceScale: { value: 0.1, min: 0, max: 1, step: 0.001, order: 4 },
  })

  const particles = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 5000 particles
    // -> thus we need 15000 items in this array
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const distances = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Branches
      const d = Math.random() * distance;

      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = d * spin;

      const positiveOrNegative = Math.random() > 0.5 ? 1 : -1;

      let x = ((Math.sin(branchAngle + spinAngle)) * d) + (Math.random() * d * distanceScale * positiveOrNegative);
      let y = MathUtils.randFloat(-1, 1) * d * distanceScale;
      let z = ((Math.cos(branchAngle + spinAngle)) * d) + (Math.random() * d * distanceScale * positiveOrNegative);

      // // Positions
      // const distance = 1;
      // const theta = MathUtils.randFloatSpread(360);
      // const phi = MathUtils.randFloatSpread(360);

      // let x = distance * Math.sin(theta) * Math.cos(phi)
      // let y = distance * Math.sin(theta) * Math.sin(phi);
      // let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
      randoms.set([MathUtils.randFloat(0, 1)], i);
      distances.set([distance], i);
    }

    return {
      positions,
      randoms,
      distances,
    };
  }, [count, distance, distanceScale, branches, spin]);

  useFrame(() => {
    pointsRef.current!.geometry.setAttribute('position', new Float32BufferAttribute(particles.positions, 3));
    pointsRef.current!.geometry.setAttribute('a_random', new Float32BufferAttribute(particles.randoms, 1));
    pointsRef.current!.geometry.setAttribute('a_distance', new Float32BufferAttribute(particles.distances, 1));
  });

  return (
    <>
      <points ref={pointsRef} rotation={[Math.PI, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            array={particles.positions}
            count={particles.positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach='attributes-a_random'
            array={particles.randoms}
            count={particles.randoms.length}
            itemSize={1}
          />
          <bufferAttribute
            attach='attributes-a_distance'
            array={particles.distances}
            count={particles.distances.length}
            itemSize={1}
          />
        </bufferGeometry>

        <CustomPointsMaterial
          distanceScale={distanceScale}
        />
        {/* <pointsMaterial color="#FF86F5" size={0.01} sizeAttenuation /> */}
      </points>
    </>
  );
}

export default SphereParticles;
