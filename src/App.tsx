import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="bg-gray-500 w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
