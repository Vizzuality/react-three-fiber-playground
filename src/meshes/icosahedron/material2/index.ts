import { Abstract } from 'lamina/vanilla';

//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

export interface CustomLayerProps extends CustomLayer {
  time: number;
}

class CustomLayer extends Abstract {
  // define your uniforms
  static u_time = 0;

  // pass your shader code here
  static vertexShader = glslify(VERTEX);
  static fragmentShader = glslify(FRAGMENT);

  // @ts-ignore
  constructor(props) {
    // @ts-ignore
    super(CustomLayer, {
      name: 'CustomLayer',
      ...props,
    });
  }
}

export default CustomLayer;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      customLayer: ReactThreeFiber.Object3DNode<CustomLayer, typeof CustomLayer>;
    }
  }
}
