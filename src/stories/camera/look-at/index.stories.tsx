import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";

import Sphere from "./meshes/sphere";

const StoryCameraLookAt = {
  title: 'Camera',
};

export default StoryCameraLookAt;

const Template: Story = () => {
  return <div className="w-full h-screen bg-gray-500">
  <Canvas>
    <ambientLight intensity={0.25} />
    <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

    <Sphere />
  </Canvas>
</div>;
};

export const _1_CameraLookAt = Template.bind({});
_1_CameraLookAt.args = {
};
