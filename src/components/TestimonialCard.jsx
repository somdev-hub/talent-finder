import React from "react";
import testimonial_img from "../../assets/landing-page/testimonial-img.png";
import microsoft from "../../assets/landing-page/microsoft.png";
import star from "../../assets/landing-page/star.svg";

const TestimonialCard = () => {
  return (
    <div className="w-[75%] box-border m-auto px-[6rem] py-[3rem] bg-white rounded-[2.5rem] flex items-center justify-center gap-10">
      <div className="">
        <img src={testimonial_img} alt="" />
      </div>
      <div className="text-left">
        <div className="flex justify-between items-start">
          <div className="">
            <h3 className="text-[1.25rem] m-0 leading-[130%] font-poppins-regular-20">
              <span className="font-[500]">Nandini Rawat, </span>
              <span className="font-[300]">Software Engineer</span>
            </h3>
            <div className="mt-2">
              <img src={microsoft} alt="" />
            </div>
          </div>
          <div className="flex gap-2">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <h2 className="text-[2.5rem] font-coolvetica-56 font-[400] m-0 mt-4">
          Unlocking Opportunities!!
        </h2>
        <p className="text-[1.25rem] font-[400] leading-[130%] font-poppins-regular-20 text-text-medium m-0 mt-[2.25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
