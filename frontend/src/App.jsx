import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Route , Routes } from "react-router-dom";
import Recom from "./pages/Recom";
import SignUp from "./components/SignUp";
import Register from "./pages/Register";
function App() {
  return (
 
        // <Route path="/" element={< Home/>}></Route>
        <>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Home />} />
          < Route path = "/recommendation" element = {<Recom />} />
          < Route path = '/login' element = { <Login />} />
          < Route path = '/register' element = { <Register />} />
                    {/* <Recom /> */}
        </Routes>
        </>
  );
}

export default App;
