import actiontypes from "../actiontypes";
import axios from "axios";
import { clearCart } from "./shoppingCartActions";

export const getOrders = (token, isAdmin) => {
    return async dispatch => {
        dispatch(loadingOrders(true))
        try {
            if (isAdmin) {
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

const getAllOrders = (orders) => {
    return {
        type: actiontypes().orders.getAllOrders,
        payload: orders
    }
}

const getOneOrder = (orders) => {
    return {
        type: actiontypes().orders.getOneOrder,
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