import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


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
        </>
    );
};

export default SectionWrapper(ExpertArea, "expert");
