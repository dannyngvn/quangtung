import styled from "styled-components";
import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../contexts/CartContext";

const CartItem = ({ id, name, image, color, price, amount, size }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  const hideDecrease = amount === 1;
  const handleRemoveItem = () => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?"
    );
    if (confirmDelete) {
      removeItem(id);
    }
  };

  // console.log(id);
  // console.log(color);
  // console.log(amount);
  // console.log(size);

  return (
    <Wrapper>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p className="image-name">{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}></div>
            </div>

            <div className="sizes-div">
              <p style={{ display: "inline" }}>size: </p>
              <div
                className="sizes-style"
                style={{ color: "pink", display: "inline" }}>
                {size}
              </div>
            </div>
          </div>
        </div>
        {/* price   */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>

        {/* Quantity  */}
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrement(id)}
          hideDecrease={hideDecrease}
        />

        {/* //Subtotal */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>

        <div>
          <FaTrash className="remove_icon" onClick={handleRemoveItem} />
        </div>

        {/* <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0px;
  .cart-image--name p {
    font-size: 12px;
  }
`;
export default CartItem;