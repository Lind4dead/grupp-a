import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/adminAction'
import { getOrders } from '../store/actions/orderActions'
// import { NavLink } from 'react-router-dom'
import UserRow from '../components/UserRow'

const AdminView = () => {

  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.admin)
  const { token, isAdmin } = useSelector(state => state.auth)

  useEffect(() => {
      dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    if(token) {
      dispatch(getOrders(token))
    }

  }, [dispatch, token, isAdmin])

  return (
    <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded '>
      
      <h2 className='d-flex justify-content-center mt-2 mb-4 adminrubrik'>Administrera ordrar</h2>

      
      <table className="table container px-2">
        <thead className='align-items-center'>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Mail</th>
            <th className='text-center' scope="col">Antal ordrar</th>
            <th className='text-center' scope="col">Hantera</th>
          </tr>
        </thead>
        <tbody>
            { loading && <p>Loading...</p>}
            {
              data.map(user => <tr key={user._id}> <UserRow  user={user} /> </tr> )
            }
          
        </tbody>
    </table>
    </div>
  )
}

export default AdminView