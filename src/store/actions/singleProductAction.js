import axios from 'axios'
import actiontypes from '../actiontypes'

export const getProductById = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().singleProduct.getProductById
    })

    try {
      const res = await axios.get('http://localhost:8080/products/' + id)
      dispatch(getProductByIdSuccess(res.data))
    } catch (err) {
      
    }
  }


}

const getProductByIdSuccess = (product) => {
  return {
    type: actiontypes().singleProduct.getProductByIdSuccess,
    payload: product
  }
}