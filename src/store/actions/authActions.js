import axios from 'axios'
import actiontypes from '../actiontypes'

const callApi = (url, user, dispatch) => {
    axios.post(url, user)
    .then(res => {
        dispatch(authSuccess(res.data.accessToken))
    })
    .catch(err => dispatch(authFailure(err.message))) 
}

export const registerUser = (user) => {
    return dispatch => {
        dispatch(loading())
        callApi('http://localhost:8080/register', user, dispatch)
    }
}

export const loginUser = user => {
    return dispatch => {
        dispatch(loading())
        callApi('http://localhost:8080/login', user, dispatch)
        
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

const authSuccess = token => {
    return {
        type: actiontypes().auth.authSuccess,
        payload: token
    }
}