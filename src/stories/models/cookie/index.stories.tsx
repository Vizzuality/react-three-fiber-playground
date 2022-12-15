import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Perf } from 'r3f-perf';

import Cookie from "./meshes/cookie";
import { Suspense } from 'react';

const StoryCookie = {
  title: 'Models',
};

export default StoryCookie;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Canvas
        camera={{
          position: [5, 10, 15],
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
          position={[0, 10, -10]}
          intensity={1}
          castShadow
          shadow-camera-far={17.5}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
        />

        <Suspense fallback={null}>
          <Cookie position={[-5, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]} cookieColor="#A47551" />

          <Cookie />

          <Cookie position={[5, 0, 0]} rotation={[0, Math.PI * 0.5, 0]} cookieColor="#555555" />
        </Suspense>

        <OrbitControls makeDefault maxPolarAngle={Math.PI/2.5} minDistance={8} maxDistance={15} />
      </Canvas>
    </div>
  );
};

export const _1_CookieModel = Template.bind({});
_1_CookieModel.args = {
};
