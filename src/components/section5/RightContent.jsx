import qrCode from "../../assets/qrcode.png";

const RightContent = () => {

  const mailToLink = "mailto:avinashmaurya261@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Avinash%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity%2Fproject.%0A%0AName%3A%0ACompany%2FOrganization%3A%0APurpose%20of%20Contact%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20Regards%2C"

  return (
    <div className="border border-white/20 h-fit md:h-full w-full md:w-auto flex flex-col items-center justify-center gap-4 p-4 backdrop-blur-lg bg-white/10 rounded-2xl">
      <h1 className="text-xl sm:text-2xl font-bold">Quick Contact?</h1>

      {/* QR Code */}
      <div className="flex flex-col items-center">
        <div className="h-52 w-52 sm:h-60 sm:w-60 flex flex-col p-1 rounded-2xl bg-white justify-between items-center">
          <img className="h-44 sm:h-52 w-full object-contain" src={qrCode} alt="QR Code" />
          <h2 className="text-xl sm:text-2xl pb-1 text-black font-bold">Scan Me!</h2>
        </div>
      </div>

      <h2 className="text-lg font-semibold">Or</h2>

      {/* Email + Button */}
      <div className="w-full p-3 rounded-2xl flex flex-col items-center justify-center gap-3 bg-white/10 border border-white/15">
        <p className="text-sm sm:text-base font-medium text-center break-all">avinashmaurya261@gmail.com</p>
        <button
          onClick={(e) => {
            window.location.href = mailToLink;
            e.preventDefault();
          }}
          className="w-full bg-blue-500 rounded-xl font-sans active:scale-95 hover:scale-105 hover:bg-blue-600 text-white font-bold py-2 px-4 text-sm sm:text-base transition-all duration-200"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default RightContent;
