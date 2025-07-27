import { useSelector } from 'react-redux';
import SignOutBtn from './SignOutBtn';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';

const Header = () => {
  const user = useSelector((store) => store.user);
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="w-full p-3 flex justify-between items-center gap-3 border border-b-2 bg-slate-100">
      <Link to={'/browse'}>
        <span className="text-red-400 font-bold text-2xl">Recipes App</span>
      </Link>
      {user.uid && (
        <div className="flex gap-3 items-center">
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
      )}
    </div>
  );
};

export default Header;
