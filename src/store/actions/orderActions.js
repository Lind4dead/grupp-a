import actiontypes from "../actiontypes";
import axios from "axios";

export const getOrders = () => {
    return async dispatch => {
        dispatch(loadingOrders(true))
        try {
            const res = await axios.get('http://localhost:9999/api/orders')
            dispatch(getAllOrders(res.data))
            dispatch(getOneOrder(res.data))
        } catch (err) {
            dispatch(loadingOrdersFailure(err.message))
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