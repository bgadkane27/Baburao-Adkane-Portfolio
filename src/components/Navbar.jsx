import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { X, Menu } from "lucide-react";

const Navbar = ({ onSelectSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHero = activeSection === "hero";
  const handleSelect = (key) => {
    onSelectSection(key);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full py-8 px-6 fixed z-1000 top-0 right-0 md:right-0 flex justify-end bg-[#1d1836]">
      <ul className="hidden md:flex gap-8 tracking-widest text-sm text-gray-400">
        {NAV_LINKS.map((link, index) => (
          <li key={link.key} className="flex items-center">
            {index !== NAV_LINKS.length && (
              <span className="text-gray-500 mx-2">|</span>
            )}
            <button
              onClick={() => handleSelect(link.key)}
              className={`uppercase font-semibold transition-colors duration-200 hover:cursor-pointer ${
                activeSection === link.key
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {link.label}
            </button>            
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden text-gray-400 hover: cursor-pointer"
      >
        <Menu size={30} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover: cursor-pointer"
          >
            <X size={36} />
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link.key}
              onClick={() => handleSelect(link.key)}
              className={`text-2xl md:text-3xl font-bold uppercase tracking-wide transition-colors duration-200 hover: cursor-pointer ${
                activeSection === link.key
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
