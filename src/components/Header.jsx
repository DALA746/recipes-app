import { useSelector } from 'react-redux';
import SignOutBtn from './SignOutBtn';
const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="w-full p-3 flex justify-between items-center gap-3 bg-slate-800">
      <span className="text-red-400 font-bold">Recipe GPT</span>
      {user && (
        <div className="flex gap-3 items-center">
          <img src={user.photoURL} alt={user.displayName} />
          <span className="text-white">{user.displayName}</span>
          <SignOutBtn />
        </div>
      )}
    </div>
  );
};

export default Header;
