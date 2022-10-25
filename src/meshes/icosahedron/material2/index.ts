import { Abstract } from 'lamina/vanilla';

export interface CustomLayerProps extends CustomLayer {
  time: number;
}

class CustomLayer extends Abstract {
  // define your uniforms
  static u_time = 0;

  // pass your shader code here
  static vertexShader = /*glsl*/`
    uniform float u_time;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      return position;
    }
  `;
  static fragmentShader = /*glsl*/`
    uniform float u_time;

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      float opacity = 1.0;

      return vec4(vec3((sin(u_time) + 1.0) / 2.0) * 0.75 + 0.25, opacity);
    }
  `;

  // @ts-ignore
  constructor(props) {
    // @ts-ignore
    super(CustomLayer, {
      name: 'CustomLayer',
      time: 0,
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
