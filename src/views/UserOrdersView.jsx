import React from 'react'
import { NavLink } from 'react-router-dom'
import { getOrders } from '../store/actions/orderActions'
import userOrderReducer from '../store/reducers/userOrderReducer'

const UserOrdersView = (user) => {
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
      <th scope="col">Ta bort order</th>

    </tr>
  </thead>
  <tbody className=''>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td><button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td><button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
    </tr>
    
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