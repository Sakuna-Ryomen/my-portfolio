import EmailForm from "./EmailForm";

const LeftContent = () => {
  return (
    <div className="border border-white/20 h-fit w-1/2 flex flex-col justify-between bg-white/10 backdrop-blur-lg  m-2 p-2 rounded-2xl">
      <div className="h-fit w-full flex flex-col gap-1 px-2 items-center justify-center ">
        <h1 className="flex justify-center text-2xl font-medium">
          Contact Me
        </h1>
        <p className="w-2/3 flex justify-center text-gray-300 text-center font-medium">
          Have a Project in Mind?
        </p>
      </div>
      <EmailForm />
    </div>
  );
};

export default LeftContent;
