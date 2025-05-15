import { NAV_LINKS } from "../constants";

const Navbar = ({ onSelectSection, activeSection }) => {
  const navStyle =
    "backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 shadow-lg";

  if (activeSection === "hero") {
    return (
      <ul
        className={`flex flex-row flex-wrap justify-center gap-6 md:gap-14 tracking-wider text-sm md:text-sm fixed bottom-8 left-0 right-0 z-50 ${navStyle}`}
      >
        {NAV_LINKS.map((link, index) => (
          <button
            key={index}
            onClick={() => onSelectSection(link.key)}
            className="text-[#cbd5e] hover:text-[#0ff] font-semibold transition-all duration-200 uppercase text-xs"
          >
            {link.label}
          </button>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={`fixed top-6 right-8 z-50 flex gap-6 ${navStyle}`}
    >
      {NAV_LINKS.map((link, index) => (
        <button
          key={index}
          onClick={() => onSelectSection(link.key)}
          className="text-[#cbd5e] hover:text-[#0ff] font-semibold transition-all duration-200 uppercase text-xs"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
