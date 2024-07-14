import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
