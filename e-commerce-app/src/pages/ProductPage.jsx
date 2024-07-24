import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { actions } from "../App";

const ProductPage = ({ dispatch,count,setCount }) => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const location = useLocation();
  const product = location.state?.product;

  const addToCart = () => {
    if (value > 0) {
      dispatch({
        type: actions.add_item,
        payload: { id: product.id, title: product.title, quantity: value, price: product.price,image : product.image },
      })
      setValue(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product-detail-page">
      <div className="img-box">
        <img src={product.image} className="product-image" />
      </div>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>Price : ${product.price}</h3>
        <div className="add-to-cart">
          <div className="box" onClick={() => setValue(prev => prev + 1)}>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="box">{value}</div>
          <div className="box" onClick={() => value > 0 && setValue(prev => prev - 1)}>
            <i className="fa-solid fa-minus"></i>
          </div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="ratings">
          <p>
            <i className="fa-solid fa-star"></i> {product.rating.rate} <span>({product.rating.count})</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
