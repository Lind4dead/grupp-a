import './HeaderStyles.css'
import React from 'react'

const Header = () => {
  return (
    <header className='header-styling'>
        <div className='header-div d-flex align-items-center'>
            <ul className='d-flex checktext'>
                <p><i class="fa-solid fa-check"></i>74 butiker</p>
                <p><i class="fa-solid fa-check"></i>Fri frakt till butik</p>
                <p><i class="fa-solid fa-check"></i>Ströst på sprit!</p>

                    <li className='nav-link'>Logga in</li>
                    <li className='nav-link'>Kundservice</li>
                
            </ul>
        
        </div>
    </header>
  )
}

export default Header