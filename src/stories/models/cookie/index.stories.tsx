import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
          position: [0, 5, 10],
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        gl={{
          physicallyCorrectLights: true,
        }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          color="white"
          position={[0, 10, -10]}
          intensity={1}
          castShadow
          shadow-camera-far={17.5}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
        />

        <Suspense fallback={null}>
          <Cookie />
        </Suspense>

        <OrbitControls makeDefault maxPolarAngle={Math.PI/2.5} />
      </Canvas>
    </div>
  );
};

export const _1_CookieModel = Template.bind({});
_1_CookieModel.args = {
};
