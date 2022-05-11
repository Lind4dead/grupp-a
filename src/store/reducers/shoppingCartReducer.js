import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0
}

const shoppingCartReducer = (state = initState, action) => {

  switch(action.type) {

    case actiontypes().shoppingCart.increment: {
      return {
       
      }
    }
    case actiontypes().shoppingCart.decrement: {
      return {

      }
    }
    case actiontypes().shoppingCart.removeOne: {
      return {

      }
    }
    case actiontypes().shoppingCart.clearCart: {
      return {

      }
    }

    default: 
      return state
  }

}

export default shoppingCartReducer;