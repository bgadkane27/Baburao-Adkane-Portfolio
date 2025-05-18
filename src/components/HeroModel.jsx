import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CommonModel = () => {
  const model = useGLTF('/models/mushrooms.glb');
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0003;
    // ref.current.rotation.x += 0.00009;
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={0.43}
      position={[0, -0.525, 1]}
    />
  );
};

export default CommonModel;