import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import { useContext, useState } from "react";
import { ContactContext } from "/src/Contexts/ContactContext";
import { Menu, X } from "lucide-react";
import useActiveSection from "./useActiveSection";

const NavBar = () => {
  const [, setClick] = useContext(ContactContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home",     href: "/#home",     id: "home"     },
    { label: "About",    href: "/#about",    id: "about"    },
    { label: "Skills",   href: "/#skills",   id: "skills"   },
    { label: "Projects", href: "/#projects", id: "projects" },
  ];

  const activeId = useActiveSection(navItems.map((i) => i.id));
  return (
    <div className="relative top-4 mx-auto w-[92%] sm:w-[85%] md:w-[80%] lg:w-[70%]">
      {/* Main Navbar Row */}
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-4">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-transparent text-sm font-semibold tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105">
            AM
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Portfolio
            </span>
            <span className="text-[13px] font-medium text-white">Avinash Maurya</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu />
        </div>

        {/* Right side: Let's Talk + Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            onClick={() => { setClick(true); setMenuOpen(false); }}
            className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_16px_36px_rgba(251,191,36,0.45)]"
            to="/contact"
          >
            Let's Talk
          </Link>

          {/* Hamburger Button - only on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-white/15 bg-black/85 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <nav className="flex flex-col p-2 gap-0.5">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => { setClick(false); setMenuOpen(false); }}
                  className={`relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                    ${ isActive
                      ? "text-white bg-amber-400/8 border-l-2 border-amber-400"
                      : "text-white/55 hover:text-white hover:bg-white/8 border-l-2 border-transparent"
                    }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] shrink-0" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
