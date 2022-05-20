import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/orderActions'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import UserOrderCard from '../components/UserOrderCard'


const UserOrdersView = () => {

const dispatch = useDispatch()
const {token, isAdmin} = useSelector(state => state.auth)
const {data} = useSelector(state => state.orders )
const [myOrders, setMyOrders] = useState([])
const [myId, setMyId] = useState('')



// useEffect(()=> {
//   setMyOrders([])
//   if(token){
//     setMyId(jwt_decode(token).id)

//     data.map(order => {
//       if(order.user === myId) {
//         setMyOrders(state => ([
//           ...state,
//           order
//         ]))
//       }
//       console.log(order.user)
//     })
//   }
//   console.log(jwt_decode(token).id)
// }, [data, myId, token])
useEffect(()=>{
  if(token) {
    dispatch(getOrders(token, isAdmin))
  }
}, [dispatch, token, isAdmin])



  return (
    <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded '>
    <NavLink to='/minaordrar' className='text-start ps-1 ms-5 mb-2 h3' style={customText}>Mina Odrar:</NavLink>
    <div className='ps-5 pe-5 d-flex flex-column'>
    <table className="table" >
  <thead>
    <tr className="">
      <th scope="col">#</th>
      <th scope="col">order</th>
      <th scope="col">pris</th>
      <th scope="col">antal produkter</th>
    </tr>
  </thead>
  <tbody className=''>
    {
      data.map(order => <UserOrderCard key={order._id} order={order} />)
    }
   
    
  </tbody>
</table>
</div>
    </div>
   
    
  )
}

export default UserOrdersView

export const customText = {
  color: '#233D4D'
}