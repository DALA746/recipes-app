import { useSelector } from 'react-redux';
import SignOutBtn from './SignOutBtn';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const favorites = useSelector((state) => state.favorites);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full p-3 flex justify-between items-center gap-3 border border-b-2 bg-slate-100">
      <Link to={'/browse'} onClick={closeMenu}>
        <span className="text-red-400 font-bold text-xl md:text-2xl">
          Recipes App
        </span>
      </Link>
      {user.uid && (
        <>
          <div className="gap-3 items-center hidden md:flex">
            <Link to={'/favorites'} className="flex gap-2 p-1 rounded relative">
              <FaRegHeart size={25} className="text-slate-900" />
              {favorites?.items?.length > 0 && (
                <div className="w-4 h-4 text-center rounded-full bg-red-600 text-white absolute bottom-5 left-5 text-xs">
                  {favorites?.items?.length}
                </div>
              )}
            </Link>

            <span className="text-slate-900">{user.displayName}</span>
            <SignOutBtn />
          </div>
          <div className="block md:hidden">
            <div>
              {isMenuOpen ? (
                <IoMdClose size={30} onClick={toggleMenu} />
              ) : (
                <GiHamburgerMenu size={30} onClick={toggleMenu} />
              )}
            </div>

            {isMenuOpen && (
              <div className="bg-slate-100 w-1/2 absolute top-[55px] right-0 z-50 flex p-2">
                <div className="gap-3 items-start flex flex-col">
                  <Link
                    to={'/favorites'}
                    className="flex items-center gap-2 rounded relative"
                    onClick={closeMenu}>
                    <span>Favorites </span>
                    {favorites?.items?.length > 0 && (
                      <span className="w-5 h-5 text-center rounded-full bg-red-600 text-white text-sm">
                        {favorites?.items?.length}
                      </span>
                    )}
                  </Link>

                  <span className="text-slate-900">{user.displayName}</span>
                  <SignOutBtn />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
