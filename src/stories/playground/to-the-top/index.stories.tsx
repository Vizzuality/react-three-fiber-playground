import { Story } from '@storybook/react/types-6-0';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from '@react-three/drei';

import { useWindowSize } from 'usehooks-ts';

import Lights from './ligths';
import Scene from "./scene";

const StoryToTheTop = {
  title: 'Playground/To The Top',
};

export default StoryToTheTop;

const Template: Story = () => {
  const { width, height } = useWindowSize();
  const aspect = width / height;

  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        gl={{
          antialias: true,
        }}
        shadows
      >
        <OrthographicCamera
          makeDefault
          position={[1, 1, 1]}
          zoom={1}
          top={height/2}
          bottom={-height/2}
          left={-aspect * height/2}
          right={aspect * height/2}
          near={-height}
          far={height}
        />

        <color attach="background" args={["#262837"]} />

        <Lights />
        <Scene />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
};
