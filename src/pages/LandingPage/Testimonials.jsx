import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import testimonial_img from "../../assets/landing-page/testimonial-img.png";
import microsoft from "../../assets/landing-page/microsoft.png";
import star from "../../assets/landing-page/star.svg";
import group7 from "../../assets/landing-page/group-7.svg";
import ellipse15 from "../../assets/landing-page/ellipse-15.svg";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nandini Rawat",
      designation: "Software Engineer",
      company: microsoft,
      stars: 5,
      heading: "Unlocking Opportunities!!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: testimonial_img
    },
    {
      name: "Nandini Rawat",
      designation: "Software Engineer",
      company: microsoft,
      stars: 5,
      heading: "Unlocking Opportunities!!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: testimonial_img
    },
    {
      name: "Nandini Rawat",
      designation: "Software Engineer",
      company: microsoft,
      stars: 5,
      heading: "Unlocking Opportunities!!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: testimonial_img
    }
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet">' + "</span>";
    },
    bulletActiveClass: "active"
  };
  return (
    <div className="relative p-6 sm:p-[5rem] bg-white sm:bg-blue-shade flex flex-col justify-center text-center items-center">
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
      <h2 className="text-black sm:text-white font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
        What our clients say
      </h2>
      <div className="w-full sm:mt-[4rem]  z-10">
        <div className="relative flex w-full justify-center items-center m-auto">
          <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides={true}
            // autoplay={true}
            centeredSlidesBounds={true}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <img
        src={ellipse15}
        className="absolute bottom-0 right-0 z-[1] sm:block hidden"
        alt=""
      />
    </div>
  );
};

export default Testimonials;
