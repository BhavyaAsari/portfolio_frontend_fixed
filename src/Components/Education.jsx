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
      title:
        "NEW ENGLISH HIGH SECONDARY SCHOOL, Himmatnagar-Sabarkantha",
      degree: "GSEB (XII), Science Stream - PCM",
      duration: "June 2021 - June 2022",
      grade: "61.54%",
      details:
        "Completed Class 12 in Science (Physics, Chemistry, Maths).",
      img: "/nehslogo.png",
    },
    {
      id: 3,
      title:
        "NEW ENGLISH HIGH SECONDARY SCHOOL, Himmatnagar-Sabarkantha",
      degree: "GSEB (X), Science with Computer",
      grade: "78%",
      details: "Completed 10th class.",
      img: "/nehslogo.png",
    },
  ];

  const fadeSlide = (from = "left") => ({
    initial: {
      opacity: 0,
      x: from === "left" ? -40 : 40,
      y: 10,
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, amount: 0.25 },
  });

  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="py-16 px-4 sm:px-8" id="education">
      {/* Heading */}
      <h2 className="text-7xl font-bold text-center text-black mt-2 mb-4">
        Academics
      </h2>
      <p className="text-center text-white text-4xl mb-12">
        <em>My educational <b className="text-black">advancement</b>  throughout the years.</em>
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
       
        {/* Timeline Items */}
        {entries.sort((a, b) => a.id - b.id).map((e, idx) => {
          const alignRight = idx % 2 === 0; // alternate zigzag
          const sectionId = `education-${e.id}`;

          return (
            <motion.div
              key={e.id}
              id={sectionId}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-center"
              initial={fadeSlide(alignRight ? "right" : "left").initial}
              whileInView={fadeSlide(alignRight ? "right" : "left").whileInView}
              transition={{
                ...fadeSlide(alignRight ? "right" : "left").transition,
                delay: alignRight ? 0.1 : 0,
              }}
              viewport={fadeSlide(alignRight ? "right" : "left").viewport}
            >
              {/* LEFT CARD */}
              {!alignRight && (
                <div className="flex justify-end mr-2">
                  <div className="p-5 md:p-6 border border-black rounded-2xl transition-all max-w-md">
                    <h3 className="text-base sm:text-2xl md:text-5xl font-semibold text-white">
                      {e.title}
                    </h3>
                    <p className="text-2xl text-gray-200">{e.degree}</p>
                    <p className="text-2xl text-white">{e.duration}</p>
                    <p className="text-2xl text-purple-100">
                      <strong>Grade:</strong> {e.grade}
                    </p>
                    <p className="text-sm-3 text-purple-100 text-2xl">{e.details}</p>
                  </div>
                </div>
              )}

              {/* MIDDLE COLUMN → CIRCLE POSITION */}
              <div className="hidden md:block relative flex justify-center items-center ">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className={`absolute w-14 h-14 rounded-full bg-white 
                  border-4 border-indigo-500 shadow-[0_0_15px_3px_rgba(50,100,201,0.6)] 
                  flex items-center justify-center 
                  ${alignRight ? "md:translate-x-1/2 right-0" : "md:-translate-x-1/2 left-0"}`}
                >
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                </motion.div>
              </div>

              {/* RIGHT CARD */}
              {alignRight && (
                <div className="flex justify-start ml-3">
                  <div className="p-5 md:p-6 border border-black rounded-2xl transition-all max-w-md">
                    <h3 className="text-base sm:text-2xl md:text-5xl font-semibold text-white  ">
                      {e.title}
                    </h3>
                    <p className="text-2xl text-white">{e.degree}</p>
                    <p className="text-2xl text-purple-100">{e.duration}</p>
                    <p className="text-2xl text-purple-100">
                      <strong>Grade:</strong> {e.grade}
                    </p>
                    <p className="text-sm-3 text-purple-100 text-2xl">{e.details}</p>
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
