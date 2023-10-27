import { useEffect, useState } from "react";
import hamburger from "../assets/landing-page/hamburger.svg";
import hamburger_black from "../assets/hire/hamburger-white.svg";
import { Link, useLocation } from "react-router-dom";
import arrow_right from "../assets/arrow-right.svg";
import main_logo from "../assets/main-logo.png";
import main_logo_blue from "../assets/main-logo-blue.png";

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
  const links_render = [
    {
      id: "1",
      link: "/"
    },
    {
      id: "2",
      link: "/placement"
    },
    {
      id: "3",
      link: "/hire"
    },
    {
      id: "1",
      link: "/bookfreetrial"
    },
    {
      id: "2",
      link: "/placement-form"
    },
    {
      id: "3",
      link: "/hire-form"
    }
  ];
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    const currPath = window.location.pathname.split("/")[1];
    if (currPath === "bookfreetrial") {
      setChecked(links[0].id);

      // console.log(links[0].id);
    }
    const activeIndex = links_render.findIndex(
      (item) => item.link.split("/")[1] === currPath
    );
    setChecked(links_render[activeIndex]?.id);
  }, [location]);

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
    if (!sidebar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };
  return (
    <div
      className={`fixed top-0 shadow-md ${
        color === "blue" ? "bg-white" : "bg-blue-shade"
      } z-20 w-full`}
    >
      <div className="flex sm:flex-row flex-col justify-between px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7.5rem] py-4 sm:pt-[2rem] sm:pb-4 box-border">
        <div className="flex justify-between items-center xl:w-full">
          <Link to="/">
            <div className="flex flex-col items-end">
              {color === "blue" ? (
                <div className={` flex items-center`}>
                  <img
                    src={main_logo_blue}
                    alt=""
                    className="w-1/2 sm:w-auto"
                  />
                </div>
              ) : (
                <div className={` flex items-center`}>
                  <img src={main_logo} alt="" className="w-1/2 sm:w-auto" loading="lazy" />
                </div>
              )}
            </div>
          </Link>
          <img
            src={color === "blue" ? hamburger_black : hamburger}
            alt=""
            className="flex sm:hidden"
            // onClick={() => setShow(!show)}
            onClick={handleSidebarToggle}
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
              // console.log(checked === item.id);
              // console.log(item.id);
              // console.log(checked);
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
      <div
        className={`w-screen h-screen fixed sm:hidden block z-20 top-0 overflow-hidden ${
          sidebar ? "right-0" : "right-[-100%]"
        } transition-all duration-500 ease-in-out`}
      >
        <div
          className={`bg-blue border-solid border-neon border-l-2 rounded-l-[1.5rem] text-white w-[70%] h-full right-0 relative ml-auto px-8 py-4 box-border top-0 z-20 `}
        >
          <div className="mb-10 w-full flex justify-end m-0 items-center">
            <span className="text-[1rem] font-poppins-regular-20 font-[500]">
              back
            </span>
            <span>
              <img
                src={arrow_right}
                alt=""
                className="w-8 text-blue flex"
                onClick={handleSidebarToggle}
              />
            </span>
          </div>
          <div className="flex flex-col justify-center text-left">
            {links.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  onClick={() => {
                    document.body.classList.remove("sidebar-open");
                  }}
                >
                  <li
                    className={`list-none cursor-pointer text-white text-[1.25rem] font-poppins-regular-20 mb-10  font-[500] text-left 
                    }`}
                    key={index}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
