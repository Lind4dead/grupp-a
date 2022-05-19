import React from 'react'


const UserOrderCard = ({ order }) => {
  return (
      <>
    <tr>
    <th scope="row">1</th>
    <td>{order.cart.length}</td>
    <td>{order.total} :-</td>
    <td>{order.quantity}</td>
    <td>tee<button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
  </tr>
  </>
  )
}

export default UserOrderCard