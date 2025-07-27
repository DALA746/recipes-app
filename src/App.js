import './index.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import List from './pages/List';
import UserFavorites from './pages/UserFavorites';
import { useSelector } from 'react-redux';
import { getUserFavoritesData } from './utils/firebaseHelpers';
import { setFavorites } from './utils/store/favoritesSlice';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (location.pathname === '/') {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        dispatch(setFavorites([]));
        navigate('/');
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubsribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const getData = async () => {
      if (user?.uid) {
        const userFavoritesFromDB = await getUserFavoritesData(user.uid);
        dispatch(setFavorites(userFavoritesFromDB));
      }
    };
    getData();
  }, [user?.uid, dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/browse/:id" element={<RecipeDetails />} />
        <Route exact path="/browse/list/:id" element={<List />} />
        <Route exact path="/favorites" element={<UserFavorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
