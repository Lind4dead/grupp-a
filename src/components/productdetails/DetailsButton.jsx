import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/shoppingCartActions'
import { customBtn } from '../../views/ProductDetails'

const DetailsButton = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="btn customBtn rounded-5 btn-lg btn-dark mt-md-3 me-md-0 mt-2"
      style={customBtn}
      type="button">Lägg till i kundvagn
    </button>
  )
}

export default DetailsButton