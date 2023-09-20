import React from "react";
import wwig1 from "../../assets/landing-page/what-will-i-get1.svg";
import wwig2 from "../../assets/landing-page/what-will-i-get2.svg";
import wwig3 from "../../assets/landing-page/what-will-i-get3.svg";
import WhatWillIgetCard from "../../components/WhatWillIgetCard";
import line2 from "../../assets/landing-page/Line-2.svg";

const WhatWillIGet = () => {
  const wwig = [
    {
      img: wwig1,
      heading: "Guidance",
      text: "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit "
    },
    {
      img: wwig2,
      heading: "Better Matches",
      text: "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit "
    },
    {
      img: wwig3,
      heading: "Success",
      text: "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat utLorem ipsum dolor sit "
    }
  ];
  return (
    <div className="text-center p-[1.5rem] sm:py-[5rem] flex flex-col justify-center items-center">
      <p className="text-[1.5rem] font-[400] font-coolvetica-56 text-blue m-0">
        Benefits
      </p>
      <div className="relative">
        <h2 className="font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
          What will I get?
        </h2>
        <img src={line2} alt="" className="right-0 absolute" />
      </div>
      <div className="mt-10 flex sm:flex-row flex-col gap-6 sm:gap-10 sm:w-4/5">
        {wwig.map((item, index) => {
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
    </div>
  );
};

export default WhatWillIGet;
