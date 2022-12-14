import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Explode from "./meshes/grass";

const StoryExplode = {
  title: 'Shaders/Triangles',
};

export default StoryExplode;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

        <Explode />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const _2_MeshGrass = Template.bind({});
_2_MeshGrass.args = {
};
