import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Bio = ({ onSelectSection = () => {} }) => {
   
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Get to Know Me</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    A Little About Myself
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mx-auto text-white h-auto">

                <div className="flex flex-col items-center md:items-start space-y-6 z-500" data-aos="fade-up" data-aos-duration="2000">
                    <img
                        src="/images/profile.jpeg"
                        alt="Baburao Adkane"
                        className="rounded-lg object-cover w-auto h-auto"
                    />
                </div>

                <div className="flex flex-col item-center text-justify space-y-4 z-500 bg-cyan-300/10 p-4 rounded-xl" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="text-3xl sm:text-4xl font-bold">Hey there, I'm Baburao</h1>
                    <p className="text-gray-300 leading-relaxed text-base tracking-wider sm:text-[16px]">
                        As a Senior Product Designer with 5+ years of experience, including 3+ years specializing in product design, I lead the design strategy for Deriv GO and native experiences at Deriv, a global leader in options trading and CFDs. I oversee UX processes for mobile platforms, delivering seamless, scalable, and intuitive trading experiences to millions worldwide.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base tracking-wider sm:text-[16px]">
                        I specialize in simplifying complex workflows, crafting robust interaction patterns, and creating scalable design systems that enhance usability and align with business goals. Partnering with cross-functional teams, I bridge user needs with innovative design practices to drive meaningful, impact-driven solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base tracking-wider sm:text-[16px]">
                        Currently, I am playing a critical role in Deriv’s transformation from high-code to low/no-code solutions, leveraging AI to optimize workflows, accelerate delivery, and push the boundaries of user-centric design. My work combines data-driven problem-solving and strategic thinking, empowering users and reinforcing Deriv’s position as a leader in trading technology.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base tracking-wider sm:text-[16px]">
                        <button
                            onClick={() => onSelectSection("contact")}
                            className="text-cyan-400 hover:text-cyan-400/80 cursor-pointer"
                        >
                            <span className='uppercase'>Get in touch</span>
                        </button>
                        &nbsp;to team up for an outstanding collaboration experience.
                    </p>
                </div>

            </div>
        </>
    );
};

export default SectionWrapper(Bio, "bio");
