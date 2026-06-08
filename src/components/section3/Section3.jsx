
import UpperCard from './UpperCard';
import LowerCard from './LowerCard';

const Section3 = () => {
  

  return (
    <div
      id="skills"
      className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center bg-black text-white snap-start"
    >
      <div className="h-5/6 flex flex-col items-center justify-between relative p-2 top-6 ">
        <div className="w-fit flex flex-col items-center">
          <h1 className="text-4xl font-bold mb font-serif">What I Know!</h1>
          <div className="h-0.5 w-full  bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full m-2"></div>
        </div>

        <UpperCard />
        <LowerCard />

      </div>
    </div>
  );
};

export default Section3;
