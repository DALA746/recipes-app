import React, { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
import { FcGoogle } from 'react-icons/fc';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { setUsersFavoritesToFirebase } from '../utils/firebaseHelpers';
import { db } from '../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      GoogleAuthProvider.credentialFromResult(result);

      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        if (!doc.id === result.user.uid) {
          setUsersFavoritesToFirebase(result.user.uid);
          dispatch(addUser({ uid: auth.currentUser.uid }));
        }
      });
    } catch (error) {
      console.error(error);
      GoogleAuthProvider.credentialFromError(error);
    }
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const errorMsg = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? username.current.value : null
    );
    setErrMessage(errorMsg);

    if (errorMsg) {
      return;
    }

    if (!isSignInForm) {
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = createUser.user;
        await updateProfile(user, {
          displayName: username.current.value
        });

        setUsersFavoritesToFirebase(user.uid);
        dispatch(addUser(auth.currentUser));
      } catch (error) {
        setErrMessage(error.code + '-' + error.message);
        console.log(
          `ErrorCode: ${error.code} and errorMessage: ${error.message}`
        );
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;
        console.log(user, 'signed in existing user');
      } catch (error) {
        setErrMessage(error.code + '-' + error.message);
        console.log(
          `ErrorCode: ${error.code} and errorMessage: ${error.message}`
        );
      }
    }
  };

  return (
    <div className="bg-gradient-to-r h-screen w-full bg-slate-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <form className="p-6 flex flex-col justify-center items-center gap-4 w-full max-w-[500px] text-slate-900">
          <h1 className="text-start text-3xl font-bold text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </h1>
          {!isSignInForm && (
            <input
              className="p-2 w-full rounded-lg "
              type="text"
              placeholder="Username"
              ref={username}
            />
          )}

          <input
            ref={email}
            className="p-2 w-full rounded-lg"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            type="password"
            className="p-2 w-full rounded-lg"
            placeholder="Password"
          />
          {errMessage && (
            <p className="text-red-500 font-bold p-2">{errMessage}</p>
          )}
          <button
            onClick={(e) => handleButtonClick(e)}
            className="p-2 m-2 bg-red-600 rounded-lg w-full text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </button>
          <h2
            className="text-white text-center font-bold cursor-pointer"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? `Don't have account? Sign up now!`
              : 'Already registered? Sign in!'}
          </h2>
        </form>
        <button
          onClick={googleSignIn}
          className="bg-white text-slate-900 flex flex-row items-center gap-2 p-2 rounded-lg">
          <span>Sign in with Google</span>
          <FcGoogle size={25} />
        </button>
      </div>
    </div>
  );
};

export default Login;
