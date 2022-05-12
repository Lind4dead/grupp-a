import {useState} from 'react'
import ProductCard from '../../components/ProductCard'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const LiquorView = () => {

    const { data: products, loading } = useSelector(state => state.products)
    const [liqour, setLiqour] = useState(products.filter(product => (
      product.type === 'likör'
    )))

  return (
    <div className='container'>
      {/* <FilterProducts /> */}
      <Link to='/allproducts'><div className='TillAllaProdukter'><i className="fa-solid fa-left-long me-2 fs-9"></i>Till alla produkter</div></Link>
      <h3 className='sprit-titel'>Likör</h3>
        <div className="row">
          { loading && <p>Loading...</p>}
          {
            liqour.map(product => <div key={product.id} className='col-6 col-md-4 col-xl-3'><ProductCard  product={product} /></div>)
          }
        </div>
      </div>
  )
}

export default LiquorView