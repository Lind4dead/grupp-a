import {  combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import shoppingCartReducer from './shoppingCartReducer'

export default combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  shoppingCart: shoppingCartReducer
})