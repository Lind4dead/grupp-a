import './ProductDetails.css'

const DetailsImage = ({ product }) => {
  return (
    <div className="col-10 col-md-5 col-lg-4 col-xl-4 mx-auto mt-md-4 mb-4 p-md-0">
      <div className="product-image-container">
        <img src={product.imgUrl} className="product-image" alt='liquor'/>
      </div>
    </div>
  )
}

export default DetailsImage