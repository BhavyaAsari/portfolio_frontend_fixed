// Import required icons and assets
import { BsInstagram, BsLaptop, BsGithub } from "react-icons/bs";
import Mee from "../assets/mee.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ onShowContact }) => {
  return (
    // Main hero section with responsive layout for mobile and desktop
    <section className="flex flex-col lg:flex-row justify-around items-center px-4 sm:px-8 py-12 text-white">
      
      {/* Left Section: Intro text and name animation */}
      <div className="lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0">
        
        {/* Intro heading */}
        <div className="text-4xl sm:text-5xl md:text-6xl mb-2 text-white">
          <span>I'm</span>
        </div>

        {/* Animated name text */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold mt-2 flex justify-center lg:justify-start text-white leading-tight">
          <TypeAnimation
            sequence={["Bhavya Asari", 1500, "", 500]}
            wrapper="span"
            speed={50}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </h1>

        {/* Divider line */}
        <hr className="border-purple-400 w-20 sm:w-24 mx-auto lg:mx-0 my-4" />

        {/* Role description */}
        <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed">
          <em className="font-bold flex justify-center text-amber-600 lg:justify-start">
            Web <span className="ml-2 text-purple-800">Developer</span>
          </em>
        </p>
      </div>

      {/* Center Image Section */}
      <div className="flex justify-center lg:w-1/3">
        <img
          src={Mee}
          alt="Bhavya Asari"
          className="rounded-full border-4 sm:border-8 border-white w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section: About text, button, and social links */}
      <div className="lg:w-1/3 text-center lg:text-left mt-10 lg:mt-0 px-2">
        
        {/* About heading */}
        <p className="text-amber-500 text-3xl sm:text-4xl mb-3">About Me</p>

        {/* About description text */}
        <p className="text-white font-bold text-base sm:text-xl md:text-2xl mb-4">
          <em>
            "I’m a disciplined learner who enjoys turning challenges into growth.
            With a calm mindset, a strong learning attitude, and a passion for
            building real-world projects, I bring clarity, creativity, and
            consistency to every task."
          </em>
        </p>

        {/* Contact button */}
        <button
          className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-800 hover:text-white transition-all duration-300"
          onClick={onShowContact}
        >
          Contact Me
        </button>

        {/* Social icons row */}
        <div className="flex justify-center lg:justify-start mt-6 space-x-4">
          
          {/* GitHub link */}
          <a href="https://github.com/BhavyaAsari" target="_blank" rel="noreferrer">
            <BsGithub
              size={68}
              className="border-2  sm:text-5xl border-purple-400  rounded-full  hover:border-white rounded-full p-2 transition-all duration-300"
            />
          </a>

          {/* LinkedIn link */}
          <a href="https://www.linkedin.com/in/bhavy-asari-613567279" target="_blank" rel="noreferrer">
            <BsLaptop
              size={68}
              className="border-2    border-purple-400  rounded-full hover:border-white rounded-full p-2 transition-all duration-300"
            />
          </a>

          {/* Instagram link */}
          <a href="https://www.instagram.com/bhavy._.153" target="_blank" rel="noreferrer">
            <BsInstagram
              size={68}
              className="border-2 border-purple-400  rounded-full hover:border-white rounded-full p-2 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
