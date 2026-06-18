import { MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (props.cardIndex || 0) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      id={props.id}
      className="relative w-full sm:w-[calc(50%-8px)] lg:w-[calc(33%-8px)] min-h-[340px]
        flex flex-col bg-white/5 border border-white/10
        hover:border-amber-400/35 hover:bg-white/8
        hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)]
        rounded-3xl items-center justify-between p-3
        cursor-pointer overflow-hidden transition-colors duration-300"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Project number badge */}
      <div className="absolute top-3 left-3 z-20 h-7 px-2.5 rounded-full bg-amber-400/15 border border-amber-400/35 flex items-center justify-center">
        <span className="text-amber-400 text-xs font-bold" style={{ fontFamily: "var(--font-body)" }}>
          #{String((props.cardIndex ?? 0) + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Front Face */}
      <AnimatePresence mode="wait" initial={false}>
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full flex flex-col justify-between"
          >
            <div className="w-full mt-2">
              <img
                className="h-[155px] sm:h-[170px] object-cover w-full rounded-2xl border border-white/10"
                src={props.img}
                alt={props.name}
              />
            </div>
            <div className="flex flex-col gap-2 px-1 mt-3 flex-1">
              <h2
                className="text-xl sm:text-2xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {props.name}
              </h2>
              <div>
                <h3
                  className="text-[10px] font-semibold text-white/45 uppercase tracking-wider mb-1.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Tech Stack
                </h3>
                <div className="flex gap-1.5 flex-wrap">
                  {Array.isArray(props.tech)
                    ? props.tech.slice(0, 4).map((elem, i) => (
                        <span
                          key={i}
                          className="text-xs capitalize font-medium font-mono bg-white/8 border border-white/10 px-2 py-0.5 rounded-full text-white/70"
                        >
                          {elem}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-[10px] text-white/30 italic" style={{ fontFamily: "var(--font-body)" }}>
                Tap to see details →
              </span>
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 active:scale-95 font-semibold text-xs text-black rounded-full px-3.5 py-2 shadow-[0_4px_14px_rgba(245,158,11,0.4)] transition-all duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Live Demo
                </button>
              </a>
            </div>
          </motion.div>
        ) : (
          /* Back Face */
          <motion.div
            key="back"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full flex flex-col justify-between px-1 py-2"
          >
            <div className="flex flex-col gap-3">
              <h2
                className="text-lg font-semibold text-amber-400 mt-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {props.name}
              </h2>
              <p
                className="text-sm leading-relaxed text-white/75"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {props.desc}
              </p>
              <div>
                <h3
                  className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  All Technologies
                </h3>
                <div className="flex gap-1.5 flex-wrap">
                  {Array.isArray(props.tech)
                    ? props.tech.map((elem, i) => (
                        <span
                          key={i}
                          className="text-xs capitalize font-medium font-mono bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-full text-amber-300"
                        >
                          {elem}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <p
              className="text-white/25 text-[10px] italic mt-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ← Tap to flip back
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
