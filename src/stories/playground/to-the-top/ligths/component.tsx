function Lights() {
  return (
    <>
      <ambientLight color="#b9d5ff" intensity={0.5} />

      <directionalLight
        color="#b9d5ff"
        intensity={1}
        position={[4, 5, -2]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}

export default Lights;
