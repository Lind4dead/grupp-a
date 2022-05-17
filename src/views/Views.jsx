import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./HomeView";
import LoginView from "./LoginView";
import ProductDetails from "./ProductDetails";
import ProductsGridView from "./ProductsGridView";
import TequilaView from "./Spritsorter/TequilaView";
import VodkaView from "./Spritsorter/VodkaView";
import WhiskyView from "./Spritsorter/WhiskyView";
import LiquorView from "./Spritsorter/LiquorView";
import RomView from "./Spritsorter/RomView";
import MinaSidor from "../components/MinaSidor";
import AdminUserOrdersView from "./AdminUserOrdersView";
import AdminView from "./AdminView";
import CartView from "../components/ShoppingCart/CartView";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/allproducts" element={<ProductsGridView />} />
      <Route path="/tequila" element={<TequilaView />} />
      <Route path="/vodka" element={<VodkaView />} />
      <Route path="/whisky" element={<WhiskyView />} />
      <Route path="/liquor" element={<LiquorView />} />
      <Route path="/rom" element={<RomView />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/minasidor" element={<MinaSidor />} />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/administrera" element={<AdminUserOrdersView />} />

      <Route path="/cart" element={<CartView />} />
    </Routes>
  );
};

export default Views;
