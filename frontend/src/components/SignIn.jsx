import React from "react";

function SignIn() {
  return (
    <div className="w-full h-full flex flex-col items-center align-middle border bg-slate-200">
      <div className="w-full h-full">
        <div className="p-6 text-center">
          <h1 className="text-5xl font-bold text-green-700">Sign In</h1>
        </div>
        <div className="w-full mt-5">
          <form className=" align-middle items-center w-full p-4">
            <label className="text-lg font-medium">Aadhar Number</label>
            <input
              className="w-full border-1 border-green-700  rounded-xl mb-4 p-1"
              type="text"
              name="email"
              placeholder="Enter your aadhar number"
            />
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-green-700  rounded-xl mb-4 p-1"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <div>
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full">
                Sign In
              </button>
            </div>
          </form>
          <div>
            <p>Don't have an account? Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
