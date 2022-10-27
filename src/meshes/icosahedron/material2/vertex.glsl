uniform float u_time;

varying vec2 v_uv;

attribute float a_random;

void main() {
  v_uv = uv;
  vec3 pos = position;
  float progress = sin((u_time * 5.0)) * 0.5 + 0.5;
  // float progress = sin((u_time * 5.0) + ((v_uv.x * v_uv.y) * 500.0)) * 0.5 + 0.5;

  pos += (normal * a_random * progress * 0.1);

  return pos;
}