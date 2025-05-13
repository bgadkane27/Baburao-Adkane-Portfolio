import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef} from "react";

const Model = () => {
  const model = useGLTF('/models/mushrooms.glb'); 
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
    // ref.current.rotation.x += 0.0009;
  });  

  return (
    <primitive 
    ref={ref} 
    object={model.scene} 
    scale={0.3}
    position={[0, -0.20, -1]}
    />
  );
};

export default Model;
