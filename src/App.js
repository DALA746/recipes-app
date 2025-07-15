import './index.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/store/userSlice';
import Login from './pages/Login';
import Browse from './pages/Browse';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubsribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/browse/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
