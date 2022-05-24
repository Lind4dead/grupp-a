import CartSelect from "./CartSelect";
import { deleteItem } from "../../store/actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import "./CartViewItem.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="image">
        <img src={product.imgUrl} alt="Limoncello di Capri" />
      </div>
      <div className="wrapper-info">
        <div className="text">
          <p className="fw-bold">
            {product.title + " "}
            <small className="fw-lighter col-11 ">
              {product.container} - {product.alcPercentage}
            </small>
          </p>
        </div>

        <div>
          <CartSelect product={product} />
        </div>
        <button onClick={() => dispatch(deleteItem(product._id))} className="btn btn-danger btn-sm mb-3 py-2">
          <i className="fa-solid fa-trash-can fs-6"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
