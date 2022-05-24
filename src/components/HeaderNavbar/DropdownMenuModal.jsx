import './DropdownMenuModalStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DropdownMenuModal = ({setShowMenu}) => {

  const { isAdmin, token } = useSelector(state => state.auth)


  const onClose = (e) => {
    e.stopPropagation()
    if(e.target.id === "exampleModalbg") {
      setShowMenu(false)
    }
  }

  return (
    <div className='Modal1 show' onClick={onClose} id="exampleModalbg">
    <div className='modal-dialog'>
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={() => setShowMenu(false)} type="button" className="btn-close"></button>
        </div>
        <div className="modal-body">
                    <h5 className='meny-h5'>Spritdrycker</h5>
                <ul className='länklista' onClick={() => setShowMenu(false)}>
                    <NavLink to='/liquor'><li className='menylänk mt-2'>Likör</li></NavLink>
                    <NavLink to='/rom'><li className='menylänk mt-2'>Rom</li></NavLink>
                    <NavLink to='/tequila'><li className='menylänk mt-2'>Tequila</li></NavLink>
                    <NavLink to='/vodka'><li className='menylänk mt-2'>Vodka</li></NavLink>
                    <NavLink to='/whisky'><li className='menylänk mt-2'>Whisky</li></NavLink>
                    <NavLink to='/allproducts'><li className='menylänk mt-2'>Alla produkter</li></NavLink>
                    <br />
                    <hr />
                    <br />
                    {
                      isAdmin && <NavLink to='/admin'><li className='menylänk mt-2'>Admin</li></NavLink>
                    }
                    {
                      token ? <NavLink to='/minasidor'><li className='menylänk mt-2'>Mina sidor</li></NavLink> : <NavLink to='/login'><li className='menylänk mt-2'>Logga in</li></NavLink>
                    }
                    
                    <li className='menylänk mt-2'>Kundservice</li>
                </ul>

          </div>
        </div>
      </div>
    </div>

  )
}

export default DropdownMenuModal