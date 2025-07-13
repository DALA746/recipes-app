import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdFfaxmZrXTrSKabwmKqK9I2byeI0M8wo', // TODO: add to .env file
  authDomain: 'recipe-gpt-1f07b.firebaseapp.com',
  projectId: 'recipe-gpt-1f07b',
  storageBucket: 'recipe-gpt-1f07b.firebasestorage.app',
  messagingSenderId: '361252201777',
  appId: '1:361252201777:web:558a79b63b409c32db3c10'
};

initializeApp(firebaseConfig);
export const auth = getAuth();
