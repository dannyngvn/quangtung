import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuModal.css';

const MenuModal = () => {
  const turnOfMenu = () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
  };
  return (
    <div onClick={turnOfMenu} className="menu">
      <NavLink to="/" className="navlink">
        TRANG CHỦ
      </NavLink>
      <NavLink to="/products" className="navlink">
        SHOP
      </NavLink>
      <NavLink to="/about" className="navlink">
        VỀ CHÚNG TÔI
      </NavLink>
      <NavLink to="/contact" className="navlink">
        LIÊN HỆ
      </NavLink>
    </div>
  );
};

export default MenuModal;
