import React from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleLogin } from '../redux/slices/LoginToggle'
import { Link } from 'react-router-dom'
function SignUp() {
  const dispatch = useDispatch();
  
    const [showPassword , setShowPassword] = useState(false);


  return (
    <div className="bg-white px-7 py-7 sm:px-10 py-20 rounded-xl">
      <h1 className="text-5xl text-center font-bold text-green-700">Register</h1>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Aadhar Number</label>
          <input
          className="w-full border-2 border-green-700  rounded-xl mb-4 p-2 bg-transparent"
            type="text"
            name="email"
            placeholder="Enter your aadhar number"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
          className="w-full border-2 border-green-700  rounded-xl mb-4 p-2 bg-transparent"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
          />
          <label className="text-lg font-medium">Confirm Password</label>
          <input
          className="w-full border-2 border-green-700  rounded-xl mb-4 p-2 bg-transparent"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Re-enter your password"
          />
          {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
        </div>
        <div>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full ">Sign Up</button>
          </div>
          <div className="mt-4 ">
            <Link to ="/login">
            <p onClick={()=>dispatch(toggleLogin())} 
            className=" text-blue-800 hover:underline text-blue-800">Already have an account? Sign Up</p>
            </Link>
          </div>
   </div>
    </div>
  )
}

export default SignUp