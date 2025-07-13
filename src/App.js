/* eslint-disable react-hooks/exhaustive-deps */
// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
import './index.css';
import { useEffect } from 'react';
import Login from './components/Login';
import Browse from './components/Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate('/');
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default App;
