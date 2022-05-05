import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductsListView = () => {
  return (
    <div className='container'>
        <div className="row">
          {
            products.map(product => <div className='col-6 col-md-4 col-xl-3'><ProductCard key={product.id} product={product} /></div>)
          }
        </div>
      </div>
  )
}

export default ProductsListView