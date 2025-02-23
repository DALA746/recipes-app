import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate form
    const errorMsg = checkValidData(email, password);
    setErrMessage(errorMsg);

    // sign in / sign up
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-full">
      <Header />
      <div className="flex items-center justify-center bg-opacity-15">
        <form className="bg-black bg-opacity-10 w-1/2 p-6 flex flex-col justify-center items-center gap-4">
          <h1 className="text-start text-3xl font-bold text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </h1>
          {!isSignInForm && (
            <input className="p-2 w-full" type="text" placeholder="Username" />
          )}

          <input
            ref={email}
            className="p-2 w-full"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-2 w-full"
            type="text"
            placeholder="Password"
          />
          <p className="text-red-500 font-bold p-2">{errMessage}</p>
          <button
            onClick={(e) => handleButtonClick(e)}
            className="p-2 m-2 bg-red-600 rounded w-full text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </button>
          <h2
            className="text-white text-center font-bold cursor-pointer"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? 'Are you new to Netflix? Sign up now!'
              : 'Already a reistered? Sign in!'}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
