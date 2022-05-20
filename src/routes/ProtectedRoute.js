import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

  const { token } = useSelector(state => state.auth)

  return token
  ? children
  : <Navigate to='/login' replace />
}

export const ProtectedRouteAdmin = ({ children }) => {
  
  const { isAdmin } = useSelector(state => state.auth)
  return isAdmin
  ? children
  : <Navigate to='/' replace />
}


