import Cards from "./Cards";
import Stats from "./Stats";
import { Palette, Sparkles, Brain, Layout, Monitor } from "lucide-react";

const RightContent = () => {
  const cardData = [
    { icon: <Monitor strokeWidth={0.75} />, title: "Frontend Development" },
    { icon: <Palette strokeWidth={0.75} />, title: "UI/UX Design" },
    { icon: <Layout strokeWidth={0.75} />, title: "Responsive Design" },
    { icon: <Sparkles strokeWidth={0.75} />, title: "Modern Web Technologies" },
    { icon: <Brain strokeWidth={0.75} />, title: "AI Applications" },
  ];

  // const listItems = [
  //   { title: "MERN Learner" },
  //   { title: "5+ Projects" },
  //   { title: "5+ Months of Experience" },
  // ];

  return (
    <div className="h-4/5 w-4/5  relative top-8 flex items-center justify-center  flex-wrap">
      <h2 className="text-xl max-w-[700px] leading-8 text-pretty font-serif  w-full p-4 m-4">
        Passionate <span className="text-amber-400">BSc IT student</span> and
        aspiring <span className="text-amber-400">React developer</span>{" "}
        focused on building clean, responsive, and user-friendly web
        experiences. Currently learning the{" "}
        <span className="text-amber-400">MERN stack</span> and exploring{" "}
        <span className="text-amber-400">AI-powered applications</span> through
        real-world projects.
      </h2>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="h-fit w-1/2  flex flex-col justify-center items-center">
          <h1 className="text-3xl font-serif font-medium">Interests</h1>
          <div className="h-0.5 w-full  bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full m-2"></div>
        </div>
        <div className="w-5/6 flex flex-wrap p-2 gap-4  justify-center">
          {cardData.map((card, index) => (
            <Cards key={index} icon={card.icon} title={card.title} index={index} cardData={cardData} />
          ))}
        </div>
      </div>
      <div className="w-full m-2 p-4 flex flex-col items-center justify-center">
        <Stats />
      </div>
    </div>
  );
};

export default RightContent;
