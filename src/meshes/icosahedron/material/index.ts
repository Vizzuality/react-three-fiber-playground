import { shaderMaterial } from '@react-three/drei';
// @ts-ignore
import glslify from 'glslify';

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

export const CustomMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  glslify(VERTEX),
  glslify(FRAGMENT),
);

export default CustomMaterial;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      customMaterial: ReactThreeFiber.Object3DNode<CustomMaterial, typeof CustomMaterial>;
    }
  }
}
