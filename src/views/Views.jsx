import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import LoginView from './LoginView'
import ProductsGridView from './ProductsGridView'

const Views = () => {
    return (
      <Routes>
        <Route path='/' element={ <HomeView /> } />
        <Route path='/login' element={<LoginView />} />
        <Route path='/allproducts' element={<ProductsGridView />} />
      </Routes>
    )
} 

export default Views