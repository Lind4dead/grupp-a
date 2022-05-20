import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../store/actions/orderActions'

const UserOrderRow = ({order}) => {

    const dispatch = useDispatch()
    // const [done, setDone] = useState()

    const setDoneDone = () => {
        
        dispatch(updateOrder(order._id, !order.delivered))
    }
   

  return (
    <>
        <td>{order._id.slice(0, 10)}..</td>
        <td className='text-center'>{order.quantity}</td>
        <td className='text-center'>{order.total} :-</td>
        <td className='text-center'><button onClick={ setDoneDone } className={`btn ${order.delivered? 'done-done' : 'not-done'}`}><i className="fa-solid fa-highlighter"></i></button></td>
    </>
  )
}

export default UserOrderRow