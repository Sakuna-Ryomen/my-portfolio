const RightContent = () => {
  return (
    <div className=" h-4/5 w-1/4 flex flex-row  items-center">
      <div className="h-full w-2 rounded-full border-gray-400 bg-white/10 m-2"></div>
      <div className="flex flex-col items-center justify-center gap-4 p-2 m-2">
        <h1 className="text-6xl text-amber-400 font-serif font-bold">Projects</h1>
        <p className="text-md font-medium  text-pretty">
          A collection of applications and experiments built while learning web
          development, AI integration, and modern technologies.
        </p>
      </div>
    </div>
  );
};

export default RightContent;
