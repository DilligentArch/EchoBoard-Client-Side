import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'; // Import Framer Motion
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Swiper autoplay module

export default () => {
  return (
    <Swiper
      spaceBetween={0} // No gap between slides
      slidesPerView={1} // Default: 1 slide per view
      breakpoints={{
        768: { // For screens with width >= 768px (tablet and larger)
          slidesPerView: 1, // Still show 1 slide on tablets
        },
        1024: { // For screens with width >= 1024px (desktop)
          slidesPerView: 1, // Still show 1 slide on desktop
        },
      }}
      modules={[Autoplay]} // Include the autoplay module
      autoplay={{
        delay: 5000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop={true} // Enable infinite loop
    >
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-[35rem]" src="/first.jpg" alt="Slide 1" />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            "Unlock the Potential of Trusted Services with Real User Feedback."
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-[35rem]" src="/second.jpg" alt="Slide 2" />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            "Every Story Matters — Share Yours and Inspire Change."
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-[35rem]" src="/third.jpg" alt="Slide 3" />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
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
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            "Make Informed Choices with Honest and Reliable Reviews."
          </motion.div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
