import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
import NavMenu from './NavMenu';
const Section4 = () => {
  return (
    <div
      id="projects"
      className=" h-screen w-full  bg-black flex items-center justify-center text-white snap-start"
    >
      <div className="h-full w-full flex flex-row relative top-8 items-center justify-center gap-8 p-4 m-2">
        <div className="h-6/7 w-4/5 rounded-2xl flex flex-col items-center">
          <NavMenu />
          <LeftContent />
        </div>
        <RightContent />
      </div>
    </div>
  );
};

export default Section4;
