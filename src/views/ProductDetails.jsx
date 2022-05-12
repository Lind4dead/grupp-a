// import {useState} from 'react'
// import ImgModal from '../components/Modal/ImgModal'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../store/actions/singleProductAction'
import { Link } from 'react-router-dom'
import { increment } from '../store/actions/shoppingCartActions'

const ProductDetails = () => {

  // const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const { id } = useParams()

  const { data: product, loading, error } = useSelector(state => state.singleProduct)


  useEffect(() => {
    dispatch(getProductById(id))
  }, [])


  return ( 
  
    <div className='container'>

    { loading && <p>Loading</p> }

     { product &&
      <section className='Product-details m-md-5'>
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-11">
            <div className='d-none d-md-block mb-2'>
              <Link to='/allproducts'><small className='h5 fw-light me-md-3 text-dark'>Produkter</small></Link>
              <i className="fa-solid fa-angle-right me-md-3"></i>
              <Link to={`/${product.type}`}><small role='button' className='h5 fw-light me-md-3 text-dark'>{product.type}</small></Link>
              <i className="fa-solid fa-angle-right me-md-3"></i>
              <small className='h5 text-decoration-underline'>{product.title}</small>
            </div>
            <small className='d-md-none fs-5 mb-1'><i className="fa-solid fa-left-long me-2 fs-4"></i>Tillbaka</small>
            <div className="card shadow-1 rounded-5">
              <div style={customBorder} className="card-body p-sm-4 p-md-4 rounded-5">
                <div className="row">
                  <div className="col-10 col-md-5 col-lg-4 col-xl-4 mx-auto mt-md-4 mb-4 p-md-0">
                    <div className="product-image-container">
                      <img src={product.imgUrl}
                        className="cursor-pointer product-image"
                        alt='liquor'
                        role='button'
                        type='button'
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-7 col-xl-7 mt-md-3 ms-xl-4 pe-md-3 pe-xl-4 me-lg-4 me-xl-2">
                    <div className='text-center text-md-start'>
                      <div className="d-flex justify-content-between flex-column align-center">
                        <h3 className='mb-1'>{product.title}</h3>
                        <div className='d-md-flex justify-content-between align-center mb-1'>
                          <small className='fs-6 fw-light'>{product.subTitle}</small>
                          <small className='fs-6 d-none d-md-block fw-light'>{product.container} - {product.alcPercentage}</small>
                        </div>
                      </div>
                    </div>
                    <div className='border-bottom d-md-none w-75 m-auto'></div>
                    <div className="w-100 m-auto d-flex justify-content-around align-center p-1 border-bottom">
                      <small className='fw-lighter d-md-none text-end p-1'>{product.container} - {product.alcPercentage}</small>
                    </div>
                    <p className="mb-3 mb-md-0 mt-2 mb-md-3">
                      {product.desc}
                    </p>
                    <div className='d-flex justify-content-between align-items-end mb-3'>
                      <small className='fw-lighter'>{product.type}</small>
                      <small className='fw-light small'>Tillverkad i {product.produced}</small>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-end">
                      <h4 style={customText} className="mb-1 fw-bold fs-2 me-1">{product.price}:-</h4>
                      <h6 className="fw-lighter small align-items-end">{product.prisL}</h6>
                    </div>
                    <div className='border-bottom mb-2 '></div>
                    <div className="d-grid col-12 col-md-10 col-lg-8 mx-auto gap-2">
                      <button
                        onClick={() => dispatch(increment(product))}
                        className="btn customBtn rounded-5 btn-lg btn-dark mt-md-3 me-md-0 mt-2"
                        style={customBtn}
                        type="button">Lägg till i kundvagn</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> }

      {/* { showModal && <ImgModal setShowModal={setShowModal} />} */}
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


