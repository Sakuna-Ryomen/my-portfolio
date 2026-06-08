import { SkillDataContext } from "./SkillDataContext";
import reactIcon from "../assets/react.svg";
import javascriptIcon from "../assets/js.png";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css.svg";
import nodeIcon from "../assets/nodejs.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import tailwindIcon from "../assets/tailwind.svg";

const SkillContext = (props) => {
  const skills = [
    { name: "React", image: reactIcon },
    { name: "JavaScript", image: javascriptIcon },
    { name: "HTML5", image: htmlIcon },
    { name: "CSS3", image: cssIcon },
    { name: "Node.js", image: nodeIcon },
    { name: "Git", image: gitIcon },
    { name: "GitHub", image: githubIcon },
    { name: "Tailwind CSS", image: tailwindIcon },
  ];

  return (
    <div>
      <SkillDataContext.Provider value={[skills]}>
        {props.children}
      </SkillDataContext.Provider>
    </div>
  );
};

export default SkillContext;
