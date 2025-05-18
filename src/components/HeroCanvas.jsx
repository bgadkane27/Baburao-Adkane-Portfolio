import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import HeroModel from './HeroModel';

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, -0.5, 2], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Stars radius={100} depth={50} count={1500} factor={4} />
      <Suspense fallback={null}>
        <HeroModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default HeroCanvas;
