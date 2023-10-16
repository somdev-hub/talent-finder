import React from "react";
import social_icon1 from "../assets/landing-page/Social-Icons1.svg";
import social_icon2 from "../assets/landing-page/Social-Icons2.svg";
import social_icon3 from "../assets/landing-page/Social-Icons3.svg";
import social_icon4 from "../assets/landing-page/Social-Icons4.svg";
// import tick from "../../assets/landing-page/tick.svg";
import mail from "../assets/landing-page/mail.png";
import tick2 from "../assets/landing-page/tick2.svg";
import main_logo from "../assets/main-logo.png";
import Tooltip from "@mui/material/Tooltip";

const FooterSm = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="lg:hidden block text-white bg-blue-shade">
      <div className="flex items-center px-[1.25rem] py-[2rem] justify-start pb-2 border-b-2 border-solid border-white">
        <img src={main_logo} alt="" className="w-1/4" />
      </div>
      
      <div className="px-[1.25rem] ">
        <div className="flex justify-between md:justify-around">
          <ul className="text-left p-0">
            <h3 className="text-[17px] md:text-[1.5rem] font-poppins-regular-20 font-[500] mb-4">
              Quick Links
            </h3>
            <li className="list-none font-[400] text-[14px] md:text-[1.25rem] font-poppins-regular-20 mb-2">
              Mentorship & Placement
            </li>
            <li className="list-none font-[400] text-[14px] md:text-[1.25rem] font-poppins-regular-20 mb-2">
              Placement
            </li>
            <li className="list-none font-[400] text-[14px] md:text-[1.25rem] font-poppins-regular-20 mb-2">
              Hire
            </li>
          </ul>
          <ul className="text-left p-0">
            <h3 className="text-[17px] md:text-[1.5rem] font-poppins-regular-20 font-[500] mb-4">
              More By Rework
            </h3>
            <li className="list-none font-[400] text-[14px] md:text-[1.25rem] font-poppins-regular-20 mb-2">
              Job Insurance
            </li>
            <li className="list-none font-[400] text-[14px] md:text-[1.25rem] font-poppins-regular-20 mb-2">
              AI Recruitment Platform
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-[1.25rem] font-[500] font-poppins-regular-20 m-0">
            Join our mailing list
          </h3>
          <form action="" className="flex my-4">
            <input
              type="text"
              placeholder="Enter Email"
              className="md:text-[1rem] box-border rounded-l-[0.25rem] flex border-none w-[60%] px-[25px] py-2 font-[400] font-poppins-regular-20 text-[#A0A0A0]"
            />
            <button className="flex rounded-r-[0.25rem] items-center w-[10rem] h-full  px-2 py-2 bg-neon box-border">
              <img src={mail} alt="" />
              <p className="md:text-[1rem] font-poppins-regular-20 font-[400] text-text-dark ml-3 box-border m-0">
                Subscribe
              </p>
            </button>
          </form>
          <div className="flex gap-4 px-[3%]">
            <form action="" className="flex items-center justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                checked={checked}
                className="appearance-none"
              />
              {/* <div className=""></div> */}
              <div
                className={`h-[16px] w-[16px] rounded-[4px] relative border-[1.6px] border-solid border-white-400`}
                onClick={() => setChecked(!checked)}
              >
                <img
                  src={tick2}
                  alt=""
                  className={`absolute top-0 left-0 w-[16px]  ${
                    checked ? "block" : "hidden"
                  }`}
                />
              </div>
            </form>
            <p
              className="md:text-[1rem] font-[400] text-[0.75rem] font-poppins-regular-20"
              onClick={() => setChecked(!checked)}
            >
              I agree to receive emails from TalentFinder as per their Data &
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center border-y-[1px] border-opacity-[0.3] py-2 border-solid border-slate-100 mt-8">
        <Tooltip placement="top" title="Facebook">
          <img src={social_icon1} alt="" className="w-4" />
        </Tooltip>
        <Tooltip placement="top" title="X">
          <img src={social_icon2} alt="" className="w-4" />
        </Tooltip>
        <Tooltip placement="top" title="Instagram ">
          <img src={social_icon3} alt="" className="w-4" />
        </Tooltip>
        <Tooltip placement="top" title="Linkedin">
          <img src={social_icon4} alt="" className="w-4" />
        </Tooltip>
      </div>
      <div className="text-[14px] md:text-[1.25rem] bg-dark-blue text-white font-[300] font-poppins-regular-20 flex justify-start ml-5 py-2">
        © 2023 TalentFinder
      </div>
    </div>
  );
};

export default FooterSm;
