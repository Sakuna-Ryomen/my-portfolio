import { useContext } from "react";
import { ProjectDataContext } from "../../Contexts/ProjectDataContext";

const NavMenu = () => {
  const [projectData] = useContext(ProjectDataContext);
  
  return (
    <div className="h-fit w-full flex justify-center m-4">
      <nav className="h-10 w-1/2 flex justify-evenly font-medium text-lg items-center bg-white/10 text-white border rounded-4xl gap-4">
        {projectData.map((elem, idx) => {
          return <a key={idx} href={'#'+(idx+1)}>{idx+1}</a>;
        })}
      </nav>
    </div>
  );
};

export default NavMenu;
