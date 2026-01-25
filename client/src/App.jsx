import React from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className='px-3 sm:px-6 md:px-10 lg:px-14 xl:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 overflow-x-hidden'>
      <ToastContainer position='top-right' />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
