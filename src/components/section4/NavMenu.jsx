import { useContext } from "react";
import { ProjectDataContext } from "../../Contexts/ProjectDataContext";

const NavMenu = () => {
  const [projectData] = useContext(ProjectDataContext);
  
  return (
    <div className="h-fit w-full flex justify-center mb-3 px-4">
      <nav className="h-10 w-fit flex justify-evenly font-medium text-base items-center bg-white/10 text-white border rounded-4xl gap-2 px-4">
        {projectData.map((elem, idx) => {
          return <a key={idx} href={'#'+(idx+1)} className="px-3 py-1 hover:text-amber-400 transition-colors">{idx+1}</a>;
        })}
      </nav>
    </div>
  );
};

export default NavMenu;
