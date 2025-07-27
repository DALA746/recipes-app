import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc
} from 'firebase/firestore';
import { db } from './firebase';

export const setUsersFavoritesToFirebase = async (userId) => {
  await setDoc(doc(db, 'users', userId), {
    favorites: []
  });
};

export const addFavoriteToFirebase = async (userId, recipe) => {
  const recipeRef = doc(db, 'users', userId);

  await updateDoc(recipeRef, {
    favorites: arrayUnion(recipe)
  });
};

export const removeFavoriteFromFirebase = async (userId, recipe) => {
  const recipeRef = doc(db, 'users', userId);

  await updateDoc(recipeRef, {
    favorites: arrayRemove(recipe)
  });
};

export const getUserFavoritesData = async (userId) => {
  const recipeRef = doc(db, 'users', userId);
  const docSnap = await getDoc(recipeRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data().favorites;
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
    return undefined;
  }
};
