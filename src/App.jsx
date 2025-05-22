
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
      about: <AboutMe onSelectSection={setActiveSection} />,
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
