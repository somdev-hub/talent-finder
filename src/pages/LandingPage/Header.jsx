import React from "react";
import Navbar from "../../components/Navbar";
import header_main from "../../assets/landing-page/header-main.png";
import header_main_sm from "../../assets/landing-page/header-main-sm.png";
import check_mark from "../../assets/landing-page/check-mark-circle-2.svg";
import ellipse1 from "../../assets/landing-page/Ellipse-1.svg";
import line1 from "../../assets/landing-page/Line-1.svg";
import whirlpool_logo from "../../assets/landing-page/Whirlpool-logo.png";
import tata_logo from "../../assets/landing-page/tata-logo.png";
import sony_logo from "../../assets/landing-page/Sony-logo.png";
import uber_logo from "../../assets/landing-page/uber-logo.png";
import airtel_logo from "../../assets/landing-page/airtel-logo.png";
import ibm_logo from "../../assets/landing-page/ibm-logo.png";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const Header = () => {
  const images = [
    whirlpool_logo,
    tata_logo,
    sony_logo,
    uber_logo,
    airtel_logo,
    ibm_logo
  ];
  return (
    <div className="bg-blue-shade relative  xl:pb-[2%] overflow-hidden ">
      <div className=" px-[1.5rem] xl:px-0 pt-4 sm:pt-8 flex md:flex-col lg:flex-row mt-[4rem] lg:mt-[5rem] md:mt-[5rem] xl:mt-[6rem] sm:pl-[3.5rem] lg:pl-[3.5rem] xl:pl-[7.5rem] justify-between relative z-10">
        <div className="text-white xl:w-1/2 lg:w-auto w-full lg:block flex flex-col gap-8 md:gap-4 items-center justify-center">
          <div className="relative">
            <h1 className="px-0 text-center lg:text-left text-[3rem] lg:text-[4rem] xl:text-[5rem] sm:text-[5rem] font-[400] font-coolvetica-56 leading-[115%] m-0">
              Get Job-Ready <br className="lg:hidden block xl:block" />
              with us.
            </h1>
            <img
              src={line1}
              alt=""
              className="absolute md:top-[53%] xl:top-[50%] md:right-[-6%] xl:right-[20%] w-[25%] xl:w-[20%] right-[22%] bottom-[-10px] lg:top-[50%] lg:right-[9%]"
            />
          </div>
          <img
            src={header_main_sm}
            alt=""
            className="lg:hidden block lg:w-auto sm:mt-auto w-[120%] sm:w-auto relative left-[15%] md:left-[8%]"
          />
          {/* added width in line 50 */}
          <p className="w-[382px] sm:w-[590px] font-[300] text-[1.25rem] lg:text-[1rem] xl:text-[1.25rem] text-center lg:text-left font-poppins-regular-20 leading-[130%] sm:my-[1rem] xl:my-8 m-0">
            Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a
            integer. Risus sapien nec volutpat ut lectus purus enim et a.
          </p>
          <div className="hidden sm:block">
            <ButtonPrimary text={"Book Free Trial"} link={"/bookfreetrial"} />
          </div>
          <div className="block sm:hidden">
            <ButtonPrimary text={"Book Now"} link={"/bookfreetrial"} />
          </div>

          <div className="font-[300] leading-[120%] font-poppins-regular-20 sm:block flex flex-col items-center">
            <div className="flex sm:mt-4">
              <img src={check_mark} alt="" />
              <p className="m-1">7-day free trial</p>
            </div>
            <div className="flex">
              <img src={check_mark} alt="" />
              <p className="m-1">No credit card required</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center">
          <img
            src={header_main}
            alt=""
            className="2xl:w-[80%] w-auto lg:w-[90%] "
          />
        </div>
      </div>
      <img
        src={ellipse1}
        alt=""
        className="lg:block hidden absolute bottom-0 w-auto 2xl:w-[40%] lg:w-1/2 xl:w-auto"
      />
      <div className="py-[2rem] xl:py-0 relative z-10 flex flex-col justify-center items-center xl:pt-[3rem]">
        <p className="font-[500] text-white leading-[130%] font-poppins-regular-20 text-[1.25rem] m-0">
          Get placed at
        </p>
        <div className="sm:hidden flex w-full items-center gap-10 sm:gap-[4rem] justify-center overflow-x-auto">
          <div className="w-[100%] flex items-center justify-center m-auto">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              autoplay={true}
              loopedSlides={true}
              slidesPerView={4}
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex items-center my-auto justify-center h-[3rem] sm:h-[5rem]">
                      <img
                        src={image}
                        alt=""
                        className="sm:w-auto w-[4rem] m-0 h-auto"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="hidden sm:flex w-full items-center gap-[4rem] justify-center  overflow-x-auto ">
          <div className="sm:w-auto md:w-[90%] lg:w-[80%] xl:w-[82%] flex items-center justify-around">
            <img src={whirlpool_logo} alt="" className="w-[6rem] lg:w-auto" />
            <img src={tata_logo} alt="" className="w-[6rem] xl:w-[6rem]" />
            <img src={sony_logo} alt="" className="w-[6rem] xl:w-[6rem]" />
            <img src={uber_logo} alt="" className="w-[6rem] xl:w-[6rem]" />
            <img src={airtel_logo} alt="" className="w-[6rem] xl:w-[6rem]" />
            <img src={ibm_logo} alt="" className="w-[6rem] xl:w-[6rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
