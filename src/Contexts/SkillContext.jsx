import { SkillDataContext } from "./SkillDataContext";

const SkillContext = (props) => {
  const skills = [
    { name: "React", image: "/src/assets/react.svg" },
    { name: "JavaScript", image: "/src/assets/js.png" },
    { name: "HTML5", image: "/src/assets/html5.svg" },
    { name: "CSS3", image: "/src/assets/css.svg" },
    { name: "Node.js", image: "/src/assets/nodejs.svg" },
    { name: "Git", image: "/src/assets/git.svg" },
    { name: "GitHub", image: "/src/assets/github.svg" },
    { name: "Tailwind CSS", image: "/src/assets/tailwind.svg" },
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
