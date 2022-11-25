import { extend } from "@react-three/fiber";
import { useMemo } from "react";
import { MathUtils } from "three";

import CustomPointsMaterial from 'stories/particles/animated-sphere/materials/custom-points';

extend({ CustomPointsMaterial });

function SphereParticles() {
  const count = 5000;
  const radius = 1;
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

  console.log(particles);

  return (
    <points>
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

      <CustomPointsMaterial radius={radius} />
      {/* <pointsMaterial color="#FF86F5" size={0.01} sizeAttenuation /> */}
    </points>
  );
}

export default SphereParticles;
