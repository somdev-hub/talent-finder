import WhatWillIgetCard from "../../components/WhatWillIgetCard";
import line2 from "../../assets/landing-page/Line-2.svg";
import { whatWillIGetSlides } from "../../assets/data/whatWillIGet";
import ButtonPrimary from "../../components/ButtonPrimary";

const WhatWillIGet = () => {
  return (
    <div className="mt-[5rem] sm:mt-0 text-center p-[1.5rem] sm:py-[5rem] flex flex-col justify-center items-center">
    {/* fixed text color */}
      <p className="text-[1.5rem] font-[400] font-coolvetica-56 text-[#6D38FB] m-0">
        Benefits
      </p>
      <div className="relative">
    {/* fixed text color */}
        <h2 className="font-[400] text-[#202020] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
        What will i get?
        </h2>
        {/* fixed highlight images right position from 5 to 7 */}
        <img
          src={line2}
          alt=""
          className="right-[7%] sm:right-[3%] bottom-[-37px] sm:bottom-[-26px] absolute"
        />
      </div>
      {/* fixed image bug*/}
      <div className="mt-10 flex lg:flex-row flex-col gap-6 lg:gap-2 xl:gap-10 md:w-[90%] lg:w-full xl:w-4/5">
        {whatWillIGetSlides.map((item, index) => {
          return (
            <WhatWillIgetCard
              key={index}
              img={item.img}
              heading={item.heading}
              text={item.text}
            />
          );
        })}
      </div>
      <div className="sm:hidden mt-[3.5rem]">
        <ButtonPrimary text="Book Free Trial" />
      </div>
    </div>
  );
};

export default WhatWillIGet;
