import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TorusParticles from "./meshes/torus";

const StoryTorusParticles = {
  title: 'Shaders/Particles',
};

export default StoryTorusParticles;

const Template: Story = () => {
  return <div className="w-full h-screen bg-gray-500">
  <Canvas>
    <ambientLight intensity={0.25} />
    <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

    <TorusParticles />

    <OrbitControls />
  </Canvas>
</div>;
};

export const _3_ParticlesRandomTorus = Template.bind({});
_3_ParticlesRandomTorus.args = {
};
