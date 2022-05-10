import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link className='product' to={`/details/${product.id}`}>
    <div className='product-card card'>
      <div className="bg-image hover-overlay ripple d-flex justify-content-center" data-mdb-ripple-color="light">
        <img src={product.imgUrl} className="card-img-top" alt='1' />
      </div>
      <div className='card-body d-flex flex-column justify-content-between mt-2'>
        <div>
          <h3 className='fw-bold'>{product.title}</h3>
          <h5 className='fw-light'>{product.subTitle}</h5>
        </div>
        <h4 className='card-text fw-bold'>{product.price}:-</h4>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard