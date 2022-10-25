import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Icosahedron from "./meshes/icosahedron";

function App() {

  return (
    <div className="bg-gray-500 w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.25} />
        <pointLight color="white" position={[0, -10, 10]} intensity={0.5} />
        <directionalLight color="white" position={[0, 10, 10]} intensity={0.5} />

        <Icosahedron />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
