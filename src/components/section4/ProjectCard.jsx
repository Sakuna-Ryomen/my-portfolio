import { MapPin } from "lucide-react";
import { useState } from "react";

const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      id={props.id}
      className={`h-14/15 lg:w-1/3 md:w-3/5 hover:scale-105 focus:bg-red-300 hover:bg-gray-500/30 flex flex-col bg-gray-500/20 rounded-3xl items-center justify-between p-2 transition-transform ${flipped ? "rotate-y-180" : ""}`}
      onClick={() => {
        console.log(!flipped);
        setFlipped(!flipped);
        console.log(flipped);
      }}
    >
      {!flipped ? (
        <>
          <div className="h-1/2 w-full">
            <img className="h-[20vh] object-fill w-full rounded-2xl border border-white/20" src={props.img} alt="" />
          </div>
          <div className="rounded-2xl h-full w-full flex flex-col justify-between px-2 m-2">
            <div className="h-full flex flex-col gap-1">
              <h2 className="text-2xl font-medium font-serif ">{props.name}</h2>
              <div className="flex flex-col gap-2 justify-between">
                <h3 className="text-md font-semibold ">Tech Stack:</h3>
                <div className="flex gap-2 flex-wrap">
                  {Array.isArray(props.tech)
                    ? props.tech.slice(0, 5).map((elem, i) => (
                        <span
                          key={i}
                          className="text-md capitalize font-medium font-mono bg-white/10 px-3 py-1 rounded-full"
                        >
                          {elem}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <h3 className="flex items-center text-sm justify-center text-gray-300 font-medium">
              Click to flip the card
            </h3>
            <div className="h-fit w-full  px-4 flex items-center mt-2  justify-center">
              <a href={props.link} target="_blank" >
                <button
                  type="button"
                  onClick={(event) => event.stopPropagation()}
                  className={`active:scale-95 flip flex justify-center items-center  gap-2 bg-amber-400 font-medium text-md font-serif text-black rounded-full px-4 py-2`}
                >
                  <MapPin className="w-5 h-5" />
                  Teleport
                </button>
              </a>  
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full m-4 px-3 flex flex-col items-center justify-between transition-transform rotate-y-180">
            <div className='h-full flex flex-col gap-4'>

            <h3 className="text-pretty font-medium font-serif ">
              {props.desc}
            </h3>
            <div className="flex gap-2 flex-wrap">
                  {Array.isArray(props.tech)
                    ? props.tech.map((elem, i) => (
                        <span
                          key={i}
                          className="text-md capitalize font-medium font-mono bg-white/10 px-3 py-1 rounded-full"
                        >
                          {elem}
                        </span>
                      ))
                    : null}
                </div>
            </div>
            <p className="text-gray-400 font-medium text-sm">
              Click to Flip again
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
