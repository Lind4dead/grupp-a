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

export const filterByType = (val) => {
  return async dispatch => {
    dispatch(loadingProducts(true))
   try {
     const res = await axios.get('http://localhost:8080/products')
     if(val) {
       const data = res.data.filter(product => product.type.toUpperCase() === val.toUpperCase())
       dispatch(setByType(data))
     }
     else {
      dispatch(setByType(res.data))
     }
   } catch (err) {
     
   }
  }
}

export const filterByCountry = (val) => {
  return async dispatch => {
    dispatch(loadingProducts(true))
   try {
     const res = await axios.get('http://localhost:8080/products')
     if(val) {
       const data = res.data.filter(product => product.produced.toUpperCase() === val.toUpperCase())
       dispatch(setByCountry(data))
     }
     else {
      dispatch(setByCountry(res.data))
     }
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

const setByType = (products) => {
  return {
    type: actiontypes().products.filterByType,
    payload: products
  }
}

const setByCountry = (products) => {
  return {
    type: actiontypes().products.filterByCountry,
    payload: products
  }
}

const loadingProducts = (payload) => {
  return {
    type: actiontypes().products.loadingProducts,
    payload
  }
}