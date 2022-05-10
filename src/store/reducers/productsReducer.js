import actiontypes from "../actiontypes";

const initState = {
  data: [],
  filteredData: [],
  filterOptions: null,
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


    default:
      return state
  }




}


export default productsReducer