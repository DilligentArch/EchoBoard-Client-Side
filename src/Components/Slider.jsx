import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Swiper autoplay module

export default () => {
  return (
    <Swiper
      spaceBetween={0} // No gap between slides
      slidesPerView={3} // Default slides per view (on larger screens)
      breakpoints={{
        320: { // For screens with width >= 320px (mobile)
          slidesPerView: 1, // Show 1 slide on mobile
        },
        768: { // For screens with width >= 768px (tablet and larger)
          slidesPerView: 2, // Show 2 slides on tablets
        },
        1024: { // For screens with width >= 1024px (desktop)
          slidesPerView: 3, // Show 3 slides on desktop
        },
      }}
      modules={[Autoplay]} // Include the autoplay module
      autoplay={{
        delay: 3000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop={true} // Enable infinite loop
    >
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-60 " src="/first.jpg" alt="Slide 1" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
            Discover Services You Can Trust
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-60 object-cover" src="/second.jpg" alt="Slide 2" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
            Share Your Experiences with the World
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-60 object-cover" src="/third.jpg" alt="Slide 3" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
            Your Feedback, Our Priority
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-60 object-cover" src="/fourth.jpg" alt="Slide 3" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
          Explore Reviews That Matter to You
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-60 object-cover" src="/fifth.jpg" alt="Slide 3" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
          Empowering Choices Through Honest Feedback
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
