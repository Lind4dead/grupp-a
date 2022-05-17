const actiontypes = () => {
  return {
    products: {
      setProducts: 'SET_PRODUCTS',
      loadingProducts: 'LOADING_PRODUCTS'
    },
    singleProduct: {
      getProductById: 'GET_PRODUCT_BY_ID',
      getProductByIdSuccess: 'GET_PRODUCT_SUCCESS',
      getProductByIdFailure: 'GET_PRODUCT_FAILURE'
    },
    shoppingCart: {
      addToCart: 'ADD_TO_CART',
      selectAmount: 'SELECT_AMOUNT',
      deleteItem: 'DELETE_ITEM',
      clearCart: 'CLEAR_CART'
    },
    auth: {
      loading: 'LOADING_USER',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout: 'LOGOUT_USER'
    }

  }
}


export default actiontypes;