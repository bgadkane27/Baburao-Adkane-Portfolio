
import React from 'react';
import CommonCanvas from '../components/CommonCanvas';
import Experience from "../components/Experience";
import ExpertArea from "../components/ExpertArea";
import { servicesLeft, servicesRight } from '../constants';

const AboutMe = ({ onSelectSection }) => {
  // Define title and subtitles
  const title = "About Me";
  const subtitles = ["Bio", "Areas Of Expertise", "Work Experience", "Social Links"];

  return (
    <div className="relative min-h-screen w-full bg-slate-900 overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <CommonCanvas />
      </div>

      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center relative">
          <h1 className="uppercase text-[10vw] text-cyan-300/20 text-nowrap font-extralight tracking-wide leading-none z-500">
            {title}
          </h1>
          <div className="text-[3vw] sm:text-sm uppercase space-x-4 absolute z-10">
            {subtitles.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-[#cbd5e1] tracking-wider bg-cyan-500/10 py-2 px-3 rounded-full">
                  {item}
                </span>
                {index !== subtitles.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* About Me Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 mx-auto text-white h-auto">
          {/* left: Image + Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-6 z-500" data-aos="fade-up" data-aos-duration="2000">
            <img
              src="/images/profile.jpeg"
              alt="Baburao Adkane"
              className="rounded-lg object-cover w-auto h-auto"
            />
          </div>
          {/* Right: Text Content */}
          <div className="flex flex-col item-center text-justify space-y-4 z-500" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-4xl font-bold">Hey there, I'm Baburao</h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              As a Senior Product Designer with 5+ years of experience, including 3+ years specializing in product design, I lead the design strategy for Deriv GO and native experiences at Deriv, a global leader in options trading and CFDs. I oversee UX processes for mobile platforms, delivering seamless, scalable, and intuitive trading experiences to millions worldwide.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in simplifying complex workflows, crafting robust interaction patterns, and creating scalable design systems that enhance usability and align with business goals. Partnering with cross-functional teams, I bridge user needs with innovative design practices to drive meaningful, impact-driven solutions.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently, I am playing a critical role in Deriv’s transformation from high-code to low/no-code solutions, leveraging AI to optimize workflows, accelerate delivery, and push the boundaries of user-centric design. My work combines data-driven problem-solving and strategic thinking, empowering users and reinforcing Deriv’s position as a leader in trading technology.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
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
        <ExpertArea />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 mb-12 text-white h-auto">
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
        <Experience />
      </div>
    </div>
  );
};

export default AboutMe;
