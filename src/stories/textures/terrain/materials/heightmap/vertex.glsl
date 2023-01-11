uniform sampler2D u_bumpTexture;
uniform sampler2D u_satelliteTexture;

varying vec2 v_uv;
varying float v_amount;

void main() {
  // The "coordinates" in UV mapping representation
  v_uv = uv;

  float bumpScale = 0.2;

  // The heightmap data at those coordinates
  vec4 bumpData = texture2D(u_bumpTexture, uv);
  float r = bumpData.r * 255.0;
  float g = bumpData.g * 255.0;
  float b = bumpData.b * 255.0;

  // height map is grayscale, so it doesn't matter if you use r, g, or b.
  v_amount = -10000.0 + (((r * 256.0 * 256.0) + (g * 256.0) + b) * 0.1);

  // move the position along the normal
  vec3 newPosition = position + normal * v_amount * bumpScale;

  // Compute the position of the vertex using a standard formula
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}