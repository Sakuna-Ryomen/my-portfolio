import { ContactContext } from "./../../Contexts/ContactContext";
import { useContext } from "react";
import useActiveSection from "./useActiveSection";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home",     href: "/#home",     id: "home"     },
  { label: "About",    href: "/#about",    id: "about"    },
  { label: "Skills",   href: "/#skills",   id: "skills"   },
  { label: "Projects", href: "/#projects", id: "projects" },
];

const NavigationMenu = () => {
  const [, setClick] = useContext(ContactContext);
  const activeId = useActiveSection(navItems.map((i) => i.id));

  return (
    <nav className="flex items-center gap-1 text-sm font-medium text-white/80">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.label}
            onClick={() => setClick(false)}
            href={item.href}
            className="relative px-3 py-1.5 sm:px-4 rounded-full transition-all duration-300 hover:text-white group"
            style={{
              color: isActive ? "#fff" : undefined,
              fontFamily: "var(--font-body)",
            }}
          >
            {/* Label */}
            <span className={`relative z-10 transition-all duration-300 ${isActive ? "text-white" : "text-white/65 group-hover:text-white/90"}`}>
              {item.label}
            </span>

            {/* Active amber underline */}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-3 sm:left-4 right-3 sm:right-4 h-[2px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, #fbbf24, #f97316)",
                  boxShadow: "0 0 8px rgba(251,191,36,0.6)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}

            {/* Hover background pill */}
            <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/8 transition-colors duration-300" />
          </a>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
