import CommonCanvas from '../components/CommonCanvas';
import SectionTitle from '../components/SectionTitle';

const AboutMe = () => {
  return (
    <div className="hero-container relative">
      <CommonCanvas />
      <SectionTitle
        title="About Me"
        subtitles={["Bio", "Areas Of Expertise","Experience",  "Social Links"]}
      />
    </div>
  );
}

export default AboutMe;