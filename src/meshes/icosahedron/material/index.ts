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
