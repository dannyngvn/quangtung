import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './Slider.css';

// import required modules
import { Autoplay } from 'swiper';
import Product from '../../Product';

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
