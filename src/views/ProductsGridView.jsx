import React from 'react'
import { useSelector } from 'react-redux';
import FilterProducts from '../components/FilterProducts';
import ProductCard from '../components/ProductCard'


const ProductsGridView = () => {


  const { data: products, loading } = useSelector(state => state.products)


  return (
    <div className='container'>
      <FilterProducts />
        <div className="row">
          { loading && <p>Loading...</p>}
          {
            products.map(product => <div key={product.id} className='col-6 col-md-4 col-xl-3'><ProductCard  product={product} /></div>)
          }
        </div>
      </div>
  )
}

export default ProductsGridView