import actiontypes from "../actiontypes";
import axios from "axios";

export const getUsers = () => {
    return async dispatch => {
        dispatch(loadingUsers(true))
        try {
            const res = await axios.get('http://localhost:9999/api/users')

            dispatch(getAllUsers(res.data))
        } catch (err) {
            dispatch(loadingUsersFailure(err.message))
        }
    }
}

const getAllUsers = (users) => {
    return {
      type: actiontypes().admin.getAllUsers,
      payload: users
    }
  }

  const loadingUsers = (payload) => {
      return {
          type: actiontypes().admin.loadingUsers,
          payload
      }
  }

  const loadingUsersFailure = (payload) => {
      return {
          type: actiontypes().admin.loadingUsersFailure,
          payload
      }
  }