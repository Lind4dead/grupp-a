import actiontypes from "../actiontypes";

const initState = {
  data: [],
  filteredProducts: [],
  loading: false,
  error: null
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().products.setProducts:
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

    case actiontypes().products.filterProducts:
      return {
        ...state,
        filteredProducts: action.payload
      }


    default:
      return state
  }




}


export default productsReducer