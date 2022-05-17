import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null
}

const adminReducer = (state = initState, action) => {
    switch(action.type) {
        
        case actiontypes().admin.getAllUsers:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        
        case actiontypes().admin.loadingUsers:
            return {
                ...state,
                loading: true
            }

        case actiontypes().admin.loadingUsersFailure:
            return {
                data: [],
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


export default adminReducer