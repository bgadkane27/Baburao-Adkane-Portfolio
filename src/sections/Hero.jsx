import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "../components/Model";
// import Sphere from "../components/Sphere";



const HeroSection = () => {
  return (
    <div className="hero-container">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />        
        <Stars radius={100} depth={50} count={500} factor={4} />
        {/* <Sphere /> */}
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="hero-content">
        <h1 className="uppercase text-nowrap"><strong>Baburao Adkane</strong></h1>
        <p className="text-[#fff] uppercase leading-1.5">ATTENTIVE | STRONG ANALYTICAL SKILL <br /> Excellent Communication & Collaboration | Process-Oriented</p>
        <div className="hero-links">
          <a href="#work">WORK</a>
          <a href="#prototypes">PROTOTYPES</a>
          <a href="#art">ART</a>
          <a href="#press">PRESS</a>
          <a href="#info">INFO</a>
          <a href="#reel">REEL</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
