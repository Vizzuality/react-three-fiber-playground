import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import SphereParticles from "./meshes/sphere";

const StorySphereParticles = {
  title: 'Shaders/Particles',
};

export default StorySphereParticles;

const Template: Story = () => {
  return <div className="w-full h-screen bg-gray-500">
  <Canvas camera={{ position: [0, 0, 4] }}>
    <ambientLight intensity={0.25} />
    <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

    <SphereParticles />

    <OrbitControls />
  </Canvas>
</div>;
};

export const _2_ParticlesRandomSphere = Template.bind({});
_2_ParticlesRandomSphere.args = {
};
