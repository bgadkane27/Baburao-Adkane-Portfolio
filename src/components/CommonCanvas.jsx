import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars, Preload } from '@react-three/drei';
import CommonModel from './CommonModel';

const CommonCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <Suspense fallback={null}>
        {/* <CommonModel /> */}
      </Suspense>
      <Preload all />
      <OrbitControls
        enableZoom={true}
        minDistance={0.1}
        maxDistance={1200}
      />
    </Canvas>
  );
};

export default CommonCanvas;
