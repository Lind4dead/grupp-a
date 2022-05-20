import React from 'react'


const UserOrderCard = ({ order }) => {
  return (
      <>
    <tr>
    <th scope="row">#</th>
    <td>{order.cart.length}</td>
    <td>{order.total} :-</td>
    <td>{order.quantity}</td>
    
  </tr>
  </>
  )
}

export default UserOrderCard