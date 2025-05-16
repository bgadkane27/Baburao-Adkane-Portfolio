import CommonCanvas from "../components/CommonCanvas";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <div className="hero-container relative">
      <CommonCanvas />
      <SectionTitle
        title="Contact"
        subtitles={["Let's team up for the best collaboration experience. Get in touch !"]}
      />
    </div>
  );
}

export default Contact;