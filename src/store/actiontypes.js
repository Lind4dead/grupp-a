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
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
      removeOne: 'REMOVE_ONE',
      clearCart: 'CLEAR_CART'
    },
    auth: {},
  }
}


export default actiontypes;