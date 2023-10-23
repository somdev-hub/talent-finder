import React, { useState } from "react";
import group_32 from "../../assets/landing-page/Group-32.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HowItWorkSlide from "../../components/HowItWorkSlide";
import ButtonPrimary from "../../components/ButtonPrimary";
import { howItWorksSlides } from "../../assets/data/howItWorks";

const HowItWorks = () => {
  const [clicked, setClicked] = useState(0);
  const swiperRef = React.useRef(null);

  const handleSlideClick = (index) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div className="my-8 sm:my-[5rem] flex flex-col justify-center items-center text-center">
      {/* fixed text color */}
      <p className="text-[1.5rem] font-coolvetica-56 font-[400] text-[var(--blue,#6D38FB)] m-0">
        How it works
      </p>
      <h2 className="w-[328px] sm:w-auto text-[2.5rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0 mt-8 relative">
        {/* fixed text color */}
        <span className="text-[var(--blue,#202020)]">3-step process to </span>
        {/* fixed text color */}
        <span className="text-[var(--blue,#6D38FB)]">get you placed</span>
        <img
          src={group_32}
          className="absolute top-[-20%] right-0 sm:block hidden"
          alt=""
        />
      </h2>
      <div className="relative sm:w-[25rem] w-[75%]  mt-[5rem]">
        <div className="relative flex justify-between w-full top-1/2">
          <div className="absolute border-[1.5px] border-[#BBBBBD] border-solid w-[95%] top-1/2 -z-10"></div>
          {/* fixed bg,text and border color */}
          {howItWorksSlides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`bullet-class rounded-full  h-[39px] sm:w-[56px] w-[39px] sm:h-[56px] border-[2.5px] border-solid flex items-center justify-center text-[2.5rem] font-[400] font-coolvetica-56 cursor-pointer box-border ${
                  clicked === index
                    ? "bg-[var(--blue,#6D38FB)] text-white border-none"
                    : "bg-white text-[var(--blue,#BBBBBD)] border-[var(--blue,#BBBBBD)]"
                }`}
                onClick={() => {
                  handleSlideClick(index);
                  setClicked(index);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-[2.5rem] w-full">
        <div className="w-[90%] md:w-[80%] lg:w-[85%] xl:w-[60%] m-auto">
          <Swiper
            ref={swiperRef}
            onSlideChange={(swiper) => {
              setClicked(swiper.activeIndex);
            }}
            spaceBetween={30}
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            {howItWorksSlides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <HowItWorkSlide
                    heading={slide.heading}
                    text={slide.text}
                    img={slide.img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <ButtonPrimary text="Book Free Trial" color="neon" />
    </div>
  );
};

export default HowItWorks;
