import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import ViewProduct from './pages/ViewProduct/ViewProduct'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react'
import { useStore } from './context/Store'
import Footer from './pages/footer/Footer'

const App = () => {
  const { setUser } = useStore();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token)
      setUser(prev => ({ ...prev, isLoggedIn: true }))
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ViewProduct />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App