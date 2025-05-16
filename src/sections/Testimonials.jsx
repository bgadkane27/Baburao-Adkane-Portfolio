import CommonCanvas from "../components/CommonCanvas";
import SectionTitle from "../components/SectionTitle";

const Testimonials = () => {  
  return (
    <div className="hero-container relative">
      <CommonCanvas />
      <SectionTitle
        title="Testimonials"
        subtitles={["Words from the People Who Work with Me."]}
      />
    </div>
  );
}

export default Testimonials;