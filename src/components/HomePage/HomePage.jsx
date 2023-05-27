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
import './GridCategory/GridCategory.css';

const Hero = () => {
  return (
    <div className="container">
      <div className="banner-grid">
        <div className="banner-col-1">
          <div className="banner-1">
            <Banner />
          </div>
        </div>
        <div className="banner-col-2">
          <div className="banner-2">
            <div className="conten-banner2">
              <h2
                style={{
                  margin: '20px 0',
                  fontSize: 13,
                  lineHeight: 1,
                  fontWeight: 700,
                  color: 'rgba(255,255, 255, 0.4)',
                }}
              >
                FLASH SALES ON
              </h2>
              <h3
                style={{
                  margin: '20px 0',
                  fontSize: 28,
                  lineHeight: '0.9',
                  fontWeight: 700,
                }}
              >
                Phụ Kiện Yoga
              </h3>
            </div>
            <div className="shopnow-banner1">Shop Now</div>
          </div>
          <div className="banner-3">
            <div className="conten-banner3">
              <h2
                style={{
                  margin: '20px 0',
                  fontSize: 13,
                  lineHeight: 1,
                  fontWeight: 700,
                  color: 'rgba(255,255, 255, 0.4)',
                }}
              >
                CHECK NEW WIRELESS
              </h2>
              <h3
                style={{
                  margin: '20px 0',
                  fontSize: 28,
                  lineHeight: '0.9',
                  fontWeight: 700,
                }}
              >
                DỤNG CỤ YOGA
              </h3>
              <h3>
                <i>UP TO</i>
                <b
                  style={{
                    fontSize: 30,
                    lineHeight: 1,
                    fontWeight: 700,
                    backgroundColor: '#ee8379',
                    color: '#ffff',
                    padding: '10px 12px',
                    display: 'inline-block',
                  }}
                >
                  50%
                </b>
                OFF
              </h3>
            </div>
            <div className="shopnow-banner1">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      {/* <Banner /> */}
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
