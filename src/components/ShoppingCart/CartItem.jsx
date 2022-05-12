import React from 'react'
import CartSelect from './CartSelect'

const CartItem = ({ product }) => {
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
            <small className='fw-lighter'>{product.container} - {product.alcPercentage.slice(0, 180)}</small>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center w-50'>
          <div className='text-center'>
            <CartSelect product={product}/>
            <small><small>1st</small> : {product.price}</small>
          </div>
          <button className='btn btn-danger btn-sm mb-3 py-2'><i class="fa-solid fa-trash-can fs-6"></i></button>
        </div>
          <hr className='vr position-absolute start-50 bottom-0 my-2 horisontal-line'/>
      </div>
    </div>
  )
}

export default CartItem