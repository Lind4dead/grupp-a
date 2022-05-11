import actiontypes from "../actiontypes";

const initState = {
    token: null,
    loading: false,
    error: null
}

const authReducer = (state = initState, action) => { 
    switch(action.type) {

        case actiontypes().auth.loading:
            return {
                ...state,
                loading: true
            }

        case actiontypes().auth.authFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default authReducer;