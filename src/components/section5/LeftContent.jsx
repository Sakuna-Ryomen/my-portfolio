import EmailForm from "./EmailForm";

const LeftContent = () => {
  return (
    <div className="border border-white/10 h-fit w-full flex flex-col justify-between bg-white/5 backdrop-blur-lg p-4 sm:p-5 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col gap-0.5 px-2 items-center justify-center mb-3">
        <h2
          className="text-xl sm:text-2xl font-semibold text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Send a Message
        </h2>
        <p
          className="text-white/45 text-sm text-center"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Have a project in mind? Let's connect.
        </p>
      </div>
      <EmailForm />
    </div>
  );
};

export default LeftContent;
