import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#1F1F1F] text-[#E1E1E1] relative z-[9] lg:px-52 md:px-20 sm:px-10 px-5 lg:py-0 md:py-0 py-4">
      <div className="w-full flex justify-between items-center lg:text-xl">
        <div className="flex items-center">
          <div className="lg:h-40 md:h-40 sm:h-32 h-20">
            <img src="/assets/1.png" className="h-full" alt="" />
          </div>
          <h1 className="lg:text-2xl md:text-2xl sm:text-lg font-semibold">&copy; Rsultant .</h1>
        </div>
        <div className="flex gap-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          <FaTwitter />
          <FaFacebookSquare />
          <FaLinkedin />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
