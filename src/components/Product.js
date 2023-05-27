import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3></div>

            <div className="card-data--price">
          <div>
            <span style={{ textDecoration: "line-through" }}>Giá gốc: {<FormatPrice price={price + 20000} />}</span>
          </div>
           <div>
            Giá khuyến mại: {<FormatPrice price={price} />}
            </div>
          </div>

        </div>
      </div>
    </NavLink>
  );
};

export default Product;