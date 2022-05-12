import {  combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import authReducer from './authReducer'

export default combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  auth: authReducer
})