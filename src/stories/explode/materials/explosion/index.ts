import { Abstract } from 'lamina/vanilla';

//@ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

export interface ExplosionProps extends Explosion {
  time: number;
}

class Explosion extends Abstract {
  // define your uniforms
  static u_time = 0;

  // pass your shader code here
  static vertexShader = glslify(VERTEX);
  static fragmentShader = glslify(FRAGMENT);

  // @ts-ignore
  constructor(props) {
    // @ts-ignore
    super(Explosion, {
      name: 'Explosion',
      ...props,
    });
  }
}

export default Explosion;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      explosion: ReactThreeFiber.Object3DNode<Explosion, typeof Explosion>;
    }
  }
}
