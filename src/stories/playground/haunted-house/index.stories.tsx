import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";

import Scene from "./scene";
import { OrbitControls } from '@react-three/drei';

const StoryHauntedHouse = {
  title: 'Playground/Haunted House',
};

export default StoryHauntedHouse;

const Template: Story = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [4, 4, 10] }}
        color="#262837"
        gl={{
          antialias: true,
        }}
        shadows
      >
        <ambientLight color="#b9d5ff" intensity={0.12} />
        <directionalLight
          color="#b9d5ff"
          intensity={0.12}
          position={[4, 5, -2]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <fog attach="fog" color="#262837" near={3} far={15}  />
        <color attach="background" args={["#262837"]} />

        <Scene />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
};
