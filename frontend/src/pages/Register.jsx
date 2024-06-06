import React from 'react'
import SignUp from '../components/SignUp'
import bg from '../assets/loginbg.jpg'

function Register() {
  return (
    <div 
    style={{backgroundImage: `url(${bg})` , backgroundSize: 'cover' , backgroundPosition: 'center'}}
    className="flex h-screen w-full">
      <div className="px-4 w-full flex items-center justify-center">
        < SignUp />
      </div>
    </div>
  )
}

export default Register