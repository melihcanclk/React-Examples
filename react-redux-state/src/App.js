import React from "react";
import "./styles.css";

import { Routes, Route } from "react-router-dom";


import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="App">
      <h1>
        Shopping Cart With Redux{" "}
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Examples
      </h1>
      <Routes>
        <Route>
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}
