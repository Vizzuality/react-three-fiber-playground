function Scene() {
  return (
    <>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gold" roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh position={[2,0,0]} castShadow>
        <torusKnotBufferGeometry args={[0.3, 0.1, 100, 16]} />
        <meshStandardMaterial color="gold" roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh position={[-2,0,0]} castShadow>
        <icosahedronGeometry args={[0.5, 8]} />
        <meshStandardMaterial color="gold" roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gold" roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="silver" roughness={0.5} metalness={0.5} />
      </mesh>
    </>
  );
}

<<<<<<< HEAD
export default Scene;
=======
export default Sphere;
>>>>>>> 045fa8da97d019810360a5b53c9b4af78dada5eb
