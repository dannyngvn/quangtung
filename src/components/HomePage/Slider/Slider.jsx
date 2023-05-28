import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import { Autoplay } from 'swiper';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from '../../../contexts/data';
import './Slider.css';

const Slider = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => b.id - a.id);
    const topTenSlides = sortedData.slice(0, 10);
    setSlidesData(topTenSlides);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
