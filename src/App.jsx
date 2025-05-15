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
import HeroSection from "./sections/HeroSection";
import WorkSection from "./sections/WorkSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "work":
        return <WorkSection onBack={() => setActiveSection("hero")} />;
      case "experience":
        return <ExperienceSection onBack={() => setActiveSection("hero")} />;
      case "skills":
        return <SkillsSection onBack={() => setActiveSection("hero")} />;
      case "testimonials":
        return <TestimonialsSection onBack={() => setActiveSection("hero")} />;
      case "contact":
        return <ContactSection onBack={() => setActiveSection("hero")} />;
      default:
        return <HeroSection onSelectSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
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

