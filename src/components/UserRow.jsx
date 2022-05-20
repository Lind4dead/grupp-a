import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { getUsers } from '../store/actions/adminAction'
import { Link } from 'react-router-dom'

const UserRow = ({user}) => {

  const [myOrders, setMyOrders] = useState([])
  const { data: orders, loading: loadingOrders } = useSelector((state => state.orders))

    useEffect(() => {
      setMyOrders([])
      if(orders) {
        orders.map(order => {
          // console.log(order.user)
          if(order.user === user._id) {
            setMyOrders(state => ([
              ...state,
              order
            ]))
          }
        })
      }
    }, [orders, user._id])

  return (
    <>
        {/* <th scope="row">1</th> */}
        <td>{user.firstName} {user.lastName}</td>
        <td>{user.email}</td>
        <td className='text-center'>{myOrders.length}</td>
      <td className='text-center'><Link to={`/administrera/${user._id}`}><button className='btn pen-btn'><i className="fa-solid fa-pen"></i></button></Link></td>
    </>
  )
}

export default UserRow