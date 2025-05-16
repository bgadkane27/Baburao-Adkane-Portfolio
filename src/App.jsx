// import Hero from "./sections/Hero"
// import HeroSection from "./sections/HeroSection"
// import Work from "./sections/Work"


// function App() {

//   return (
//     <>
//       {/* <Hero />
//       <Work /> */}
//       <HeroSection />
//     </>
//   )
// }

// export default App

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import HeroSection from "./sections/HeroSection";
// import WorkSection from "./sections/WorkSection";
// import ExperienceSection from "./sections/ExperienceSection";
// import SkillsSection from "./sections/SkillsSection";
// import TestimonialsSection from "./sections/TestimonialsSection";
// import ContactSection from "./sections/ContactSection";
// import Navbar from "./components/Navbar";

// function App() {
//   const [activeSection, setActiveSection] = useState("hero");

//   const renderSection = () => {
//     switch (activeSection) {
//       case "work":
//         return <WorkSection />;
//       case "experience":
//         return <ExperienceSection />;
//       case "skills":
//         return <SkillsSection />;
//       case "testimonials":
//         return <TestimonialsSection />;
//       case "contact":
//         return <ContactSection />;
//       default:
//         return <HeroSection />;
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#000] relative">
//       <Navbar onSelectSection={setActiveSection} activeSection={activeSection} />
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeSection}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {renderSection()}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import HeroSection from "./sections/HeroSection";
// import WorkSection from "./sections/WorkSection";
// import ExperienceSection from "./sections/ExperienceSection";
// import SkillsSection from "./sections/SkillsSection";
// import TestimonialsSection from "./sections/TestimonialsSection";
// import ContactSection from "./sections/ContactSection";
// import Navbar from "./components/Navbar";

// function App() {
//   const [activeSection, setActiveSection] = useState("hero");

//   const renderSection = () => {
//     const sectionProps = { onBack: () => setActiveSection("hero") };

//     const sections = {
//       hero: <HeroSection onSelectSection={setActiveSection} />,
//       work: <WorkSection {...sectionProps} />,
//       experience: <ExperienceSection {...sectionProps} />,
//       skills: <SkillsSection {...sectionProps} />,
//       testimonials: <TestimonialsSection {...sectionProps} />,
//       contact: <ContactSection {...sectionProps} />,
//     };

//     return sections[activeSection] || sections.hero;
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#000] relative">
//       <Navbar onSelectSection={setActiveSection} activeSection={activeSection} />
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeSection}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {renderSection()}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import Work from './sections/Work';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import AboutMe from "./sections/AboutMe";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    const sections = {
      hero: <Hero onSelectSection={setActiveSection} />,
      work: <Work />,
      about: <AboutMe />,
      // skills: <Skills />,
      testimonials: <Testimonials />,
      contact: <Contact />,
    };

    return sections[activeSection] || sections.hero;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#000] relative">
      <Navbar onSelectSection={setActiveSection} activeSection={activeSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
