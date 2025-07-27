import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    displayName: null
  },
  reducers: {
    addUser: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state, action) => {
      state.uid = null;
      state.displayName = null;
    }
  }
});

export const { addUser, removeUser, toggleFavorite } = userSlice.actions;
export default userSlice.reducer;
