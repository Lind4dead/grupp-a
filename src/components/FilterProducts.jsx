import { useState } from 'react'
import Modal from './Modal'



const FilterProducts = () => {

  const [showModalFilter, setShowModalFilter] = useState(true)

  return (
    <div className='filter-products d-flex justify-content-between align-items-center my-3'>
      <div>
        <button className='btn btn-floating btn-outline-primary'><i class="fa-solid fa-filter"></i></button>
      </div>
      <div>
        <button className='btn btn-floating btn-outline-primary'><i class="fa-solid fa-sort"></i></button>
      </div>
      {
        showModalFilter && <Modal />
      }
    </div>

  )
}

export default FilterProducts