import './NavbarStyles.css'
import {useRef, useState} from 'react'
import DropdownMenuModal from './DropdownMenuModal'
import { NavLink } from 'react-router-dom'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const cart = useRef()
    const totalQuantity = useSelector(state => state.shoppingCart.totalQuantity)

  return (
    <nav className='navbar pt-4'>
        <div className="dropdown navbar-meny">
            <button onClick={() => setShowMenu(true)} className='dropdown-knapp' type="button" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                <i className="fa-solid fa-bars"></i>
            </button>
            {
                showMenu && <DropdownMenuModal setShowMenu={setShowMenu} />
            }    
                
            <NavLink to='/'><h1 className='logga'><i className="fa-solid fa-martini-glass"></i> ROMIO</h1></NavLink>
        </div>
        <div className="form-outline sökruta col-12 col-sm-6 col-md-7 col-lg-8">
            <div className='magnifying-glass'><i className="fa-solid fa-magnifying-glass"></i></div>
            <input type="search" id="form1" className="form-control" placeholder="Type query" aria-label="Search"/>
        </div>
        <div className="dropdown shoppingcart-icon">
                <span
                className="text-reset me-1 dropdown-toggle hidden-arrow"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                    <i className="fas fa-shopping-cart"></i>
                    {totalQuantity >= 1 && <span className="badge rounded-pill badge-notification bg-egencolor">{totalQuantity}</span>}
                </span>
                <ul
                className="dropdown-menu dropdown-menu-end shopping-cart"
                ref={cart}
                aria-labelledby="navbarDropdownMenuLink"
                >
                    <ShoppingCart cart={cart} />
                </ul>
            </div>
        
        <div className='under-links pt-4 d-flex'>
            <ul className='nav-links d-flex'>
                <NavLink to='/allproducts'><li className='nav-link'>Produkter</li></NavLink>
                <li className='nav-link'>Nyheter</li>
                <li className='nav-link'>Kampanjer</li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar