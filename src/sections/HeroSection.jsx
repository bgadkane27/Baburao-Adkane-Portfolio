// import { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import Model from "../components/Model";
// import { NAV_LINKS } from "../constants/index";
// import { motion, AnimatePresence } from "framer-motion";
// import WorkSection from "./WorkSection";
// import ExperienceSection from "./ExperienceSection";
// import SkillsSection from "./SkillsSection";
// import TestimonialsSection from "./TestimonialsSection";
// import ContactSection from "./ContactSection";

// const HeroSection = () => {
//   const [activeSection, setActiveSection] = useState("");

//   const sections = {
//     work: <WorkSection />,
//     experience: <ExperienceSection />,
//     skills: <SkillsSection />,
//     testimonials: <TestimonialsSection />,
//     contact: <ContactSection />,
//   };

//   return (
//     <div className="hero-container relative">
//       <Canvas camera={{ position: [0, 0, -2], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 5]} />
//         <Stars radius={100} depth={50} count={800} factor={4} />
//         <Model />
//         <OrbitControls enableZoom={false} />
//       </Canvas>

//       <div className="hero-content">
//         <h1
//           className="uppercase text-nowrap font-extrabold"
//           data-aos="fade-up"
//           data-aos-duration="2000"
//         >
//           <span className="relative inline-block group cursor-pointer group-hover:text-[#0ff]">
//             <strong>Baburao Adkane</strong>
//             <div className="absolute -top-35 left-0 mt-2 w-40 h-40 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
//               <img
//                 src="/images/profile.jpeg"
//                 alt="Baburao Adkane"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </span>
//         </h1>

//         <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
//           <p className="uppercase font-semibold sm:text-xl text-[14px]">
//             QA/QC ENGINEER
//           </p>
//         </div>

//         <p
//           className="uppercase leading-8 text-[10px] sm:text-sm text-[#fff] font-semibold bg-cyan-500/20 py-2 rounded-md"
//           data-aos="zoom-in"
//           data-aos-duration="2000"
//           data-aos-delay="600"
//         >
//           ATTENTIVE | STRONG ANALYTICAL SKILL | <br />
//           Excellent Communication & Collaboration | Process-Oriented |<br />
//           Curious & Proactive
//         </p>

//         {/* Navigation */}
//         <ul className="flex flex-wrap justify-center gap-6 md:gap-14 tracking-wider text-sm md:text-sm mt-4">
//           {NAV_LINKS.map((link, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => setActiveSection(link.key)}
//                 className={`no-underline font-semibold ${
//                   activeSection === link.key ? "text-[#0ff]" : "text-[#cbd5e]"
//                 } hover:text-[#0ff] transition-all duration-200`}
//               >
//                 {link.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Dynamic Section Content */}
//         <div className="mt-6 w-full max-w-3xl mx-auto text-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.5 }}
//               className="text-white"
//             >
//               {sections[activeSection]}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "../components/Model";
import { NAV_LINKS } from "../constants/index";

const HeroSection = ({ onSelectSection }) => {
  return (
    <div className="hero-container relative">
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
          <span className="relative inline-block group cursor-pointer group-hover:text-[#0ff]">
            <strong>Baburao Adkane</strong>
            <div className="absolute -top-35 left-0 mt-2 w-40 h-40 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
              <img
                src="/images/profile.jpeg"
                alt="Baburao Adkane"
                className="object-cover w-full h-full"
              />
            </div>
          </span>
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

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-14 tracking-wider text-sm md:text-sm mt-6">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => onSelectSection(link.key)}
                className="no-underline text-[#cbd5e] hover:text-[#0ff] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
