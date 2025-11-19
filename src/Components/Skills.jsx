import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold text-slate-1500">My Skills</h2>
        <p className="text-white text-4xl mt-2">
         <em> A glance at the technologies I've worked with.</em>
        </p>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          showDots
          pauseOnHover
          transitionDuration={700}
          className="pb-12"
        >
          {/* Card 1 */}
          <div className="bg-purple-700 text-white p-6 mx-3 rounded-xl shadow-xl hover:shadow-purple-400/60 hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-3">Programming</h3>
            <p className="text-slate-200">JavaScript</p>
            <p className="text-slate-200">C++</p>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-700 text-white p-6 mx-3 rounded-xl shadow-xl hover:shadow-purple-400/60 hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
            <p className="text-slate-200">React.js</p>
            <p className="text-slate-200">HTML</p>
            <p className="text-slate-200">CSS</p>
            <p className="text-slate-200">Tailwind CSS</p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-700 text-white p-6 mx-3 rounded-xl shadow-xl hover:shadow-purple-400/60 hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-3">Backend</h3>
            <p className="text-slate-200">Node.js</p>
            <p className="text-slate-200">Express.js</p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-700 text-white p-6 mx-3 rounded-xl shadow-xl hover:shadow-purple-400/60 hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-3">Database</h3>
            <p className="text-slate-200">MySQL</p>
            <p className="text-slate-200">MongoDB</p>
          </div>

          {/* Card 5 */}
          <div className="bg-purple-700 text-white p-6 mx-3 rounded-xl shadow-xl hover:shadow-purple-400/60 hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-3">Tools</h3>
            <p className="text-slate-200">Git</p>
            <p className="text-slate-200">VS Code</p>
            <p className="text-slate-200">Postman</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
