import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
import NavMenu from './NavMenu';
import { motion } from 'framer-motion';

const Section4 = () => {
  return (
    <div
      id="projects"
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start text-white snap-start pt-20 pb-8"
    >
      <div className="section-accent-top" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col items-center mb-4 px-4"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-amber-400 font-bold"
          style={{ fontFamily: 'var(--font-heading)', textShadow: '0 0 30px rgba(245,158,11,0.4)' }}
        >
          Projects
        </h1>
        <p
          className="text-sm sm:text-base font-light text-pretty text-center max-w-md mt-2 text-white/60"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A collection of applications and experiments built while learning web
          development, AI integration, and modern technologies.
        </p>
        <div className="h-0.5 w-32 sm:w-48 bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full mt-3" />
      </motion.div>

      <NavMenu />
      <LeftContent />
    </div>
  );
};

export default Section4;
