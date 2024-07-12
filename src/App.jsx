import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Favourite from './pages/Favourite'
import Faq from './pages/Faq'
import DeliveryPoints from './pages/DeliveryPoints'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/delivery-points' element={<DeliveryPoints />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App