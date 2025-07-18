import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
// Helper to fetch user favorites from Firestore
export const fetchUserFavorites = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      return data.favorites || [];
    }
    return [];
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
};

// Async thunk to add favorite to Firestore
export const addFavoriteToFirestore = createAsyncThunk(
  'user/addFavoriteToFirestore',
  async ({ userId, favorite }, thunkAPI) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        favorites: arrayUnion(favorite)
      });
      return favorite;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    favorites: []
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
        favorites: action.payload.favorites || state.favorites
      };
    },
    removeUser: (state, action) => {
      return { favorites: [] };
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    }
  }
});

export const { addUser, removeUser, addFavorite } = userSlice.actions;
export default userSlice.reducer;
