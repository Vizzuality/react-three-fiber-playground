import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Mesh from "./meshes/box";

const StoryTextureTerrain = {
  title: 'Textures',
};

export default StoryTextureTerrain;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas>
        <ambientLight color="white" intensity={0.5} />
        <pointLight color="white" position={[0,0,100]} intensity={1} distance={0} />

        <Mesh />

        <PerspectiveCamera
          position={[1, 1, 1]}
          near={0.01}
          far={1000}
          makeDefault
        />
        <OrbitControls screenSpacePanning={false} />
      </Canvas>
    </div>
  );
};

export const _3_TextureTerrain = Template.bind({});
_3_TextureTerrain.args = {
};
