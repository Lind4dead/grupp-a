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
      logout: 'LOGOUT_USER',
      checkUserSuccess: 'CHECK_USER_SUCCESS'
    },
    admin: {
      getAllUsers: 'GET_ALL_USERS',
      loadingUsers: 'LOADING_USERS',
      loadingUsersFailure: 'ADMIN_FAILURE'
    },
    orders: {
      addOrder: 'ADD_ORDER',
      getAllOrders: 'GET_ALL_ORDERS',
      getOneOrder: 'GET_ONE_ORDER',
      loadingOrders: 'LOADING_ORDERS',
      loadingOrdersFailure: 'LOADING_ORDERS_FAILURE',
      createNewOrderSuccess: 'CREATE_NEW_ORDER_SUCCESS',
      createNewOrderFailure: 'CREATE_NEW_ORDER_FAILURE',
      updateOrderSuccess: 'UPDATE_ORDER_SUCCESS'
    }

  }
}


export default actiontypes;