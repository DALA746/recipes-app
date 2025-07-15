import React, { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
import { FALLBACK_LOGO } from '../utils/constants';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

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

  const handleButtonClick = async (e) => {
    e.preventDefault();
    // Validate form
    const errorMsg = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? username.current.value : null
    );
    setErrMessage(errorMsg);
    // to not write all logic in if condition
    if (errorMsg) {
      return;
    }

    if (!isSignInForm) {
      // code for sign up
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = createUser.user;
        console.log(user, 'user object');
        updateProfile(user, {
          displayName: username.current.value,
          photoURL: FALLBACK_LOGO
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            setErrMessage(error);
          });
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
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-full">
      <div className="flex items-center justify-center bg-opacity-15">
        <form className="bg-black bg-opacity-10 w-1/2 p-6 flex flex-col justify-center items-center gap-4">
          <h1 className="text-start text-3xl font-bold text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </h1>
          {!isSignInForm && (
            <input
              className="p-2 w-full"
              type="text"
              placeholder="Username"
              ref={username}
            />
          )}

          <input
            ref={email}
            className="p-2 w-full"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-2 w-full"
            type="text"
            placeholder="Password"
          />
          <p className="text-red-500 font-bold p-2">{errMessage}</p>
          <button
            onClick={(e) => handleButtonClick(e)}
            className="p-2 m-2 bg-red-600 rounded w-full text-white">
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </button>
          <h2
            className="text-white text-center font-bold cursor-pointer"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? 'Are you new to Netflix? Sign up now!'
              : 'Already a reistered? Sign in!'}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
