import actiontypes from "../actiontypes";

const initState = {
  data: null,
  loading: false,
  error: null
}

const singleProductReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().singleProduct.getProductById:
      return {
        ...state,
        data: null,
        loading: true
      }

    case actiontypes().singleProduct.getProductByIdSuccess:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }


    default:
      return state
  }



}

export default singleProductReducer;