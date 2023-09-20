import React from "react";
import group_32 from "../../assets/landing-page/group-32.svg";
import how_it_works1 from "../../assets/landing-page/how-it-works1.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import HowItWorkSlide from "../../components/HowItWorkSlide";
import ButtonPrimary from "../../components/ButtonPrimary";

const HowItWorks = () => {
  const slides = [
    {
      heading: "Step 1 Name",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis dictum tincidunt pharetra ut enim sagittis aliquam. Turpis venenatis eu feugiat arcu vestibulum blandit eu ac leo. Egestas commodo malesuada risus viverra semper ornare scelerisque tristique venenatis. Elementum liber. tristique venenatis. Elementum liber.",
      img: how_it_works1
    },
    {
      heading: "Step 1 Name",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis dictum tincidunt pharetra ut enim sagittis aliquam. Turpis venenatis eu feugiat arcu vestibulum blandit eu ac leo. Egestas commodo malesuada risus viverra semper ornare scelerisque tristique venenatis. Elementum liber. tristique venenatis. Elementum liber.",
      img: how_it_works1
    },
    {
      heading: "Step 1 Name",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis dictum tincidunt pharetra ut enim sagittis aliquam. Turpis venenatis eu feugiat arcu vestibulum blandit eu ac leo. Egestas commodo malesuada risus viverra semper ornare scelerisque tristique venenatis. Elementum liber. tristique venenatis. Elementum liber.",
      img: how_it_works1
    }
  ];

  const swiperRef = React.useRef();
  const buttonRef = React.useRef(null);
  const swiper = useSwiper();
  const handleSlideClick = () => {
    // swiperRef.current?.swiper.slideNext();
  };

  const slider =
    "rounded-full hover:bg-blue bg-white text-text-light hover:text-white h-[39px] sm:w-[56px] w-[39px] sm:h-[56px] border-[2.5px] border-solid border-text-light flex items-center justify-center text-[2.5rem] font-[400] font-coolvetica-56 hover:border-none cursor-pointer box-border";

  //   const pagination = {
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + ' pagination-bullet">' + "</span>";
  //     },
  //     bulletActiveClass: "active"
  //   };
  return (
    <div className="my-[5rem] flex flex-col justify-center items-center text-center">
      <p className="text-[1.5rem] font-coolvetica-56 font-[400] text-blue m-0">
        How it works
      </p>
      <h2 className="text-[2.5rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0 mt-8 relative">
        <span className="text-text-dark">3-step process to </span>
        <span className="text-blue">get you placed</span>
        <img
          src={group_32}
          className="absolute top-[-20%] right-0 sm:block hidden"
          alt=""
        />
      </h2>
      <div className="relative sm:w-[22rem] w-[90%]  mt-[5rem]">
        <div className="relative flex justify-between w-full top-1/2">
          <div className={slider} onClick={handleSlideClick()} ref={buttonRef}>
            1
          </div>
          <div className="absolute border-[1.5px] border-slate-400 border-solid w-full top-1/2 -z-10"></div>
          <div className={slider} onClick={handleSlideClick()} ref={buttonRef}>
            2
          </div>
          <div className={slider} onClick={handleSlideClick()} ref={buttonRef}>
            3
          </div>
        </div>
      </div>
      <div className="my-[2.5rem] w-full">
        <div className="w-[90%] sm:w-[60%] m-auto">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            {slides.map((slide, index) => {
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
      <ButtonPrimary text="Book Free Trial" />
    </div>
  );
};

export default HowItWorks;