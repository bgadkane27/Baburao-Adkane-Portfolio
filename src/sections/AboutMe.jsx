
import React from 'react';
import CommonCanvas from '../components/CommonCanvas';
import Experience from "../components/Experience";
import ExpertArea from "../components/ExpertArea";
import Bio from "../components/Bio";
import SocialLink from '../components/SocialLink';

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
      {/* Main Content */}
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
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
        <Bio />
        <ExpertArea />
        <Experience />
        <SocialLink />
      </div>
    </div>
  );
};

export default AboutMe;
