import { useEffect, useState } from "react";
import hamburger from "../assets/landing-page/hamburger.svg";
import hamburger_black from "../assets/hire/hamburger-white.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ color }) => {
  const [checked, setChecked] = useState(null);
  const location = useLocation();
  const links = [
    {
      id: "1",
      name: "Mentorship & Placement",
      link: "/"
    },
    {
      id: "2",
      name: "Placement",
      link: "/placement"
    },
    {
      id: "3",
      name: "Hire",
      link: "/hire"
    }
  ];
  const [show, setShow] = useState(false);
  useEffect(() => {
    const currPath = window.location.pathname.split("/")[1];
    const activeIndex = links.findIndex(
      (item) => item.link.split("/")[1] === currPath
    );
    setChecked(links[activeIndex]?.id);
  }, [location]);
  return (
    <div className="flex sm:flex-row flex-col justify-between px-[1.5rem] sm:px-[7.5rem] py-4 sm:py-[2rem] box-border">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-end">
          <div className="text-[1rem] sm:text-[2rem] font-[400] font-coolvetica-56 ">
            <span
              className={`
              ${color == "blue" ? "text-blue" : "text-neon"}
            `}
            >
              Talent
            </span>
            <span
              className={`${color == "blue" ? "text-black" : "text-white"}`}
            >
              Finder
            </span>
          </div>
          <p
            className={`text-[7px] sm:text-[14px] font-[400] m-0 font-poppins-regular-20 ${
              color == "blue" ? "text-black" : "text-white"
            }`}
          >
            by rework
          </p>
        </div>
        <img
          src={color==="blue"? hamburger_black:hamburger}
          alt=""
          className="flex sm:hidden"
          onClick={() => setShow(!show)}
        />
      </div>
      <div
        className={`${
          color == "blue" ? "text-black" : "text-white"
        } w-full flex sm:justify-end justify-center`}
      >
        <ul
          className={`text-[1.25rem] font-[400] font-poppins-regular-20 sm:flex ${
            show ? "flex" : "hidden"
          } sm:gap-8 gap-4 sm:mt-0 mt-8 p-0 flex-col sm:flex-row text-center items-center
          }`}
        >
          {links.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <li
                  className={`list-none cursor-pointer  ${
                    checked === item.id
                      ? `${color == "blue" ? "text-blue" : "text-neon"}`
                      : `${color == "blue" ? "text-black" : "text-white"}`
                  }`}
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
