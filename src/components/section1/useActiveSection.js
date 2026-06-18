import { useEffect, useState } from "react";

/**
 * Tracks which section is currently visible in the scroll container.
 * Returns the id of the active section (e.g. "home", "about", "skills", "projects").
 */
const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    // The scroll container is the first child of #root (App's div)
    const scrollEl = document.querySelector(".hide-scrollbar") || window;

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: scrollEl === window ? null : scrollEl,
          // Trigger when section covers at least 40% of the viewport
          threshold: 0.4,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds.join(",")]);

  return activeId;
};

export default useActiveSection;
