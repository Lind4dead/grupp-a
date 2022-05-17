import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'



const ProductsGridView = () => {

  
  const { data: products, loading } = useSelector(state => state.products)


  return (
    <div className='container'>
        <div className="row">
          { loading && <p>Loading...</p>}
          {
            products.map(product => <div key={product._id} className='col-6 col-md-4 col-xl-3'><ProductCard  product={product} /></div>)
          }
        </div>
      </div>
  )
}

export default ProductsGridView