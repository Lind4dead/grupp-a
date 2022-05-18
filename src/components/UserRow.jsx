// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { getUsers } from '../store/actions/adminAction'
import { NavLink } from 'react-router-dom'

const UserRow = ({user, order}) => {

    // const dispath = useDispatch()

    // useEffect(() => {
    //     dispath(getUsers())
    // })

  return (
    <>
        <th scope="row">1</th>
        <td>{user.firstName} {user.lastName}</td>
        <td>{user.email}</td>
        <td>Antal ordrar</td>
        <td><button className='btn'><NavLink to='/administrera'>Hantera</NavLink></button></td>
    </>
  )
}

export default UserRow