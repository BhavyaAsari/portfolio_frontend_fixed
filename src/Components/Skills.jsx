import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import Code from "../assets/CodingLogo1.png";
import backendLogo from "../assets/logobackend.png"
import DBLOGO from "../assets/DBLOGO1.png"
import ToolsLogo from "../assets/ToolsLogo1.png"
import frontend from "../assets/frontend1.png"
import bgImg from "../assets/skillbg.png"

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="skills" className="mt-10 px-4 sm:px-10">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-black">
          My Skills
        </h2>

        <p className="text-white text-xl sm:text-3xl mt-3 leading-relaxed max-w-2xl mx-auto">
          <em>A glance at the technologies I've worked with.</em>
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2500}
          showDots
          pauseOnHover
          transitionDuration={600}
          className="pb-12"
        >
          
          {/* Programming */}
          <SkillCard  title="Programming" icon={Code} iconSize={100} items={["JavaScript", "C++"]} />

          {/* Frontend */}
          <SkillCard

            title="Frontend"
            iconSize={100}
            icon={frontend}
            items={["React.js", "HTML", "CSS", "Tailwind CSS"]}
          />

          {/* Backend */}
          <SkillCard
             title="Backend"
             iconSize={200}
            icon={backendLogo}
            items={["Node.js", "Express.js"]}
          />

          {/* Database */}
          <SkillCard title="Database" icon={DBLOGO} items={["MySQL", "MongoDB"]} />

          {/* Tools */}
          <SkillCard
            title="Tools"
            iconSize={100}
            icon={ToolsLogo}
            items={["Git", "VS Code", "Postman"]}
          />

        </Carousel>
      </div>
    </section>
  );
}

function SkillCard({ title, items, icon, iconSize = 300 }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -6 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 15,
      }}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="
        backdrop-blur-xl 
        border border-white/20 
        rounded-xl 
        p-6 sm:p-8 mx-3
        shadow-lg shadow-purple-800/30
        hover:shadow-purple-400/70
        transition-all duration-300
        text-center
      "
    >
      <div className="flex justify-center mb-4">
        <img
          src={icon} 
          alt=""
          style={{ width: iconSize, height: iconSize }}
          className="object-contain drop-shadow-lg"
        />
      </div>

      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h3>

      {items.map((item, i) => (
        <p key={i} className="text-slate-200 text-lg sm:text-xl">
          {item}
        </p>
      ))}
    </motion.div>
  );
}
