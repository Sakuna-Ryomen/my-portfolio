import LeftContent from "../section5/LeftContent";
import RightContent from "../section5/RightContent";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div
      id="contact"
      style={{ minHeight: "100dvh" }}
      className="w-full flex flex-col items-center justify-center text-white px-4 pt-20 pb-8 gap-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-1.5 items-center justify-center text-center"
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let's Work{" "}
          <span className="text-amber-400" style={{ textShadow: "0 0 20px rgba(245,158,11,0.4)" }}>
            Together
          </span>
        </h1>
        <p
          className="w-full sm:w-2/3 text-center font-light text-sm sm:text-base text-white/55"
          style={{ fontFamily: "var(--font-body)" }}
        >
          I'm currently seeking internships, entry-level opportunities, and
          exciting projects to collaborate on.
        </p>
        <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full mt-1" />
      </motion.div>

      {/* Content Row */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-stretch gap-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-3/5"
        >
          <LeftContent />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-2/5"
        >
          <RightContent />
        </motion.div>
      </div>
    </div>
  );
};

export default Section5;
