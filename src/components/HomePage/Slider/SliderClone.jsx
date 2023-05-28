import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from '../../../contexts/data';
import './SliderClone.css';

const Slider = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => b.sold - a.sold);
    const topTenSlides = sortedData.slice(0, 10);
    setSlidesData(topTenSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slidesData]);

  return (
    <div className="container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slidesData.map(slide => (
          <SwiperSlide key={slide.id}>
            <NavLink to={`/singleproduct/${slide.id}`}>
              <div className="slide-container">
                <figure className="slide-image">
                  <img
                    className="slide-image"
                    src={slide.image}
                    alt={slide.name}
                  />
                  <figcaption className="caption">{slide.category}</figcaption>
                </figure>

                <div className="card-data">
                  <div className="card-data-flex">
                    <h3>{slide.name}</h3>
                  </div>

                  <div className="card-data--price">
                    <div>
                      <span style={{ textDecoration: 'line-through' }}>
                        Giá gốc: {slide.price + 20000}
                      </span>
                    </div>
                    <div>Giá khuyến mại: {slide.price}</div>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;