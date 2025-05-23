import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { servicesLeft, servicesRight } from '../constants';


const ExpertArea = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What are the skills I have
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Areas of Expertise
                </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-white h-auto">
                {/* Left Column */}
                <div className="flex flex-col space-y-10 z-500">
                    {servicesLeft.map((service, index) => (
                        <div key={index} className="border-b-2 border-gray-700 pb-2 sm:text-xl">
                            {service}
                        </div>
                    ))}
                </div>
                {/* Right Column */}
                <div className="flex flex-col space-y-10 z-500">
                    {servicesRight.map((service, index) => (
                        <div key={index} className="border-b-2 border-gray-700 pb-2 sm:text-xl">
                            {service}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(ExpertArea, "expert");
