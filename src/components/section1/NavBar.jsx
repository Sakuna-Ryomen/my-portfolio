import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import { useContext } from "react";
import { ContactContext } from "/src/Contexts/ContactContext";

const NavBar = () => {

  const [, setClick] = useContext(ContactContext);

  return (
    <div className="relative top-4 mx-auto flex w-[70%] items-center justify-between gap-4 rounded-full border border-white/15 bg-white/8 px-2 py-1 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-4">
      <a href="/" className="group flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-transparent text-sm font-semibold tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105">
          AM
        </span>
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[12px] font-semibold uppercase tracking-[0.35em] text-white/70">
            Portfolio
          </span>
          <span className="text-[14px] font-medium text-white">Avinash Maurya</span>
        </span>
      </a>
      <NavigationMenu />
      <div className="shrink-0">
        <Link
          onClick={() => setClick(true)}
          className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_16px_36px_rgba(251,191,36,0.45)]"
          to="/contact"
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
