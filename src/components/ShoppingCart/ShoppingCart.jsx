import React from 'react'
import './ShoppingCart.css'
import { customBtn, customBorder, customText } from '../../views/ProductDetails'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'


const ShoppingCart = () => {

  const dispatch = useDispatch()
  const { shoppingCart, totalAmount } = useSelector(state => state.shoppingCart)

  return (

    <div onClick={e => e.stopPropagation()} className='Shopping-cart p-3 d-md-block row position-relative'>
      <button role='button'className='btn-close end-0 position-absolute me-4'></button>

      <div className='text-center'>
        <span className='h5'>Din varukorg</span>
        
        { !shoppingCart.length && (
          <p className='mt-2'>Du har inga produkter i varukorgen</p>
        )}
        <hr className='w-75 mx-auto'/>
      </div>
     
      {
        shoppingCart.map(product => (
          <CartItem key={product.id} product={product}/>
        ))
      }
      <div className='d-flex justify-content-between align-items-center mt-2 mx-auto px-4'>
          <button className='btn-sm btn btn-danger align-self-center'>Töm kundvagn</button>
        <div>
          <p className='fw-normal h6'>Totalsumma: 2343:-</p>
          <button style={customBtn} className='btn-md text-center btn btn-dark'>Gå till kassan</button>
        </div>
      </div>

    </div>
    
  )
}

export default ShoppingCart














 {/* <div className="Cart-product mb-2 border-bottom position-relative">
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-between pb-3'>
            <div className='cart-img-container ms-3 me-4 col-md-4'>
              <img src="https://product-cdn.systembolaget.se/productimages/25245170/25245170_400.png" 
                  alt="Limoncello di Capri"
                  />
            </div>
            <div className='mt-1 d-flex flex-column'>
              <span className='fw-bold'>Limoncello di Capri</span>
              <span className='fw-lighter mb-2'>Rom</span>
              <small className='fw-lighter'>Flaska 700ml - 17%</small>
            </div>
          </div>
          <div className='d-flex justify-content-around align-items-center w-50'>
            <div className='text-center'>
              <CartSelect />
              <small className='h6'>233:-</small>

            </div>
              <button className='btn btn-danger btn-sm mb-2'><i class="fa-solid fa-trash-can fs-5"></i></button>
          </div>
            <hr className='vr position-absolute start-50 bottom-0 my-2 horisontal-line'/>
        </div>
      </div> */}