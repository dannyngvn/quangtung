import React from 'react';
import Banner from './Banner/Banner';
import './HomePage.css';
import SmallBanner from './SmallBanner/SmallBanner';

import SelectionSmall from './SelectionSmall/SelectionSmall';
import CountdownTimer from './CountdownTimer/CountdownTimer';

import { NavLink } from 'react-router-dom';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import Slider from './Slider/Slider';
import GridCategory from './GridCategory/GridCategory';

// import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <HeadingTitle title="Danh Mục Nổi Bật" />
      <GridCategory />
      <HeadingTitle title="Sản Phẩm Mới" />
      <Slider />
      <HeadingTitle title="Sản Bán Chạy" />
      <Slider />

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
