import qrCode from "../../assets/qrcode.png";

const RightContent = () => {

  const mailToLink = "mailto:avinashmaurya261@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Avinash%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity%2Fproject.%0A%0AName%3A%0ACompany%2FOrganization%3A%0APurpose%20of%20Contact%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20Regards%2C"

  return (
    <div className="border border-white/20 h-10/11 w-1/3 m-2 p-2 flex flex-col backdrop-blur-lg bg-white/10  items-center gap-4 rounded-2xl">
      <h1 className="text-2xl font-bold">Quick Contact?</h1>
      <div className="h-70 w-60 flex flex-col p-1 rounded-2xl bg-white justify-between items-center">
        <img className="h-60 w-60" src={qrCode} alt="QR Code" />
        <h2 className="text-2xl pb-1  text-black font-bold">Scan Me!</h2>
      </div>
      <h1 className="text-2xl font-bold">Or</h1>
      <div className="h-fit w-fit p-2 px-3 rounded-3xl flex flex-row flex-wrap bg-white/20 justify-center items-center gap-4">
        <h2 className="text-lg font-medium">avinashmaurya261@gmail.com</h2>
        <button
          onClick={(e) => {
            window.location.href = mailToLink;
            e.preventDefault();
          }}
          className="h-fit w-fit bg-blue-500 rounded-2xl font-sans  active:scale-95 hover:scale-105 hover:bg-blue-600  text-white font-bold py-2 px-4 "
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default RightContent;
