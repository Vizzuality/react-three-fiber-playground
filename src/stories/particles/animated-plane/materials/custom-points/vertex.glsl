#pragma glslify: rotate = require(glsl-rotate/rotate)
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

#define RIPPLE_DURATION 5.0

uniform float u_time;
uniform float u_radius;

varying vec2 v_uv;
varying vec3 v_normal;

attribute float a_random;

float PI = 3.141592653589793;

void main() {
  v_uv = uv;

  vec3 pos = position;
  float wave_amplitude = 0.1;
  float wave_lenght = 0.1;
  float wave_duration = 3.0;

  // float displacement = sin((mod(u_time, wave_duration) + (pos.x/wave_lenght)) / wave_duration) * wave_amplitude;
  // float zDisplacement = amplitude * sin(uv.x + (u_time * speed) * frequency);
  float displacement = sin(mod(u_time + (pos.x/wave_lenght), RIPPLE_DURATION) * 2.0 * 3.1415 / RIPPLE_DURATION) * 0.1;

  vec3 displacedPos = pos + vec3(0.0, 0.0, displacement);


  // Particle size
  gl_PointSize = 5.0;
  gl_PointSize *= (1.0 / - (modelViewMatrix * vec4(displacedPos, 1.0)).z);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPos, 1.0);
}