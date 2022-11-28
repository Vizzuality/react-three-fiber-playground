import { extend } from "@react-three/fiber";
import { useMemo } from "react";
import { BufferAttribute, TorusGeometry } from "three";

import CustomPointsMaterial from 'stories/particles/animated-torus/materials/custom-points';

extend({ CustomPointsMaterial });

function TorusParticles() {
  const radius = 1;
  const particles = useMemo(() => {
    const geometry = new TorusGeometry(radius, radius/3, 50, 100);

    let count = geometry.attributes.position.count * geometry.attributes.position.itemSize || 0;
    let randoms = new Float32Array(count);

    for (let i = 0; i < count; i+=3) {
      const r = Math.random();
      randoms[i] = r;
      randoms[i+1] = r;
      randoms[i+2] = r;
    }

    geometry.setAttribute('a_random', new BufferAttribute(randoms, 1));

    return geometry;
  }, []);

  return (
    <points rotation={[Math.PI * 3 / 4, Math.PI * 3.5 / 4, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          {...particles.attributes.position}
        />
        <bufferAttribute
          attach='attributes-normal'
          {...particles.attributes.normal}
        />
        <bufferAttribute
          attach='attributes-uv'
          {...particles.attributes.uv}
        />
        <bufferAttribute
          attach='attributes-a_random'
          {...particles.attributes.a_random}
        />
      </bufferGeometry>

      <CustomPointsMaterial radius={radius} />
    </points>
  );
}

export default TorusParticles;
