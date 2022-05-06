import axios from 'axios'
import actiontypes from '../actiontypes'

const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

export const getProducts = () => {
  return async dispatch => {
    dispatch(loadingProducts(true))
    try {
      const res = await axios.get('http://localhost:8080/products')

      dispatch(setProducts(res.data))

    } catch (err) {

    }
  }
}

export const productsFilterOptions = (products) => {
  return dispatch => {

    const types = []
    const countries = []
    products.forEach(product => {

      if (!types.find(type => type === capitalizeFirstLetter(product.type))) {

        types.push(capitalizeFirstLetter(product.type))
      }
      if (!countries.find(country => country === product.produced)) {
        countries.push(capitalizeFirstLetter(product.produced))
      }
    });
    const payload = { types, countries }
    dispatch(setFilterOptions(payload))
  }
}

export const filterByType = (payload) => {
  return async dispatch => {
    dispatch(loadingProducts(true))
    try {
      const res = await axios.get('http://localhost:8080/products')
      if (payload.length) {
        const _payload = []
        for (let i = 0; i < payload.length; i++) {
          const data = res.data.filter(product => product.type.toUpperCase() === payload[i].toUpperCase())
          _payload.push(...data)
        }
        dispatch(setByType(_payload))
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
      if (val) {
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

const setFilterOptions = (payload) => {
  console.log(payload)
  return {
    type: actiontypes().products.setFilterOptions,
    payload: payload
  }
}

const loadingProducts = (payload) => {
  return {
    type: actiontypes().products.loadingProducts,
    payload
  }
}