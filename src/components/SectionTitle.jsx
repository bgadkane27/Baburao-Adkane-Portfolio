import React from "react";

const SectionTitle = ({ title, subtitles }) => {
  return (
    <div className="absolute section-content padding-x-lg">
      <div className="flex flex-col items-center justify-center">
        <h1 className="relative uppercase text-[10vw] text-cyan-300/20 text-nowrap font-extralight tracking-wide leading-none">
          {title}
        </h1>
        <div className="text-[3vw] sm:text-sm uppercase space-x-4 absolute z-100">
          {subtitles.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[#cbd5e1] tracking-wider bg-cyan-500/10 py-2 px-3 rounded-full">{item}</span>
              {index !== subtitles.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
