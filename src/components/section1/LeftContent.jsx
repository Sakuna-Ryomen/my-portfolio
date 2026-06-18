import { LinkedIn, GitHub, Download } from "@mui/icons-material";
import avinashCv from "../../assets/Avinash CV.pdf";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ── Typewriter hook ─────────────────────────── */
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

/* ── Variants ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const LeftContent = () => {
  const roles = ["React Developer", "UI/UX Enthusiast", "MERN Learner"];
  const typed = useTypewriter(roles);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="relative z-10 w-full sm:w-3/5 lg:w-2/4 py-10 px-6 sm:px-10 flex flex-col justify-center items-start gap-5 mt-10"
    >
      {/* Greeting */}
      <motion.h3
        variants={fadeUp}
        custom={0}
        className="text-xl sm:text-2xl md:text-3xl text-white/75 tracking-wide"
        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
      >
        Hi, I am{" "}
        <span className="text-white font-semibold">Avinash</span>
      </motion.h3>

      {/* Typewriter title */}
      <motion.div variants={fadeUp} custom={1} className="leading-tight">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-600 blur-3xl opacity-40 rounded-full" />
            <span className="relative z-10 text-amber-400">{typed}</span>
          </span>
          <span className="typewriter-cursor" />
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeUp}
        custom={2}
        className="text-sm sm:text-base md:text-lg max-w-[460px] leading-relaxed text-white/70"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Blending thoughtful UI design with clean, responsive development to
        create websites that look great and perform flawlessly.
      </motion.p>

      {/* Tech badge pills */}
      <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2">
        {["React", "JavaScript", "Tailwind", "Node.js", "MongoDB"].map((t) => (
          <span
            key={t}
            className="text-xs font-mono font-medium px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/8 text-amber-300 backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp}
        custom={4}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-1"
      >
        <a
          className="flex items-center gap-2 rounded-full py-3 px-6 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-black font-semibold text-sm shadow-[0_8px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.55)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          href={avinashCv}
          download="Avinash CV.pdf"
        >
          <Download style={{ fontSize: 18 }} />
          Download CV
        </a>
        <div className="flex gap-3">
          <a
            className="h-11 w-11 flex items-center justify-center rounded-full bg-white/8 border border-white/20 hover:bg-white/18 hover:border-amber-400/50 hover:shadow-[0_0_16px_rgba(245,158,11,0.3)] active:scale-95 transition-all duration-300"
            href="https://www.linkedin.com/in/avinashmaurya261/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="medium" />
          </a>
          <a
            className="h-11 w-11 flex items-center justify-center rounded-full bg-white/8 border border-white/20 hover:bg-white/18 hover:border-amber-400/50 hover:shadow-[0_0_16px_rgba(245,158,11,0.3)] active:scale-95 transition-all duration-300"
            href="https://github.com/Sakuna-Ryomen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub fontSize="medium" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftContent;
