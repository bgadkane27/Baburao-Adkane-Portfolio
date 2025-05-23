import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { steps } from '../constants';
import { MoveUpRight } from "lucide-react";


const Projects = () => {
    return (
        <>
            <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            >
                <p className={`${styles.sectionSubText} text-center`}>
                    what I've been working on
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Projects
                </h2>
            </motion.div>
            <div className="p-6 relative z-500 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${item.bg} rounded-2xl p-6 flex flex-col justify-between`}
                        >
                            <div className="space-y-4">
                                <h2 className="uppercase text-3xl font-bold">{item.title}</h2>
                                <p className="text-base text-white/90">{item.description}</p>
                            </div>
                            <div className="my-6">
                                {item.link && (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        className="text-base underline max-w-fit flex items-center gap-x-2 group"
                                    >
                                        {item.link}
                                        {item.link && (
                                            <MoveUpRight
                                                size={24}
                                                strokeWidth={1.5}
                                                className="transition-transform duration-400 group-hover:scale-125"
                                            />
                                        )}
                                    </a>
                                )}
                            </div>
                            <div className="overflow-hidden group rounded-lg">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="rounded-lg object-cover w-80 h-32 transition-transform ease-out duration-300 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");