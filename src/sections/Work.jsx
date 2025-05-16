// import CommonCanvas from "../components/CommonCanvas";

// const Work = () => {
//   return (
//     <div className="hero-container relative">
//       <CommonCanvas />

//       <div className="absolute section-content padding-x-lg">
//         <div className="flex flex-col items-center justify-center">
//           <h1 
//           className="text-[80px] md:text-[160px] sm:text-[120px] font-extralight tracking-widest leading-none relative text-cyan-300/20">
//           WORK</h1>
//           <div className="text-sm uppercase space-x-4 absolute z-100">
//             <span>Projects</span>
//             <span>|</span>
//             <span>Collaborations</span>
//             <span>|</span>
//             <span>Explorations</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import CommonCanvas from "../components/CommonCanvas";
import SectionTitle from "../components/SectionTitle";

const Work = () => {
  return (
    <div className="hero-container relative">
      <CommonCanvas />
      <SectionTitle
        title="WORK"
        subtitles={["Projects"]}
      />
    </div>
  );
};

export default Work;
