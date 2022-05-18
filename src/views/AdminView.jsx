import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/adminAction'
// import { getOrders } from '../store/actions/orderActions'
// import { NavLink } from 'react-router-dom'
import UserRow from '../components/UserRow'

const AdminView = () => {

  const dispatch = useDispatch()
  const { data, loading } = useSelector((state => state.admin))

  useEffect(() => {
      dispatch(getUsers())
  }, [dispatch])


  return (
    <div className='mt-4 mx-2'>
      
      <h2 className='d-flex justify-content-center mt-3 border-bottom mx-5 adminrubrik'>Administrera ordrar</h2>

      
      <table className="table container mx-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Namn</th>
            <th scope="col">Mail</th>
            <th scope="col">Antal ordrar</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
            { loading && <p>Loading...</p>}
            {
              data.map(user => <tr> <UserRow key={user._id} user={user} /> </tr> )
            }
          
        </tbody>
    </table>
    </div>
  )
}

export default AdminView