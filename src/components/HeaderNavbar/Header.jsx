import './HeaderStyles.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'

const Header = () => {

  const dispatch = useDispatch()
  
  const isAuth = useSelector(state => state.auth.token)
  
  return (
    <header className='header-styling d-md-flex'>
      <div className='header-div d-none d-sm-flex pt-3'>
            <ul className='d-flex checktext'>
                <li className='nav-link'><i class="fa-solid fa-check"></i> 74 butiker</li>
                <li className='nav-link'><i class="fa-solid fa-check"></i> Fri frakt till butik</li>
                <li className='nav-link'><i class="fa-solid fa-check"></i> Störst på sprit!</li>
            </ul>
        </div>
        <div className='header-div2 pt-3'>
            <ul className='d-flex'>
              { isAuth
                ?<Link onClick={() => dispatch(logoutUser())} to='/'><li className='nav-link'>Logga ut</li></Link>

                :<NavLink to='/login'><li className='nav-link'>Logga in</li></NavLink>
              }
                <li className='nav-link'>Kundservice</li>
            </ul>
        </div>
    </header>
  )
}

export default Header