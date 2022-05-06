import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FilterProducts from '../components/FilterProducts';
import ProductCard from '../components/ProductCard'
import { productsFilterOptions } from '../store/actions/productsAction';


const ProductsGridView = () => {

  const dispatch = useDispatch()
  const { data: products, filteredData, loading } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(productsFilterOptions(products))
    console.log(filteredData)
  }, [dispatch, products, filteredData])

  return (
    <div className='container'>
      <FilterProducts />
        <div className="row">
          { loading && <p>Loading...</p>}
          {
            !filteredData ? products.map(product => <div key={product.id} className='col-6 col-md-4 col-xl-3'><ProductCard  product={product} /></div>) : filteredData.map(product => <div key={product.id} className='col-6 col-md-4 col-xl-3'><ProductCard  product={product} /></div>)
          }
        </div>
      </div>
  )
}

export default ProductsGridView