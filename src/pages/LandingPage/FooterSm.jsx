import React from "react";
import social_icon1 from "../../assets/landing-page/Social-Icons1.svg";
import social_icon2 from "../../assets/landing-page/Social-Icons2.svg";
import social_icon3 from "../../assets/landing-page/Social-Icons3.svg";
import social_icon4 from "../../assets/landing-page/Social-Icons4.svg";
// import tick from "../../assets/landing-page/tick.svg";
import tick2 from "../../assets/landing-page/tick2.svg";

const FooterSm = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="sm:hidden block text-white bg-blue-shade">
      <div className="flex flex-col  px-[1.5rem] py-[2rem] items-start pb-2 border-b-2 border-solid border-white">
        <div className="text-[1rem] sm:text-[2rem] font-[400] font-coolvetica-56 ">
          <span className="text-neon">Talent</span>
          <span className="text-white">Finder</span>
        </div>
        <p className="text-[7px] sm:text-[14px] font-[400] m-0 font-poppins-regular-20 text-white">
          by rework
        </p>
      </div>
      <div className="px-[1.5rem] ">
        <div className="flex flex-between">
          <ul className="text-left p-0">
            <h3 className="text-[17px] font-poppins-regular-20 font-[500] mb-4">
              Quick Links
            </h3>
            <li className="list-none font-[400] text-[14px] font-poppins-regular-20 mb-2">
              Mentorship & Placement
            </li>
            <li className="list-none font-[400] text-[14px] font-poppins-regular-20 mb-2">
              Placement
            </li>
            <li className="list-none font-[400] text-[14px] font-poppins-regular-20 mb-2">
              Hiret
            </li>
          </ul>
          <ul className="text-left p-0">
            <h3 className="text-[17px] font-poppins-regular-20 font-[500] mb-4">
              More By Reinsure
            </h3>
            <li className="list-none font-[400] text-[14px] font-poppins-regular-20 mb-2">
              Job Insurance
            </li>
            <li className="list-none font-[400] text-[14px] font-poppins-regular-20 mb-2">
              AI Recruitment Platform
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-[1.25rem] font-[500] font-poppins-regular-20 my-4">
            Join our mailing list
          </h3>
          <form action="" className="flex my-4">
            <input
              type="text"
              placeholder="Enter Email"
              className=" box-border flex border-none w-[60%] px-2 py-2 font-[400] font-poppins-regular-20 text-[#A0A0A0]"
            />
            <button className=" text-black w-[10rem] h-full  px-2 py-2 font-[400] font-poppins-regular-20 bg-neon box-border">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4">
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
              className="font-[400] text-[0.75rem] font-poppins-regular-20"
              onClick={() => setChecked(!checked)}
            >
              I agree to receive emails from TalentFinder as per their Data &
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center border-y-1 py-2 border-solid border-slate-100 mt-8">
        <img src={social_icon1} alt="" className="w-4" />
        <img src={social_icon2} alt="" className="w-4" />
        <img src={social_icon3} alt="" className="w-4" />
        <img src={social_icon4} alt="" className="w-4" />
      </div>
      <div className="bg-dark-blue w-full text-white font-[300] font-poppins-regular-20 flex justify-center py-2">
        © 2023 TalentFinder
      </div>
    </div>
  );
};

export default FooterSm;
