import { socialLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-8">
      {socialLinks.map(({ id, icon, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
