import { Physics } from "@react-three/rapier";

import Controls from "./controls";
import Floor from "./floor";
import Player from "./player";

function Scene() {
  return (
    <Controls>
      <Physics>
        {/* <Debug /> */}
        <Player />
        <Floor />
      </Physics>
    </Controls>
  );
}

export default Scene;
