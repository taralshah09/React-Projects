import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }} state={{ product: product }}>
            <ProductCard
              title={product.title}
              description={product.description}
              img={product.image}
              key={product.id}
              price={product.price}
              rating_rate={product.rating.rate}
              rating_count={product.rating.count}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
