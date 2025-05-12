import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.0005;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshStandardMaterial
        color="#0ff"
        emissive="#0ff"
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
};

export default Sphere;
