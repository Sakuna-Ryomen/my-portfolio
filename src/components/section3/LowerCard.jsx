import { motion } from "framer-motion";
import Cards from './Cards';
import { useContext } from "react";
import { SkillDataContext } from "../../Contexts/SkillDataContext";

const LowerCard = () => {

    const [skills] = useContext(SkillDataContext)

  return (
    <div className="h-60 w-full overflow-hidden p-4 m-4 items-center flex flex-row justify-center gap-8">
          <motion.div
            className="flex gap-8 w-max"
            initial={{ x: "-80%" }}
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

export default LowerCard
