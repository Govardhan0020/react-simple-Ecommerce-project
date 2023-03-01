import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login';
import ProductDetdails from './ProductDetails';
import Products from './Products';
import SignUp from './SignUp';
import './style.css';
const RoutePage = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/details' element={<ProductDetdails />} />


        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default RoutePage;