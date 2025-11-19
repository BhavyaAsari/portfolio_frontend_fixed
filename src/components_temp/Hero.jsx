import { BsInstagram, BsLaptop, BsGithub } from "react-icons/bs";
import Heroimg from "../assets/portfoil.jpg";
import Mee from "../assets/mee.jpg"
import {TypeAnimation} from 'react-type-animation';

const Hero = ({onShowContact}) => {

  console.log("HERO FILE I AM EDITING");

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-around items-center px-10 py-16 text-white ">
        
        {/* Left Text Section */}
        <div className="lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0">
        <p className="text-6xl mb-3 text-black">
            I'm

    <h1 className="flex text-7xl font-bold mt-2 text-white" >

      <TypeAnimation

        sequence={["Bhavya Asari",1500,"",500]}
        wrapper="span"
        speed={50}
        deletionSpeed={30}
        repeat={Infinity}
    />
  
    </h1>
  </p>
          <hr className="border-purple-400 w-24 mx-auto lg:mx-0 mb-6" />
          <p className=" text-slate-15000 leading-relaxed text-4xl mr-2">
            <em><strong className="flex">Web <developer className="ml-2 text-purple-500"> Developer</developer></strong></em>
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center lg:w-1/3">
          <img
            src={Mee}
            alt="Bhavya Asari"
 className="rounded-full border-8 border-white-600 w-64 h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-300"          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 text-center lg:text-left mt-10 lg:mt-0">
          <p className=" text-black text-5xl  mb-3">About Me</p>
          <p className="text-white font-bold text-2xl mb-4 ">
            <strong><em>"I’m a disciplined learner who enjoys turning challenges into growth. With a calm mindset, a strong learning attitude, and a passion for building real-world projects, I bring clarity, creativity, and consistency to every task. I thrive in environments where curiosity, teamwork, and continuous improvement matter." </em></strong></p>

          <button className="bg-white text-2xl text-purple-700 font-semibold px-8 py-2 rounded-full hover:bg-purple-800 hover:text-white transition-all duration-300 hover:cursor-pointer"
          onClick={onShowContact}>
            Show more...
          </button>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-5">
            <a
              href="https://github.com/BhavyaAsari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub
                size={55}
                className="border-2 border-transparent hover:border-white rounded-full p-2 transition-all duration-300 cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavy-asari-613567279"
              target="_blank"
              rel="noopener noreferrer"
            >
            <BsLaptop
              size={55}
              className="border-2 border-transparent hover:border-white rounded-full p-2 transition-all duration-300 cursor-pointer"
            /> </a>

               <a  href="https://www.instagram.com/bhavy._.153"
                target="_blank"
                 rel="noopener noreferrer">         
              <BsInstagram
                size={55}
                className="border-2 border-transparent hover:border-white rounded-full p-2 transition-all duration-300 cursor-pointer"
              /> </a>   
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
