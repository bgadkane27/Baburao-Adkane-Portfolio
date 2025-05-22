import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { WORK_DATA } from '../constants'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
    const { ref, inView } = useInView({
        // triggerOnce: true,  
        threshold: 0.3,
    });

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Quick Highlights</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    My Professional Impact
                </h2>
            </motion.div>

            <div id='work' ref={ref}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 mx-auto h-auto max-w-7xl pr-12">
                    {
                        WORK_DATA.map((item, index) => (
                            <div key={index} className='bg-[#1d1836] rounded-lg p-10 flex flex-col justify-center items-center text-center'>
                                <div className='text-white text-4xl font-bold'>
                                    {inView ? (
                                        <CountUp suffix={item.suffix} duration={2} end={parseFloat(item.value)} />
                                    ) : (
                                        "0"
                                    )}
                                    <div className="sm:text-xl font-semibold tracking-wider mt-2">{item.label}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Stats, "stats");
