import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Box } from "./meshes/box";

function App() {

  return (
    <div className="bg-gray-500 w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight color="white" position={[0, 10, 4]} />

        <Box />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
