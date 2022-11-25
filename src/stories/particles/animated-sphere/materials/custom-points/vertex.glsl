#pragma glslify: rotate = require(glsl-rotate/rotate)
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

uniform float u_time;
uniform float u_radius;

varying vec2 v_uv;
varying vec3 v_normal;

attribute float a_random;

float PI = 3.141592653589793;

void main() {
  v_uv = uv;

  // float progress = sin((u_time * a_random)) * 0.5 + 0.5;
  float progress = (u_time * a_random * 0.1);

  vec3 axis = vec3(1.0, 1.0, 0.0);
  vec3 pos = rotate(position, axis, PI * a_random * progress);
  float n = snoise4(vec4(pos, progress));
  vec3 nPos = pos - (n * a_random * 0.1);

  // Send normal to fragment shader
  v_normal = nPos / length(nPos);

  // Particle size
  gl_PointSize = 10.0;
  gl_PointSize *= (1.0 / - (modelViewMatrix * vec4(pos, 1.0)).z);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
}