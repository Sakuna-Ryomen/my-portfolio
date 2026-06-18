import Cards from "./Cards";
import Stats from "./Stats";
import { Palette, Sparkles, Brain, Layout, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const cardData = [
  { icon: <Monitor strokeWidth={0.75} />, title: "Frontend Development" },
  { icon: <Palette strokeWidth={0.75} />, title: "UI/UX Design" },
  { icon: <Layout strokeWidth={0.75} />, title: "Responsive Design" },
  { icon: <Sparkles strokeWidth={0.75} />, title: "Modern Web Tech" },
  { icon: <Brain strokeWidth={0.75} />, title: "AI Applications" },
];

const RightContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full md:w-4/5 px-4 flex flex-col items-center justify-center gap-5 pb-6 md:pb-0"
    >
      <p
        className="text-sm sm:text-base md:text-lg max-w-[700px] leading-relaxed text-pretty w-full px-2 text-white/80"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Passionate{" "}
        <span className="text-amber-400 font-semibold">BSc IT student</span> and
        aspiring{" "}
        <span className="text-amber-400 font-semibold">React developer</span>{" "}
        focused on building clean, responsive, and user-friendly web experiences.
        Currently learning the{" "}
        <span className="text-amber-400 font-semibold">MERN stack</span> and
        exploring{" "}
        <span className="text-amber-400 font-semibold">AI-powered applications</span>{" "}
        through real-world projects.
      </p>

      <div className="w-full flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Interests
          </h2>
          <div className="h-0.5 w-full bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full mt-1 mb-2" />
        </div>
        <div className="w-full flex flex-wrap gap-2 sm:gap-3 justify-center">
          {cardData.map((card, index) => (
            <Cards key={index} icon={card.icon} title={card.title} index={index} />
          ))}
        </div>
      </div>

      <div className="w-full p-2 flex flex-col items-center">
        <Stats />
      </div>
    </motion.div>
  );
};

export default RightContent;
