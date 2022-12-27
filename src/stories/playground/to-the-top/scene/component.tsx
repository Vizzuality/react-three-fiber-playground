import { Debug, Physics } from "@react-three/rapier";
import Floor from "./floor";

function Scene() {
  return (
    <Physics>
      <Debug />
      <Floor />
    </Physics>
  );
}

export default Scene;
