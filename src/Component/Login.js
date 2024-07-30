import React, { useRef, useState } from "react";
import { logo_url } from "../Utilility/Constants";
import { Link } from "react-router-dom";
import DataValidation from "../Utilility/DataValidation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); // to set sign up and sign in
  const [errorMessage, SetErrorMessage] = useState(null); //to show the error messages;

  //to get user input emal and password
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //to do the actions of login/signup
  const handleButton = () => {

    //when user input  data
    // console.log('email',email.current.value);
    // console.log('password',password.current.value);
    const message = DataValidation(email.current.value,password.current.value );
    SetErrorMessage(message);

    if(message) return;
  };

  //to show the login/signup button according to the user need.
  const toggleButton = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-full">
      <div className=" text-center shadow-lg p-6  m-16 border-b ">
        <div className="flex text-center justify-center">
          {/* <img className="bg-white text-black w-6 h-9" src={logo_url} /> */}
          <h1 className="mb-6 text-3xl font-bold">
            {!isSignInForm ? "Sign Up" : "Login"}
          </h1>
        </div>

        <div>
          <form 
          className="flex flex-col items-center"
          onSubmit={(e)=> e.preventDefault()}
          >
           <p className="text-red-600"> {errorMessage}</p>
            {!isSignInForm && (
              <input
                type="text"
                ref={name}
                placeholder="Enter your name"
                className="w-5/6 p-2 mb-6 bg-gray-100"
              />
            )}
            <input
              type="text"
              ref={email}
              placeholder="Enter your email"
              className="w-5/6 p-2 mb-6  bg-gray-100"
            />
            <input
              type="password"
              ref={password}
              placeholder="Enter a password"
              className="w-5/6 p-2 mb-6  bg-gray-100"
            />
            <button
              className="w-5/6 p-2 mb-4 bg-black text-white border-none rounded-md"
              onClick={handleButton}
            >
              {!isSignInForm ? " Sign UP" : "Login"}
            </button>
            <p className="mt-4">
              {!isSignInForm ? (
                <>
                  Already registered?{" "}
                  <Link onClick={toggleButton} className="text-blue-500">
                    Log in here!
                  </Link>
                </>
              ) : (
                <>
                  Not yet registered?{" "}
                  <Link onClick={toggleButton} className="text-blue-500">
                    Sign Up here!
                  </Link>
                </>
              )}
            </p>
          </form>
          <div className="mb-5 flex flex-col justify-end min-h-52">
            <p className="text-xs mt-10 mb-3">
              All your personal details are safe with us.
            </p>
            <p className="text-xs mb-9">
              If you continue, you are accepting
              <Link to="/policy" className="text-blue-500 ">
                {" "}
                OLX Terms and Conditions and <br /> Privacy Policy
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
