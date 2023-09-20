import React from "react";
import hamburger from "../assets/landing-page/hamburger.svg";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="flex sm:flex-row flex-col justify-between px-[1.5rem] sm:px-[7.5rem] py-4 sm:py-[2rem] box-border">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-end">
          <div className="text-[1rem] sm:text-[2rem] font-[400] font-coolvetica-56 ">
            <span className="text-neon">Talent</span>
            <span className="text-white">Finder</span>
          </div>
          <p className="text-[7px] sm:text-[14px] font-[400] m-0 font-poppins-regular-20 text-white">
            by rework
          </p>
        </div>
        <img
          src={hamburger}
          alt=""
          className="flex sm:hidden"
          onClick={() => setShow(!show)}
        />
      </div>
      <div className="text-white w-full flex sm:justify-end justify-center">
        <ul
          className={`text-[1.25rem] font-[400] font-poppins-regular-20 sm:flex ${
            show ? "flex" : "hidden"
          } sm:gap-8 gap-4 sm:mt-0 mt-8 p-0 flex-col sm:flex-row text-center items-center
          }`}
        >
          <li className="list-none cursor-pointer hover:text-neon">
            Mentorship & Placement
          </li>
          <li className="list-none cursor-pointer hover:text-neon">
            Placement
          </li>
          <li className="list-none cursor-pointer hover:text-neon">Hire</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
