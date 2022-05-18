import React from "react";
import "./ShoppingCart.css";
import { customBtn } from "../../views/ProductDetails";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/actions/shoppingCartActions";

import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { shoppingCart, totalPrice } = useSelector((state) => state.shoppingCart);

  return (
    <div onClick={(e) => e.stopPropagation()} className="Shopping-cart p-3 d-none d-md-block row position-relative">
      <button className="btn-close end-0 position-absolute me-4"></button>

      <div className="text-center">
        <span className="h5">Din varukorg</span>

        {!shoppingCart.length && <p className="mt-2">Du har inga produkter i varukorgen</p>}
        <hr className="w-75 mx-auto" />
      </div>

      {shoppingCart.map((product) => (
        <CartItem key={product._id} product={product} />
      ))}
      {shoppingCart.length >= 1 && (
        <div className="d-flex justify-content-between align-items-center mt-2 mx-auto px-4">
          <button onClick={() => dispatch(clearCart())} className="btn-sm btn btn-danger align-self-center">
            Töm kundvagn
          </button>
          <div>
            <p className="fw-normal h6">Totalsumma: {totalPrice}:-</p>
            <NavLink to="/cart">
              <button style={customBtn} className="btn-md text-center btn btn-dark">
                Gå till kassan
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
