import { socialLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="relative flex justify-center items-center gap-12 mb-10 z-50">
      {socialLinks.map(({ id, Icon, link, gradient }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
          style={{
            filter: `drop-shadow(0 0 0 transparent)`,
          }}
          onMouseEnter={(e) => {
            const [color1, color2] = gradient;
            e.currentTarget.style.filter = `
              drop-shadow(0 0 16px ${color1})
              drop-shadow(0 0 16px ${color2})
            `;
          }}
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = `drop-shadow(0 0 0 transparent)`)
          }
        >
          <Icon className="w-8 h-auto" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;



