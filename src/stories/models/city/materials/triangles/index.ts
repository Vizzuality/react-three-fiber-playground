import { Abstract } from 'lamina/vanilla';

//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

export interface TrianglesProps extends Triangles {
  time: number;
}

class Triangles extends Abstract {
  // define your uniforms
  static u_time = 0;

  // pass your shader code here
  static vertexShader = glslify(VERTEX);
  static fragmentShader = glslify(FRAGMENT);

  // @ts-ignore
  constructor(props) {
    // @ts-ignore
    super(Triangles, {
      name: 'Triangles',
      ...props,
    });
  }
}

export default Triangles;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      triangles: ReactThreeFiber.Object3DNode<Triangles, typeof Triangles>;
    }
  }
}
