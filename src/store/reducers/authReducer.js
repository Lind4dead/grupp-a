import actiontypes from "../actiontypes";

const initState = {
    token: null,
    isAdmin: false,
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

        case actiontypes().auth.authSuccess:
            console.log(action.payload.user)
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                loading: false,
                error: null,
                token: action.payload.token,
                isAdmin: action.payload.user.isAdmin
            }

        case actiontypes().auth.checkUserSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                token: action.payload
            }

        case actiontypes().auth.logout:
            localStorage.removeItem('token')
            return {
                ...initState
            }

        default:
            return state
    }
}

export default authReducer;