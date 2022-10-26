uniform float u_time;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  float opacity = 1.0;

  return vec4(vec3((sin(u_time) + 1.0) / 2.0), opacity);
}