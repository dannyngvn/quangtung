import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';

const Header = props => {
  const { imgurl } = props;
  const { total_item } = useCartContext();
  const turnOnMenu = () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
  };

  return (
    <div className="sticky-header">
      <div className="header container">
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
            <i className="icon-menu lni lni-search-alt m-4"></i>
          </li>
          <NavLink to="/login">
            <li>
              <i className="icon-menu lni lni-user-alt-4"></i>
            </li>
          </NavLink>

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
