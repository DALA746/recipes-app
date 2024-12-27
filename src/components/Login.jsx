import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-full">
      <Header />
      <div className="flex items-center justify-center bg-opacity-15">
        <form className="bg-black bg-opacity-10 w-1/4 p-3 flex flex-col justify-center items-center gap-2">
          <h1 className="text-start text-3xl font-bold text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </h1>
          {!isSignInForm && (
            <input className="p-2 w-full" type="text" placeholder="Username" />
          )}

          <input className="p-2 w-full" type="text" placeholder="Email" />
          <input className="p-2 w-full" type="text" placeholder="Password" />
          <button className="p-2 m-2 bg-red-600 rounded w-full text-white">
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
