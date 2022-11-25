uniform float u_time;

varying vec2 v_uv;
varying vec3 v_normal;

void main() {
  vec4 color = vec4(1.0, 0.525, 0.961, 1.0);
  float opacity = 1.0;

  float r = 0.0, delta = 0.0, alpha = 1.0;
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  r = dot(cxy, cxy);

  if (r > 1.0) {
    discard;
  }

  delta = fwidth(r);
  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);

  gl_FragColor = vec4(color.r, v_normal.g, v_normal.b, color.a) * opacity * alpha;
}