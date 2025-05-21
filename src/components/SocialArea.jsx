import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const SocialArea = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    You can connect with me via
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Social Links
                </h2>
            </motion.div>
        </>
    );
};

export default SectionWrapper(SocialArea, "social");
