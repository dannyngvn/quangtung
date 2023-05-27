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
        Home
      </NavLink>
      <NavLink to="/products" className="navlink">
        Shop
      </NavLink>
      <NavLink to="/about" className="navlink">
        About
      </NavLink>
      <NavLink to="/contact" className="navlink">
        Contact
      </NavLink>
    </div>
  );
};

export default MenuModal;
