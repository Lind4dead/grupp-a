import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import singleProductReducer from './singleProductReducer'
import shoppingCartReducer from './shoppingCartReducer'
import authReducer from './authReducer'
import adminReducer from './adminReducer'
import orderReducer from './orderReducer'


export default combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
  admin: adminReducer,
  orders: orderReducer
})