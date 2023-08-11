import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/cart/Cart";
import View from "./components/View/View";
import InsertProduct from "./components/insertProduct/insertProduct";
function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/"element={<Shop />} />
          <Route path="/insert" element={<InsertProduct/>} />
          <Route path="/view"  element={<View/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
  );
}
export default App;
