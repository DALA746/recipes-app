import React from 'react';
import Header from './Header';
// import background from '../images/background.jpg';

const Login = () => {
  return (
    <div className="bg-black h-full">
      <Header />
      {/* <img className="w-full h-full" src={background} alt="background" /> */}
      <form>
        <input
          className="p-2 max-w-screen-2xl"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 max-w-screen-2xl"
          type="text"
          placeholder="Password"
        />
        <button className="p-4 m-4">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
