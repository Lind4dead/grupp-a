import axios from 'axios'
import actiontypes from '../actiontypes'

export const getProducts = () => {
  return async dispatch => {
    dispatch(loadingProducts(true))
   try {
     const res = await axios.get('http://localhost:8080/products')
     console.log(res.data)
     dispatch(setProducts(res.data))
   } catch (err) {
     
   }
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