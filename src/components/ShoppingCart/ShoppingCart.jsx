import React from 'react'
import './ShoppingCart.css'
import { customBtn, customBorder, customText } from '../../views/ProductDetails'
import CartSelect from './CartSelect'


const ShoppingCart = () => {
  return (
    <div onClick={e => e.stopPropagation()} className='Shopping-cart container p-3 d-md-block row position-relative'>
      <div className='text-center'>
        <h5>Din varukorg</h5>
        <p>Du har inga produkter i varukorgen</p>
        <hr className='w-75 mx-auto'/>
      </div>
     
      {/* <div style={customBorder} className='border-bottom border-1 my-3'></div> */}
      <button 
      className='btn-close position-absolute top-0 end-0 me-4 mt-2'
      ></button>

      <div className='d-flex justify-content-between align-items-center mb-2 border-bottom position-relative'>
        <div className='d-flex justify-content-between pb-3'>
          <div className='cart-img-container ms-3 me-4 col-md-4'>
            <img src="https://product-cdn.systembolaget.se/productimages/25245170/25245170_400.png" 
                alt=""
                />
          </div>
          <div className='mt-1 d-flex flex-column'>
            <span className='fw-bold'>Limoncello di Capri</span>
            <span className='fw-lighter mb-2'>Rom</span>
            <small className='fw-lighter'>Flaska 700ml - 17%</small>
          </div>
        </div>

            
        

            
        <div className='d-flex justify-content-between align-items-center'>
          
          <div className='text-center'>
            <CartSelect />
            {/* <small className='h6'>233:-</small> */}
          </div>
          <div>

          <button className='btn btn-danger btn-sm'><i class="fa-solid fa-trash-can fs-5"></i></button>
          </div>
        </div>
          <hr className='vr position-absolute start-50 bottom-0 my-2 horisontal-line'/>
      </div>

    
      

      
      <div className='d-flex justify-content-between align-items-center mt-2 mx-auto px-4'>
        <div>
          <p className='fw-normal h6'>Totalsumma: 2343:-</p>
          <button className='btn-sm btn btn-danger me-2'>Töm kundvagn</button>
        </div>
        <button style={customBtn} className='btn-lg text-center btn btn-dark'>Gå till kassan</button>
      </div>

    </div>
  )
}

export default ShoppingCart

   {/* <button style={customBtn} className='btn btn-sm btn-danger me-2'>-</button>
          <button className='btn btn-sm btn-info'>+</button> */}