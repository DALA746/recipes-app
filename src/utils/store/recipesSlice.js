import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipesData: [],
    categories: []
  },
  reducers: {
    addRecipes: (state, action) => {
      state.recipesData = action.payload;
    },
    addCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const { addRecipes, addCategories } = recipesSlice.actions;
export default recipesSlice.reducer;
