import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';

const Computer = () => {
  const computer = useGLTF('/desktop_pc/scene.glb');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.5} />
      <ambientLight intensity={1} />
      <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
      <primitive 
      object={computer.scene}
      scale={1}
      position={[0, -5.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
        enablePan={true}
        enableRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
