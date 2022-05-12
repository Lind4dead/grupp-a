import actiontypes from '../actiontypes';

export const increment = (product) => {
  return {
    type: actiontypes().shoppingCart.increment,
    payload: product
  }
}

export const clearCart = () => {
  return {
    type: actiontypes().shoppingCart.clearCart
  }
}