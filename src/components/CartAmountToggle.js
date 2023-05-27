import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease, hideDecrease }) => {
  const decreaseButtonStyle = {
    opacity: hideDecrease ? 0.1 : 1,
    pointerEvents: hideDecrease ? "none" : "auto",
  };

  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={setDecrease} style={decreaseButtonStyle}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={setIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;