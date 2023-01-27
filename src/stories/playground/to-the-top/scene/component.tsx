import { Physics, Debug } from "@react-three/rapier";

import Controls from "./controls";
import Floor from "./floor";
import Player from "./player";

function Scene() {
  return (
    <Controls>
      <Physics timeStep="vary">
        <Debug />
        <Player />
        <Floor />
      </Physics>
    </Controls>
  );
}

export default Scene;
