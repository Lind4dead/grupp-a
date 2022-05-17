import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminUserOrdersView = () => {
  return (
    <div className='mt-4'>

    <NavLink to='/admin'><div className='TillAllaProdukter mt-3 ms-5'><i className="fa-solid fa-left-long me-2 fs-9"></i>Tillbaka</div></NavLink>

      <h2 className='d-flex justify-content-center mb-2 border-bottom'>Administrera användares ordrar</h2>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Användare</th>
            <th scope="col">Antal ordrar</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Email</td>
            <td>3</td>
            <td><button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Email</td>
            <td>10</td>
            <td><button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Email</td>
            <td>6</td>
            <td><button className='btn'><i className="fa-solid fa-trash-can fs-6"></i></button></td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}

export default AdminUserOrdersView