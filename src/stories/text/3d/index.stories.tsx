import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import Mesh from "./meshes/box";

const Story3dText = {
  title: 'Text',
};

export default Story3dText;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas>
        <ambientLight color="white" intensity={0.5} />
        <pointLight color="white" position={[0,0,100]} intensity={1} distance={0} />

        <Mesh />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export const _1_3dText = Template.bind({});
_1_3dText.args = {
};
