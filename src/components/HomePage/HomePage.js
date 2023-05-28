import React from 'react';

import './HomePage.css';

import CountdownTimer from './CountdownTimer/CountdownTimer';

import { NavLink } from 'react-router-dom';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import Slider from './Slider/Slider';
import SliderClone from './Slider/SliderClone';
import GridCategory from './GridCategory/GridCategory';
import { Helmet } from 'react-helmet';

// import { Helmet } from 'react-helmet';
import './GridCategory/GridCategory.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Trang chủ - Namaste Yoga Store</title>
      </Helmet>
      <GridCategory />
      <HeadingTitle title="Sản Phẩm Mới" />
      <Slider />
      <HeadingTitle title="Sản Bán Chạy" />
      <SliderClone />
      <div
        style={{
          backgroundImage: `url('./asset/images/slogan.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '700px',
          position: 'relative',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          a,
        }}
      >
        <div className="blur"></div>
        <div className="conten-sale">
          <CountdownTimer hours={100} minutes={0} seconds={2} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
