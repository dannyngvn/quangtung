import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';

const Header = props => {
  const { imgurl } = props;
  const { total_item } = useCartContext();
  const turnOnMenu = () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
  };

  return (
    <div className="sticky-header">
      <div className="header d-flex align-items-center justify-content-between container">
        <div className="menu-icon">
          <i onClick={turnOnMenu} className="icon-menu lni lni-menu"></i>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={imgurl} alt="logo" />
          </Link>
        </div>

        <ul className="nav-icon d-flex align-items-center">
          <li>
            <i className="icon-menu lni lni-search-alt m-4"></i>
          </li>
          <li>
            <a href="https:thamyoganamaste.com">
              <i className="icon-menu lni lni-user-alt-4"></i>
            </a>
          </li>
          <li className="cart">
            <NavLink to="/cart">
              <a href="https:thamyoganamaste.com">
                <i className="icon-menu lni lni-cart m-4"></i>
              </a>
              <div className="quantity-cart">{total_item}</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
