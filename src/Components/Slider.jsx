import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay"; 
import { Autoplay } from "swiper/modules"; 

export default () => {
  return (
    <div className="relative z-10"> {/* Ensure Swiper is below the navbar */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
       
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem] object-cover " src="/second.jpg" alt="Slide 2" />
            <div  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4">
             
            
            
              "Every Story Matters — Share Yours and Inspire Change."
              </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem] object-cover " src="/third.jpg" alt="Slide 3" />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
            
            >
              "Join a Community Shaping the Future of Transparent Services."
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem]" src="/fourth.jpg" alt="Slide 4" />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
             
            >
              "Make Informed Choices with Honest and Reliable Reviews."
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
