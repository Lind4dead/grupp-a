import { Link } from 'react-router-dom'

const DetailsNavigation = ({ product }) => {

  const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')
  
  return (
    <div className='d-none d-md-block mb-2'>
      <Link to='/allproducts'><small className='h5 fw-light me-md-3 text-dark'>Produkter</small></Link>
      <i className="fa-solid fa-angle-right me-md-3"></i> 
      <Link to={`/${product.type}`}><small className='h5 fw-light me-md-3 text-dark'>{ product.type === "liquor" ? "Likör" : capitalizeFirstLetter(product.type)}</small></Link>
      <i className="fa-solid fa-angle-right me-md-3"></i>
      <Link to={''}><small className='text-underline disable-link h5 fw-normal me-md-3 text-dark'>{product.title}</small></Link>
    </div>
  )
}

export default DetailsNavigation