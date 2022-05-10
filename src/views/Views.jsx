import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from './LoginView'
import ProductsGridView from './ProductsGridView'

const Views = () => {
    return (
      <Routes>
        <Route path='/login' element={<LoginView />} />
        <Route path='/' element={ <ProductsGridView /> } />
      </Routes>
    )
} 

export default Views