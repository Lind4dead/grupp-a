import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null
}

const userOrderReducer = (state = initState, action) => {
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

        default:
            return state
    }
}

export default userOrderReducer