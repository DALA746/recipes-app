import { useSelector } from 'react-redux';
import SignOutBtn from './SignOutBtn';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="w-full p-3 flex justify-between items-center gap-3 border border-b-2 bg-slate-100 ">
      <Link to={'/browse'}>
        <span className="text-red-400 font-bold text-2xl">Recipe GPT</span>
      </Link>
      {user && (
        <div className="flex gap-3 items-center">
          <img
            className="w-10 h-10"
            src={user.photoURL}
            alt={user.displayName}
          />
          <span className="text-slate-900">{user.displayName}</span>
          <SignOutBtn />
        </div>
      )}
    </div>
  );
};

export default Header;
