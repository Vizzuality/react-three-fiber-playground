import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Cookie from "./meshes/model";
import { Suspense } from 'react';

const StoryPortal = {
  title: 'Models',
};

export default StoryPortal;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Canvas
        flat
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 1, 2, 6 ]
      } }
      >
        <ambientLight intensity={1} />
        <directionalLight />
        <hemisphereLight intensity={0.35} />

        <Suspense fallback={null}>
          <Cookie />
        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export const _3_PortalModel = Template.bind({});
_3_PortalModel.args = {
};
