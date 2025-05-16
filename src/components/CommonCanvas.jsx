import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import CommonModel from './CommonModel';
import Loader from './Loader';

const CommonCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Stars radius={100} depth={50} count={1500} factor={4} />
      <Suspense fallback={<Loader />}>
        <CommonModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default CommonCanvas;
