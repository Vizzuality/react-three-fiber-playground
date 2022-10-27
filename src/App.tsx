import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Explode from "./stories/explode/meshes/explode";

function App() {

  return (
    <div className="w-full h-screen bg-gray-500">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight color="white" position={[-10, 10, 10]} intensity={0.5} />

        <Explode />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
