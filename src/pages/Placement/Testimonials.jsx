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
    <div className="relative p-6 sm:p-[5rem] bg-whiteflex flex-col justify-center text-center items-center">
      <div className="relative">
        <p className="text-blue text-[1.5rem] font-[400] font-coolvetica-56 m-0">
          Reviews
        </p>
      </div>
      <h2 className="text-black font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
        What our clients say
      </h2>
      <div className="w-full mb-10 sm:mt-[4rem] z-10">
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
                    backgroundColor="blue-shade"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <ButtonPrimary text="Apply Now" />
    </div>
  );
};

export default Testimonials;
