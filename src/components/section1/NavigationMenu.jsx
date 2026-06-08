import { ContactContext } from './../../Contexts/ContactContext';
import { useContext } from 'react';

const NavigationMenu = () => {
 const [, setClick] = useContext(ContactContext);
   
 

  return (
    <nav
      
      className="
      h-[6vh] lg:w-1/3 md:w-2/4  sm:w-4/4
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
     <a onClick={() => setClick(false)}  href="/#home">Home</a>
     <a onClick={() => setClick(false)} href="/#about">About</a>
     <a onClick={() => setClick(false)} href="/#skills">Skills</a>
     <a onClick={() => setClick(false)} href="/#projects">Projects</a>
     {/* <a href="/#certifications">Certifications</a> */}
    </nav>
  );
};

export default NavigationMenu;