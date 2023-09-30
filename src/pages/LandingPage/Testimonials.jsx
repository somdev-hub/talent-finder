import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import group7 from "../../assets/landing-page/group-7.svg";
import ellipse15 from "../../assets/landing-page/ellipse-15.svg";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../assets/data/testimonials";
import ButtonPrimary from "../../components/ButtonPrimary";

const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);
  const swiperRef = React.useRef(null);

  const handleSlideClick = (index) => {
    setCurrent(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div className="mt-8 sm:mt-auto relative p-6 sm:p-[5rem] bg-white sm:bg-blue-shade flex flex-col justify-center text-center items-center">
      <div className="relative">
        <p className="text-blue sm:text-neon text-[1.5rem] font-[400] font-coolvetica-56 m-0">
          Reviews
        </p>
        <img
          src={group7}
          className="absolute left-[5rem] top-0 sm:block hidden"
          alt=""
        />
      </div>
      <h2 className="text-black sm:text-white font-[400] text-[2.2rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
        What our clients say
      </h2>
      <div className="w-full mb-10 sm:mt-[4rem] z-10 mt-4">
        <div className="relative flex w-full justify-center items-center m-auto">
          <Swiper
            ref={swiperRef}
            onSlideChange={(swiper) => {
              setCurrent(swiper.activeIndex);
            }}
            // pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides={true}
            autoplay={true}
            centeredSlidesBounds={true}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    {...testimonial}
                    totalPagination={testimonials.length}
                    currentPagination={current}
                    setCurrentPagination={handleSlideClick}
                    backgroundColor="white"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <ButtonPrimary
        text={`${window.innerWidth < 640 ? "Apply Now" : "Book Free Trial"}`}
      />
      <img
        src={ellipse15}
        className="absolute bottom-0 right-0 z-[1] sm:block hidden"
        alt=""
      />
    </div>
  );
};

export default Testimonials;
