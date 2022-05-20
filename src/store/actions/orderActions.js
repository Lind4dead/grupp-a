import actiontypes from "../actiontypes";
import axios from "axios";
import { clearCart } from "./shoppingCartActions";

export const getOrders = (token, myprofile) => {
    return async dispatch => {
        dispatch(loadingOrders(true))
        try {
            if (!myprofile) {
                const res = await axios.get('http://localhost:9999/api/orders/admin', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch(getAllOrders(res.data))

            } else {
                const res = await axios.get('http://localhost:9999/api/orders', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(res)
                dispatch(getAllOrders(res.data))
            }
        } catch (err) {
            dispatch(loadingOrdersFailure(err.message))
        }
    }
}

export const createOrder = (payload, token) => {
    return async dispatch => {
        dispatch(loadingOrders(true))
        try {
            const res = await axios.post('http://localhost:9999/api/orders', payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.status === 201) {
                dispatch(createNewOrderSuccess(res.data.data))
                dispatch(clearCart())
            }
            else {
                throw new Error('Could not create order', res.status)
            }
        } catch (err) {
            dispatch(createNewOrderFailure(err.message))
        }
    }
}

export const updateOrder = (id, _delivered) => {
    return async dispatch => {
        try {
            const res = await axios.patch('http://localhost:9999/api/orders/' + id, { delivered: _delivered  } )
            dispatch(updateOneOrder(res.data.data))
        } catch (err) {
            
        }
    }
}

const getAllOrders = (orders) => {
    return {
        type: actiontypes().orders.getAllOrders,
        payload: orders
    }
}



const loadingOrders = (payload) => {
    return {
        type: actiontypes().orders.loadingOrders,
        payload
    }
}

const loadingOrdersFailure = (payload) => {
    return {
        type: actiontypes().orders.loadingOrdersFailure,
        payload
    }
}

const createNewOrderSuccess = (payload) => {
    return {
        type: actiontypes().orders.createNewOrderSuccess,
        payload
    }
}

const createNewOrderFailure = (payload) => {
    return {
        type: actiontypes().orders.createNewOrderFailure,
        payload
    }
}

const updateOneOrder = (payload) => {
    return {
        type: actiontypes().orders.updateOrderSuccess,
        payload
    }
}