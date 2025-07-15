import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import recipesSlice from './recipesSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipesSlice
  }
});

export default appStore;
