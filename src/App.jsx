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

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "work":
        return <WorkSection />;
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "testimonials":
        return <TestimonialsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
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
