import { extend, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { PlaneGeometry } from "three";

import CustomPointsMaterial from 'stories/particles/animated-plane/materials/custom-points';

extend({ CustomPointsMaterial });

function SphereParticles() {
  const radius = 1;
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const { width, height } = viewport;
    const geometry = new PlaneGeometry(width, height, 200, 200);

    return geometry;
  }, [viewport]);

  return (
    <points>
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
      </bufferGeometry>

      <CustomPointsMaterial radius={radius} />
      {/* <pointsMaterial color="#FF86F5" size={0.01} sizeAttenuation /> */}
    </points>
  );
}

export default SphereParticles;
