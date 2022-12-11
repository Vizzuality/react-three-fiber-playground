import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import Mesh from "./meshes/box";

const StoryTextureFloor = {
  title: 'Textures',
};

export default StoryTextureFloor;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas>
        <ambientLight color="white" intensity={1} />
        <pointLight color="white" position={[0,0,100]} intensity={1} distance={0} />

        <Mesh />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export const _2_TextureFloor = Template.bind({});
_2_TextureFloor.args = {
};
