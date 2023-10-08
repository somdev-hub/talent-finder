import React from "react";
import main_logo from "../assets/landing-page/main_logo.svg";
import mail from "../assets/landing-page/mail.png";
import social_icon1 from "../assets/landing-page/Social-Icons1.svg";
import social_icon2 from "../assets/landing-page/Social-Icons2.svg";
import social_icon3 from "../assets/landing-page/Social-Icons3.svg";
import social_icon4 from "../assets/landing-page/Social-Icons4.svg";
import tick2 from "../assets/landing-page/tick2.svg";

const Footer = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="hidden sm:block bg-blue text-white  pt-[5rem] md:px-[3.5rem] lg:px-[7.5rem]">
      <div className="flex sm:flex-row flex-col justify-between ">
        <div className="flex flex-col justify-between">
          <img src={main_logo} alt="" className="h-[2.5rem]" />
        </div>
        <div className="m-0">
          <ul className="font-poppins-regular-20 font-[400] text-white m-0">
            <h3 className="font-poppins-regular-20 text-[1.25rem] font-[500] m-0 text-white mb-[1rem]">
              Quick Links
            </h3>
            <li className="list-none mb-[0.5rem]">About Us</li>
            <li className="list-none mb-[0.5rem]">Contact Us</li>
            <li className="list-none mb-[0.5rem]">FAQs</li>
          </ul>
        </div>
        <div className="">
          <ul className="font-poppins-regular-20 font-[400] text-white m-0">
            <h3 className="font-poppins-regular-20 text-[1.25rem] font-[500] m-0 text-white mb-[1rem]">
              More By Rework
            </h3>
            <li className="list-none mb-[0.5rem]">Talent Finder</li>
            <li className="list-none mb-[0.5rem]">AI Recruitment Platform</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-poppins-regular-20 text-[1.25rem] font-[500] m-0 text-white mb-[1rem]">
            Join our mailing list
          </h3>
          <div className="">
            <form action="" className="flex">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
                className="flex pl-6 rounded-l-[0.25rem] bg-white box-border font-poppins-regular-20 text-[1rem] text-text-light font-[400] border-none focus:text-text-dark"
              />
              <button className="items-center bg-neon flex rounded-r-[0.25rem]">
                <img src={mail} alt="" />
                <p className="font-poppins-regular-20 font-[400] text-text-dark m-[0.6rem] text-[1rem] box-border">
                  Subscribe
                </p>
              </button>
            </form>
          </div>
          <form action="" className="flex items-center ">
            <input
              type="checkbox"
              name=""
              id=""
              checked={checked}
              className="appearance-none"
            />
            {/* <div className=""></div> */}
            <div
              className={`h-[16px] w-[16px] mr-4 cursor-pointer rounded-[4px] relative border-[1.6px] border-solid border-white-400`}
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
            <p
              className="font-[400] text-[0.75rem] cursor-pointer font-poppins-regular-20"
              onClick={() => setChecked(!checked)}
            >
              I agree to receive emails from TalentFinder <br /> as per their
              Data & Privacy Policy.
            </p>
          </form>
        </div>
      </div>
      <div className="mt-[6rem] ">
        <div className="flex justify-between">
          <div className="text-[1rem] sm:text-[2rem] font-[400] font-coolvetica-56 ">
            <span className="text-neon">Talent</span>
            <span className="text-white">Finder</span>
          </div>
          <div className="flex gap-4">
            <img src={social_icon1} alt="" />
            <img src={social_icon2} alt="" />
            <img src={social_icon3} alt="" />
            <img src={social_icon4} alt="" />
          </div>
        </div>
        <hr className="text-white h-[1px] bg-white" />
        <div className="">
          <p className="m-0 text-[1rem] font-poppins-regular-20 text-white font-[300]">
            © 2023 TalentFinder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
