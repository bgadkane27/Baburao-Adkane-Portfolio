// import CommonCanvas from "../components/CommonCanvas";
import HeroCanvas from "../components/HeroCanvas";
const Hero = ({ onSelectSection }) => {
  return (
    <div className="hero-container relative">
      {/* <CommonCanvas /> */}

      <HeroCanvas />

      <div className="hero-content">
        <h1
          className="uppercase text-nowrap font-extrabold"
           data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span className="relative inline-block group cursor-pointer group-hover:text-[#0ff]">
            <strong>Baburao Adkane</strong>
            <div className="absolute -top-35 left-0 mt-2 w-40 h-40 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
              <img
                src="/images/profile.jpeg"
                alt="Baburao Adkane"
                className="object-cover w-full h-full"
              />
            </div>
          </span>
        </h1>

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
          <p className="uppercase font-semibold sm:text-xl text-[14px]">
            QA/QC ENGINEER
          </p>
        </div>

        <p
          className="uppercase leading-8 text-[10px] sm:text-sm text-[#fff] py-2 rounded-md bg-cyan-300/30"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          ATTENTIVE | STRONG ANALYTICAL SKILL | <br />
          Excellent Communication & Collaboration | Process-Oriented |<br />
          Curious & Proactive
        </p>
      </div>
    </div>
  );
};

export default Hero;
