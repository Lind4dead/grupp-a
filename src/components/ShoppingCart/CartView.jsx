import React from "react";
import CartViewItem from "./CartViewItem";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./CartViewItem.css";

const CartView = () => {
  const dispatch = useDispatch();
  const { shoppingCart, totalPrice } = useSelector((state) => state.shoppingCart);

  return (
    <div className="container mt-5  mb-5">
      <h3>Din varukorg</h3>
      <br />
      <div className="wrapper">
        <div className="wrapper-left">
          {shoppingCart.map((product) => (
            <CartViewItem key={product._id} product={product} />
          ))}
        </div>

        <div className="two">
          <div className="member  box-left">
            <h4>Medlem</h4>
            <p>Glöm inte att logga in för att ta del av förmånliga medlemserbjudanden!</p>
            <p>
              <NavLink to="/login">Logga in</NavLink> eller <NavLink to="/login">bli medlem</NavLink>
            </p>
          </div>
          <div className="kod  box-left">
            <input type="text" placeholder="Har du en webbkod?" />
            <button>Lägg till</button>
          </div>

          <div className="checkout  box-left">
            <div className="space mb-2">
              <p>Total produkter</p>
              <p>{shoppingCart.length}</p>
            </div>
            <div className="space fw-bold">
              <p>Totalsumma</p>
              <p>{totalPrice}:-</p>
            </div>
            <div className="space">
              <small className="fw-lighter small text-black-50">Varav moms</small>
              <small className="fw-lighter small text-black-50 ">{totalPrice * 0.31}:-</small>
            </div>

            <button>Beställ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
