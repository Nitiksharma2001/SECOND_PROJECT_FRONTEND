import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import Cart from './components/cart/Cart'
import View from './components/View/View'
import InsertProduct from './components/insertProduct/insertProduct'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import NotFound from './Pages/NotFound'
function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: 'calc(100vh - 56px)' }}>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/insert' element={<InsertProduct />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
export default App
