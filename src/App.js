import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Product from './Pages/Products/Product/Product'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import NotFound from './Pages/NotFound/NotFound'
import Navbar from './Layouts/Navbar/Navbar'
import Products from "./Pages/Products/Products"
function App() {
  return (
    <>
      <Navbar />
      <div className='h-[calc(100%-56px)]'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
export default App
