import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";

import Camera from './camera';
import Lights from './ligths';
import Scene from "./scene";
import { Suspense } from 'react';

const StoryToTheTop = {
  title: 'Playground/To The Top',
};

export default StoryToTheTop;

const Template: Story = () => {
  return (
    <div className="h-screen -m-4 bg-black">
      <Suspense>
        <Canvas
          gl={{
            antialias: true,
          }}
          shadows
        >
          <Camera />

          <color attach="background" args={["#262837"]} />

          <Lights />
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
};
