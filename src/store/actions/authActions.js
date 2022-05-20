import axios from 'axios'
import actiontypes from '../actiontypes'
import jwt_decode from 'jwt-decode'

const callApi = (url, user, dispatch) => {
    axios.post(url, user)
    .then(res => {
        dispatch(authSuccess(res.data))
        console.log(res.data.token)
    })
    .catch(err => dispatch(authFailure(err.message))) 
}



export const registerUser = (user) => {
    return dispatch => {
        dispatch(loading())
        callApi('http://localhost:9999/api/users/register', user, dispatch)
    }
}

export const loginUser = user => {
    return dispatch => {
        dispatch(loading())
        callApi('http://localhost:9999/api/users/login', user, dispatch)
        
    }
}

export const logoutUser = () => {
    return {
        type: actiontypes().auth.logout
        
    }
}

export const checkUserExists = () => {
    return dispatch => {
        let token = localStorage.getItem('token')
        if(token) {
            if(jwt_decode(token).exp * 1000 > Date.now()){
                dispatch(checkUserSuccess(token))
            } else {
                localStorage.removeItem('token')
            }

        }
    }
    
}
const loading = () => {
    return {
        type: actiontypes().auth.loading
    }
}

const authFailure = (err) =>  {
    return {
        type: actiontypes().auth.authFailure,
        payload: err
    }
}

const authSuccess = user => {
    return {
        type: actiontypes().auth.authSuccess,
        payload: user
    }
}
const checkUserSuccess = token => {
    return {
        type: actiontypes().auth.checkUserSuccess,
        payload: token
    }
}