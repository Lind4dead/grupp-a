import React from 'react'
import { useDispatch } from 'react-redux'


const FilterCheckbox = ({ type, filterProducts }) => {

  const dispatch = useDispatch()
  return (
    <div className="form-check">
      <input className="form-check-input" name={type} onChange={e => e.target.checked ? filterProducts(e.target.checked, e.target.value, e.target.id) : filterProducts(e.target.checked, e.target.value, e.target.id)} type="checkbox" value={type} id="type" />
      <label className="form-check-label" htmlFor="type">{type}</label>
    </div>
  )
}

export default FilterCheckbox