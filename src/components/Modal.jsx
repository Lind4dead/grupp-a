import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'




const Modal = ({ toggleModalFilter }) => {

  const dispatch = useDispatch()
  const { data: products } = useSelector(state => state.products)


  



  return (
    <div className='Modal show'>
      <div className='modal-dialog'>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className='modal-title'>Filtrera</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => toggleModalFilter(false)}></button>
          </div>
          <div className="modal-body">
            <div>
              <h5>Spritdrycker</h5>
              {
                filterOptions.types.map(type => <div key={type} className="form-check">
                  <input className="form-check-input" name="type" type="checkbox" value={type} id="type" />
                  <label className="form-check-label" htmlFor="type">{type}</label>
                </div>)
              }

            </div>
            <div className='mt-3'>
              <h5>Ursprungsland</h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="irland" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Irland</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="skottland" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Skottland</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="nicaragua" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Nicaragua</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="internationellt" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Internationellt</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal