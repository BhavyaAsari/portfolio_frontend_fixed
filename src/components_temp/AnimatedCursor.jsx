import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = ({
  size = 25,
  color = "#FF6FD9",
  trailColor = "#FFFFFF",
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  // Track cursor position
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Add new particle to trail
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Math.random() },
        ];

        // Limit number of particles (trail length)
        if (newTrail.length > 10) newTrail.shift();

        return newTrail;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* TRAIL PARTICLES */}
      {trail.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 0.4, opacity: 1.4 }}
          animate={{
            x: p.x,
            y: p.y,
            scale: 1.2,
            opacity: 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="pointer-events-none fixed z-[9998]"
          style={{
            width: 10,
            height: 10,
            backgroundColor: trailColor,
            borderRadius: "50%",
            filter: "blur(6px)",
            opacity: 1,
            mixBlendMode: "screen",
            boxShadow: `
                        0 0 12px ${trailColor},
                            0 0 24px ${trailColor},
                            0 0 40px ${trailColor}
                            `,
          }}
        />
      ))}

      {/* MAIN CURSOR */}
      <motion.div
        animate={{
          x: pos.x - size / 2,
          y: pos.y - size / 2,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          mixBlendMode: "difference",
          opacity: 1,
          border: `2px solid ${color}`,
          boxShadow: `
            0 0 6px ${color},
            0 0 10px ${color},
            0 0 8px ${color}
        `,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
