function SphereParticles() {
  return (
    <points>
      <sphereGeometry args={[1, 64, 64]} />
      <pointsMaterial color="#FF86F5" size={0.01} sizeAttenuation />
    </points>
  );
}

export default SphereParticles;
