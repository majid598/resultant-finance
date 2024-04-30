// import Link from "react-router-dom";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="w-full">
      <div
        className={`w-full px-20 head hidden relative z-[99] bg-white text-black h-28 items-center justify-between`}
      >
        <div className="text-5xl font-extrabold h-full">
          <img src="/assets/logo.png" className="h-full" alt="" />
        </div>
        <button
          onClick={() => setActive(true)}
          className="absolute top-1/2 -translate-y-1/2 right-12"
        >
          <BiMenu className="text-2xl" />
        </button>
      </div>
      <nav
        className={`w-full px-20 header transition-all z-[999] duration-700 relative bg-white text-black h-28 flex items-center justify-between ${
          active ? "active" : ""
        }`}
      >
        <div className="logo h-full">
          <img src="/assets/logo.png" className="h-full" alt="" />
        </div>
        <div className="flex links gap-12 md-bg-red">
          <a
            href={"/"}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("top");
            }}
            className={`font-semibold`}
          >
            Top
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("kpioptions");
            }}
            className={`font-semibold`}
          >
            KPI Options
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("successtokens");
            }}
            className={`font-semibold`}
          >
            Success Tokens
          </a>
          <Link to={"#"} className={`font-semibold`}>
            Docs
          </Link>
          <button
            onClick={() => setActive(false)}
            className="hidden btn absolute top-4 right-4 text-3xl"
          >
            <IoClose />
          </button>
        </div>
        <div className="h-full">
          <img src="/assets/2.png" className="h-full" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
