import React from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../components/CartItem";

const AddToCart = ({ cartItems,dispatch }) => {
    let sum = 0;
    cartItems.forEach(item=>sum +=item.price)
  return (
    <div className="add-to-cart-page">
      <h2>View your cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              img={item.image}
              key={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              dispatch={dispatch}
              id={item.id}
            />
          ))}
        </>
      )}
      <h2 className="total">Total : ${sum}</h2>
    </div>
  );
};

export default AddToCart;
