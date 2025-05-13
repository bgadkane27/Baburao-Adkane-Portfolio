import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "../components/Model";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Canvas camera={{ position: [0, 0, -2], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />        
        <Stars radius={100} depth={50} count={800} factor={4} />        
        <Model />
        <OrbitControls 
        enableZoom={false} 
        />
      </Canvas>

      <div className="hero-content">
        <h1 className="uppercase text-nowrap" data-aos="fade-up" data-aos-duration="2000"><strong>Baburao Adkane</strong></h1>
        <div>
          <p className="uppercase font-semibold sm:text-xl text-[14px]">QA/QC ENGINEER</p>
        </div>
        <p className="uppercase leading-8 text-[10px] sm:text-base bg-fuchsia-600/10 p-1">ATTENTIVE | STRONG ANALYTICAL SKILL | <br /> 
        Excellent Communication & Collaboration | Process-Oriented |<br />
        Curious & Proactive</p>
        <div className="hero-links">
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKLLS</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#contact">CONTACT ME</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
