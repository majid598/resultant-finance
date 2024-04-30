import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#1F1F1F] text-[#E1E1E1] relative z-[9] lg:px-52 px-10 py-10">
      <h1 className="text-2xl font-semibold">Rsultant .</h1>
      <div className="w-full flex justify-between lg:text-xl">
        <h3 className="mt-4">All Rights Reserved &copy;</h3>
        <div className="flex gap-4 text-2xl">
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
