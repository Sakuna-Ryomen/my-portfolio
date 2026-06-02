import thinkImage from '../../assets/think2.png';

const LeftContent = () => {
  return (
    <div className="h-screen w-1/3 flex items-center justify-around">
      <div className="flex flex-col gap-4  items-center">
        <img
          className="h-50 drop-shadow-[2px_5px_10px_rgba(255,191,0,0.8)]"
          src={thinkImage}
          alt="think"
        />
        {/* <h1 className="h-52 w-52 border border-white/20   flex flex-col items-center justify-center rounded-full text-8xl p-2 font-bold text-white bg-white/10 backdrop-blur-lg">AM</h1> */}
        <div className="w-fit flex flex-col justify-center items-center">
          <h1 className="w-fit  px-4 text-6xl mx-2 font-semibold  font-serif">
            About Me
          </h1>
          <div className="h-0.5 w-5/6  bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600 rounded-full m-2"></div>
        </div>
      </div>
      <div className="h-4/5 w-1 relative top-8 right-4 rounded-full border-gray-400 bg-white/10 m-2"></div>
    </div>
  );
};

export default LeftContent;
