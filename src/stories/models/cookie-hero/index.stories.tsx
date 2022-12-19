import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";

import { Perf } from 'r3f-perf';

import Cookie from "./meshes/cookie";
import { Suspense } from 'react';

const StoryCookie = {
  title: 'Models',
};

export default StoryCookie;

const Template: Story = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        background: 'linear-gradient(90deg, #CC3128 0%, #DD493E 21.35%, #E5594C 35.37%, #E86154 49.48%, #E65C4F 61.64%, #DF4D41 73.87%, #D33930 89.63%, #CC3027 96.09%, #CD3128 100%)'
      }}
    >
      <Canvas
        camera={{
          position: [2.5, 6.75, 7.5],
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        gl={{
          physicallyCorrectLights: true,
        }}
        shadows
      >
        {process.env.NODE_ENV === 'development' && <Perf />}

        <ambientLight intensity={0.5} />
        <directionalLight
          color="white"
          position={[0, 5, -2.5]}
          intensity={2}
          castShadow
          shadow-camera-far={10}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
        />

        <Suspense fallback={null}>
          <Cookie />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const _4_CookieHero = Template.bind({});
_4_CookieHero.args = {
};
