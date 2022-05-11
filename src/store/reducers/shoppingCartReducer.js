import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0
}

const shoppingCartReducer = (state = initState, action) => {

  switch(action.type) {


    default: 
      return state
  }

}

export default shoppingCartReducer;