import { customText } from '../../views/ProductDetails'
import DetailsButton from './DetailsButton'

const DetailsContent = ({ product }) => {

  return (
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
        <DetailsButton product={product}/>
      </div>
    </div> 
  )
}

export default DetailsContent