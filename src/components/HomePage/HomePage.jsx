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

      <div
        className="slogan-container"
        style={{
          backgroundImage: `url('./asset/images/slogan.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '700px',
          position: 'relative',
          backgroundPosition: 'center',
        }}
      >
        <div className="slogan-text">
          <h3>
            “CHIẾC THẢM YOGA TỐT KẾT NỐI TÂM HỒN VÀ THỂ XÁC, GIÚP BẠN LUÔN KHỎE
            MẠNH, HẠNH PHÚC”
          </h3>

          <NavLink to="/products" state={{ element: 'Products' }}>
            <div className="btnn" id="btnn">
              <h3>SHOP NOW</h3>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="d-flex ">
        <SelectionSmall>
          <SmallBanner url="./asset/images/z4126302048531_00c4de7bd74e3635b094ea2a6e2c5f81.jpg">
            <div className="conten-small-banner">
              <h1>NEW ARRIVALS – HÀNG MỚI VỀ</h1>
              <p>
                Namaste Yoga Store liên tục update những mẫu thể thao thời trang
                mới nhất đến quý khách hàng. Hãy nhanh tay chọn cho mình những
                trang phục phù hợp để giờ tập luyện của mình được trọn vẹn.
              </p>

              <NavLink to="/products" state={{ element: 'Products' }}>
                <div className="btnn" id="btnn">
                  <h3>SHOP NOW</h3>
                </div>
              </NavLink>
            </div>
          </SmallBanner>
        </SelectionSmall>
        <SelectionSmall>
          <SmallBanner url="./asset/images/video1.gif">
            <div className="conten-small-banner conten-small-banner-2">
              <h1>HOT TREND – XU HƯỚNG</h1>
              <p>Xin mời cập nhật xu hướng thời trang mới tại đây! </p>

              <NavLink to="/products" state={{ element: 'Products' }}>
                <div className="btnn" id="btnn">
                  <h3>SHOP NOW</h3>
                </div>
              </NavLink>
            </div>
          </SmallBanner>
        </SelectionSmall>
      </div>

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
