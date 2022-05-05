import './NavbarStyles.css'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="dropdown navbar-meny">
            <button
                className='dropdown-knapp'
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            <h1 className='logga'><i className="fa-solid fa-martini-glass"></i> ROMIO</h1>
        </div>
        <div className="form-outline sökruta col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9">
            <div className='magnifying-glass'><i class="fa-solid fa-magnifying-glass"></i></div>
            <input type="search" id="form1" className="form-control" placeholder="Type query" aria-label="Search"/>
        </div>
        <div className='under-links'>
            <ul className='nav-links d-flex'>
                <li className='nav-link'>Produkter</li>
                <li className='nav-link'>Nyheter</li>
                <li className='nav-link'>Kampanjer</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar