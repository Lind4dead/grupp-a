import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().products.setProducts:
      console.log(action.payload)
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().products.loadingProducts:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }




}


export default productsReducer