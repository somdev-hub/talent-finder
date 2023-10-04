import React from "react";
import Navbar from "../../components/Navbar";
import hire_head1 from "../../assets/hire/hire-head1.png";
import hire_head2 from "../../assets/hire/hire-head2.png";
import hire_head3 from "../../assets/hire/hire-head3.png";
import vector_445 from "../../assets/hire/vector-445.svg";
import vector_538 from "../../assets/hire/vector-538.svg";
import hire_head1_sm from "../../assets/hire/hire-head1-sm.png";
import hire_head2_sm from "../../assets/hire/hire-head2-sm.png";
import hire_head3_sm from "../../assets/hire/hire-head3-sm.png";
import whirlpool_logo from "../../assets/hire/whirlpool-logo.png";
import uber_logo from "../../assets/hire/uber-logo.png";
import airtel_logo from "../../assets/hire/airtel-logo.png";
import tata_logo from "../../assets/hire/tata-logo.png";
import sony_logo from "../../assets/hire/sony-logo.png";
import ibm_logo from "../../assets/hire/ibm-logo.png";
import line1 from "../../assets/hire/line1.svg";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

export const Header = () => {
  const images = [
    whirlpool_logo,
    tata_logo,
    sony_logo,
    uber_logo,
    airtel_logo,
    ibm_logo
  ];
  return (
    <div>
      <Navbar color="blue" />
      <div className="mt-[1rem] sm:mt-auto sm:p-auto  box-border text-center flex relative flex-col justify-center items-center">
        <h1 className="px-[1.5rem] sm:px-auto font-[400] text-[3rem] sm:text-[4rem] m-0 sm:mt-[5rem] leading-[115%] font-coolvetica-56">
          <span>
            Hire India's Top, <br className="sm:hidden block" />{" "}
          </span>
          <span className="text-blue-shade relative">
            Pre-vetted <br className="sm:hidden block" />{" "}
            <img
              src={line1}
              className="absolute top-[42%] left-[25px] sm:left-[27%] bottom-[-10px] sm:top-auto"
              alt=""
            />
          </span>
          <span>Candidates</span>
        </h1>
        <p className="w-full sm:w-auto px-[1.5rem] sm:px-auto text-[18px] font-[400] leading-[130%] font-poppins-regular-20 m-0 mt-[1.5rem] mb-8 text-center">
          Save time and resources. <br /> Hire and directly manage remote or
          on-site talent with confidence.
        </p>
        <button className="inline-flex py-[0.8rem] px-8 justify-center items-center rounded-[2.5rem] bg-blue-shade text-[1.25rem] font-[500] font-poppins-regular-20 m-0 text-white">
          Hire Now
        </button>
        <img
          src={vector_445}
          alt=""
          className="absolute top-[13rem] hidden sm:block"
        />
        <img
          src={hire_head1}
          alt=""
          className="absolute left-[18rem] top-[18rem] hidden sm:block"
        />
        <img
          src={hire_head2}
          alt=""
          className="absolute top-[25rem] hidden sm:block"
        />
        <img
          src={hire_head3}
          alt=""
          className="absolute right-[18rem] top-[17rem] hidden sm:block"
        />
        <div className="sm:hidden relative h-[53vh] overflow-hidden w-full">
          <img
            src={vector_538}
            alt=""
            className="absolute left-[-4rem] top-[-8%]"
          />
          <img
            src={hire_head1_sm}
            alt=""
            className="absolute top-[6%] left-[14%] w-[10rem]"
          />
          <img
            src={hire_head2_sm}
            alt=""
            className="absolute right-[10%] top-[10rem] w-[10rem]"
          />
          <img
            src={hire_head3_sm}
            alt=""
            className="absolute top-[15rem] left-[5%] w-[10rem]"
          />
        </div>
        <div className="hidden relative mt-[22rem] w-3/5 border-t-[2px] border-solid border-text-light p-5 sm:flex items-center justify-between overflow-hidden sm:overflow-visible">
          <p className="font-[400] text-text-medium left-[30%] top-[-15%] absolute m-0 font-poppins-regular-20 bg-white z-10">
            Top tech companies trust us with their talent needs
          </p>
          <img src={whirlpool_logo} alt="" />
          <img src={tata_logo} alt="" />
          <img src={sony_logo} alt="" />
          <img src={uber_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={ibm_logo} alt="" />
        </div>
        <div className="sm:hidden flex flex-col px-8 mb-8">
          <p className="font-[400] text-text-medium m-0 font-poppins-regular-20">
            Top tech companies trust us with their talent needs
          </p>
        </div>
        <div className="sm:hidden w-full flex items-center justify-center m-auto">
          <Swiper
            className="mySwiper"
            modules={[Autoplay]}
            autoplay={true}
            slidesPerView={4}
            centeredSlides={true}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center my-auto justify-center h-[5rem] sm:h-[5rem]">
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
    </div>
  );
};
