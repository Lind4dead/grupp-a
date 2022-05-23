import React from "react";
import CartViewItem from "./CartViewItem";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { customBtn } from "../../views/ProductDetails";

import "./CartViewItem.css";
import { createOrder } from "../../store/actions/orderActions";

const CartView = () => {
  const dispatch = useDispatch();
  const { shoppingCart, totalPrice, totalQuantity } = useSelector((state) => state.shoppingCart);
  const { token } = useSelector((state) => state.auth);

  const handleSub = () => {
    const payload = {
      cart: shoppingCart,
      total: totalPrice,
      quantity: totalQuantity,
    };

    dispatch(createOrder(payload, token));
  };

  return (
    <div className="container mt-5  mb-5">
      <h3>Din varukorg</h3>
      <br />
      <div className="wrapper">
        <div className="wrapper-left">
          {!shoppingCart.length && (
            <div className="tom">
              <h2 className="tom-text">
                Du har inga produkter <br /> i varukorgen
              </h2>
              <NavLink to="/">
                <button>Gå till starsidan</button>
              </NavLink>
            </div>
          )}
          {shoppingCart.map((product) => (
            <CartViewItem key={product._id} product={product} />
          ))}
        </div>

        <div className="wrapper-right">
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
              <p>{totalQuantity}</p>
            </div>
            <div className="space fw-bold">
              <p>Totalsumma</p>
              <p>{totalPrice}:-</p>
            </div>
            <div className="space">
              <small className="fw-lighter small text-black-50">Varav moms</small>
              <small className="fw-lighter small text-black-50 ">{totalPrice * 0.31}:-</small>
            </div>

            <button onClick={handleSub}>Beställ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
