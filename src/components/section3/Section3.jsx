import UpperCard from './UpperCard';
import LowerCard from './LowerCard';
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <div
      id="skills"
      className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white snap-start"
    >
      <div className="section-accent-top" />
      <div className="h-fit w-full flex flex-col items-center justify-between gap-4 sm:gap-6 px-4 pt-16 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-fit flex flex-col items-center"
        >
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            My Tech Stack
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full mt-2" />
          <p
            className="text-white/50 text-sm mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Tools & technologies I work with
          </p>
        </motion.div>

        <UpperCard />
        <LowerCard />
      </div>
    </div>
  );
};

export default Section3;
