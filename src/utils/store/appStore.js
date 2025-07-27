import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import recipesSlice from './recipesSlice';
import favoritesSlice from './favoritesSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipesSlice,
    favorites: favoritesSlice
  }
});

export default appStore;
