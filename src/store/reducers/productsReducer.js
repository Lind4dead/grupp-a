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

    case actiontypes().products.filterByType:
      return {
        ...state,
        filteredData: action.payload,
        loading: false,
        error: null
      }
    
    case actiontypes().products.filterByCountry:
      return {
        ...state,
        filteredData: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().products.setFilterOptions:
      return {
        ...state,
        filterOptions: action.payload,
        loading: false,
        error: null
      }

    default:
      return state
  }




}


export default productsReducer