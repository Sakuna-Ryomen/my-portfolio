import { motion } from "framer-motion";

const Cards = ({ icon, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.06, y: -3 }}
      className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 hover:border-amber-400/40 hover:bg-amber-400/6 rounded-xl p-2.5 pr-4 cursor-default transition-colors duration-300"
    >
      <span className="text-amber-400/80">{icon}</span>
      <h3
        className="text-sm sm:text-base font-medium text-white/85"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {title}
      </h3>
    </motion.div>
  );
};

export default Cards;
