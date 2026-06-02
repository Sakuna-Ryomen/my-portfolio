import NavigationMenu from './NavigationMenu';

const NavBar = () => {
  return (
    <div className="h-24 w-full flex items-center text-white justify-between p-8 font-medium ">
      <div>
        <h3 className="h-[4vh] w-[4vh] p-5 m-2 bg-white/10 backdrop-blur-lg rounded-full items-center flex justify-center border border-white/20">
          AM
        </h3>
      </div>
      <NavigationMenu />
      <div>
        <button className="h-[4vh] w-[16vh] bg-white/10 p-5 m-2 border border-white/20 backdrop-blur-lg rounded-4xl flex justify-center items-center">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default NavBar;
