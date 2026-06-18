import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountUp = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) { setCount(target); return; }
    const duration = 1500;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <div className="w-full flex flex-row gap-2 sm:gap-6 items-center justify-evenly">
      {[
        { value: "5", suffix: "+", label: "Projects Built" },
        { value: "8", suffix: "+", label: "Technologies" },
        { value: "100", suffix: "%", label: "Learning Mindset" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="flex flex-col items-center gap-1"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400"
            style={{
              textShadow: "0 0 20px rgba(245,158,11,0.6)",
              fontFamily: "var(--font-heading)",
            }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
          </h1>
          <h3
            className="text-xs sm:text-sm md:text-base font-medium text-center text-white/75"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {stat.label}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
