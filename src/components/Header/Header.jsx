import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import React, { useState, useEffect } from 'react';

const Header = props => {
  const { imgurl } = props;
  const { total_item } = useCartContext();
  const turnOnMenu = () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
  };
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const storedUser = localStorage.getItem('id');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    // Xóa dữ liệu đăng nhập khỏi local storage và cập nhật stat
    localStorage.removeItem('id');
    setLoggedInUser('');
    alert('đã đăng xuất');
  };

  return (
    <div className="sticky-header">
      <div className="header container ">
        <div className="menu-icon">
          <i onClick={turnOnMenu} className="icon-menu lni lni-menu"></i>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={imgurl} alt="logo" />
          </Link>
        </div>

        <ul className="nav-icon d-flex ">
          <li>
            <div className="dropdown">
              <button
                className="btn btn-secondary use-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="icon-menu lni lni-user-alt-4"></i>
              </button>
              {loggedInUser ? (
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#f78da7',
                      cursor: 'pointer',
                      transition: 'color 0.3s linear',
                    }}
                    className="dropdown-item"
                  >
                    Xin Chào {loggedInUser}
                  </p>

                  <button
                    className=" dropdown-item "
                    id="user-logout"
                    onClick={handleLogout}
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'red',
                      cursor: 'pointer',
                      transition: 'color 0.3s linear',
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#f78da7',
                      cursor: 'pointer',
                      transition: 'color 0.3s linear',
                    }}
                    className="dropdown-item"
                    to="/login"
                  >
                    Đăng Nhập / Đăng Ký
                  </Link>
                </div>
              )}
            </div>
          </li>

          <li className="cart">
            <NavLink to="/cart">
              <i className="icon-menu lni lni-cart m-4"></i>
              <div className="quantity-cart">{total_item}</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
