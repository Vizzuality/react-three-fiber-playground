uniform sampler2D u_satelliteTexture;

varying vec2 v_uv;

void main() {
    // Get the color of the fragment from the texture map
    // at that coordinate in the UV mapping
    gl_FragColor = texture2D(u_satelliteTexture, v_uv);
}