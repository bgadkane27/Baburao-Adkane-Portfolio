import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "../components/Model";
import { NAV_LINKS } from "../constants/index";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Canvas camera={{ position: [0, 0, -2], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Stars radius={100} depth={50} count={800} factor={4} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="hero-content">
        <h1
          className="uppercase text-nowrap font-extrabold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <strong>Baburao Adkane</strong>
        </h1>

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
          <p className="uppercase font-semibold sm:text-xl text-[14px]">
            QA/QC ENGINEER
          </p>
        </div>

        <p
          className="uppercase leading-8 text-[10px] sm:text-sm text-[#fff] font-semibold bg-cyan-500/20 py-2 rounded-md"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          ATTENTIVE | STRONG ANALYTICAL SKILL | <br />
          Excellent Communication & Collaboration | Process-Oriented |<br />
          Curious & Proactive
        </p>
        <ul className="flex flex-row md:flex-row flex-wrap justify-center gap-6 md:gap-14 tracking-wider text-sm md:text-sm sm:hidden">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <a
                className="no-underline text-[#cbd5e] hover:text-[#0ff] transition-all duration-200"
                href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
