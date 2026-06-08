import LeftContent from "../section5/LeftContent";
import RightContent from "../section5/RightContent";

const Section5 = () => {
  return (
    <div
      id="contact"
      className="relative top-20 h-6/7  w-full flex flex-col items-center  text-white scroll-smooth snap-start "
    >
      <div className="h-fit w-full flex flex-col gap-2 px-2 items-center justify-center ">
        <h1 className="flex justify-center text-2xl font-medium">
          Let's Work Together
        </h1>
        <p className="w-2/3 flex justify-center text-center font-light">
          I'm currently seeking internships, entry-level opportunities, and
          exciting projects to collaborate on.
        </p>
      </div>
      <div className="h-full w-full flex flex-row justify-center items-center">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default Section5;
