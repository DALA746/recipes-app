import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/store/userSlice';

const SignOutBtn = () => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutBtn;
