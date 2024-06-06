import React , { useState } from "react";
import '../styles/navbar.scss'
import { Link } from "react-router-dom";
function Navbar() {
  
  const [ homeActive , setHomeActive ] = useState(true);
  const [ aboutActive , setAboutActive ] = useState(false);
  const [ projectsActive , setProjectsActive ] = useState(false);
  const handleAbout = () => {
    setHomeActive(false);
    setAboutActive(true);
    setProjectsActive(false);
  }
  const handleProjects = () => {
    setHomeActive(false);
    setAboutActive(false);
    setProjectsActive(true);
  }
  const handleHome = () => {
    setHomeActive(true);
    setAboutActive(false);
    setProjectsActive(false);
  }

  return (
    <div className="fixed shadow-md w-full z-[200] text-black flex px-[10px] sm:px-[3rem] md:px-[5rem]
     py-[1.3rem] items-center font-semibold text-sm sm:text-md">
      <div className="flex items-center justify-between w-full">
        {/* <Link to ='/'> */}
        < Link to = '/' >
        <div className="cursor-pointer hover:opacity-85">Home</div>
        </Link>
        <Link to ='/recommendation'>

        <div className="hover-underline-animation cursor-pointer text-black"
            >Recommendation</div>
            </Link>
        {/* </Link> */}
        <div className="flex gap-[2rem] sm:gap-[4rem]">
          {/* <Link to='/about'> */}
            
            {/* </Link> */}
            {/* <Link to='/project'> */}
            <div className="">
              <Link to ='/login'>
                <button className="bg-green-700 hover:bg-green-800 text-white px-3  sm:px-4 py-1 rounded-sm" >
                    Login
                </button>
              </Link>
            </div>
            <div className="">
              <Link to = '/register'>
                <button className=" border-2 text-black border-emerald-700 hover:bg-green-800 hover:text-white px-3 sm:px-4 py-1 rounded-sm" >
                    Register
                </button>
              </Link>
            </div>
              {/* </Link> */}
            {/* <div className="hover-underline-animation cursor-pointer text-black">Register</div> */}
            <div className="hidden hover-underline-animation cursor-pointer text-black">Logout</div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
