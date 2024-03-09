import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStore } from '../../context/Store'
const URL = "https://fakestoreapi.com/auth/login"

const Login = () => {

  const username = useRef()
  const password = useRef() 
  const navigate = useNavigate();
  const { setUser } = useStore()

  // name: mor_2314
  // pass: 83r5^_

  const handleLogin = async () => {
    if (!username.current.value.trim().length || !password.current.value.trim().length) {
      return toast.warning("Iltimos barcha maydoni to'ldiring.")
    }
    const data = { username: username.current.value, password: password.current.value }
    try {
      const response = await axios.post(URL, data)
      console.log(response);
      localStorage.setItem("token", response.data.token)
      setUser(prev => ({ ...prev, isLoggedIn: false }))
      toast.success("Login successfully")
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  }

  return (
    <div className='container'>
      <div style={{
        margin: "0 auto",
        width: "50%",
        marginBottom: "100px",
      }}>
        <form>
          <h2 className='text-center  my-4'>Regestiratsion</h2>
          <div>
            <label htmlFor="user">Username</label>
            <input ref={username} type="email" className="form-control mb-3" />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input ref={password} type="password" className="form-control mb-3" />
          </div>
          <button onClick={handleLogin} type='button' className="btn btn-primary w-100">Sing Up</button>
        </form>
      </div>
    </div>
  )
}
export default Login
