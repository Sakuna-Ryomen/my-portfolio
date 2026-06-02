import { LinkedIn, GitHub, Download } from "@mui/icons-material";
import avinashCv from "../../assets/Avinash CV.pdf";

const LeftContent = () => {
  return (
    <div className="h-screen  w-2/4  py-10 m-2 flex flex-col justify-center items-center gap-4 font-serif">
      <div className="p-6 relative top-8 leading-1 flex flex-col">
        <h3 className="text-4xl pl-4 m-2">I am Avinash,</h3>
        <h1 className="text-6xl pl-6 leading-snug text-white">
          Full-Stack <br />
          <span className="relative inline-block">
            {/* Glow Background */}
            <span className="absolute inset-0 bg-linear-to-br from-yellow-300 via-amber-500 to-orange-600 blur-2xl opacity-50 rounded-full"></span>

            {/* Actual Text */}
            <span className="relative z-10 text-amber-400">React</span>
          </span> Developer
        </h1>
        <p className="text-xl pl-4 m-2 leading-snug">
          Blending thoughtful UI design with clean, responsive development to
          create websites that look great and perform flawlessly.
        </p>
        <div className="h-[20vh] w-5/6 flex flex-col items-center justify-between gap-4 p-4 m-4 ">
          <a
            className="text-xl h-8 w-[28vh] rounded-4xl py-5 bg-white/10 border border-white/20 flex items-center justify-center font-medium backdrop-blur-lg gap-2"
            href={avinashCv}
            download="Avinash CV.pdf"
          >
            Download CV <Download fontSize="medium" />
          </a>
          <div className="gap-4 flex">
            <a href="https://www.linkedin.com/in/avinashmaurya261/" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://github.com/Sakuna-Ryomen" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
