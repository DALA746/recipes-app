import React from 'react';
import logo from '../images/popcorn.png';

const Header = () => {
  return (
    <div className="w-full p-3 flex items-center gap-2">
      <img className="w-16" src={logo} alt="logo" />
      <span className="text-white font-bold">POPFLIX</span>
    </div>
  );
};

export default Header;
