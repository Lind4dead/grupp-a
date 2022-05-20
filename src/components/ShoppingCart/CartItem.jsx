import CartSelect from './CartSelect'
import { deleteItem } from '../../store/actions/shoppingCartActions'
import { useDispatch } from 'react-redux'

const CartItem = ({ product, cart }) => {

  const dispatch = useDispatch()

  return (

    <div className="Cart-product mb-2 border-bottom position-relative">
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between pb-3'>
          <div className='cart-img-container ms-3 me-3 col-md-4'>
            <img src={product.imgUrl} 
                alt="Limoncello di Capri"
                />
          </div>
          <div className='mt-1 d-flex flex-column'>
            <span className='fw-bold'>{product.title}</span>
            <small className='fw-lighter mb-2'>{product.subTitle}</small>
            <small className='fw-lighter'>{product.container} - {product.alcPercentage}</small>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center w-50'>
          <div className='text-center'>
            <CartSelect cart={cart} product={product}/>
          </div>
          <button 
          onClick={() => dispatch(deleteItem(product._id))}
          className='btn btn-danger btn-sm mb-3 py-2'><i className="fa-solid fa-trash-can fs-6"></i></button>
        </div>
          <hr className='vr position-absolute start-50 bottom-0 my-2 horisontal-line'/>
      </div>
    </div>
  )
}

export default CartItem