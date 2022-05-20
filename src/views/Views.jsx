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
import UserOrdersView from './UserOrdersView'
import { ProtectedRoute, ProtectedRouteAdmin } from '../routes/ProtectedRoute';

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
      <Route path="/cart" element={<CartView />} />

      <Route path="/minasidor" element={
          <ProtectedRoute>
            <MinaSidor />
          </ProtectedRoute>
      }/>

      <Route path='/minaordrar' element={ 
        <ProtectedRoute>
          <UserOrdersView />
        </ProtectedRoute> 
      }/>

      <Route path="/admin" element={
        <ProtectedRouteAdmin>
          <AdminView/>
        </ProtectedRouteAdmin>
      }/>

      <Route path="/administrera/:id" element={
        <ProtectedRouteAdmin>
          <AdminUserOrdersView/>
        </ProtectedRouteAdmin>
      }/>

    </Routes>
  );
};


export default Views;
