import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-tren d-flex">
          <NavLink to="Cart">Tra cứu đơn hàng</NavLink>
          <NavLink to="/about">Về Chúng tôi</NavLink>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer-duoi d-flex">
          <div>
            <img
              className="logo-ft"
              src="/asset/images/logo-png.png"
              alt="Logo"
            />
          </div>
          <div className="khoi-icon d-flex justify-space-between">
            <div className="icon-mxh d-flex align-item-center">
              <span className="icon-fb">
                <i className="icon-facebook lni lni-facebook" />
              </span>
              <span className="icon-twi">
                <i className="icon-twitter lni lni-twitter-original" />
              </span>
              <span className="icon-inst">
                <i className="instargram lni lni-instagram-original" />
              </span>
            </div>
            <div>
              <img
                className="Payment-Logo"
                src="/asset/images/shop29_payment.png"
                alt="Payment-Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
