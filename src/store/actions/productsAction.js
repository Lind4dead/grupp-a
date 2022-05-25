import axios from 'axios'
import actiontypes from '../actiontypes'



export const getProducts = () => {
  return async dispatch => {
    dispatch(loadingProducts(true))
    try {
      const res = await axios.get('http://localhost:9999/api/products')

      dispatch(setProducts(res.data))

    } catch (err) {

    }
  }
}

export const filterProducts = (products) => {
  return {
    type: actiontypes().products.filterProducts,
    payload: products
  }
}

const setProducts = (products) => {
  return {
    type: actiontypes().products.setProducts,
    payload: products
  }
}



const loadingProducts = (payload) => {
  return {
    type: actiontypes().products.loadingProducts,
    payload
  }
}