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
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem] " src="/first.jpg" alt="Slide 1" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              "Unlock the Potential of Trusted Services with Real User Feedback."
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem] object-cover " src="/second.jpg" alt="Slide 2" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              "Every Story Matters — Share Yours and Inspire Change."
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem] object-cover " src="/third.jpg" alt="Slide 3" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              "Join a Community Shaping the Future of Transparent Services."
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[35rem]" src="/fourth.jpg" alt="Slide 4" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              "Make Informed Choices with Honest and Reliable Reviews."
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
