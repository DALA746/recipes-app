import React from 'react';
import logo from '../images/popcorn.png';

const Header = () => {
  return (
    <div className="w-full p-3">
      <img className="w-16" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
