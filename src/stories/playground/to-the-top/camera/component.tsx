import { OrthographicCamera } from "@react-three/drei";
import { useWindowSize } from "usehooks-ts";

function Camera() {
  const { width, height } = useWindowSize();
  const aspect = width / height;

  return (
    // <PerspectiveCamera
    //   makeDefault
    //   position={[0, 1, 5]}
    //   // rotation={[Math.atan(-1 / Math.sqrt(2)), Math.PI/4, 0]}
    // />
    <OrthographicCamera
      makeDefault
      position={[0, 0, 0]}
      rotation={[Math.atan(-1 / Math.sqrt(2)), Math.PI/4, 0]}
      rotation-order="YXZ"
      zoom={25}
      top={height/2}
      bottom={-height/2}
      left={-aspect * height/2}
      right={aspect * height/2}
      near={-height}
      far={height}
    />
  );
}

export default Camera;
