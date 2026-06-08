import { ProjectDataContext } from "../../Contexts/ProjectDataContext";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";

const LeftContent = () => {
  const [projectData] = useContext(ProjectDataContext)
  return (
    <div className="h-full m-2 w-full px-4  scrollbar-thin scrollbar-track-black scrollbar-thumb-amber-400 overflow-x-auto flex flex-col flex-wrap gap-4 items-center  justify-center">
      {[...projectData].map((elem, idx) => {
        return (
          <ProjectCard
            name={elem.name}
            desc={elem.description}
            img={elem.img}         
            key={idx}
            tech={elem.tech}
            link={elem.link}
          />
        );
      })}
    </div>
  );
};

export default LeftContent;
