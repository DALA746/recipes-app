import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const SignOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
      navigate('/error-page'); // TODO: make one
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
