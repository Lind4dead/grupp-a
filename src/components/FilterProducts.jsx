import { useState } from 'react'
import Modal from './Modal'



const FilterProducts = () => {

  const [showModalFilter, setShowModalFilter] = useState(false)


  const toggleModalFilter = () => {
    setShowModalFilter(!showModalFilter)
  }

  return (
    <div className='filter-products d-flex justify-content-between align-items-center my-3'>
      <div>
        <button className='btn btn-floating btn-outline-primary' onClick={toggleModalFilter}><i className="fa-solid fa-filter"></i></button>
      </div>
      <div>
        <button className='btn btn-floating btn-outline-primary'><i className="fa-solid fa-sort"></i></button>
      </div>
      {
        showModalFilter && <Modal toggleModalFilter={toggleModalFilter} />
      }
    </div>

  )
}

export default FilterProducts