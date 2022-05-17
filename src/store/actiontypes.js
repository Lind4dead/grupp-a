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
    auth: {
      loading: 'LOADING_USER',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout: 'LOGOUT_USER'
    },
    admin: {
      getAllUsers: 'GET_ALL_USERS',
      loadingUsers: 'LOADING_USERS',
      loadingUsersFailure: 'ADMIN_FAILURE'
    },
    orders: {
      getAllOrders: 'GET_ALL_ORDERS',
      getOneOrder: 'GET_ONE_ORDER',
      loadingOrders: 'LOADING_ORDERS',
      loadingOrdersFailure: 'LOADING_ORDERS_FAILURE'
    }

  }
}


export default actiontypes;