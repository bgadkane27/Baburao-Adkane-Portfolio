import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { socialLinks } from "../constants";

const SocialLink = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Let's connect and collaborate
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Social Profiles
                </h2>
            </motion.div>

            <div className="relative flex flex-wrap justify-center items-center gap-12 mt-12 z-50">
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
                        <Icon className="w-5 h-auto md:w-8" />
                    </a>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(SocialLink, "social");