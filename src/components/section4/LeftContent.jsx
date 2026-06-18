import { ProjectDataContext } from "../../Contexts/ProjectDataContext";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";

const LeftContent = () => {
  const [projectData] = useContext(ProjectDataContext);
  return (
    <div className="w-full px-4 flex flex-row flex-wrap gap-4 items-stretch justify-center">
      {[...projectData].map((elem, idx) => (
        <ProjectCard
          name={elem.name}
          desc={elem.description}
          img={elem.img}
          key={idx}
          cardIndex={idx}
          tech={elem.tech}
          link={elem.link}
        />
      ))}
    </div>
  );
};

export default LeftContent;
