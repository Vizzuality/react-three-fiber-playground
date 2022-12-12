import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";

import Lights from "./meshes/lights";
import Sphere from "./meshes/scene";
import { OrbitControls } from '@react-three/drei';

const StoryLights = {
  title: 'Lights',
};

export default StoryLights;

const Template: Story = () => {
  return <div className="w-full h-screen bg-gray-500">
  <Canvas camera={{ position: [1, 2, 5] }} shadows>
    <Lights />
    <Sphere />

    <OrbitControls makeDefault />
  </Canvas>
</div>;
};

export const _1_Lights = Template.bind({});
_1_Lights.args = {
};
