import { motion } from "framer-motion";
import Cards from './Cards';
import { SkillDataContext } from './../../Contexts/SkillDataContext';
import { useContext } from 'react';

const UpperCard = () => {
  const [skills] = useContext(SkillDataContext);

  return (
    <div className=" h-60 w-full overflow-hidden p-2 m-2 flex flex-row items-center justify-center gap-8">
          <motion.div
            className="flex gap-8 w-max"
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
