import thinkImage from '../../assets/think4.png';
import { motion } from 'framer-motion';

const LeftContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full md:w-1/3 flex items-center justify-center md:justify-around py-4 md:py-0"
    >
      <div className="flex flex-row md:flex-col gap-4 items-center">
        <motion.img
          className="h-32 sm:h-44 md:h-55 drop-shadow-[2px_5px_20px_rgba(255,191,0,0.6)]"
          src={thinkImage}
          alt="think"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="w-fit flex flex-col justify-center items-center">
          <h1
            className="w-fit px-4 text-4xl sm:text-5xl mx-2 font-semibold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Me
          </h1>
          <div className="h-0.5 w-5/6 bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full m-2" />
        </div>
      </div>
      {/* Vertical divider - desktop only */}
      <div className="hidden md:block h-4/5 w-px relative top-8 right-4 rounded-full bg-gradient-to-b from-transparent via-white/20 to-transparent m-2" />
    </motion.div>
  );
};

export default LeftContent;
