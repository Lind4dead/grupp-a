import axios from 'axios'
import actiontypes from '../actiontypes'

const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

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

// export const productsFilterOptions = (products) => {
//   return dispatch => {

//     const types = []
//     const countries = []
//     products.forEach(product => {

//       if (!types.find(type => type === capitalizeFirstLetter(product.type))) {

//         types.push(capitalizeFirstLetter(product.type))
//       }
//       if (!countries.find(country => country === product.produced)) {
//         countries.push(capitalizeFirstLetter(product.produced))
//       }
//     });
//     const payload = { types, countries }
//     dispatch(setFilterOptions(payload))
//   }
// }

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