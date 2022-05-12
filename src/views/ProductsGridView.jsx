import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import FilterProducts from '../components/FilterProducts';
import ProductCard from '../components/ProductCard'
// import { productsFilterOptions } from '../store/actions/productsAction';


const ProductsGridView = () => {

  
  const { data: products, loading } = useSelector(state => state.products)


  return (
    <div className='container'>
      {/* <FilterProducts /> */}
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