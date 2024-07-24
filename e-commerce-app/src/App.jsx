import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import AddToCart from "./pages/AddToCart";

export const actions = {
  add_item: "add_item",
  remove_item: "remove_item",
  delete_item: "delete_item",
};

const reducer = (cartItems, action) => {
  switch (action.type) {
    // case actions.add_item:
    //   console.log("Adding item:", action.payload); // Debugging
    //   return [...cartItems, action.payload];

    case actions.add_item: {
      const existingItemIndex = cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + action.payload.quantity };
          }
          return item;
        });
        return updatedCartItems;
      }
      return [...cartItems, action.payload];
    }

    case actions.remove_item:
      console.log("Removing item:", action.payload); // Debugging
      return cartItems.filter((item) => item.id !== action.payload.id);
    case actions.delete_item:
      return cartItems.filter((item) => item.id !== action.payload.id);
    default:
      return cartItems;
  }
};

const getInitialCartItems = () => {
  const storedItems = localStorage.getItem("cart");
  if (storedItems) {
    try {
      return JSON.parse(storedItems);
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
      return [];
    }
  }
  return [];
};

function App() {
  const styles = { textDecoration: "none" };
  const [count, setCount] = useState(0);

  const [cartItems, dispatch] = useReducer(reducer, getInitialCartItems());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" style={styles}>
          <h2>ShoppersStop</h2>
        </Link>
        <ul>
          <NavLink className="link" to="/products" style={styles}>
            Products
          </NavLink>
         
          <NavLink className="link" to="/cart" style={styles}>
            Cart
          </NavLink>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={<AddToCart dispatch={dispatch} cartItems={cartItems} />}
          />
          <Route
            path="/products/product/:id"
            element={<ProductPage dispatch={dispatch} />}
          />
          <Route path="/*" element={<h1 style={{padding:" 150px 25px"}}>OOPs, Page not found!</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
