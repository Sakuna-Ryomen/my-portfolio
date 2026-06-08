import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import { useContext } from "react";
import { ContactContext } from "/src/Contexts/ContactContext";

const NavBar = () => {

  const [, setClick] = useContext(ContactContext);

  return (
    <div className="h-24 w-full flex items-center text-white justify-between p-8 font-medium ">
      <div>
        <a href="/">
        <h3 className="h-[4vh] w-[4vh] p-5 m-2 bg-white/10 backdrop-blur-lg rounded-full items-center flex justify-center border border-white/20">
          AM
        </h3>
        </a>
      </div>
      <NavigationMenu />
      <div>
        {/* <button 
        onClick = {() => window.location.href = '#contact'}
        className="h-[4vh] w-[16vh] bg-white/10 p-5 m-2 border border-white/20 backdrop-blur-lg rounded-4xl flex justify-center items-center">
          Let's Talk
        </button> */}
        <Link onClick={() => setClick(true)} className="h-[4vh] w-[16vh] bg-white/10 p-5 m-2 border border-white/20 backdrop-blur-lg rounded-4xl flex justify-center items-center" to="/contact">
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
