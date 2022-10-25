uniform float uTime;

varying vec2 vUv;

float PI = 3.1415926535897932384626433832795;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}