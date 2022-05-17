import actiontypes from '../actiontypes';

export const addToCart = (product) => {
  return {
    type: actiontypes().shoppingCart.addToCart,
    payload: product
  }
}

export const selectAmount = (id, quantity) => {
  return {
    type: actiontypes().shoppingCart.selectAmount,
    payload: {
      id,
      quantity
    }
  }
}

export const deleteItem = (id) => {
  return {
    type: actiontypes().shoppingCart.deleteItem,
    payload: id
  }
}

export const clearCart = () => {
  return {
    type: actiontypes().shoppingCart.clearCart,
  }
}