import React from 'react';
import './ButtonContac.css';

const ButtonContac = () => {
  return (
    <div className="ButtonContac">
      <a href="tel:+84912222821">
        <img
          className="contac-icon-social"
          src="/asset/images/5585856.png"
          alt="call"
        />
      </a>
      <a href="https://m.me/bi.danny95">
        <img
          className="contac-icon-social"
          src="/asset/images/messenger-icon-free-png.webp"
          alt="call"
        />
      </a>
    </div>
  );
};

export default ButtonContac;
