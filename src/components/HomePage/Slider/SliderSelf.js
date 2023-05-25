import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../../context/data';
import FormatPrice from '../../../Helpers/FormatPrice';

const SlideSelf = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSlidesData(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
    }, 40000); // interval timeout

    return () => clearInterval(interval);
  }, [slidesData]);

  return (
    <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} interval={null}>
      {slidesData.map((slide, index) => (
        <Carousel.Item key={slide.id}>
          <h2 style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>HÀNG KHUYẾN MẠI</h2>
          <img className="d-block w-100" src={slide.image} alt={slide.name} />
          <Carousel.Caption>
            <h3>{slide.name}</h3>
            <p> Giá khuyến mại: {' '}
            <FormatPrice price={slide.price} /> 
            </p>
            <p>Sản phẩm: {slide.category}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlideSelf;
