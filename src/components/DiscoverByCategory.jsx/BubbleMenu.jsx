import React from 'react'
import './bubble.css'
import { NavLink } from 'react-router-dom'

const BubbleMenu = () => {
  return (
<div>
    <div className='bubble-row row justify-content-between d-none d-sm-flex'>
        <h2>Upptäck efter kategori</h2>
        <div className='heladiven col-2'>
        <NavLink to='/liquor'><div className='bubble-div'>
            <img
                src="https://product-cdn.systembolaget.se/productimages/38737/38737_400.png"
                className="img-fluid"
                alt="Likör"
                />
            </div></NavLink>
            <NavLink to='/liquor'><h3 className='d-flex justify-content-center'>Likör</h3></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/rom'><div className='bubble-div '>
            <img
                src="https://product-cdn.systembolaget.se/productimages/606748/606748_400.png"
                className="img-fluid"
                alt="Rom"
                />
            </div></NavLink>
            <NavLink to='/rom'><h3 className='d-flex justify-content-center'>Rom</h3></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/tequila'><div className='bubble-div '>
            <img
                src="https://product-cdn.systembolaget.se/productimages/32611/32611_400.png"
                className="img-fluid"
                alt="Tequila"
                />
            </div></NavLink>
            <NavLink to='/tequila'><h3 className='d-flex justify-content-center'>Tequila</h3></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/vodka'><div className='bubble-div '>
            <img
                src="https://product-cdn.systembolaget.se/productimages/186/186_400.png"
                className="img-fluid"
                alt="Vodka"
                />
            </div></NavLink>
            <NavLink to='/vodka'><h3 className='d-flex justify-content-center'>Vodka</h3></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/whisky'><div className='bubble-div '>
            <img
                src="https://product-cdn.systembolaget.se/productimages/24640918/24640918_400.png"
                className="img-fluid"
                alt="Whisky"
                />
            </div></NavLink>
            <NavLink to='/whisky'><h3 className='d-flex justify-content-center'>Whisky</h3></NavLink>
        </div>
    </div>
</div>
  )
}

export default BubbleMenu