import React from 'react';
import './MenuItem.css';

const MenuItem = () => {
  return (
    <div className="menu-item">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Thảm Yoga
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Thảm Liforme
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Thảm Manduka
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Thảm Lululemon
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItem;
