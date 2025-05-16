import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CommonModel = () => {
  const model = useGLTF('/models/rainbow.glb');
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0003;
    ref.current.rotation.x += 0.00009;
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={1}
      position={[0, 0, 2]}
    />
  );
};

export default CommonModel;