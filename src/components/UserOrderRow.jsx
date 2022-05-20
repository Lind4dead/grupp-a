import { useState } from 'react'

const UserOrderRow = ({order}) => {

    const [done, setDone] = useState(false)

    const setDoneDone = () => {
        setDone(check => !check)
    }

  return (
    <>
        <td>{order._id}</td>
        <td className='text-center'>{order.quantity}</td>
        <td className='text-center'>{order.total} :-</td>
        <td className='text-center'><button onClick={ setDoneDone } className={`btn ${done? 'done-done' : 'not-done'}`}><i className="fa-solid fa-highlighter"></i></button></td>
    </>
  )
}

export default UserOrderRow