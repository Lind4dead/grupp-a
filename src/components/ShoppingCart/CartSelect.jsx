import './ShoppingCart.css'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { selectAmount } from '../../store/actions/shoppingCartActions'

const CartSelect = ({ product }) => {
  
  const [selected, setSelected] = useState(product.quantity)
  
  const dispatch = useDispatch()
  // const { totalQuantity } = useSelector(state => state.shoppingCart)

  const options = [
    { value: 1, label: '1'},
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13, label: '13' },
    { value: 14, label: '14' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '17' },
    { value: 18, label: '18' },
    { value: 19, label: '19' },
    { value: 20, label: '20' },
  ]

  const handleChange = e => {
    console.log(e)
    setSelected(e.target.value)
  }

  useEffect((e) => {
    if(selected === product.quantity) {
      return
    } else {
      console.log(e)
      dispatch(selectAmount(product._id, selected))
    }
  }, [selected, dispatch, product._id, product.quantity])

  return (
    <div className='Cart-select'>
      <select 
        onChange={handleChange}
        value={selected}
        className="form-select mb-2">
        { options.map(option => (
          <option key={option.value}>{option.label}</option> 
          ))}
      </select>
      <small>{product.quantity}st<small></small> : {product.quantity * product.price}:- </small>
    </div>
    
  )
}

export default CartSelect



