import { ContactContext } from "./../../Contexts/ContactContext";
import { useContext } from "react";

const NavigationMenu = () => {
  const [, setClick] = useContext(ContactContext);
  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
  ];

  return (
    <nav className="flex lg:w-2/5 md:w-3/5 h-fit justify-evenly items-center gap-1 rounded-full border border-white/15 bg-black/20 p-1 text-sm font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:gap-1 sm:text-base">
      {navItems.map((item, index) => (
        <a
          key={index}
          key={item.label}
          onClick={() => setClick(false)}
          href={item.href}
          className="rounded-full px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white hover:shadow-[0_10px_24px_rgba(255,255,255,0.08)] sm:px-4"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationMenu;
