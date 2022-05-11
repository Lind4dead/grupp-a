import axios from 'axios'
import actiontypes from '../actiontypes'

export const registerUser = (user) => {
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:8080/register', user)
        .then(res => {
            console.log(res)

        })
        .catch(err => dispatch(authFailure(err.message)))
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