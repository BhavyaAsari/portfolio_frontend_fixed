import { motion, useScroll, useTransform } from "framer-motion";

function Education() {
  const entries = [
    {
      id: 1,
      title: "Vishwakarma Government Engineering College, Ahmedabad",
      degree: "Bachelor's of Engineering - IT",
      duration: "Aug 2022 - July 2026",
      grade: "7.5 CGPA",
      details:
        "Currently pursuing B.E degree in IT at VGEC. Covered DSA, OOPS, DBMS, CN and other core utilities.",
      img: "/vegeclogo.png",
    },
    {
      id: 2,
      title: "NEW ENGLISH HIGH SECONDARY SCHOOL, Himmatnagar-Sabarkantha",
      degree: "GSEB (XII), Science Stream - PCM",
      duration: "June 2021 - June 2022",
      grade: "61.54%",
      details: "Completed Class 12 in Science.",
      img: "/nehslogo.png",
    },
    {
      id: 3,
      title: "NEW ENGLISH HIGH SECONDARY SCHOOL, Himmatnagar-Sabarkantha",
      degree: "GSEB (X)",
      grade: "78%",
      details: "Completed 10th class.",
      img: "/nehslogo.png",
    },
  ];

  // Left / Right animations for timeline
  const fadeSlide = (from = "left") => ({
    initial: { opacity: 0, x: from === "left" ? -30 : 30, y: 10 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: false, amount: 0.25 },
  });

  return (
    <div className="py-12 px-4 sm:px-8" id="education">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-black mt-2 mb-4">
        Academics
      </h2>

      <p className="text-center text-white text-xl sm:text-2xl md:text-4xl mb-10">
        <em>
          My educational <b className="text-yellow-100">advancement</b> throughout the years.
        </em>
      </p>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">

        {entries.map((e, idx) => {
          const alignRight = idx % 2 === 0;

          return (
            <motion.div
              key={e.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-center"
              initial={fadeSlide(alignRight ? "right" : "left").initial}
              whileInView={fadeSlide(alignRight ? "right" : "left").whileInView}
              transition={fadeSlide().transition}
              viewport={fadeSlide().viewport}
            >
              {/* Left card (when alignRight = false) */}
              {!alignRight && (
                <div className="flex justify-end">
                  <div className="p-4 sm:p-6 border border-black bg-white/10 backdrop-blur-md rounded-2xl max-w-md">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white">
                      {e.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-200">{e.degree}</p>
                    <p className="text-lg sm:text-xl text-white">{e.duration}</p>
                    <p className="text-lg sm:text-xl text-purple-100">
                      <strong>Grade:</strong> {e.grade}
                    </p>
                    <p className="text-lg sm:text-xl text-purple-100">{e.details}</p>
                  </div>
                </div>
              )}

              {/* Middle logo timeline dot */}
              <div className="hidden md:flex justify-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute w-14 h-14 rounded-full bg-white border-4 border-purple-500 shadow-lg flex items-center justify-center
                    ${alignRight ? "translate-x-1/2 right-0" : "-translate-x-1/2 left-0"}`}
                >
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-8 h-8 object-contain"
                  />
                </motion.div>
              </div>

              {/* Right card (when alignRight = true) */}
              {alignRight && (
                <div className="flex justify-start">
                  <div className="p-4 sm:p-6 border border-black bg-white/10 backdrop-blur-md rounded-2xl max-w-md">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white">
                      {e.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-white">{e.degree}</p>
                    <p className="text-lg sm:text-xl text-purple-100">{e.duration}</p>
                    <p className="text-lg sm:text-xl text-purple-100">
                      <strong>Grade:</strong> {e.grade}
                    </p>
                    <p className="text-lg sm:text-xl text-purple-100">{e.details}</p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
