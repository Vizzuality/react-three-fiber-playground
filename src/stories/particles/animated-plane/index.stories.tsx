import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import PlaneParticles from "./meshes/plane";

const StoryPlaneParticles = {
  title: 'Shaders/Particles',
};

export default StoryPlaneParticles;

const Template: Story = () => {
  return <div className="w-full h-screen bg-gray-500">
  <Canvas camera={{ position: [0, -1.5, 0.0] }}>
    <ambientLight intensity={0.25} />
    <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

    <PlaneParticles />

    <OrbitControls />
  </Canvas>
</div>;
};

export const _4_ParticlesWavePlane = Template.bind({});
_4_ParticlesWavePlane.args = {
};
