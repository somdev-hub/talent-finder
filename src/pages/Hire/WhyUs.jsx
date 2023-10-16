import ButtonPrimary from "../../components/ButtonPrimary";
import line11 from "../../assets/hire/line11.svg";
import { hire_whyus } from "../../assets/data/hire_whyus";

const WhyUs = () => {
  return (
    <div className="bg-blue-shade text-center flex flex-col justify-center items-center px-[1.5rem] py-[2.5rem]  sm:p-[5rem] mt-[3rem] lg:p-[2rem] xl:p-[5rem]">
      <p className="font-[400] text-[1.5rem] font-coolvetica-56 text-neon sm:m-auto m-0">
        Why us?
      </p>
      {/* fixed bugs : added responsive width and mt-[16px] */}
      <h2 className="w-[351px] sm:w-auto mt-[16px] sm:mt-8 font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0">
        <span className="text-white">The world is changing—And so is </span>
        <span className="text-neon relative">
          hiring!
          <img
            src={line11}
            alt=""
            className="absolute bottom-[-6px] left-[-9px] sm:left-[-16px] sm:w-[75%]"
          />
        </span>
      </h2>
      {/* fixed bugs : added width */}
      <p className="w-[312px] sm:w-auto lg:w-[80%] xl:w-[58%] text-white font-[400] leading-[130%]  sm:text-[1.25rem] font-poppins-regular-20 text-center mt-[3rem] sm:mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
      </p>
      {/* fixed bugs: gaps */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-7 xl:gap-10 my-[4rem]">
        {hire_whyus.map((why, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center lg:px-8"
            >
              <img src={why.img} alt="" />
              <div className="text-white text-center mt-8">
                <h3 className="font-[500] text-[1.5rem] font-poppins-regular-20 m-0">
                  {why.title}
                </h3>
                {/* fixed bugs :added width */}
                <p className="w-[265px] mt-[1.25rem] font-[300] sm:mx-auto xl:w-[18rem] leading-[130%] font-poppins-regular-20">
                  {why.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <ButtonPrimary text="Hire Now" />
    </div>
  );
};

export default WhyUs;
