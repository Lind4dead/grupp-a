import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null
}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        
        case actiontypes().orders.getAllOrders:
            return {
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().orders.getOneOrder:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        
        case actiontypes().orders.loadingOrders:
            return {
                ...state,
                loading: true
            }

        case actiontypes().orders.loadingOrdersFailure:
            return {
                data: [],
                loading: false,
                error: action.payload
            }
        
        case actiontypes().orders.updateOrderSuccess:
            const orderRef = state.data.filter(order => order._id === action.payload._id)
            orderRef[0].delivered = action.payload.delivered
            return {
               ...state,
            }
        
        default:
            return state
    }
}


export default orderReducer