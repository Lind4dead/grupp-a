import actiontypes from '../actiontypes';

const initState = {
  shoppingCart: [],
  totalPrice: 0,
  totalQuantity: 0,
}


const getTotalQuantity = (shoppingCart) => {
  let totalQuantity = 0;

  shoppingCart.forEach(product => {
    totalQuantity += product.quantity
  })
  return totalQuantity;
}

const calcTotalPrice = (shoppingCart) => {
  let totalPrice = 0;

  shoppingCart.forEach(product => {
    totalPrice += product.price * product.quantity
  })
  return totalPrice;
}


const shoppingCartReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().shoppingCart.addToCart: {
      const itemRef = state.shoppingCart.find(item => item._id === action.payload._id)
    
      let item = {
        ...action.payload,
        quantity: 1
      } 

      itemRef 
      ? itemRef.quantity += 1 
      : state.shoppingCart = [...state.shoppingCart, item]
      
      return {
        ...state,
        totalPrice: calcTotalPrice(state.shoppingCart),
        totalQuantity: getTotalQuantity(state.shoppingCart)
      } 
  }


    case actiontypes().shoppingCart.selectAmount: {

      state.shoppingCart = state.shoppingCart.map(item => {
        if(item._id === action.payload.id) {
          return {
            ...item,
            quantity: +action.payload.quantity
          }
        }
        return item
      })
      return {
        ...state,
        totalPrice: calcTotalPrice(state.shoppingCart),
        totalQuantity: getTotalQuantity(state.shoppingCart)
      }
    }
   
    case actiontypes().shoppingCart.deleteItem: {

      state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)

      return {
        ...state,
        totalPrice: calcTotalPrice(state.shoppingCart),
        totalQuantity: getTotalQuantity(state.shoppingCart)
      }
    }

    case actiontypes().shoppingCart.clearCart: 
      return {
        ...state,
        shoppingCart: [],
        totalPrice: 0,
        totalQuantity: 0
      }

    default: 
      return state
  }
}

export default shoppingCartReducer;


