import React, { useState } from "react";
import SignIn from "../components/SignIn2";
import SignUp from "../components/SignUp";
import bg from '../assets/loginbg.jpg'
// import LoginFormComponent from "../components/LoginFormComponent";
import { useSelector } from "react-redux";
function Login() {
    const [login , setLogin] = useState(false);
    const loginToggle = useSelector((state) => state.loginToggle);
  return (
    <div 
    style={{backgroundImage: `url(${bg})` , backgroundSize: 'cover' , backgroundPosition: 'center'}}
    className="flex h-screen w-full">
      <div className="px-4 sm:w-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}

export default Login;
