import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../store/actions/singleProductAction'
import DetailsImage from '../components/productdetails/DetailsImage'
import DetailsContent from '../components/productdetails/DetailsContent'
import DetailsNavigation from '../components/productdetails/DetailsNavigation'

const ProductDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const { data: product, loading } = useSelector(state => state.singleProduct)

  
  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])
  

  return ( 
    <div className='container mx-auto'>

    { loading && <p>Loading...</p> }
    { product &&
      <section className='container mx-auto my-3 Product-details my-md-4 my-lg-5'>
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-11">
            <DetailsNavigation product={product}/>
            <small className='d-md-none fs-5 mb-1'><i className="fa-solid fa-left-long me-2 fs-4"></i>Tillbaka</small>
            <div className="card shadow-1 rounded-5">
              <div style={customBorder} className="card-body p-sm-4 p-md-4 rounded-5">
                <div className="row">
                  <DetailsImage product={product} />
                  <DetailsContent product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> }
    </div>
  )
}

export default ProductDetails

export const customBtn = {
  backgroundColor: '#A1C181',
  color: '#fff'
}
export const customText = {
  color: '#FE7F2D'
}
export const customBorder = {
  borderRadius: '1rem',
  border: '2px solid #FE7F2D',
}


