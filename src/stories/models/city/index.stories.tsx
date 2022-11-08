import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import City from "./meshes/city";

const StoryExplode = {
  title: 'Models',
};

export default StoryExplode;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

        <City />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const MeshCity = Template.bind({});
MeshCity.args = {
};
