
import React from 'react';
import CommonCanvas from '../components/CommonCanvas';
import SocialLink from '../components/SocialLink';
import Stats from '../components/Stats';

const Work = ({ onSelectSection }) => {
  // Define title and subtitles
  const title = "Work";
  const subtitles = ["Projects"];

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
        <Stats />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-auto">

          <div className="flex flex-col items-center md:items-start space-y-6 z-500 group bg-amber-200 overflow-hidden rounded-4xl">
            <div>
              <img
              src="/images/profile.jpeg"
              alt="Baburao Adkane"
              className="rounded-lg object-cover w-auto h-auto transition-transform duration-400 group-hover:scale-110"
            />
            </div>
            <div>
              <p className='px-16 py-4'>ERP</p>
            </div>
            
          </div>
          <div className="flex flex-col items-center md:items-start space-y-6 z-500 group bg-amber-200 overflow-hidden rounded-4xl">
            <div>
              <img
              src="/images/profile.jpeg"
              alt="Baburao Adkane"
              className="rounded-lg object-cover w-auto h-auto transition-transform duration-400 group-hover:scale-110"
            />
            </div>
            <div>
              <p className='px-16'>ERP</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-6 z-500 group bg-amber-200 overflow-hidden rounded-4xl">
            <div>
              <img
              src="/images/profile.jpeg"
              alt="Baburao Adkane"
              className="rounded-lg object-cover w-auto h-auto transition-transform duration-400 group-hover:scale-110"
            />
            </div>
            <div>
              <p className='px-16'>ERP</p>
            </div>
          </div>

        </div>
        <SocialLink />
      </div>
    </div>
  );
};

export default Work;
