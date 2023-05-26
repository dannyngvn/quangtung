import React from 'react';
import './GridCategory.css';

const GridCategory = () => {
  return (
    <div className="container">
      <div className="banner-grid">
        <div className="banner-col-1">
          <div className="banner-1">
            <div className="conten-banner1">
              <h3
                style={{
                  fontSize: 18,
                  lineHeight: 1,
                  fontWeight: 700,
                  backgroundColor: '#0078f2',
                  color: '#ffff',
                  padding: '10px 12px',
                  display: 'inline-block',
                }}
              >
                50% Off
              </h3>
              <h2
                style={{
                  margin: '20px 0',
                  fontSize: 40,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                Thảm yoga
              </h2>
              <h3>
                <del>$59</del> $15
              </h3>
            </div>
            <div className="shopnow-banner1">Shop Now</div>
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

export default GridCategory;
