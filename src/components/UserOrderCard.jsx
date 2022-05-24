import React from 'react'


const UserOrderCard = ({ order }) => {
  return (
      <>
    <tr className='align-items-center'>
    <th className='text-center'scope="row">1</th>
    <td className='text-center'>{order._id.slice(0, 6)}..</td>
    <td className='text-center'>{order.total} :-</td>
    <td className='text-center'>{order.quantity}</td>
    
  </tr>
  </>
  )
}

export default UserOrderCard