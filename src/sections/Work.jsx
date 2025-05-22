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
