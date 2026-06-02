const NavigationMenu = () => {
  return (
    <nav
      className="
      h-[6vh] w-3/4 lg:w-1/3
      flex items-center justify-between
      rounded-full
      px-8 py-5 m-2
      bg-white/10
      backdrop-blur-lg

      border border-white/20
      
      shadow-[0_8px_32px_rgba(255,255,255,0.08)]
      
      text-white text-xl font-medium
      "
    >
     <a href="#home">Home</a>
     <a href="#about">About</a>
     <a href="#skills">Skills</a>
     <a href="#projects">Projects</a>
     {/* <a href="#certifications">Certifications</a> */}
    </nav>
  );
};

export default NavigationMenu;