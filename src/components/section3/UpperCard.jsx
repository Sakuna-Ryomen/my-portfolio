import { motion } from "framer-motion";
import Cards from './Cards';
import { SkillDataContext } from './../../Contexts/SkillDataContext';
import { useContext } from 'react';

const UpperCard = () => {
  const [skills] = useContext(SkillDataContext);

  return (
    <div className="h-36 sm:h-44 md:h-60 w-full overflow-hidden flex flex-row items-center justify-center gap-4 sm:gap-8">
      <motion.div
        className="flex gap-4 sm:gap-8 w-max"
        initial={{ x: "80%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...skills].map((skill, index) => (
          <Cards key={index} name={skill.name} image={skill.image} />
        ))}
      </motion.div>
    </div>
  )
}

export default UpperCard
