import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import UserOrderRow from '../components/UserOrderRow'

const AdminUserOrdersView = () => {

  const { id } = useParams()

  const [myOrders, setMyOrders] = useState([])
  const { data: orders, loading: loadingOrders } = useSelector((state => state.orders))

  useEffect(() => {
    setMyOrders([])
    if(orders) {
      orders.map(order => {
        console.log(order.user)
        if(order.user === id) {
          setMyOrders(state => ([
            ...state,
            order
          ]))
        }
      })
    }
  }, [id, orders])

  return (
   <div> 
    <NavLink to='/admin'><div className='TillAllaProdukter mt-4 ms-5'><i className="fa-solid fa-left-long me-2 fs-9"></i>Tillbaka</div></NavLink>
    <div className='mt-3 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded'>

      <h2 className='d-flex justify-content-center mb-2 border-bottom'>Administrera användares ordrar</h2>
      
      <table className="table">
        <thead className='align-items-center'>
          <tr className='text-center'>
            <th className='text-start' scope="col">Order nummer</th>
            <th scope="col">Antal produkter</th>
            <th scope="col">Total summa</th>
            <th scope="col">Order status</th>
          </tr>
        </thead>
        <tbody>
        { loadingOrders && <p>Loading...</p>}
            {
              myOrders.map(order => <tr> <UserOrderRow key={order._id} order={order} /> </tr> )
            }
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default AdminUserOrdersView