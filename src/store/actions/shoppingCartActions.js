import actiontypes from '../actiontypes';

export const increment = (product) => {
  return {
    type: actiontypes().shoppingCart.increment,
    payload: product
  }
}
export const decrement = () => {
  return {
    type: actiontypes().shoppingCart.decrement
  }
}
export const removeOne = () => {
  return {
    type: actiontypes().shoppingCart.removeOne
  }
}
export const clearCart = () => {
  return {
    type: actiontypes().shoppingCart.clearCart
  }
}