uniform float uTime;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  float opacity = 1.0;

  gl_FragColor = vec4(vec3((sin(uTime) + 1.0) / 2.0), opacity);
}