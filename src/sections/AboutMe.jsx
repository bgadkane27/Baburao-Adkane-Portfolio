import CommonCanvas from '../components/CommonCanvas';
import SectionTitle from '../components/SectionTitle';

const AboutMe = () => {
  return (
    <div className="hero-container relative">
      <CommonCanvas />
      <SectionTitle
        title="About Me"
        subtitles={["Bio", "Areas Of Expertise", "Experience", "Social Links"]}
      />
      <div className='section-main'>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">Hey there, I'm Baburao</h1>
          <p className="text-gray-300 leading-relaxed tracking-wider text-justify">
            As a Senior Product Designer with 5+ years of experience, including 3+ years specializing in product design, I lead the design strategy for Deriv GO and native experiences at Deriv, a global leader in options trading and CFDs. I oversee UX processes for mobile platforms, delivering seamless, scalable, and intuitive trading experiences to millions worldwide.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I specialize in simplifying complex workflows, crafting robust interaction patterns, and creating scalable design systems that enhance usability and align with business goals. Partnering with cross-functional teams, I bridge user needs with innovative design practices to drive meaningful, impact-driven solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently, I am playing a critical role in Deriv’s transformation from high-code to low/no-code solutions, leveraging AI to optimize workflows, accelerate delivery, and push the boundaries of user-centric design. My work combines data-driven problem-solving and strategic thinking, empowering users and reinforcing Deriv’s position as a leader in trading technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;