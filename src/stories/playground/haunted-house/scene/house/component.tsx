import Bushes from "./bushes";
import Door from "./door";
import Walls from "./walls";

function House() {
  const HEIGHT = 2.5;

  return (
    <group>
      {/* Roof */}
      <mesh position={[0, HEIGHT + 0.5, 0]} rotation={[0, Math.PI * 0.25, 0]}>
        <coneGeometry args={[3.5, 1, 4]} />
        <meshStandardMaterial color="#b35f45" />
      </mesh>

      <Walls />

      <Door />

      <Bushes />
    </group>
  );
}

export default House;
