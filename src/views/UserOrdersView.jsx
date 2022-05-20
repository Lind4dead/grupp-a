import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/orderActions'
import { useEffect } from 'react'
import UserOrderCard from '../components/UserOrderCard'
import UserOldOrders from '../components/UserOldOrders'


const UserOrdersView = () => {

const dispatch = useDispatch()
const {token, isAdmin} = useSelector(state => state.auth)
const {data} = useSelector(state => state.orders )





useEffect(()=>{
  if(token) {
    dispatch(getOrders(token, 'minaSidor'))
  }
}, [dispatch, token, isAdmin])



  return (
    <div className='mt-5 container card py-5 rounded-7 shadow p-3 mb-5 bg-body rounded '>

    <NavLink to='/minaordrar' className='text-start ps-1 ms-5 mb-2 h3' style={customText}>Mina Ordrar:</NavLink>

    <div className='ps-5 pe-5 d-flex flex-column'>
    <table className="table" >
  <thead>
  <p className='ps-1' >Nya ordrar: </p>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ordrar</th>
      <th scope="col">Pris</th>
      <th scope="col">Antal produkter</th>
    </tr>
  </thead>
  <tbody className=''>
    {
      data.map(order => <UserOrderCard key={order._id} order={order} />)
    }
   
   <p className='ps-1 pt-5' >Historiska ordrar: </p>
   {
      data.map(order => <UserOldOrders key={order._id} order={order} />)
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