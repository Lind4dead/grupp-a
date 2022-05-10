import './HeaderStyles.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
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
                <li className='nav-link'><NavLink to='/login'>Logga in</NavLink></li>
                <li className='nav-link'>Kundservice</li>
            </ul>
        </div>
    </header>
  )
}

export default Header