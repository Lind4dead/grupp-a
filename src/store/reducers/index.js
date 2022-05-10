import {  combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'

export default combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer
})