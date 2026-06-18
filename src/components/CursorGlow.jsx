import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
