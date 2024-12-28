// import React , {useState} from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';  

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    console.log("Form Submitted!")

    setEmail("")
    setPassword("")
  }
  return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600 p-10'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
                className='flex flex-col items-center justify-center rounded-xl'>
                <input value={email} onChange={(e) =>{
                  setEmail(e.target.value)
                }} 
                required className='text-white mb-2 rounded-full outline-none border-2 bg-transparent border-emerald-600 px-4 py-5 text-xl placeholder:text-white' type="email" placeholder='Enter Your Email'/>
                <input value={password} onChange={(e) =>{
                  setPassword(e.target.value)
                }}
                required className='text-white xl-rounded outline-none border-2 bg-transparent border-emerald-600 px-4 py-5 text-xl rounded-full placeholder:text-white' type="password" placeholder='Enter Your Password'/>
                <button className='text-white mt-5 outline-none h-30 w-40 border-2 bg-emerald-600 px-4 py-5 text-xl rounded-full'>Login</button>
            </form>
        </div>
        
      </div>
    
  )
}
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}
export default Login