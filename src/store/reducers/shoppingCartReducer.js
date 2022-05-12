import actiontypes from '../actiontypes';

const initState = {
  shoppingCart: [],
  totalPrice: 0,
  totalQuantity: 0
}

const shoppingCartReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().shoppingCart.increment: {

    const itemRef = state.shoppingCart.find(item => item.id === action.payload.id)

    let item = {
      ...action.payload,
      totalQuantity: 1
    }
      if(itemRef) {
        itemRef.totalQuantity += 1
      } else {
        state.shoppingCart = [...state.shoppingCart, item]
      }
      return {
        ...state
      } 
    }

    case actiontypes().shoppingCart.clearCart: {

    }

    default: 
      return state
  }

}

export default shoppingCartReducer;